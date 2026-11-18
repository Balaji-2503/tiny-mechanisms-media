# Ratchet v4: opening only

**Changed (0-3.0 s):** the wheel is already spinning at frame 0 (it eases to rest exactly at 3.0 s at the loop angle, so the first frame equals the last frame). "12 teeth." is on screen at frame 0; "36 CLICKS" slams in at 1.0 s (on screen by 1.5 s); "per turn" at 1.2 s; "How?" at 1.75 s. The teeth numbers 1-12 now light every 0.1 s and ride on the spinning wheel. The RATCHET label is slightly smaller and further right so it does not touch "How?".

**Audio that moved (everything else is untouched):**
- 12 hook ticks: were at 0.5 + 0.125k s, now at 0.1 + 0.1k s (k = 0..11).
- Thump + swoosh for "36 CLICKS": were at 2.0 s, now 1.0 s. Music duck for it moved with it.
- NEW: one soft blip (880 Hz) at 1.75 s for "How?".
- Nothing at 3.0 s or later moved. Verified by decoding the v3 and v4 music files: after 3.2 s the waveforms match to AAC encoding noise (best-fit gain 0.999, residual under 1%). The new blip uses its own random generator so it cannot change any later sound.

**Loudness (same +4.2 dB as v3):** music -14.1 LUFS, true peak -2.0 dBTP; SFX-only -13.9 LUFS, true peak -2.1 dBTP.
**Video after 3.0 s:** from 16 s onward frames are pixel-identical to v3; between 3.5 and 8 s about 800 of 2 million pixels differ (under 0.05%, inside the wheel).
**Not heard by ear** (no audio playback here).
