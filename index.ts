import { FalseSingleton, RealSingleton } from "./patterns/creational-pattern/singleton"



const fs1 = new FalseSingleton()
const fs2 = new FalseSingleton()


// fs1 and fs2 has different locations in memory
console.log(fs1 === fs2)

const f3 = RealSingleton.getInstance()
const f4 = RealSingleton.getInstance()

console.log(f3 === f4)