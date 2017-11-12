from time import time

def gcd(a,b):
    if a==0 or b==0:
        return max(a,b)
    return gcd(b,a%b)

def scm(a,b):
    return a*b/gcd(a,b)

def smallest_multiple(n):
    if n==2:
        return 2
    return scm(smallest_multiple(n-1),n)


t1 = time()

print(smallest_multiple(20))
    

t2 = time()

print("Elapsed",(t2-t1),"sec")