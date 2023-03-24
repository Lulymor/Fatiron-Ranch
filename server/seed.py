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
            Animal(name="Phillip", species="goat", age="5"),
            Animal(name="Ed", species="horse", age="12"),
            Animal(name="Mantou", species="dog", age="6"),
            Animal(name="Rocky Rhodes", species="rooster", age="7"),
            Animal(name="Ginger", species="hen", age="3"),
            Animal(name="Stubbs", species="cat", age="10")
        ]

        db.session.add_all(animals)

        print("Seeding enclosures...")
        enclosures = [
            Enclosure(area="barn"),
            Enclosure(area="stable"),
            Enclosure(area="coop"),
            Enclosure(area="house")
        ]

        db.session.add_all(enclosures)

        print("Adding animals to enclosures...")
        foods = ["Grain", "Hay", "Slop", "Grass", "Table food", "Tuna"]
        animals_enclosures = []
        for enclosure in enclosures:
            animal = rc(animals)
            animals_enclosures.append(
                AnimalEnclosure(enclosure=enclosure,
                                animal=animal, food=rc(foods))
            )
        db.session.add_all(animals_enclosures)
        db.session.commit()

        print("Done seeding!")
