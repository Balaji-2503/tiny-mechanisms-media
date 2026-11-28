# Ariane 5 reel "This rocket was destroyed by one number" (Tiny Mechanisms, category BIG FAILURES): built by the chess session
STATUS: waiting for the owner's OK. Do not post before the chess session relays it in comms/to-tm.md.
File: tm-ariane.mp4 (1080x1920, 30 fps, 96.6 s, own voice + quiet bed baked in, hidden keywords at the top edge). Cover: cover.jpg. NO library track.
QA done: final frames checked scene by scene, captions in sync, loudness -15.7 LUFS; sound effects on the visuals.
INTERNAL sources for the checker only, do NOT name any source in the video, caption, comment or description (owner rule 2026-11-27). Read 2026-11-28, the Ariane 501 Inquiry Board report: "On 4 June 1996, the maiden flight of the Ariane 5 launcher ended in a failure. Only about 40 seconds after initiation of the flight sequence"; SRI design "practically the same as ... Ariane 4, particularly as regards the software"; "data conversion from 64-bit floating point to 16-bit signed integer value. This resulted in an Operand Error"; "not protected ... although other conversions of comparable variables in the same place in the code were protected"; "seven variables were at risk ... three remaining variables, including the one denoting horizontal bias, being unprotected"; BH "horizontal bias"; "build-up of horizontal velocity which is five times more rapid than for Ariane 4"; "At 36.7 seconds after H0 ... back-up ... 0.05 seconds later the active inertial reference system, identical to the back-up system in hardware and software, failed for the same reason"; "transmitted essentially diagnostic information ... interpreted as flight data"; "large correction for an attitude deviation that had not occurred"; "angle of attack of more than 20 degrees"; "disintegrate at 39 seconds"; self-destruct "at an altitude of 4 km"; "As soon as the launcher lifts off, this function serves no purpose". 32,767 = largest 16-bit signed integer (maths). On screen, illustrations are labelled (velocity curves, hex pattern, rocket motion, example code is not the original).

## Instagram caption
This rocket was destroyed 40 seconds into its very first flight by a number bigger than 32,767. 🚀💥
Ariane 5, 4 June 1996. Its guidance software was carried over from the smaller Ariane 4. One step squeezed a 64-bit value (the "horizontal bias") into a 16-bit integer, which can only hold up to 32,767. Ariane 5 built up sideways speed 5× faster, the number overflowed, and that one conversion had no guard.
Both guidance computers crashed with the same error, their error code was read as flight data, the nozzles swung hard to fix a turn that never happened, and the rocket broke up. The cruel twist: that routine was only useful before lift-off.
One of the most famous software bugs ever. Save this, and follow for one mechanism a day.
. . .
. . .
. . .
#tinymechanisms #howitworks #ariane5 #rocket #rocketscience #space #spacex #nasa #esa #aerospace #aerospaceengineering #softwarebug #integeroverflow #programming #coding #softwareengineering #computerscience #engineering #engineeringexplained #engineeringfailures #disaster #history #science #stem #didyouknow #learnsomethingnew #techexplained #howthingswork #developer #bug
Pinned comment (owner pins by hand): "Programmers: have you ever been bitten by an overflow? 👇"
## YouTube Short
Title: The Software Bug That Blew Up a Rocket: Ariane 5 and the Number 32,767
Description: Ariane 5's first flight (4 June 1996) ended 40 seconds after launch because a 64-bit value was converted to a 16-bit integer that can only hold up to 32,767. The code came from Ariane 4, where the value never got that big; Ariane 5 built up sideways speed 5× faster. Both guidance computers crashed, their error code was read as flight data, and the rocket broke up. #shorts #space #programming
Tags: ariane 5 explosion explained, integer overflow, famous software bugs, ariane 5 bug, 32767, rocket failure, software engineering lessons
