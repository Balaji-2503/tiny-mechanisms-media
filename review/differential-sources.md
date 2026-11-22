# BRIEF-004 sources (read 2026-11-22 by the Tiny Mechanisms session)

I could open ONE primary source. A second (Eaton's open-differential page) would not load from here, so it is not used.

| id | source | what I read | status |
|---|---|---|---|
| D1 | US Army, **TM 9-8000, Principles of Automotive Vehicles**, Chapter 29 "Differentials, Final Drives, and Driving Axles", sections 29-1 to 29-5 (text of the manual as reproduced by Integrated Publishing): https://automotiveenginemechanics.tpub.com/TM-9-8000/TM-9-80000562.htm (pages ...0563, ...0564 continue) | the full text of 29-1 to 29-3 and the start of 29-4/29-5 | PRIMARY technical manual (US government). The page is a web reproduction with the two columns interleaved, so wording below is reassembled from it; I did not see the original PDF. |
| D2 | My arithmetic: `scripts/differential_numbers.py` in Balaji-2503/Tech- | ran it | COMPUTED |

## Claims, each tied to a source
1. Purpose: the differential divides engine torque between the driving wheels "so that they are free to rotate simultaneously at varying speeds"; this matters "particularly if the vehicle is not moving in a straight line" (D1, 29-1b).
2. Straight ahead, both wheels at the same speed: "the differential pinions do not rotate around their own axis" and "lock all the parts, making them rotate as a unit" (D1, 29-2a).
3. In a turn the inner wheel slows; "the case forces the differential pinions to rotate along the inner differential side gear, advancing the opposite side gear an equivalent amount"; "the outer wheel thus turns at a higher speed than the inner wheel" (D1, 29-2b).
4. Worked example in the manual: "If the differential drive ring gear makes four revolutions while the inner wheel is making one, the outer wheel will rotate seven times." (D1, 29-2b). Check: (1 + 7) / 2 = 4, i.e. the ring gear turns at the average of the two wheels (D2).
5. "With the usual differential, the torque is divided evenly at all times." (D1, 29-3)
6. "A fault in the conventional differential is that if one driving wheel loses traction and spins, the other wheel, which has more traction, remains stationary and does not drive the vehicle." (D1, 29-3)
7. A differential lock is "a rigid connection between the two axle shafts" that makes "both wheels rotate at the same speed as the differential drive ring gear while the differential lock is engaged" (D1, 29-3). The manual adds that it is "used very seldom". It also describes automatic devices (high-traction / no-spin differentials) that behave differently; I do not describe how modern ones behave.
8. In a turn "the outside wheel covers a greater distance and must turn faster" than the inside wheel (D1, 29-5a, in the no-spin differential discussion).
9. Path-length difference in a full circle = 2 x pi x T, independent of the turn radius (D2). For wheels 1.5 m apart: 9.42 m. The 1.5 m is an example I choose, NOT a claimed typical value (I did not find a manufacturer spec I could open).

## Left out because unverified
- The go-kart "inner wheel skips/lifts" claim (no primary source opened).
- Anything about limited-slip, locking or torque-vectoring differentials in modern cars beyond claim 7.
- "All cars": the video says "an ordinary (open) differential" and "most cars" only where needed.
- Torque-split numbers for any real car.
