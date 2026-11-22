# car-differential-v2 (the five fixes from docs/REVIEW-004-differential-v1-fixes.md)

1. LAYOUT: car circle scaled up (about 15%); rigid-axle diagram x1.12; engine diagram x1.1; the inside-the-case view x1.16 (now runs to about y=1480); ice/tarmac panels x1.1. Text stays out of the bottom 20% (lowest text: "4 = (1 + 7) ÷ 2" at y 1488-1535 and the credits line).
2. HOOK GAP: a small caption "wheels 1.5 m apart · turn radius 4 m" now stays under the hook from 0 to 6 s, and "In one full turn." starts at 4.15 s so the top is never empty.
3. LENGTH: the ice-vs-tarmac shot is 8 s (27.4-35.4 s, was 11 s). Total 41.4 s (was 44.4 s).
4. AUDIO: counter ticks, gear ticks, whooshes, thumps and the ice scrape are 40-70% louder; master -13.9 LUFS integrated, true peak -2.1 dBTP (limits -14 LUFS / under -1.5 dBTP). NOT heard by ear. Gemini (2.5 flash) listened: effects clearly audible, aligned with the visuals, none harsh.
5. KEPT: hook text, "ordinary (open) differential", the source credit, the 3-facts end card, hidden keywords (re-applied, same recipe).

Checks re-run: frame pass `diff-v2-frames-all.jpg` (every 1.5 s); numbers unchanged (9.42 m, 4 = (1+7)/2, counters 1/4/7) from `scripts/differential_numbers.py`; text pass by Gemini: nothing physically wrong or contradicting the picture, no overlapping text, no empty top area.
Known leftovers: the lower part of frames in the facts and ice scenes still has some empty space (the bottom 20% is Instagram UI); one opened primary source only (US Army TM 9-8000).
