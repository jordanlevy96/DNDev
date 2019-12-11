#!/usr/bin/python

import sqlite3

from data.sqlite import executeScriptsFromFile, executeScript


conn = sqlite3.connect('data/test.db')

print("Opened database successfully")

# executeScriptsFromFile(conn, 'data/sql/character_def.sql')
executeScriptsFromFile(conn, 'data/sql/test.sql')