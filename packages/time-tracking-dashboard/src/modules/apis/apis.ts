import { Tracking } from "./types";

export function getTrackingItems(): Promise<Tracking[]> {
	return fetch("../../db/data.json").then((result) => result.json());
}
