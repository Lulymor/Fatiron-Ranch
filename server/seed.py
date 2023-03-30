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
            Animal(name="Phillip", species="goat", age="5", image='https://ih1.redbubble.net/image.1463467902.4612/st,small,507x507-pad,600x600,f8f8f8.jpg'),
            Animal(name="Ed", species="horse", age="12", image='https://ih1.redbubble.net/image.1467110377.3128/st,small,507x507-pad,600x600,f8f8f8.jpg'),
            Animal(name="Mantou", species="dog", age="6", image='https://ih1.redbubble.net/image.1085113468.8236/st,small,507x507-pad,600x600,f8f8f8.jpg'),
            Animal(name="Rocky Rhodes", species="rooster", age="7", image='https://ih1.redbubble.net/image.1951125948.0423/st,small,845x845-pad,1000x1000,f8f8f8.jpg'),
            Animal(name="Ginger", species="hen", age="3", image='https://ih1.redbubble.net/image.1153761609.3894/st,small,507x507-pad,600x600,f8f8f8.jpg'),
            Animal(name="Stubbs", species="cat", age="10", image='https://ih1.redbubble.net/image.1173752943.7210/st,small,507x507-pad,600x600,f8f8f8.jpg')
        ]

        db.session.add_all(animals)

        print("Seeding enclosures...")
        enclosures = [
            Enclosure(area="barn", image='https://ih1.redbubble.net/image.746325132.4879/st,small,507x507-pad,600x600,f8f8f8.jpg'),
            Enclosure(area="stable", image="https://stardewguide.com/wp-content/uploads/2022/01/Screenshot-14-1024x576.png"),
            Enclosure(area="coop", image='https://ih1.redbubble.net/image.463865154.4785/st,small,507x507-pad,600x600,f8f8f8.u3.jpg'),
            Enclosure(area="house", image='https://ih1.redbubble.net/image.2356108967.2600/st,small,507x507-pad,600x600,f8f8f8.jpg')
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