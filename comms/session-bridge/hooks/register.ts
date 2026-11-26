import type { Register } from 'claude-code'

// Relay between the chess session and the Tiny Mechanisms session.
// Transport: the public repo tiny-mechanisms-media, folder comms/.
//   comms/to-tm.md    written by the chess session, read by the Tiny Mechanisms session
//   comms/to-chess.md written by the Tiny Mechanisms session, read by the chess session
// The repo is PUBLIC: the mod refuses messages that look like secrets.
const REPO = '/home/user/tiny-mechanisms-media'
const SECRET = /(token|secret|password|api[_-]?key|bearer|AQ\.[A-Za-z0-9_-]{20,}|EAA[A-Za-z0-9]{30,}|[A-Za-z0-9_-]{40,})/i
const PULL_EVERY_MS = 5 * 60 * 1000

const msgLines = (text: string): string[] => text.split('\n').filter((l) => l.startsWith('- ['))

export const register: Register = (on) => {
  let lastPull = 0

  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'tell', description: 'Send a message to the other session (via the shared repo)' })
    await $.command.register({ name: 'inbox', description: 'Show new messages from the other session' })
    const started = await next(e)
    try {
      const chess = await $.process.run(['test', '-d', '/home/user/Videos/my-video'])
      const inbox = chess.exitCode === 0 ? 'comms/to-chess.md' : 'comms/to-tm.md'
      const other = chess.exitCode === 0 ? 'Tiny Mechanisms session' : 'chess session'
      await $.process.run(['git', 'pull', '-q', '--no-rebase', 'origin', 'main'], { cwd: REPO, timeoutMs: 60000 })
      lastPull = Date.now()
      const body = await $.process.run(['sh', '-c', `cat "${REPO}/${inbox}" 2>/dev/null || true`])
      const seen = Number((await $.store.get(`seen-${inbox}`)) ?? 0)
      const n = msgLines(String(body.stdout)).length - seen
      $.ui.status(n > 0 ? `bridge: ${n} unread from the ${other}` : undefined)
    } catch { /* offline or no clone: stay quiet */ }
    return started
  })

  on('prompt.submit', async ($, e, next) => {
    if (Date.now() - lastPull > PULL_EVERY_MS) {
      lastPull = Date.now()
      try {
        const chess = await $.process.run(['test', '-d', '/home/user/Videos/my-video'])
        const inbox = chess.exitCode === 0 ? 'comms/to-chess.md' : 'comms/to-tm.md'
        const other = chess.exitCode === 0 ? 'Tiny Mechanisms session' : 'chess session'
        await $.process.run(['git', 'pull', '-q', '--no-rebase', 'origin', 'main'], { cwd: REPO, timeoutMs: 60000 })
        const body = await $.process.run(['sh', '-c', `cat "${REPO}/${inbox}" 2>/dev/null || true`])
        const seen = Number((await $.store.get(`seen-${inbox}`)) ?? 0)
        const n = msgLines(String(body.stdout)).length - seen
        $.ui.status(n > 0 ? `bridge: ${n} unread from the ${other}` : undefined)
      } catch { /* ignore */ }
    }
    return next(e)
  })

  on('command.run', { command: 'inbox' }, async ($) => {
    const chess = await $.process.run(['test', '-d', '/home/user/Videos/my-video'])
    const inbox = chess.exitCode === 0 ? 'comms/to-chess.md' : 'comms/to-tm.md'
    const other = chess.exitCode === 0 ? 'Tiny Mechanisms session' : 'chess session'
    const has = await $.process.run(['test', '-d', `${REPO}/.git`])
    if (has.exitCode !== 0) return { text: `bridge: shared repo clone not found at ${REPO}.` }
    await $.process.run(['git', 'pull', '-q', '--no-rebase', 'origin', 'main'], { cwd: REPO, timeoutMs: 60000 })
    lastPull = Date.now()
    const body = await $.process.run(['sh', '-c', `cat "${REPO}/${inbox}" 2>/dev/null || true`])
    const all = msgLines(String(body.stdout))
    const seen = Number((await $.store.get(`seen-${inbox}`)) ?? 0)
    await $.store.set(`seen-${inbox}`, all.length)
    $.ui.status(undefined)
    const fresh = all.slice(seen)
    return { text: fresh.length ? fresh.join('\n') : `No new messages from the ${other}.` }
  })

  on('command.run', { command: 'tell' }, async ($, e) => {
    const msg = String((e as any).args ?? '').trim()
    if (!msg) return { text: 'Usage: /tell <message for the other session>' }
    if (SECRET.test(msg)) return { text: 'Refused: the shared repo is public and this looks like a secret or token. Send it another way.' }
    const has = await $.process.run(['test', '-d', `${REPO}/.git`])
    if (has.exitCode !== 0) return { text: `bridge: shared repo clone not found at ${REPO}.` }
    const chess = await $.process.run(['test', '-d', '/home/user/Videos/my-video'])
    const role = chess.exitCode === 0 ? 'chess' : 'tm'
    const out = chess.exitCode === 0 ? 'comms/to-tm.md' : 'comms/to-chess.md'
    const other = chess.exitCode === 0 ? 'Tiny Mechanisms session' : 'chess session'
    await $.process.run(['git', 'pull', '-q', '--no-rebase', 'origin', 'main'], { cwd: REPO, timeoutMs: 60000 })
    await $.process.run(['mkdir', '-p', `${REPO}/comms`])
    const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC'
    const line = `- [${stamp}] ${role}: ${msg.replace(/\n+/g, ' ')}`
    await $.process.run(['sh', '-c', `printf '%s\\n' "$BRIDGE_LINE" >> "${REPO}/${out}"`], { env: { BRIDGE_LINE: line } })
    await $.process.run(['git', 'add', out], { cwd: REPO })
    const c = await $.process.run(['git', 'commit', '-q', '-m', `bridge: message to ${other}`], { cwd: REPO })
    const p = await $.process.run(['git', 'push', '-q', 'origin', 'HEAD:main'], { cwd: REPO, timeoutMs: 60000 })
    if (c.exitCode !== 0 || p.exitCode !== 0) return { text: `bridge: saved locally but push failed: ${String(p.stderr || c.stderr).slice(0, 200)}` }
    return { text: `Sent to the ${other}. It sees it at its next prompt (or /inbox).` }
  })
}
