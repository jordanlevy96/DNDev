from world.place import Place

from data.connect import connect

def main():
    test = Place(['Hello, world!'])
    test.whoami()

    connect()

if __name__ == '__main__':
    main()