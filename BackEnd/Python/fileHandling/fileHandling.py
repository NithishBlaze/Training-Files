import os

def createFile(fileName):
    if(os.path.exists(fileName)):
        print('File already exists !')
    else:
        file = open(fileName,'w')
        print(file)
        
def main():
    print('Enter the file you want to create :')
    fileName = input()
    createFile(fileName)
    
if __name__ == '__main__':
    main()