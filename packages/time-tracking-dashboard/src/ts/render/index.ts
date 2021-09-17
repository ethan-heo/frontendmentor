export function render(target: Element, templates: string[]) {
	target.innerHTML = templates.join("");
}
