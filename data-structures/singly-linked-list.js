// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
// 	head: {
// 		value: 1,
// 		next: {
// 			value: 2,
// 			next: {
// 				value: 3,
// 				next: {
// 					value: 4,
// 					next: null
// 				}
// 			}
// 		}
// 	}
// }

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class SinglyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		}
		this.tail = this.head
		this.length = 1
	}
	append(value) {
		const newNode = new Node(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	prepend(value) {
		const newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value)
		}
		const newNode = new Node(value)
		const firstPointer = this.getTheIndex(index - 1)
		const holdingPointer = firstPointer.next
		firstPointer.next = newNode
		newNode.next = holdingPointer
		this.length++
	}
	getTheIndex(index) {
		let counter = 0
		let currentNode = this.head
		while (counter !== index) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
	remove(index) {
		if (index < 0 || index > this.length) {
			return `There is no node at index ${index}`
		} else if (index === 0) {
			return shift()
		} else if (index === this.length - 1) {
			return unshift()
		}
		const firstPointer = this.getTheIndex(index - 1)
		const toDeleteNode = this.getTheIndex(index)
		const holdingPointer = toDeleteNode.next
		firstPointer.next = holdingPointer
		this.length--
		return toDeleteNode
	}
	shift() {
		if (this.length === 0) {
			return 'The list is empty'
		}
		const toDeleteNode = this.head
		this.head = this.head.next
		this.length--
		if (this.length === 1) {
			this.tail = this.head
		} else if (this.length === 0) {
			this.tail = null
		}
		return toDeleteNode
	}
	unshift() {
		if (this.length === 0) {
			return 'The list is empty'
		} else if (this.length === 1) {
			const toDeleteNode = this.tail
			this.tail = null
			this.head = null
			this.length--
			return toDeleteNode
		}
		const holdingPointer = this.getTheIndex(this.length - 2)
		const toDeleteNode = holdingPointer.next
		holdingPointer.next = null
		this.tail = holdingPointer
		this.length--
		return toDeleteNode
	}
}

let myLL = new SinglyLinkedList('ancient butter')
myLL.append('milk')
myLL.append('cheese')
myLL.prepend('butter')
myLL.prepend('yogurt')
console.log(myLL)
myLL.insert(1, 'mayonnaise1')
myLL.insert(2, 'mayonnaise2')
myLL.insert(3, 'mayonnaise3')
console.log(myLL)
