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
            Enclosure(area="barn", image="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/Stardew-Valley-Barn-With-Fenced-Off-Area.jpg"),
            Enclosure(area="stable", image="https://stardewguide.com/wp-content/uploads/2022/01/Screenshot-14-1024x576.png"),
            Enclosure(area="coop", image="https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1525165173955-FP3OJ2S7JXO4Z3SIGV7A/image-asset.jpeg?format=500w"),
            Enclosure(area="house", image="https://stardewcommunitywiki.com/mediawiki/images/3/30/House_%28tier_1%29.png")
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