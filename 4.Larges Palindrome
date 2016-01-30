def is_palindrome(number):
    return (str(number) == str(number)[::-1])

result = [0,0,0]

for i in reversed(range(1,999)):
    for j in reversed(range(1,999)):
        if is_palindrome(j*i):
            if (i*j)>result[0]:
                result[0]=i*j
                result[1]=i
                result[2]=j
            
print(result[0],result[1],result[2])