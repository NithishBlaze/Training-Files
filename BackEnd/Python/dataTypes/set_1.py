mixed_type = {True, 12, 34}
mixed_type.add('Apple')
print('Add method:',mixed_type)

# discard = mixed_type.discard('Apple')
# print('Discard method:',mixed_type)

# remove = mixed_type.remove('Apple')
# print('Remove method:',mixed_type)

pop = mixed_type.pop()
print('Pop method:',mixed_type)
pop = mixed_type.pop()
print('Pop method:',mixed_type)

company = {'Infosys', 'Changepond', 'TCS', 'Hexaware'}
company_2 = {'NeoSoft', 'TCS', 'Changepond', 'Aspire'}

intersect_ = company.intersection(company_2)
print('Intersection:',intersect_)
intersect_ = company & company_2
print('Intersection using operator:',intersect_)

union_ = company.union(company_2)
print('Union Method:',union_)
union_ = company | company_2
print('Union Method using operator:',union_)

company.update(company_2)
print('Update Method:',company)

diff = company.difference(company_2)
print('Difference Method:',diff)
diff = company - company_2
print('Difference Method using operator:',diff)


num = 69
print (format(num, '_'))
