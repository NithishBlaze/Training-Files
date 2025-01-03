import os
def readFile(readName,copyName):
    if(os.path.exists(readName)):
        reading = open(readName,'r')
        data = reading.read()
        createFile(data,copyName)
    else:
        print('File Doesn\'t Exist ')
        
def createFile(data, copyName):
    file = open(copyName,'w')
    file.write(data)
    print('Content Copied Successfully !')
    
    
    
def main():
    readName = input('Enter the file name to read:')
    copyName = input('Enter file you want to copy the content :')
    readFile(readName,copyName)
    
if __name__ == '__main__':
    main()