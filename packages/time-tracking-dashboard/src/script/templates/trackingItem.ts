import { TimeFrameOption, TimeFrameType } from "../types";

type GetTrackingItemReturnType = {
	title: string;
	type: TimeFrameType;
	timeframe: TimeFrameOption;
};

const TIME_FRAME_TEXT_MAP: Record<TimeFrameType, string> = {
	daily: "Yesterday",
	weekly: "Last Week",
	monthly: "Last Month",
};

export function trackingItemTemp(trackingInfo: GetTrackingItemReturnType) {
	return `
		<li class="${replaceSpaceToBar(trackingInfo.title.toLowerCase())}">
			<div class="tracking-item-content">
				<header>
					<h4>${trackingInfo.title}</h4>
					<button class="tracking-item-option">
						option button
					</button>
				</header>
				<div class="tracking-item-timeframes">
					<strong>${trackingInfo.timeframe.current}hrs</strong>
					<span>${TIME_FRAME_TEXT_MAP[trackingInfo.type]} - ${
		trackingInfo.timeframe.previous
	}hrs</span>
				</div>
			</div>
		</li>
	`;
}

function replaceSpaceToBar(str: string) {
	return str.replace(" ", "-");
}
