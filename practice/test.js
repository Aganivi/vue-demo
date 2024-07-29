// const bucket = new WeakMap()
// // 补充
// let activeEffect
// function effect(fn) {
// 	const effectFn = () => {
// 		// 调用cleanup 函数，用来清除所有与该副作用函数相关联的依赖集合
// 		cleanup(effectFn)
// 		// effectFn 执行时，将其设置为当前激活的副作用函数
// 		activeEffect = effectFn
// 		fn()
// 	}
// 	// activeEffect.deps 用来存储所有与该副作用函数相关联的依赖集合
// 	effectFn.deps = []
// 	// 执行副作用函数
// 	effectFn()
// }

// const data = { ok: true, text: 'Hello Vue3', text2: 'texxx' }
// const obj =
// 	(data,
// 	{
// 		get(target, key) {
// 			track(target, key)
// 			return target[key]
// 		},
// 		set(target, key, newVal) {
// 			target[key] = newVal
// 			trigger(target, key)
// 			return true
// 		},
// 	})

// function track(target, key) {
// 	if (!activeEffect) return
// 	// 根据target 从‘桶’里取出一个depsMap, 它是一个Map 类型: key --> effects
// 	let depsMap = bucket.get(target)
// 	// 如果depsMap 不存在，则新建一个depsMap 加入桶中
// 	if (!depsMap) {
// 		bucket.set(target, (depsMap = new Map()))
// 	}
// 	// 根据key，从depsMap 中取出一个deps，它是一个Set 类型：effects
// 	let deps = depsMap.get(key)
// 	// 如果deps 不存在，则新建一个deps 加入depsMap 中
// 	if (!deps) {
// 		depsMap.set(key, (deps = new Set()))
// 	}
// 	// 最后，将activeEffect 副作用函数加入‘桶’中
// 	deps.add(activeEffect)
// 	activeEffect.deps.push(deps) // 新增
// }

// function trigger(target, key) {
// 	// 根据target 取出depsMap
// 	let depsMap = bucket.get(target)
// 	// 不存在直接return
// 	if (!depsMap) return
// 	// 根据key 从depsMap 中取出所有副作用函数
// 	let deps = depsMap.get(key)
// 	// 执行
// 	deps && deps.forEach((effect) => effect())
// }

// let arr = [1, 2, 3]
// const set = new Set(arr)
// arr.forEach((item) => {
// 	arr = [1, 2]
// 	arr = [1, 2, 3]
// 	console.log(item)
// })
let a
console.log(`a:`, a)
