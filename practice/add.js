function add() {
	let args = Array.prototype.slice.call(arguments)
	let inner = function () {
		args.push(...arguments)
		return inner
	}
	inner.toString = function () {
		return args.reduce(function (a, b) {
			return a + b
		})
	}

	return inner
}

console.log(add(1)(2)(3)(4)(5))
