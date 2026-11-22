# car-differential-v1: the three checks (2026-11-22)

Owner approval applied: text-only + SFX; hook "One wheel travels 9.4 m MORE than the other. Same car. Same engine."; "ordinary (open) differential" on screen; the ice-vs-tarmac split screen is the longest shot (11 s, 27.4-38.4 s); only the US Army manual named as source.

## 1. Frame pass
`diff-v1-frames-all.jpg`: a frame every 1.5 s (30 frames). Counter, wheel paths, spider gears, side gears, ice/tarmac panels and the lock bar match the text at each moment. Frames that fall in text transitions show text mid-blur; that is the animation, not an error.

## 2. Number pass (tool: `scripts/differential_numbers.py`)
- 2 x pi x 1.5 m = 9.42 m: shown as 9.4 m. The on-screen counter reaches +9.4 m at 4.2 s (1.5 x phi, phi = 2 pi).
- Army manual example: ring gear 4 turns, inner 1, outer 7; 4 = (1 + 7) / 2. The animation uses speeds inner 0.2, ring 0.8, outer 1.4 turns per second, so the counters reach exactly 1.0, 4.0 and 7.0 turns after the 5 s from 22.4 to 27.4 s.
- In the "inside the case" view the side gears move opposite ways by +3 / -3 turns relative to the case (7 = 4 + 3, 1 = 4 - 3), and the spider gears spin at (7 - 1) / 2 = 3 units: all consistent.
- Wheel path radii use T = 1.5 m, turn radius 4 m (an example, not claimed typical).

## 3. Text pass
Every sentence traced to `differential-sources.md` (D1 = US Army TM 9-8000 ch. 29, D2 = arithmetic). No go-kart claim, no claim about limited-slip/locking differentials of modern cars (only the manual's description of a lock joining the axles). Gemini (2.5 flash, full video + audio): no physically wrong statement, no mismatch between text and picture, only brief text overlaps during transitions; sound effects line up with the visuals and none are harsh. Hidden keywords ("car differential • how a differential works • mechanical engineering", 16 px, white at 3%) verified by differencing a frame against the same frame without it (3356 pixels brighter in the top strip).

## Weak points (honest)
- One opened primary source only (the Army manual, as reproduced online; Eaton's page would not load).
- The "inside the case" picture is a simplified schematic: two spider gears and two side gears in the case's frame of reference; real differentials may use different gear counts. The speeds shown follow the manual's example.
- "car: stopped / moving" is a plain consequence of the manual's statement, not a measurement.
- Audio: SFX only, -14.0 LUFS, true peak -1.8 dBTP, not heard by ear. A library track would be added at post time.
- 44.4 s long. Length is the cost of the longest ice-vs-tarmac shot.
