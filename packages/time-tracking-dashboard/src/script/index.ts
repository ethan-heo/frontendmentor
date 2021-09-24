import { TimeFrameType, Tracking } from "./types";
import { trackingItemTemp } from "./templates";
import trackings from "../db/data.json";
import { $, isElement, render } from "./utils";

const renderTrackings = (trackings: Tracking[]) => (type: TimeFrameType) => {
	return trackings
		.map((tracking) =>
			trackingItemTemp({
				title: tracking.title,
				timeframe: tracking.timeframes[type],
				type,
			})
		)
		.join("");
};

const bindClickCategory =
	(initialTarget: Element | null) =>
	(renderFn: ReturnType<typeof render>) => {
		let prevCategory = initialTarget;

		return (e: Event) => {
			const target = e.target as HTMLElement;

			if (target.classList.contains("category-btn")) {
				if (isElement(prevCategory)) {
					prevCategory.classList.remove("active");
				}

				renderFn(target.dataset.timeFrame as TimeFrameType);
				target.classList.add("active");
				prevCategory = target;
			}
		};
	};

document.addEventListener(`DOMContentLoaded`, async () => {
	const timeCategoryList = $(`.time-categories`);
	const renderTrackingList = render({
		target: $(`.tracking-list`),
		render: renderTrackings(trackings.data),
	});

	if (isElement(timeCategoryList)) {
		timeCategoryList.addEventListener(
			"click",
			bindClickCategory($(".time-categories .active"))(renderTrackingList)
		);
	}

	renderTrackingList("daily");
});
