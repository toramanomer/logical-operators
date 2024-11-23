export function conjunction(...conjuncts: unknown[]): boolean {
	if (conjuncts.length === 0) return false
	return conjuncts.every(Boolean)
}
