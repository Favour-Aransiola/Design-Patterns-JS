
export class FalseSingleton {
    value: number = 0


    getValue(): number {
        return this.value
    }
    increment() {
        this.value++
    }
    decrement() {
        this.value--
    }
}

const fs1 = new FalseSingleton()
const fs2 = new FalseSingleton()


// fs1 and fs2 has different locations in memory
console.log(fs1 === fs2) // False


export class RealSingleton {
    public static instance: RealSingleton;

    // Private constructor ensures that new objects can only be created by the getInstance methos
    private constructor() {

    }

    // For creating the Singleton
    static getInstance(): RealSingleton {
        if (this.instance) {
            return this.instance
        }
        this.instance = new RealSingleton()
        return this.instance
    }
}

const f3 = RealSingleton.getInstance()
const f4 = RealSingleton.getInstance()

console.log(f3 === f4) // True