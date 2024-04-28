const {Buffer} = require("buffer")

// WARNING: Do not allocate unsafe buffers which are not filled immediately

const buffer = Buffer.alloc(10000, 0)

// When Node process is running, it allocated 8KiB of memory which can be
// accessed through Buffer.poolSize

// If the size of allocUnsafe bufferSize < (Buffer.poolSize/2).floor() [ie. BufferPoolSize >>> 1]

// >>> is bitwise shift operator
// eg1: 1111 >>> 1 = 0111
// eg2: 1010 >>> 1 = 0101

// 30 >>> 1 = 15; 15 >>> 1 = 7; 7 >>> 1 = 3;
// Note that, 30 >>> 2 = 7; 30 >>> 3 = 3; 15 >>> 2 = 3;
// Also, 30 << 2 = 120; 3 << 3 = 30;

// Shift the binary number by 1 == Diving by 2 and taking floor of it = true;

// The contents of the newly created Buffer are unknown and may contain sensitive data.
// It is faster than Buffer.alloc
const unsafeBuffer = Buffer.allocUnsafe(10000)

for (let i = 0; i < unsafeBuffer.length; i++) {
    if (unsafeBuffer[i] !== 0) {
        console.log(`Element at position ${i} has value: ${unsafeBuffer[i].toString(16)}`)
    }
}

/*
These use Buffer.allocUnsafe under the hood
But since they fill it as soon as they are created, no data leaks would happen
And its faster
*/
Buffer.from() // Allocate a new buffer using an array of bytes
Buffer.concat() // Concatenate multiple buffers into one buffer


// It's allocating the buffer in unsafe manner(sensitive data can be accessed)
// It's not using the PoolSize of the buffer
Buffer.allocUnsafeSlow(1024)