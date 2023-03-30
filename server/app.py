
from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS

from models import db, Animal, Enclosure, AnimalEnclosure

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False



migrate = Migrate(app, db)

db.init_app(app)
CORS(app, origins='*')

# @app.after_request
# def add_cors_headers(response):
#     response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
#     response.headers['Access-Control-Allow-Methods'] = 'DELETE'
#     return response


@app.route('/')
def home():
    return ''


@app.route('/animals', methods=['GET', 'POST'])
def animals():
    animals = Animal.query.all()

    if request.method == 'GET':
        animal_dicts = [animal.to_dict() for animal in animals]
        return make_response(jsonify(animal_dicts), 200)

    elif request.method == 'POST':
        body = request.get_json()
        new_animal = Animal(
            name = body['name'],
            species = body['species'],
            age = body['age'],
            image = body['image']
        )

        db.session.add(new_animal)
        db.session.commit()
        return make_response(jsonify(new_animal.to_dict()), 201)


@app.route('/animals/<int:id>', methods=['GET', 'DELETE'])
def animal_by_id(id):
    animal = Animal.query.filter(Animal.id == id).first()
    if animal is None:
        return make_response(jsonify({'error': 'Animal not found'}), 404)
    if request.method == 'GET':
        return make_response(jsonify(animal.to_dict()), 200)

    elif request.method == 'DELETE':
        db.session.delete(animal)
        db.session.commit()
        return make_response(jsonify({}), 200)


@app.route('/enclosures', methods=['GET', 'POST'])
def enclousures():
    enclosures = Enclosure.query.all()

    if request.method == 'GET':
        enclousure_dicts = [enclosure.to_dict() for enclosure in enclosures]
        return make_response(jsonify(enclousure_dicts), 200)
    
    elif request.method == 'POST':
        body = request.get_json()
        new_enclosure = Enclosure(
            area = body['area'],
            image = body['image']
        )

        db.session.add(new_enclosure)
        db.session.commit()
        return make_response(jsonify(new_enclosure.to_dict()), 201)


@app.route('/enclosures/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def enclousures_by_id(id):
    enclosure = Enclosure.query.filter(Enclosure.id == id).first()
    if enclosure is None:
        return make_response(jsonify({'error': 'Enclosure not found'}), 404)
    if request.method == 'GET':
        return make_response(jsonify(enclosure.to_dict()), 200)
    elif request.method == 'PATCH':
        body = request.get_json()
        for field, value in body.items():
            setattr(enclosure, field, value)
        db.session.add(enclosure)
        db.session.commit()
        return make_response(jsonify(enclosure.to_dict()), 200)

    elif request.method == 'DELETE':
        db.session.delete(enclosure)
        db.session.commit()
        return make_response(jsonify({}), 200)


@app.route('/animal_enclosures', methods=['POST'])
def animal_enclousure():
    body = request.get_json()
    new_ae = AnimalEnclosure(food=body['food'],
                             animal_id=body['animal_id'],
                             enclousure_id=body['enclousure_id']
                             )
    db.session.add(new_ae)
    db.session.commit()
    animals = Animal.query.filter(Animal.id == body['animal_id']).first()

    return make_response(jsonify(animals.to_dict()), 201)


@app.route('/animal_enclosures/<int>:id', methods=['DELETE'])
def animal_enclosure_by_id():
    ae = AnimalEnclosure.query.filter(AnimalEnclosure.id == id).first()

    if not ae:
        return make_response(jsonify({'error': 'AnimalEnclosure not found'}), 404)

    db.session.delete(ae)
    db.session.commit()
    return make_response(jsonify({}), 200)


if __name__ == '__main__':
    app.run(port=5555, debug=True)