# Ratchet v2 audio notes

Everything is synthesised with numpy (seed 20261118, script `hf-ratchet` side: `audio2.py` in the session work folder; no samples or songs). Reproducible.

- **Tempo / key:** 120 bpm, A minor (pentatonic). Every click sits on the 1/16 grid (0.125 s). The animation uses the same click times (`assets/physics.js`), so sound and picture cannot drift.
- **Click pitches:** pawl A = A4 (440 Hz), B = C5 (523 Hz), C = E5 (659 Hz); an octave higher for clicks 25-36 (the accelerating third).
- **Click schedule:** 12 clicks as quarter notes (3.5-9.0 s); then 36 clicks: first 12 at 1/8 notes, next 12 alternating 1/8 and 1/16, last 12 at 1/16. The 36th click is at 23.0 s. No two clicks share a frame (shortest gap 3.75 frames).
- **Arc:** 0-3 low pad + sparse arpeggio ticks; 3-9 soft kick-less pulse; 9-12 held Am chord + riser start; 12-23 beat enters (kick, hats, sub bass), riser keeps rising; 22.5-23.0 silence; 23.0 DROP (impact, stab chord, sub, ding); 23.4-29.5 calm pad + soft bells; 29.5-34 final tonic ringing into the loop.
- **Dings:** only at the 36 reveal (23.0 s) and the payoff (28.0 s).
- **Mix:** music peak set 11 dB below the click peaks; music is ducked ~50% on every click (60 ms release); music low-passed at 9 kHz, SFX at 11 kHz; soft limiter (tanh) on the master.
- **Measured (ffmpeg ebur128, same gain +3.6 dB on both files):**
  - music version: integrated **-14.2 LUFS**, LRA 8.5 LU, true peak **-1.6 dBTP**
  - SFX-only version: integrated **-14.2 LUFS**, LRA 14.2 LU, true peak **-1.6 dBTP**
- **Limits:** I cannot listen to audio here, so balance and taste are unchecked by ear (levels are measured, not heard). The SFX-only file is as loud as the music file because the clicks dominate loudness; when an Instagram library track is added at post time, check that it does not bury the clicks.
- **Loop:** first/last 0.05-0.15 s are faded so the loop has no click.
