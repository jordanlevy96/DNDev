import sqlite3
from sqlite3 import OperationalError

class SQLController:

    def __init__(self, schema):
        self.conn = sqlite3.connect(schema)
        self.cursor = self.conn.cursor()

    def __del__(self):
        # close the connection when garbage collecting
        self.conn.close()

    def executeScript(self, command):
        try:
            self.conn.execute(command)
            self.conn.commit()
        except OperationalError as e:
            print(e)

    def executeScriptsFromFile(self, filename):
        # Open and read the file as a single buffer
        fd = open(filename, 'r')
        sqlFile = fd.read()
        fd.close()

        # all SQL commands (split on ';')
        sqlCommands = sqlFile.split(';')

        # Execute every command from the input file
        for command in sqlCommands:
            # This will skip and report errors
            # For example, if the tables do not yet exist, this will skip over
            # the DROP TABLE commands
            self.executeScript(command)

    def version(self):
        self.cursor.execute('SELECT SQLITE_VERSION()')
        data = self.cursor.fetchone()[0]

        print('SQLITE_VERSION:', data)
