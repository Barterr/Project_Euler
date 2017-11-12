result = 0
number = [0,1]
while number[1] < 4*1000*1000:
        temp = number[1]
        number[1] = number[0] + number[1]
        number[0] = temp
        if number[1]%2==0:
                result+=number[1]
print(result)