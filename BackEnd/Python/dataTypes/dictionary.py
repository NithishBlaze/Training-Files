#create a dictionary
# watchDetails = {
#     'Titan':4000,
#     'Sonata':5000,
#     'Fastrack':6500,
#     'Casio':9000,
#     'Fastrack':5000
# }
# print('Dictionary:',watchDetails)
# print('Length of Dictionary:',len(watchDetails))
# print('Access Values:',watchDetails['Casio'])

# #mutable

# watchDetails['Sonata'] = 5999
# print('Modified:',watchDetails)

# print(type(watchDetails))

# get = watchDetails.keys()
# print(get)

employeeDetails = {
    'Name' : 'Nithish',
    'jobId' : '4589',
    'isActive' : True,
    'package' : 2.9
}

print('Get Method:', employeeDetails.get('isActive') )
print('Keys Method:', employeeDetails.keys() )
print('Values Method:', employeeDetails.values() )
print('Items Method:', employeeDetails.items() )
popItem = employeeDetails.popitem()
print('popItem:',popItem)
print('Items Method:', employeeDetails.items() )
print(employeeDetails.pop('Name'))
print('Items Method:', employeeDetails.items() )
employeeDetails.update({4.5:'package'})
print('Update Method:',employeeDetails)