import { TimeFrameType, Tracking } from "./types";
import { trackingItemTemp } from "./templates";
import trackings from "../db/data.json";
import { $, isElement } from "./utils";

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
	target: Element | null;
	render: (type: TimeFrameType) => string[];
};
const renderTrackingList =
	({ target, render }: TrackingListParameter) =>
	(type: TimeFrameType) => {
		if (isElement(target)) {
			target.innerHTML = render(type).join("");
		}
	};

type ClickCategoryParameter = {
	target: Element | null;
	render: (type: TimeFrameType) => void;
};
const clickCategory = ({ target, render }: ClickCategoryParameter) => {
	let prevCategory: Element | null = target;

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
		target: $(`.tracking-list`),
		render: getTrackings(trackings.data),
	});

	if (isElement(timeCategoryList)) {
		timeCategoryList.addEventListener(
			"click",
			clickCategory({
				target: $(".time-categories .active"),
				render,
			})
		);
	}

	render("daily");
});
