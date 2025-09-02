# 🟢 Singleton Pattern (TypeScript)

The **Singleton Pattern** ensures that a class has **only one instance** throughout the entire application, while providing a global access point to that instance.  

This is useful when exactly one object is needed to coordinate actions — for example:  
- A single database connection  
- A global configuration manager  
- A logger  

---

## ❌ Example: A "False Singleton"

Here’s a class that *looks like* a singleton, but isn’t:

```
export class FalseSingleton {
    value: number = 0;

    getValue(): number {
        return this.value;
    }
    increment() {
        this.value++;
    }
    decrement() {
        this.value--;
    }
}

const fs1 = new FalseSingleton();
const fs2 = new FalseSingleton();

// Different instances in memory
console.log(fs1 === fs2); // ❌ False
```

## ✅ Example: A "Real Singleton"
``` ts
export class RealSingleton {
    private static instance: RealSingleton;

    // Private constructor ensures new objects can't be created directly
    private constructor() {}

    // Static method to create or return the single instance
    public static getInstance(): RealSingleton {
        if (!RealSingleton.instance) {
            RealSingleton.instance = new RealSingleton();
        }
        return RealSingleton.instance;
    }
}

const f3 = RealSingleton.getInstance();
const f4 = RealSingleton.getInstance();

console.log(f3 === f4); // ✅ True
```