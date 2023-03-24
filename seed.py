from random import choice as rc

from app import app
from models import db, Animal, Enclosure, AnimalEnclosure

if __name__ == '__main__':
    with app.app_context():
        print("Clearing db...")
        Animal.query.delete()
        Enclosure.query.delete()
        AnimalEnclosure.query.delete()

        print("Seeding animals...")
        animals = [
            Animal(name="Phillip", type="goat", age="5"),
            Animal(name="Ed", type="horse", age="12"),
            Animal(name="Mantou", type="dog", age="6"),
            Animal(name="Rocky Rhodes", type="rooster", age="7"),
            Animal(name="Ginger", type="hen", age="3"),
            Animal(name="Stubbs", type="cat", age="10")
        ]

        db.session.add_all(animals)

        print("Seeding enclosures...")
        enclosures = [
            Enclosure(type="barn"),
            Enclosure(type="stable"),
            Enclosure(type="coop"),
            Enclosure(type="house")
        ]

        db.session.add_all(enclosures)

        print("Adding animals to enclosures...")
        foods = ["Grain", "Hay", "Slop", "Grass", "Table food", "Tuna"]
        animals_enclosures = []
        for enclosure in enclosures:
            animal = rc(animals)
            animal_enclosures.append(
                AnimalEnclosure(enclosure=enclosure, animal=animal, food=rc(foods))
            )
        db.session.add_all(animal_enclosures)
        db.session.commit()

        print("Done seeding!")