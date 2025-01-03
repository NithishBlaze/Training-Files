#Without using third variable

num1=input('First Number:');
num2=input('Second Number:');

print('Before Swap: First Number =',num1,'Second Number:',num2)
num1,num2=num2,num1;
print('After Swap: First Number =',num1,'Second Number:',num2)

#Using third Variable
num1=input('First Number:');
num2=input('Second Number:');

print('Before Swap: First Number =',num1,'Second Number:',num2)
temp = num1;
num1= num2;
num2=temp;
print('After Swap: First Number =',num1,'Second Number:',num2)


