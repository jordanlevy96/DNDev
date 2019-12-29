#!/usr/bin/python

import sqlite3

from data.sqlite import SQLController

def connect():
    conn = SQLController('data/test.db')

    print("Opened database successfully")

    # executeScriptsFromFile(conn, 'data/sql/character_def.sql')
    conn.executeScriptsFromFile('data/sql/test.sql')

    conn.version()