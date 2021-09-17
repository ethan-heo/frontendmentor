import { getTrackingItmes } from "./modules/db";
import { render } from "./render";
import { parseTrackingItemTemp } from "./templates";

document.addEventListener(`DOMContentLoaded`, async () => {
	const trackingListEl = document.querySelector(".tracking-list");

	if (!trackingListEl) throw new Error(`tracking-list를 찾을 수 없습니다.`);

	const trackingItems = getTrackingItmes();

	render(
		trackingListEl,
		trackingItems.map((trackingItem) => {
			return parseTrackingItemTemp({
				title: trackingItem.title,
				timeframe: {
					type: "daily",
					...trackingItem.timeframes["daily"],
				},
			});
		})
	);
});
