import { getTrackingItems } from "../modules/apis";

document.addEventListener(`DOMContentLoaded`, async () => {
	const result = await getTrackingItems();
	console.log(result);
});
