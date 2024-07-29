function person(a, b, c, d) {
	// console.log(this.name)
	console.log(`this:`, this)
	console.log(a, b, c, d)
	return {
		name: this.name,
	}
}
const egg = {
	name: 'egg',
}
Function.prototype.newCall = function (obj) {
	var obj = obj || typeof window !== 'undefined' ? window : global
	obj.fn = this
	const args = []
	const result = obj.fn(...Array.prototype.slice.call(arguments, 1))
	// for (let i = 1; i < arguments.length; i++) {
	// 	args.push('arguments[' + i + ']')
	// }
	// console.log(`args:`, args)
	// const result = eval('obj.fn(' + args + ')')
	delete obj.fn
	return result
}

const res = person.newCall(null, '点赞', '关注', '分享', '收藏')
// const p2 = person.call(null, '点赞', '关注', '分享', '收藏')
// console.log(res)
