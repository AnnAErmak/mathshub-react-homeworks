function isPrime(num) {
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return `${num} is not prime`;
    }
    return `${num} is a prime number!`;
}

console.log(isPrime(process.argv[2]))
