export type TimeFrameType = "daily" | "weekly" | "monthly";

export type TimeFrameOption = {
	current: number;
	previous: number;
};

export type TimeFrames = Record<TimeFrameType, TimeFrameOption>;

export type Tracking = {
	title: string;
	timeframes: TimeFrames;
};
