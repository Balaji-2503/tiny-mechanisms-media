# BRIEF (reel #2) pin-tumbler lock: sources (read 2026-11-23 by the Tiny Mechanisms session)

| id | source | what I read | status |
|---|---|---|---|
| L1 | US Patent 31,278, Linus Yale Jr., "Improvement in Locks for Drawers, Closets, Cupboards, &c.", granted 1861-01-29: https://patents.google.com/patent/US31278A/en | the full description (Google's OCR text, partly garbled; drawings not viewed) | PRIMARY (patent) |
| L2 | US Patent 48,475, Linus Yale Jr., "Improvement in Locks", 1865-06-27: https://patents.google.com/patent/US48475A/en | the opening of the description (it describes a pin-lock with a cylinder and "tumbler-case") | PRIMARY (patent) |
| L3 | Wikipedia, "Pin tumbler lock": https://en.wikipedia.org/wiki/Pin_tumbler_lock | the mechanism, parts and history sections | SECONDARY (encyclopedia); used for terminology only |
| L4 | My own arithmetic (below) | computed | COMPUTED |

## Claims, each tied to a source
1. The 1861 Yale patent describes a lock whose key-hole sits in a revolving bolt, with "pistons" and "drivers" (pin pairs) pushed by "actuating springs" placed in cylindrical holes drilled in the pin chamber of the case and in the bolt; with the key in place the pins are "set ready to allow the bolt to rotate" (L1). A figure in the patent shows the flattened ends of pistons and drivers to reduce the width of the joint between them (L1, about picking).
2. A pin tumbler lock is a spring-loaded set of pins of varying lengths that stop the plug turning unless the correct key is inserted; with the correct key the pins align precisely and the plug turns; with a wrong key they stay misaligned and the plug cannot turn (L3).
3. Parts: the plug (turns), the outer casing (holds vertical shafts with spring-loaded driver pins above key pins); typically five or six holes in the plug; "the point where the plug and cylinder meet is called the shear point (shear line)"; with a correct key the pins rise so their gaps align exactly at that point and the plug can rotate (L3).
4. Arithmetic example: a lock with 5 pins and 6 possible key-cut heights per pin has 6^5 = 7,776 possible cut combinations (L4: `python3 -c "print(6**5)"`). This is an illustration, NOT a claim about any real lock.

## Left out because I could not open a primary source
- Real manufacturer key-cut depths, number of depths per pin, or the number of keys of a real lock model (no manufacturer manual opened).
- Anything about picking or bypassing locks, bumping, or security ratings (no how-to content).
- The Egyptian/ancient history and the 1848 Yale Sr. lock (secondary only; not needed).
- Master-key (spacer pin) behaviour: the video says "an ordinary key" and does not claim all locks work this way ("most pin tumbler locks").
