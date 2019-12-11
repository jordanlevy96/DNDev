import sqlite3
from sqlite3 import OperationalError

def executeScript(c, command):
    try:
        c.execute(command)
    except OperationalError as e:
        print(e)

def executeScriptsFromFile(c, filename):
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
        executeScript(c, command)