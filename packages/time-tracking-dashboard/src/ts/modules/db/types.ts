export type TimeFrame = "daily" | "weekly" | "monthly";

export type TimeFrameOption = {
	current: number;
	previous: number;
};

export type Tracking = {
	title: string;
	timeframes: Record<TimeFrame, TimeFrameOption>;
};
