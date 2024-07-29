class Commitment {
	static PENDING = '待定'
	static FULFILLED = '成功'
	static REJECTED = '失败'
	constructor(func) {
		this.status = Commitment.PENDING
		this.result = null
		try {
			func(this.resolve.bind(this), this.reject.bind.bind(this))
		} catch (error) {
			this.reject(error)
		}
	}
	resolve(result) {
		if (this.status === Commitment.PENDING) {
			this.status = Commitment.FULFILLED
			this.result = result
		}
	}
	reject(result) {
		if (this.status === Commitment.PENDING) {
			this.status = Commitment.REJECTED
			this.result = result
		}
	}
	then(onFULFILLED, onREJECTED) {
		onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {}
		onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {}
		if (this.status === Commitment.FULFILLED) {
			onFULFILLED(this.result)
		}
		if (this.status === Commitment.REJECTED) {
			onREJECTED(this.result)
		}
	}
}

let commitment = new Commitment((resolve, reject) => {
	resolve('Hello Promise')
})
