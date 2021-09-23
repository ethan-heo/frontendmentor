import { TimeFrameType, Tracking } from "./types";
import { trackingItemTemp } from "./templates";
import trackings from "../db/data.json";
import { $, $$, isElement } from "./utils";

const getTrackings = (trackings: Tracking[]) => (type: TimeFrameType) => {
	return trackings.map((tracking) =>
		trackingItemTemp({
			title: tracking.title,
			timeframe: tracking.timeframes[type],
			type,
		})
	);
};

type TrackingListParameter = {
	trackingListEl: Element | null;
	renderTrackings: (type: TimeFrameType) => string[];
};
const renderTrackingList =
	({ trackingListEl, renderTrackings }: TrackingListParameter) =>
	(type: TimeFrameType) => {
		if (isElement(trackingListEl)) {
			trackingListEl.innerHTML = renderTrackings(type).join("");
		}
	};

type ClickCategoryParameter = {
	initalCategory: Element | null;
	render: (type: TimeFrameType) => void;
};
const clickCategory = ({ initalCategory, render }: ClickCategoryParameter) => {
	let prevCategory: Element | null = initalCategory;

	return (e: Event) => {
		const target = e.target as HTMLButtonElement;

		if (target.classList.contains("category-btn")) {
			if (isElement(prevCategory)) {
				prevCategory.classList.remove("active");
			}

			render(target.dataset.timeFrame as TimeFrameType);
			target.classList.add("active");
			prevCategory = target;
		}
	};
};

document.addEventListener(`DOMContentLoaded`, async () => {
	const timeCategoryList = $(`.time-categories`);
	const render = renderTrackingList({
		trackingListEl: $(`.tracking-list`),
		renderTrackings: getTrackings(trackings.data),
	});

	if (isElement(timeCategoryList)) {
		timeCategoryList.addEventListener(
			"click",
			clickCategory({
				initalCategory: $(".time-categories .active"),
				render,
			})
		);
	}

	render("daily");
});
