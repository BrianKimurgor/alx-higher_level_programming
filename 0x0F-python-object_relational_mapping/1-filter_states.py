"""#!/usr/bin/python3
""lists all states from the database hbtn_0e_0_usa""
import MySQLdb
import sys

if __name__ == "__main__":
    db = MySQLdb.connect(
        host = "localhost",
        user = sys.argv[1],
        passwd = sys.argv[2],
        db = sys.argv[3],
        port = 3306
    )

    cur = db.cursor()
    cur.execute("SELECT * FROM states WHERE name LIKE BINARY 'N%' ORDER BY states.id")
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
"""
#!/usr/bin/python3
"""lists all states from the database hbtn_0e_0_usa"""
from sqlalchemy import create_engine, Column, Integer, String, MetaData, Table
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import sys

Base = declarative_base()

class State(Base):
    __tablename__ = 'states'
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String(256), nullable=False)

if __name__ == "__main__":
    engine = create_engine('mysql://{}:{}@localhost:3306/{}'.
                           format(sys.argv[1], sys.argv[2], sys.argv[3]),
                           pool_pre_ping=True)

    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    states = session.query(State).filter(State.name.like('N%')).order_by(State.id).all()

    for state in states:
        print(state.id, state.name)

    session.close()
