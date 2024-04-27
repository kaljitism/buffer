// Write this data into memory
// 01001000 01101001 00100001

const {Buffer} = require("buffer")

main()

function main() {
   const int8Data = [72, 105, 33];
   const encoding = 'utf-8'
   const message = memoryManager(int8Data, encoding)
   console.log(message);
}

function memoryManager(int8Data, encoding) {
    const buffer = Buffer.alloc(int8Data.length)
    const uint8Array = new Uint8Array(int8Data)
    uint8Array.map((value, index) => buffer.writeInt8(value, index))
    return buffer.toString(encoding)
}