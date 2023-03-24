from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)


class Animal(db.Model):
    __tablename__ = 'animals'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    species = db.Column(db.String)
    age = db.Column(db.String)

    animal_enclosures = db.relationship('AnimalEnclosure', backref='animal')
    enclosures = association_proxy('animal_enclosures', 'enclosure',
                                   creator=lambda enc: AnimalEnclosure(enclosure=enc))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'species': self.species,
            'age': self.age,
            'enclosures': [e.to_dict() for e in self.enclosures]
        }

    def __repr__(self):
        return f'<Animal {self.id}>'


class Enclosure(db.Model):
    __tablename__ = 'enclosures'

    id = db.Column(db.Integer, primary_key=True)
    area = db.Column(db.String)

    animals_enclosures = db.relationship(
        'AnimalEnclosure', backref='enclosure')
    animals = association_proxy('animal_enclosures', 'animal',
                                creator=lambda an: AnimalEnclosure(animal=an))

    def to_dict(self):
        return {
            'id': self.id,
            'area': self.area,
        }

    def __repr__(self):
        return f'<Enclosure {self.id}>'


class AnimalEnclosure(db.Model):
    __tablename__ = 'animal_enclosures'

    id = db.Column(db.Integer, primary_key=True)
    food = db.Column(db.String)

    animal_id = db.Column(db.Integer, db.ForeignKey('animals.id'))
    enclosure_id = db.Column(db.Integer, db.ForeignKey('enclosures.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'food': self.food,
            'animal_id': self.animal_id,
            'enclosure_id': self.enclosure_id
        }

    def __repr__(self):
        return f'<AnimalEnclosure {self.id}>'
