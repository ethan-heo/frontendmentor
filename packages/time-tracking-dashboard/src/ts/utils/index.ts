export const $ = (selector: string) => document.querySelector(selector);

export const $$ = (selector: string) => document.querySelectorAll(selector);

export const isElement = (el: Element | null): el is Element => {
	if (!el) return false;

	return "nodeName" in el;
};
