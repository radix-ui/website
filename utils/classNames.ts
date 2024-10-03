export function classNames(...arr: unknown[]) {
	return arr.filter(Boolean).join(" ");
}
