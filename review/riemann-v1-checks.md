# riemann-zeros-v1: the three checks (2026-11-21)

Decisions applied (owner): hook B ("10 TRILLION zeros checked. All on ONE line."); the Anthropic 41.6% -> 67.2% beat CUT (also cut from the caption/credits); "experts largely agree" worded as "Quanta reports experts largely agree it looks correct. Not yet formally verified." with a separate "weaker statement than the Riemann hypothesis itself" line.

## 1. Frame pass
Contact sheet every 1.5 s: `riemann-v1-frames-all.jpg` (key frames: `riemann-v1-frames.jpg`). Every label matches the drawing: dots at the zero heights, strip edges at real part 0 and 1, then walls at 1/12 and 11/12, gap bracket from the 11/12 wall to the line. Wall positions are computed from the same function as the axis ticks.

## 2. Number pass (tool: mpmath `zetazero`, `scripts/zeta_zeros.py`, 30 digits)
Heights shown (2 d.p.) vs computed: 14.13 (14.134725), 21.02 (21.022040), 25.01 (25.010858), 30.42 (30.424876), 32.94 (32.935062), 37.59 (37.586178), 40.92 (40.918719), 43.33 (43.327073), 48.01 (48.005151), 49.77 (49.773832). All real part 0.5, |zeta| about 1e-30. 167 years = 2026 - 1859 (Clay: formulated in Riemann's 1859 paper). "10 trillion" = Clay's "first 10,000,000,000,000 solutions". Strip 11/12 = 0.9167 and 1/12 = 0.0833 (OpenAI paper, Theorem 1.1: no zeros with Re s > 11/12; the 1/12 side follows from the zeros' symmetry about 1/2).

## 3. Text pass
Every sentence is traced to a source id in `riemann-sources.md`. The words solved / proved / cracked appear nowhere (title, caption draft, file name, on-screen); "proof"/"proving" only in "Is that a proof? No." / "Checking is not proving."; "unproven" in the ending. Gemini (gemini-2.5-flash, full video + audio) found: no statement implying the hypothesis is proven; no mismatch between text and picture; sound effects line up with the visuals and are not harsh. Gemini's first run flagged "real zeros" as ambiguous (the zeros are complex; the numbers are heights/imaginary parts): FIXED ("actual zeros", plus a "height of each zero" label). It also reported the "TINY MECHANISMS" pill slightly overlapping text at 0:03; I measured pill bottom y=208 vs text top y=240 at 5.5 s and did not reproduce it.

## Open weaknesses (honest)
- "Since 1859: zeros must stay inside this strip" rests on Quanta (secondary).
- I did not read OpenAI's 49-page proof, only its statement; "experts largely agree" is Quanta's report as of Oct 19, 2026.
- Audio: SFX only, -14.1 LUFS integrated, true peak -1.6 dBTP; not heard by ear.
