import { TimeFrameOption, TimeFrame } from "../../modules/db";

type GetTrackingItemReturnType = {
	title: string;
	timeframe: {
		type: TimeFrame;
	} & TimeFrameOption;
};

const TIME_FRAME_TEXT_MAP: Record<TimeFrame, string> = {
	daily: "Yesterday",
	weekly: "Last Week",
	monthly: "Last Month",
};

export function parseTrackingItemTemp(trackingInfo: GetTrackingItemReturnType) {
	return `
		<li class="${trackingInfo.title}">
			<div class="tracking-item-content">
				<header>
					<h4>${trackingInfo.title}</h4>
					<button></button>
				</header>
				<div class="tracking-item-timeframes">
					<span>${trackingInfo.timeframe.current}</span>
					<span>${TIME_FRAME_TEXT_MAP[trackingInfo.timeframe.type]} - ${
		trackingInfo.timeframe.previous
	}</span>
				</div>
			</div>
		</li>
	`;
}
