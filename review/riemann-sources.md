# BRIEF-003 sources (read 2026-11-21 by the Tiny Mechanisms session)

Rule: every claim in the script carries a source id. "Read" means I opened the page/paper itself, not a snippet. Nothing was taken from search summaries.

| id | source | what I read | status |
|---|---|---|---|
| S1 | Clay Mathematics Institute, Riemann Hypothesis page: https://www.claymath.org/millennium/riemann-hypothesis/ | whole page | PRIMARY (problem statement) |
| S2 | Clay, Millennium Problems page: https://www.claymath.org/millennium-problems/ | whole page | PRIMARY (prize) |
| S3 | OpenAI, "The Quasi-Riemann Hypothesis" (Oct 5, 2026), PDF: https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf (read via raw.githubusercontent.com) | abstract, intro, outline, reference list (not the 49-page proof) | PRIMARY for the statement; proof not checked by me |
| S4 | Anthropic, "Claude has improved on a longstanding lower bound ... " (Aug 2026): https://www.anthropic.com/research/riemann-zeta | whole announcement page | PRIMARY but written by the company that makes Claude; the paper/Lean files it links were NOT opened |
| S5 | Quanta Magazine, Konstantin Kakaes, "AI Proved the Quasi-Riemann Hypothesis. What Happens Now?", Oct 19, 2026: https://quantamagazine.org/ai-proved-the-quasi-riemann-hypothesis-what-happens-now-20261019 | article text (first ~half in detail; searched the rest for verification statements) | INDEPENDENT secondary |
| S6 | TechCrunch, Russell Brandom, Aug 11, 2026: https://techcrunch.com/2026/08/11/an-unreleased-anthropic-model-made-progress-on-one-of-maths-biggest-unsolved-problems/ | whole article | INDEPENDENT secondary |
| S7 | My own calculation: `scripts/zeta_zeros.py` (mpmath `zetazero`, 30 digits) in Balaji-2503/Tech-, branch claude/pixel-science-channel | ran it | COMPUTED (below) |

## Claims, each tied to a source
1. The Riemann hypothesis is listed as **Unsolved** by Clay, and says all "non-obvious" zeros of the zeta function have real part 1/2 (S1).
2. It was formulated in Riemann's **1859** paper (S1, S2). 2026 - 1859 = **167 years**.
3. Clay designated **$1 million** for each Millennium Problem (S2).
4. "Checked for the first **10,000,000,000,000** zeros" (S1). Quanta (S5) says the first "12 trillion" have been verified numerically. Use "more than 10 trillion" (covers both).
5. Riemann showed the nontrivial zeros lie in the strip 0 < Re(s) < 1; in 1896 two mathematicians showed none lie on the edges (S5; background, not primary).
6. OpenAI paper (Oct 5, 2026): "every Dirichlet L-function, including Riemann's zeta function, has no zeros in the half-plane Re s > 11/12" (S3, Theorem 1.1). The paper calls this the quasi-Riemann hypothesis (a weaker statement than RH: a fixed gap from Re s = 1, not the line Re s = 1/2) (S3 intro). Zeros of zeta are symmetric about Re s = 1/2 (standard functional-equation fact, not stated in the part of S3 I read), so the same holds for Re s < 1/12: the strip is 1/12 <= Re s <= 11/12 (S5 states the strip in these terms).
7. Status of that result: Quanta (S5): human experts "largely agree that the result is correct"; the 11/12 paper "is not yet formally verified"; a longer earlier OpenAI paper (Sept 30, 199 pages) claims 7/8, Lean-verified according to Quanta. S3 itself cites that earlier paper as [36] and calls the 11/12 result "a natural intermediate step" toward 7/8. **I did not open the Sept 30 paper (could not list its folder); the 7/8 figure is second-hand, so it is NOT used in the video.**
8. Anthropic (S4): an unreleased research version of Claude increased the proven lower bound for the fraction of zeta zeros on the line from **41.6% to 67.2%**; it did NOT prove the Riemann hypothesis, and Anthropic says it does not expect these techniques to lead to a proof. Two Anthropic mathematicians checked it, two outside experts (Brian Conrey, Dan Goldston) "examined" it, and a Lean formalisation passes the "comparator" tool (all per S4). Independent coverage: S6 confirms the announcement and says it was confirmed by Anthropic's in-house mathematicians and formalised in Lean. **I found no independent expert assessment of this result.**

## Computed numbers (S7)
First 10 nontrivial zeros of zeta, all with real part 0.5; imaginary parts (6 d.p. stored, shown to 4): 14.1347, 21.0220, 25.0109, 30.4249, 32.9351, 37.5862, 40.9187, 43.3271, 48.0052, 49.7738. |zeta(zero)| is about 1e-30 for each (precision check). Matches the chess session's earlier numbers.

## Left out because unverified
- "Experts largely agree" is used only as "reported" (Quanta, Oct 19 2026) and only if still true at render time.
- Any quote or named expert (all second-hand).
- The 7/8 figure and anything about the other 376 OpenAI results.
- Scientific American / Digg (not opened).
