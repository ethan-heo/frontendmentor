export type TimeFrameType = "daily" | "weekly" | "monthly";

export type TimeFrameOption = {
	current: number;
	previous: number;
};

export type Tracking = {
	title: string;
	timeframes: Record<TimeFrameType, TimeFrameOption>;
};
