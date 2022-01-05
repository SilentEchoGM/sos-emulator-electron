export const sosEvents = [
  "game:update_state", //
  "game:initialized", //
  "game:pre_countdown_begin", //
  "game:post_countdown_begin", //
  "game:round_started_go", //
  "game:clock_started", //
  "game:ball_hit", //
  "game:clock_updated_seconds", //
  "game:statfeed_event", //
  "game:clock_stopped", //
  "game:goal_scored", //
  "game:replay_start", //
  "game:replay_end", //
  "game:replay_will_end", //
  "game:match_ended", //
  "game:podium_start", //
  "game:match_destroyed", //
  "game:match_created", //
  "sos:version",
] as const;

export const sosStatFeedEvents = [
  "Demolition",
  "Shot on Goal",
  "Goal",
  "Assist",
  "Save",
  "Epic Save",
] as const;

export const gameStates = [
  "Default",
  "Created",
  "Ready",
  "Countdown",
  "Kickoff",
  "Active",
  "GoalScored",
  "Replay",
  "Ended",
  "Podium",
  "Scoreboard",
  "Menu",
] as const;

export enum TeamEnum {
  blue,
  orange,
}

export const miscEvents = [
  "game:initialized",
  "game:pre_countdown_begin",
  "game:post_countdown_begin",
  "game:clock_started",
  "game:clock_updated_seconds",
  "game:clock_stopped",
  "game:replay_end",
  "game:replay_will_end",
  "game:podium_start",
  "game:match_destroyed",
  "game:match_created",
] as const;
