# import hashlib
# x="Test String"
# y=hashlib.sha1(x.encode('utf-8')).hexdigest()
# print(y)



# from flask_bcrypt import Bcrypt (app.py)
# from app import bcrypt (models.py)

# #pipenv install flask-bcrypt >> run in CLI

# bcrypt = Bcrypt(app)

# #create extension file that will be imported wherever necessary later on (new folder >>> extensions.py)

# from flask_migrate import Migrate
# from flask_bcrypt import Bcrypt
# from flask_sqlalchemy import SQLAlchemy

# migrate = Migrate()
# bcrypt = Bcrypt()
# db = SQLAlchemy()

# # in app.py
# from extensions import *

# db.imit_app(app)
# migrate.init_app(app, db)
# bcrypt.init_app(app)

# #in models.py
# from extensions import db, bcrypt

# class User:
#     .....
#     _password_hash = db.Column(db.String) #(first underscore not required, makes private variable)

# from sqlalchemy.ext.hybrid import hybrid_property

#     @hybrid_property
#     def password_hash(self):
#         return self._password_hash

#     @password_hash.setter
#     def password_hash(self, password):
#         password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
#         self._password_hash = password_hash.decode('utf-8')

#     def authenticate(self, password):
#         return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))


# # in command line
# db revision ....
# upgrade head
# check database for password column

# #flask shell
# user = User(name='joe')
# user.password_hash = '1234'
# user.password_hash #returns long random string, password can't be read
# db.session.add(user)
# db.session.commit()
# user.authenticate('1234')
#     - True
# user.authenticate('wrongpass')
#     - False


# # start server, then use POST request in React

# # first build signup route in app.py

# @app.route('/signup', methods=['POST'])\
# def signup():
#     data = request.get_json()
#     new_user = User(
#         name=data.get('username'),
#         email=data.get('email')
#     )
#     new_user.password_hash = data.get('password')
#     db.session.add(new_user)
#     db.session.commit()
#     return jsonify(new_user.to_dict(), 201)

# #add 'signup' to excluded endpoints

# excluded_endpoints = ['signup'] # add signup to this

# #restart server