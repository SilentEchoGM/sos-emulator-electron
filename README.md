# sos-emulator-electron

A simple emulator for the SOS plugin for Bakkesmod, intended for use testing Rocket League broadcast overlays.

Currently set up to start on port 49122 so if you have Rocket League running with SOS set to port 49122, bad things will happen.

## Next?

- Currently only the core scorebug relevant attributes are dynamic but the intention is to eventually have all event dynamic properties configurable.
- Event simulator (ie, click a button for a goal and the relevant SOS events will be generated and sent at the appropriate time intervals to simulate a goal occurring)
- Game playback (listen to SOS and store all packets for later playback)
