class BankAccount :
    def __init__(self,name,address,accno,bal):
        self.Name =  name
        self.Address = address
        self.accountNumber = accno
        self.balance = bal
    def createAccount (self):
        self.Name = input('Enter the account holder name:')
        self.accountNumber = input('Enter Account Number:')
        self.Address = input('Enter your address:')
        self.balance = input ('Enter Account balance:')
        
    def displayInformation(self):
        print('----------Your Account Information----------')
        print('Name:',self.Name)
        print('AccountNumber:',self.accountNumber)
        print('Address:',self.Address)
        print('Balance:',self.balance)
        
def main():
    Name = input('Enter the account holder name:')
    accountNumber = input('Enter Account Number:')
    Address = input('Enter your address:')
    balance = input ('Enter Account balance:')
    user1 = BankAccount(Name,Address,accountNumber,balance)
    # user1.createAccount()
    user1.displayInformation()
        
if __name__ == '__main__':
    main()