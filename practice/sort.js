const arr = [10, 2, 3, 4, 1, 4, 7, 8, 9, 1]

const sort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	return arr
}

// console.log(sort(arr))

const throttle = function (fn1, delay) {
	let start = 0
	return function () {
		let end = new Date()
		console.log(`arguments:`, arguments)
		if (end - start >= delay) {
			fn1.apply(this, arguments)
			start = end
		}
	}
}
const throttle2 = function (func, delay) {
	let timer
	return function () {
		if (!timer) {
			timer = setTimeout(() => {
				func.apply(this, arguments)
				timer = null
			}, delay)
		}
	}
}
const test = function (a, b) {
	console.log(`a, b:`, a, b)
}
throttle(test, 1000)(1, 2)
