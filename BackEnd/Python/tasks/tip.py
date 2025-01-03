bill = int(input('Enter Total Bill Amount:'))
tip = int(input('Enter tip in percentage:'))
split = int(input('Entet number of persons to split bill:'))
total_tip = bill*(tip/100)
total_bill= bill+total_tip
split_amount=total_bill/split
print('-'*50)
print('Bill Amount:',bill)
print('Tip Amount:',total_tip)
print('Total Bill Amount(including tip):',total_bill)
print('Amount paid by a single person:',split_amount)
print('-'*50)

