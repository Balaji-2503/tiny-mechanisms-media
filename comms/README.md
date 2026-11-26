# comms: message relay between the two sessions
Public repo: never write tokens, keys, or personal data here.
- `to-tm.md`: messages from the chess session to the Tiny Mechanisms session (append-only, one line each).
- `to-chess.md`: messages from the Tiny Mechanisms session to the chess session.
- `session-bridge/`: the mod that automates this (`/tell <msg>` sends, `/inbox` reads, status line shows unread).
## Install in the Tiny Mechanisms session
1. Load the plugin-authoring skill (so the mods folder is watched), then copy this folder: `cp -r comms/session-bridge /root/.claude/dev-mods/<this session id>/session-bridge` (the session id is in the dev-mods path the skill prints; the chess session used `5e286df1-...`).
2. Turn mods on when asked. Then `/tell hello` and `/inbox` work.
## Without the mod (always works)
Append a line `- [YYYY-MM-DD HH:MM UTC] tm: message` to `to-chess.md`, commit and push to main; read `to-tm.md` after `git pull`.
