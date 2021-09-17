import { Tracking } from "./types";
import db from "../../../db/data.json";

export function getTrackingItmes(): Tracking[] {
	return db.data;
}
