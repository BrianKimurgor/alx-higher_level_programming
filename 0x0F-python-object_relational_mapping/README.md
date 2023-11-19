# 0x0F. Python - Object-Relational Mapping

## Project Details

- **Technology Stack:** Python, OOP, SQL, MySQL, ORM (Object-Relational Mapping), SQLAlchemy

## Prerequisites

Before you start, ensure that your MySQL server is in version 8.0. You can refer to the guide on [how to install MySQL 8.0 in Ubuntu 20.04](https://example-link-to-mysql-installation-guide.com).

## Background Context

This project merges two exciting worlds: Databases and Python!

### Part 1: MySQLdb
In the initial phase, you'll employ the MySQLdb module to connect to a MySQL database and execute SQL queries. A sample code snippet without ORM is provided for reference.

### Part 2: SQLAlchemy
In the subsequent part, you'll embrace the power of SQLAlchemy, an Object-Relational Mapper (ORM). The significant shift is the elimination of direct SQL queries. With SQLAlchemy, your focus will shift from "How is this object stored?" to "What can I do with my objects?" - a paradigm shift towards more Pythonic code.

#### Without ORM:
```python
# Sample code without ORM
conn = MySQLdb.connect(host="localhost", port=3306, user="root", passwd="root", db="my_db", charset="utf8")
cur = conn.cursor()
cur.execute("SELECT * FROM states ORDER BY id ASC")
query_rows = cur.fetchall()
for row in query_rows:
    print(row)
cur.close()
conn.close()
```

#### With ORM:
```python
# Sample code with SQLAlchemy ORM
engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format("root", "root", "my_db"), pool_pre_ping=True)
Base.metadata.create_all(engine)

session = Session(engine)
for state in session.query(State).order_by(State.id).all():
    print("{}: {}".format(state.id, state.name))
session.close()
```

### Difficulty: The Syntax!
The main challenge with ORM is the syntax. While they share a similar syntax type, nuances exist. It's recommended to read tutorials, start experimenting, and avoid overwhelming yourself with the entire documentation at the beginning.

## Resources

**Read or watch:**
- [Object-relational mappers](https://www.fullstackpython.com/sqlalchemy.html)
- [mysqlclient/MySQLdb documentation (please don’t pay attention to \_mysql)](https://mysqlclient.readthedocs.io/user_guide.html#introduction)
- [MySQLdb tutorial](https://www.mikusa.com/python-mysql-docs/introduction.html)
- [SQLAlchemy tutorial](https://docs.sqlalchemy.org/en/13/orm/tutorial.html)
- [SQLAlchemy](https://docs.sqlalchemy.org/en/13/)
- [Introduction to SQLAlchemy](https://github.com/PyMySQL/mysqlclient)
- [Flask SQLAlchemy](https://www.youtube.com/watch?v=woKYyhLCcnU)
- [10 common stumbling blocks for SQLAlchemy newbies](https://www.youtube.com/watch?v=SYG1jQYIxfQ&list=PLXmMXHVSvS-BlLA5beNJojJLlpE0PJgCW)
- [Python SQLAlchemy Cheatsheet](https://example-link-to-sqlalchemy-cheatsheet.com)
- [SQLAlchemy ORM Tutorial for Python Developers](https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers/) (Warning: This tutorial is with PostgreSQL, but the concept of SQLAlchemy is the same with MySQL)
- [SQLAlchemy Tutorial](https://overiq.com/sqlalchemy-101/)
- [Python Virtual Environments: A primer](https://realpython.com/python-virtual-environments-a-primer/)
- [SQLAlchemy](https://www.pythonsheets.com/notes/python-sqlalchemy.html)

## Learning Objectives

By the end of this project, you should be able to explain, without Google's help:

1. Why Python programming is awesome
2. How to connect to a MySQL database from a Python script
3. How to SELECT rows in a MySQL table from a Python script
4. How to INSERT rows in a MySQL table from a Python script
5. What ORM means
6. How to map a Python Class to a MySQL table
7. How to create a Python Virtual Environment

## Copyright - Plagiarism

- You must find solutions to the tasks independently to achieve the learning objectives.
- Avoid copying and pasting; it's essential to understand and implement solutions.
- Publishing project content is strictly prohibited.
- Any form of plagiarism will result in removal from the program.

## Requirements

- **Allowed editors:** vi, vim, emacs
- **Interpreted/compiled on:** Ubuntu 20.04 LTS using Python 3 (version 3.8.5)
- **Execution with:** MySQLdb version 2.0.x and SQLAlchemy version 1.4.x
- **End all files with a new line**
- **First line of all files:** `#!/usr/bin/python3`
- **Mandatory README.md file at the project root**
- **Code should use pycodestyle (version 2.8.*)**
- **All files must be executable**
- **Length of your files will be tested using wc**
- **All modules, classes, and functions should have documentation**
- **Documentation is a real sentence explaining the purpose of the module, class, or method**

## More Info

### Install and Activate venv

To create a Python Virtual Environment:

```bash
$ sudo apt-get install python3.8-venv
$ python3 -m venv venv
$ source venv/bin/activate
```

### Install MySQLdb module version 2.0.x

```bash
$ sudo apt-get install python3-dev
$ sudo apt-get install libmysqlclient-dev
$ sudo apt-get install zlib1g-dev
$ sudo pip3 install mysqlclient
$ python3
>>> import MySQLdb
>>> MySQLdb.version_info
(2, 0, 3, 'final', 0)
```

### Install SQLAlchemy module version 1.4.x

```bash
$ sudo pip3 install SQLAlchemy
$ python3
>>> import sqlalchemy
>>> sqlalchemy.__version__
'1.4.22'
```

Note: You may encounter a warning message during installation, which can be ignored.

```bash
/usr/local/lib/python3.4/dist-packages/sqlalchemy/engine/default.py:552: Warning: (1681, "'@@SESSION.GTID_EXECUTED' is deprecated and will be removed in a future release.")
cursor.execute(statement, parameters)
```

You can ignore this warning message.

**Best of luck with your Object-Relational Mapping adventure!**
