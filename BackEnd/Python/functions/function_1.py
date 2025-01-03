def fullName(firstName,lastName, nationality = 'Indian'):
    return f'Your name is {firstName} {lastName} {nationality}'

def main():
    result = fullName('Nithish','Blaze')
    print('Positional Argument:',result)
    result = fullName(lastName='Blaze', nationality='D.' ,firstName= 'Nithish')
    print('Keyword Argument:',result)
    result = fullName('Nithish','Blaze','Other')
    print('Default Argument Overriding:',result)

if __name__ == '__main__':
    main()