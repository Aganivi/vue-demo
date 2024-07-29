function deepClone(value) {
	if (typeof value !== 'object' && value === null) {
		return value
	}
	let result = Array.isArray(value) ? [] : {}
	Object.setPrototypeOf(result, Object.getPrototypeOf(value))
	for (let key in value) {
		if (value.hasOwnProperty(key)) result[key] = deepClone(value[key])
	}
	return result
}
