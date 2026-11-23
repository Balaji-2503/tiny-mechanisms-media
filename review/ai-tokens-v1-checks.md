# ai-tokens-v1: the three checks (2026-11-23)

Owner approval applied (relayed 2026-11-22): the strawberry surprise is visual (letters stay inside the chunks, the r's light up on the Reveal sound); the toy merge is only the "ug" merge (about 6 s); the sentence is on screen at frame 0 and splitting by 0.6 s; end-card credits are the two main sources only (OpenAI Help Center, Sennrich et al. 2016); the other two sources (CUTE 2024, CharBench 2025) are named in the surprise beat and the caption. Text-only + sound effects.

## 1. Frame pass
`ai-v1-frames-all.jpg`: a frame every 1.5 s (28 frames). Every label and number matches the picture.

## 2. Number pass (tool: tiktoken 0.14.0, `scripts/tokenizer_examples.py`)
A fresh script re-tokenised every example and compared it with what the video shows: "AI doesn't read words." = [15836 AI, 3250 " doesn", 956 "'t", 1373 " read", 4339 " words", 13 "."]; strawberry cl100k_base [496 str, 675 aw, 15717 berry], o200k_base [302 st, 1618 raw, 19772 berry]; the 5 rare/common words give 1, 2, 3, 6, 11 pieces, and the pieces shown in the HTML equal the tokenizer's output. Result: no mismatches. strawberry = 10 letters, 3 r's. Toy merge counts: u+g = 20, u+n = 16 (script output).

## 3. Text pass
Every sentence traces to `ai-tokens-sources.md` (T1-T7). The letter-counting cause is NOT stated as settled: the video says "A common explanation... But a 2025 test... Researchers still argue." No claim about any named model. Gemini (2.5 flash, full video + audio): no factual error found; its only note: "AI doesn't read words. It reads these." is a simplification that the next beats explain; no overlapping text, no empty top area; effects audible and aligned.

## Weak points (honest)
- Sources: abstracts only for CUTE, CharBench and the Strawberry Problem; Sennrich only sections 3.2 and the abstract.
- The chip widths are estimates, so the joined sentence at frame 0 has uneven spacing (a human imperfection, not an error).
- Audio: the sound pack's effects are hot; master -15.2 LUFS, true peak -1.7 dBTP (about 1 dB under the -14 target to keep the peak safe). Not heard by ear. Hidden keywords "how ai works • tokens explained • how chatgpt reads text" added at 3% opacity.
- Sound pack licence: permission relayed by the owner (see assets/sfx-pack/SOURCE.md), no written licence.
