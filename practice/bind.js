function person(a, b, c, d) {
	console.log(a, b, c, d)
	console.log(`this.name:`, this.name)
	return {
		name: this.name,
	}
}
person.prototype.collection = '收藏'
const egg = {
	name: 'egg',
}
const e = 1
Function.prototype.newBind = function (obj) {
	if (typeof this !== 'function') {
		throw new TypeError('Error')
	}
	var that = this
	var arr = Array.prototype.slice.call(arguments, 1)
	var o = function () {}
	var newFn = function () {
		var arrSum = [...arr, ...arguments]
		if (this instanceof o) {
			console.log(`this instanceof newFn:`, this instanceof newFn)
			console.log(`this instanceof o:`, this instanceof o)
			console.log(`newFn instanceof o:`, o instanceof newFn)
			console.log(`this:`, this)
			that.apply(this, arrSum)
		} else {
			that.apply(obj, arrSum)
		}
	}
	o.prototype = that.prototype
	newFn.prototype = new o()
	console.log(`newFn.prototype:`, newFn.prototype)
	console.log(`newFn.prototype:`, newFn.prototype.__proto__)
	console.log(`o.prototype:`, o.prototype)
	return newFn
}
// person.newBind(egg, '点赞', '关注')('分享', '收藏')
var bibi = person.newBind(egg, '点赞', '关注', '分享')
var b = new bibi('分享')
console.log(`b.collection:`, b.collection)
