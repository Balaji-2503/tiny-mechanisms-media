# ai-tokens-v2 (fixes from docs/REVIEW-ai-tokens-v1-2026-11-23.md)

Facts, script and sources are unchanged.
1. SIZE/LAYOUT: chunks, the compare panels, the toy-merge grid, the rare-word rows and the strawberry hero are 30-45% bigger and sit between about y 18% and 75%; the strawberry row is the hero shot (118 px letters, big ID numbers, a slow push-in on the reveal).
2. TEXT SIZE: labels are 36-60 px (chunk counts, IDs, tokenizer name, x-counts, notes); the "chunk 1/2/3" labels and the long word captions were deleted. Sources line on the end card is 34 px (it is not required reading).
3. EMPTY MOMENTS: a new "But who decides the chunks?" scene (big question mark with floating chunks) fills 9-10.6 s; the strawberry word now appears at 24.2 s under "So can AI count the r's..." and the chunk boxes drop in at 26 s; scene fades overlap.
4. DEPTH: soft drop shadow under every box (glow + shadow filter), slow background drift, light film grain (7%), push-in on the reveal.
5. END CARD: facts at 50 px, spread over the middle.
6. AUDIO: master -14.0 LUFS, true peak -1.5 dBTP; the strawberry Reveal is still the loudest hit (Gemini heard it as the loudest, slightly distorted thump: that is the pack's Reveal sound). Not heard by ear.
7. COVER: `ai-tokens-cover.jpg` ("AI reads NUMBERS, not words." over the six numbered chunks).
Checks re-run: numbers (fresh tiktoken run vs the HTML: no mismatches); frames `ai-v2-frames-all.jpg`; text (Gemini: nothing wrong or overstated; it called the sources line small).
