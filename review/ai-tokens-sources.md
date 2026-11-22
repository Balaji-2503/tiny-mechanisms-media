# BRIEF-005 sources (read 2026-11-22 by the Tiny Mechanisms session)

Disclosure: I am an AI model made by Anthropic. I used vendor/library documentation and papers, and I did not rely on my own account of how I work. No Anthropic page is used.

| id | source | what I read | status |
|---|---|---|---|
| T1 | Sennrich, Haddow, Birch, "Neural Machine Translation of Rare Words with Subword Units", ACL 2016, arXiv:1508.07909v5: https://arxiv.org/abs/1508.07909 | abstract and section 3.2 (Byte Pair Encoding) of the PDF text; not the experiments | PRIMARY (original BPE-for-words paper) |
| T2 | OpenAI Help Center, "Understanding and counting tokens" (page said "Updated: 17 days ago"): https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them | the whole page | PRIMARY vendor documentation (OpenAI) |
| T3 | Hugging Face Transformers docs, "Tokenization algorithms": https://huggingface.co/docs/transformers/en/tokenizer_summary | the BPE / byte-level BPE sections | library documentation |
| T4 | Edman, Schmid, Fraser, "CUTE: Measuring LLMs' Understanding of Their Tokens", EMNLP 2024, arXiv:2409.15452: https://arxiv.org/abs/2409.15452 | abstract only | PRIMARY (abstract) |
| T5 | Uzan, Pinter, "CharBench: Evaluating the Role of Tokenization in Character-Level Tasks", arXiv:2508.02591: https://arxiv.org/abs/2508.02591 | abstract only | PRIMARY preprint (abstract); peer-review status not checked |
| T6 | Cosma et al., "The Strawberry Problem: Emergence of Character-level Understanding in Tokenized Language Models", arXiv:2505.14172: https://arxiv.org/abs/2505.14172 | abstract only | PRIMARY preprint (abstract); peer-review status not checked |
| T7 | My own runs: `scripts/tokenizer_examples.py` (tiktoken 0.14.0, encodings cl100k_base and o200k_base; also the Hugging Face `gpt2` tokenizer for one check) in Balaji-2503/Tech- | ran it | COMPUTED, reproducible |

## Claims, each tied to a source
1. "Tokens are the units that OpenAI models use to process text. A token can represent a character, part of a word, a whole word, or punctuation. Spaces also affect how text is divided into tokens." (T2). The text is divided into tokens and the model processes those tokens (T2).
2. A token count is not a word count; 1 token is about 4 characters or three-quarters of an English word, "estimates, not exact counts" (T2).
3. "red", "Red" and " red" (with a leading space) can be represented differently (T2). In cl100k_base each is ONE token, with three different IDs: red=1171, Red=6161, " red"=2579 (T7).
4. "Token IDs also depend on the encoding. Do not assume that an example token ID applies to every model." (T2). Proof: "strawberry" is 3 tokens in both encodings but with different IDs: cl100k_base [496 'str', 675 'aw', 15717 'berry']; o200k_base [302 'st', 1618 'raw', 19772 'berry'] (T7).
5. Real split used for the hook (cl100k_base): "AI doesn't read words." = 6 tokens: 15836 'AI', 3250 ' doesn', 956 "'t", 1373 ' read', 4339 ' words', 13 '.' (T7). "How AI reads your words" = 5 tokens: 4438 'How', 15592 ' AI', 16181 ' reads', 701 ' your', 4339 ' words'.
6. BPE: "iteratively replaces the most frequent pair of bytes in a sequence with a single, unused byte"; adapted for words by merging "characters or character sequences"; "frequent character n-grams (or whole words) are eventually merged into a single symbol"; the number of merge operations is the algorithm's only hyperparameter (T1, section 3.2). Toy example (T3, reproduced by `scripts/tokenizer_examples.py`): words hug x10, pug x5, pun x12, bun x4, hugs x5: the pair (u,g) occurs 20 times, so it merges into "ug"; then (u,n) occurs 16 times and merges into "un".
7. Common words stay single tokens; rare or unknown words decompose into subwords (T3; T1 abstract: "rare and unknown words as sequences of subword units"). Measured in cl100k_base (T7): "the" 1 token; "tokenization" 2 (token + ization); "unbelievable" 3; "antidisestablishmentarianism" 6; "Supercalifragilisticexpialidocious" 11. o200k_base gives 1, 2, 3, 6 and 10 for the same words.
8. GPT-2 uses byte-level BPE with a vocabulary of 50,257 (256 byte tokens + 50,000 merges + 1 special token) (T3). cl100k_base has n_vocab 100277 in tiktoken (T7: see output).
9. LETTER COUNTING (contested, so the video says so): CUTE (T4): "Most LLMs split text into multi-character tokens and process them as atomic units without direct access to individual characters"; most models "seem to know the spelling of their tokens, yet fail to use this information effectively to manipulate text". CharBench (T5): reliance on subword units is "a common conjecture"; "recent studies offer conflicting conclusions about the role of tokenization"; for counting tasks "tokenization properties are weakly correlated with correctness, while the length of the queried word and the actual character count play a more significant part"; average accuracy 43.6% (this is across the models they tested). The Strawberry Problem (T6) attributes such failures "due to a fundamental limitation: tokenization". So: researchers disagree about how much tokenization explains it. I do NOT claim that any named model miscounts.

## Left out because unverified or contested
- "Computers need numbers" as a reason (general knowledge, no source opened). The video says only that each chunk gets an ID.
- Any claim about what a named model can or cannot do; any claim about Claude's tokenizer.
- That tokenization is THE reason models miscount letters (contested, see 9).
