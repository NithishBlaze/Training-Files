def main():
    listValue = ['blaze',17]
    result = tuple(filter(lambda value: type(value) == int ,listValue))
    print(result)
    
if __name__ == '__main__':
    main()