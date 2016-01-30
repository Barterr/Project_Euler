def factor(number, start):
    for i in range(start,number):
        if number%i==0:
            return [int(number/i),i]
    return [number,i]

number=600851475143
last_prime=2
test = True
fac = [number,last_prime]

while test:
    last_prime = fac[1]
    fac = factor(number,last_prime)
    test = not (number == fac[0])
    number = fac[0]
    
    
print("Largest prime factor of 600851475143 is: ",number)