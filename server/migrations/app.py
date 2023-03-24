#!/usr/bin/env python3

from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate

from models import db, Animals, AnimalEnclousure, Enclousures

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def home():
    return ''


@app.route('/animals', methods=['GET'])
def animals():
    animals = Animals.query.all()
    animal_dicts = [animal.to_dict() for animal in animals]
    return make_response(jsonify(animal_dicts), 200)


@app.route('/animals/<int:id>', methods=['GET'])
def animal_by_id(id):
    animal = Animals.query.filter(Animals.id == id).first()
    if animal is None:
        return make_response(jsonify({'error': 'Animal not found'}), 404)
    else:
        return make_response(jsonify(animal.to_dict()), 200)


@app.route('/enclousures', methods=['GET'])
def enclousures():
    enclousures = Enclousures.query.all()
    enclousure_dicts = [enclousure.to_dict() for enclousure in enclousures]
    return make_response(jsonify(enclousure_dicts), 200)


@app.route('/enclousures/<int:id>', methods=['GET', 'PATCH'])
def enclousures_by_id(id):
    enclousures = Enclousures.query.filter(Enclousures.id == id).first()
    # if request.method == 'GET':
    if enclousures == None:
        return make_response(jsonify({'error': 'Enclousure not found'}), 404)
    else:
        return make_response(jsonify(enclousures.to_dict()), 200)
    # elif request.method == 'PATCH':
    #     if enclousures == None:
    #         return make_response(jsonify({'error': 'Enclousure not found'}), 404)
    #     else:
    #         body = request.get_json()
    #         for field, value in body.items():
    #             setattr(, field, value)
    # db.session.add(power)
    # db.session.commit()
    # return make_response(jsonify(power.to_dict()), 200)


@app.route('/animal_enclousure', methods=['POST'])
def animal_enclousure():
    body = request.get_json()
    new_ae = AnimalEnclousure(whatever=body['wathever'],
                              animal_id=body['animal_id'],
                              enclousure_id=body['enclousure_id']
                              )
    db.session.add(new_ae)
    db.session.commit()
    animals = Animals.query.filter(Animals.id == body['animal_id']).first()

    return make_response(jsonify(animals.to_dict()), 201)


if __name__ == '__main__':
    app.run(port=5555, debug=True)
