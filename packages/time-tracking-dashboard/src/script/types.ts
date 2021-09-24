export type TimeFrameType = "daily" | "weekly" | "monthly";

export type TimeFrameOption = {
	current: number;
	previous: number;
};

export type Tracking = {
	title: string;
	timeframes: Record<TimeFrameType, TimeFrameOption>;
};

export type RenderParams<F> = {
	target: Element | null;
	render: F;
};
