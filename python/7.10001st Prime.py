import math
primes = [1,2]
number = 3.0
prime = True

def isPrime(num):
    if num%2==0: return False
    max = math.sqrt(num)
    for i in range(3,int(math.ceil(max)+1)):
        if num%i==0: return False
    return True

while True:
    if isPrime(number):
        primes.append(int(number))
    number += 2
    if len(primes)>10010:
        break

print(primes[10001])
