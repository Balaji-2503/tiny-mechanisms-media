# Ratchet v3 audio notes (same design as v2, re-timed for the longer cut)

v3 is 36.5 s: a 2 s "lined up" ghost shot was inserted at 12-14 s and the unrolled-tooth diagram is held ~0.5 s longer. Everything after 18.5 s moved by exactly 2.5 s (5 beats at 120 bpm), so every click is still on the 1/16 grid. Synthesised with numpy (seed 20261118), no samples.

- **Tempo / key:** 120 bpm, A minor pentatonic. Click pitches: pawl A = A4, B = C5, C = E5 (octave up for clicks 25-36).
- **Ghost shot sound (12-14 s):** pawl pop-ins, a rising wind-up, three plucks at once (A, C, E together) with a dull thump at 13.3 s, then a reversed swoosh for the rewind.
- **36th click / drop:** at 25.5 s, after 0.5 s of silence. Dings only at the drop (25.5 s) and the payoff (30.5 s).
- **Measured (ffmpeg ebur128, same +4.2 dB on both files):** music version -14.1 LUFS, LRA 7.6 LU, true peak -2.0 dBTP; SFX-only version -14.0 LUFS, LRA 12.1 LU, true peak -2.1 dBTP.
- **Limit:** I cannot listen to audio here; levels are measured, taste is unchecked.
