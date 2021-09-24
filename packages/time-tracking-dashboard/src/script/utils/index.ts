import { RenderParams } from "../types";

export const $ = (selector: string) => document.querySelector(selector);

export const $$ = (selector: string) => document.querySelectorAll(selector);

export const isElement = (el: Element | null): el is Element => {
	if (!el) return false;

	return "nodeName" in el;
};

export const render =
	<F extends Function, T>({ target, render }: RenderParams<F>) =>
	(prop: T) => {
		if (isElement(target)) {
			target.innerHTML = render(prop);
		} else {
			throw new TypeError(`target is not element`);
		}
	};
