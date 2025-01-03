#Slicing : [start:stop(excluded)]
mixed_value = [101,'Nithish',1500.00,False]

# print('Slicing:',mixed_value[1:2])
# print('Slicing:',mixed_value[1:])
# print('Slicing:',mixed_value[:2])
# print('Slicing:',mixed_value[0::2])


#List is a mutable object
mixed_value = [101,'Nithish',1500.00,False]
mixed_value[3]=False
# print('Modified:',mixed_value)
mixed_value[0:3]='Blaze',101,2000.00
# print('Using Slicing:',mixed_value)
del mixed_value[3];
# print('Final',mixed_value)


#METHODS
fruits = ['apple','mango']
fruits.append('guava')
# print('Append Method:',fruits)
fruits.insert(0,'grapes')
# print('Insert Method:',fruits)
fruits.extend(['kiwi','banana'])
# print('Extend Method:',fruits)
fruits.extend(['melons'])
# print('Extend Method:',fruits)

#pop()

fruits.pop(0)
print('POP Method:',fruits)
fruits.remove('kiwi')
print('Remove Method:',fruits)

city = ['chennai','madurai','trichy','madurai','kanchipuram','thiruvallur']
# city.remove('madurai')
# print('Remove Method :',city)


#index()

index_value=city.index('chennai')
print('Index Method:',index_value)
count_value = city.count('madurai')
print('Count Method:',count_value)


