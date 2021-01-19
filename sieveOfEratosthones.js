// Sieve of Eratosthenes
// In code, the first step is to create an array as large as the given number, with all its values initialized as true. 
// In other words, the array indexes represent all the possible prime numbers, with all being true at the beginning. 
// Then, we create a for loop that iterates from 2 to the square root of the given number, using array key interpolation 
// to designate the product with every number as false. By definition, products of any integer cannot be prime, while 0 and 1 
// are ignored because divisibility by them does not affect primality. Lastly, we can simply filter out all the falsey values to 
// arrive at all the prime numbers.
// By sacrificing space efficiency to maintain an internal “hash table”, this sieve of Eratosthenes has a time complexity better 
// than quadratic, or O(n * log (log n)).

const primes = number => {
  const numbers = new Array(number + 1);
  numbers.fill(true);
  numbers[0] = numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
  }

  return numbers.reduce(
    (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
    []
  );
};