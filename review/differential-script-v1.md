# BRIEF-004 script v1: "Why your car's wheels spin at different speeds" (for owner review; nothing is built yet)

Slug: car-differential-wheels. ~41 s, 1080x1920. Sources in `differential-sources.md` [D1 = US Army TM 9-8000 ch. 29, D2 = my arithmetic]. SFX only unless you choose voice-over (see decisions).

## Beats (the exact on-screen words)
0.0-1.5 HOOK (visual first): top-down car driving a full circle, the two wheel paths drawn as arcs in teal (inner) and gold (outer); on a whoosh a counter climbs to "+9.4 m". Text: "One wheel travels 9.4 m MORE." then "Same car. Same engine."  [D2] Small tag: "wheels 1.5 m apart".
1.5-4.5 THE NUMBER: "In one full turn." / formula on screen: "2 x pi x 1.5 m = 9.4 m" / "Any size of turn." [D2: independent of radius]
4.5-9.0 THE PROBLEM: "Both wheels are driven by one engine." / "Joined rigidly, they turn at the same speed." [D1 29-3] / "But the outer wheel must turn faster." [D1 29-5a]
9.0-12.0 RE-HOOK: freeze. "So how does one engine drive two speeds?"
12.0-27.0 THE MECHANISM (cutaway: ring gear + case teal, spider gears gold, two side gears white):
 - 12.0-17.0 "Straight road: the spider gears just ride along. They don't spin." [D1 29-2a] (the whole assembly turns as one; tick per tooth).
 - 17.0-23.0 "Turn: the spider gears spin. One side gear speeds up exactly as much as the other slows down." [D1 29-2b] (click when the spiders start turning).
 - 23.0-27.0 Counters: "Ring gear 4 turns. Inner wheel 1. Outer wheel 7." / "4 = (1 + 7) / 2" [D1 29-2b example; D2]
27.0-35.0 THE SURPRISE: "An ordinary differential splits torque EQUALLY." [D1 29-3] / "One wheel on ice spins... the other wheel stays still. The car doesn't move." [D1 29-3] (picture: ice wheel spinning fast, tarmac wheel still) / "A differential lock joins the axles so both wheels turn together." [D1 29-3]
35.0-41.0 END: "Save this: 3 facts about your car's differential" / "1. Straight road: spider gears don't spin." / "2. In a turn: one wheel gains what the other loses." / "3. Ordinary differential: equal torque, so one slipping wheel can stall the car." Credits (28 px): "Source: US Army TM 9-8000, Principles of Automotive Vehicles, ch. 29". ONE call to action: "Save this." Logo end card.

## Caption (draft)
Your car's two wheels never travel the same distance in a turn. For wheels 1.5 m apart, the outer one covers 9.4 m more in one full circle (2 x pi x 1.5). An ordinary differential lets one engine drive both at different speeds: the little spider gears spin only in turns, and one wheel gains what the other loses. The catch: it splits torque equally, so one slipping wheel can leave the car stuck.
Source: US Army TM 9-8000, Principles of Automotive Vehicles (ch. 29). Save this.
Hashtags per PLAN-5: core set + #differential #cars #automotive #carmechanics #mechanicalengineering #howitworks. Hidden keywords: "car differential" "how a differential works" "mechanical engineering".

## Decisions for you
1. Voice-over (a new Kokoro voice blend, logged) or text-only with sound effects? The ratchet reel was text-only; I'd keep text-only first for comparison.
2. Hook line OK? ("One wheel travels 9.4 m MORE." with the arcs.)
3. OK to leave out the go-kart idea (I found no primary source) and to name only the US Army manual as the source (I could not open a second one)?

## Animation plan (so it is not "just lines")
Top-down car with two glowing wheel paths; a real gear cutaway whose speeds follow the physics (case speed = average of the two side gears; spider spin = half the difference, times the tooth ratio); a split screen of the ice wheel spinning while the tarmac wheel sits still; kinetic text; camera drift and push-ins; counters that roll. All numbers computed by `scripts/differential_numbers.py` and re-checked before you see a render.
## Checks before a render (frames, numbers, text) as in the brief.
