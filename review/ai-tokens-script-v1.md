# BRIEF-005 script v1: "How AI reads your words" (reel #3, AI category). For owner review; nothing is built yet.
Slug: ai-tokens-how-ai-reads. ~44 s, 1080x1920. Sources in `ai-tokens-sources.md` [T1-T7]. Tokenizer shown on screen: "OpenAI cl100k_base (tiktoken 0.14.0)". SFX from docs/SFX-MAP.md (files from the sfx-pack). Hook type: Disbelief / pain.

## Beat sheet (time | on screen | exact words | sound)
| time | on screen | words | sound |
|---|---|---|---|
| 0.0-2.5 | the sentence "AI doesn't read words." appears, then splits live into 6 chunks, each chunk then gets its number | "AI doesn't read words. It reads these." [T7: 15836 3250 956 1373 4339 13] | Whoosh on the split, Pop per chunk, Pop (deeper) per number |
| 2.5-7.0 | side by side: "what you see" (the sentence) vs "what the model sees" (the six numbers) | "You see words. The model sees numbers." small tag "OpenAI cl100k_base, tiktoken 0.14.0" [T2, T7] | Whoosh (push-in), Pop |
| 7.0-10.0 | the SAME word "strawberry" in two tokenizers: cl100k_base [496 675 15717] vs o200k_base [302 1618 19772] | "Different AI, different numbers." [T2, T7] | Pop (bubbly) per number |
| 10.0-12.0 | RE-HOOK | "But who decides the chunks?" | Riser starts |
| 12.0-22.0 | toy corpus hug / pug / pun / bun / hugs; the pair "u g" is counted (20), glows, and merges into one block "ug"; then "u n" (16) merges into "un" | "Rule: find the most common pair. Merge it. Repeat." (Sennrich et al., 2016) [T1, T3] | Click when a pair locks, Pop (deeper) for each count |
| 22.0-28.0 | real words: "the" (1 chunk), "tokenization" (2), "unbelievable" (3), "antidisestablishmentarianism" (6), "Supercalifragilisticexpialidocious" (11); a bar grows with each piece | "Common words: one chunk. Rare words: many." [T3, T7] | Pop per piece, Riser |
| 28.0-30.0 | RE-HOOK 2: "strawberry" = [str][aw][berry] | "So can AI count the r's in 'strawberry'?" (10 letters, 3 chunks [T7]) | Riser continues |
| 30.0-37.0 | THE SURPRISE (the honest one) | "A common explanation: chunks hide the letters." (CUTE, 2024) [T4] / "But a 2025 test found counting depends more on word length and the real letter count." [T5] / "Researchers still argue." | Reveal (the one loudest sound) |
| 37.0-44.0 | end card "Save this: 3 facts about tokens" + credits + ONE call to action; logo at the end | "1. AI reads chunks (tokens), not words. 2. Rare words split into more chunks. 3. Same text, different numbers in different AIs." Credits: "OpenAI Help Center; Sennrich et al. 2016; CUTE 2024; CharBench 2025" CTA: "Save this." | Camera Shutter on the cut, Transition (riser) into the card, Pop per fact |

## Look: 4 techniques from docs/LOOK-UPGRADE.md (not all)
#2 one fixed look (vignette + grade + very light grain, same in every reel); #4 staggered motion (chunks enter with offset timing and different directions); #17 foley table (the sound map above); #20 simulated camera (push-in on the "what the model sees" panel, short motion-blur burst on the split). Not too perfect: slightly uneven chunk timing; a hand-drawn marker underline on the key numbers.

## Caption (draft)
"AI doesn't read words. It reads these." The model splits text into chunks called tokens and works with their ID numbers. Frequent words stay whole; rare words break into more pieces, and the same text gets different numbers in different tokenizers. Tokenizer shown: OpenAI cl100k_base (tiktoken). Why AIs sometimes miscount letters is still debated: some researchers blame tokens, a 2025 benchmark finds word length and the true letter count matter more.
Sources: OpenAI Help Center "Understanding and counting tokens"; Sennrich et al. 2016 (arXiv:1508.07909); CUTE (arXiv:2409.15452); CharBench (arXiv:2508.02591). Save this.
Hashtags (20): core set + #ai #artificialintelligence #chatgpt #llm #tokens #machinelearning #nlp #howaiworks #techexplained. Hidden keywords: "how ai works" "tokens explained" "how chatgpt reads text".

## Decisions for you
1. Voice-over (new Kokoro blend, logged) or text-only + SFX? (I'd keep text-only again.)
2. OK to open with the honest version of the letter-counting story ("researchers still argue")? It is less punchy than "AI can't count because of tokens", but the second is not settled in the papers.
3. Length 44 s OK?

Checks before a render: frames, numbers (rerun `scripts/tokenizer_examples.py`; every ID on screen must match), text (Gemini); the three-checks rule as for earlier reels.
