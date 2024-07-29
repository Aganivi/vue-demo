function person(a, b, c, d) {
	console.log(a, b, c, d)
	return {
		name: this.name,
	}
}

const egg = {
	name: 'egg',
}

Function.prototype.newApply = function (obj, arr) {
	var obj = obj || window
	obj.fn = this
	let result
	if (!arr) {
		result = obj.fn()
	} else {
		result = obj.fn(...arr)
	}
	delete obj.fn
	return result
}

const p1 = person.newApply(egg, ['点赞', '关注', '分享', '收藏'])

console.log(`p1:`, p1)
