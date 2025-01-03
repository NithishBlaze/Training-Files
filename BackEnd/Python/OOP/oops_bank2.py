class BankAccount :
    bankName = 'ICICI Bank' #class variable
    roi = 5  
    def __init__(self):
        self.Name =  '' #instance variable
        self.Address = ''
        self.accountNumber = 0
        self.balance = 0
    def createAccount (self): #instance method
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
        
    @classmethod
    def displayBankInfo(cls):
        print('Bank Name:',cls.bankName)
        print('ROI:',cls.roi)
        
    @staticmethod
    def displayKIYCInfo():
        print('Submit following documents !')
        print('1. Aadhar Card')
        print('2.Pan card')
def main():
    # print('Bank Name:',BankAccount.bankName)
    BankAccount.displayBankInfo()
    BankAccount.displayKIYCInfo()
    user1 = BankAccount()
    user1.createAccount()
    user1.displayInformation()
        
if __name__ == '__main__':
    main()