from flask import Flask
from flask_cors import CORS
import flask_restful as restful
from flask_restful import Api, marshal_with, Resource, fields, reqparse, abort
from flask_sqlalchemy import SQLAlchemy
import pymysql
pymysql.install_as_MySQLdb()
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:database_password@localhost/Hotel'
app.config['SECRET_KEY'] = 'secret'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)
db = SQLAlchemy(app)
class HotelModel(db.Model):
    id = db.Column(db.Integer, primary_key=True, auto_increment=True)
    Number = db.Column(db.Integer, nullable=False)
    Price = db.Column(db.Integer, nullable=False)
    Name = db.Column(db.String(45), nullable=False)

    def __repr__(self):
        return f"id: {self.id}, Name: {self.Name}, Price: {self.Price},  Number: {self.Number}"


Hotel_resource = {
    'id': fields.Integer,
    'Number': fields.Integer,
    'Price': fields.Integer,
    'Name': fields.String(45)
}

post_args = reqparse.RequestParser()
post_args.add_argument("Name", type=str, required=True)
post_args.add_argument("Price", type=int, required=True)
post_args.add_argument("Number", type=int, required=True)

patch_args = reqparse.RequestParser()
patch_args.add_argument("id", type=int, required=True)
patch_args.add_argument("Name", type=str, required=False)
patch_args.add_argument("Price", type=int, required=False)
patch_args.add_argument("Number", type=int, required=False)

delete_args = reqparse.RequestParser()
delete_args.add_argument("id", type=int, required=True)


class HotelResource(Resource):
    @marshal_with(Hotel_resource)
    def get(self):
        result = HotelModel.query.all()
        return result

    def post(self):
        args = post_args.parse_args()
        db.session.add(HotelModel( Name=args['Name'],
                                    Price=args['Price'], Number=args['Number']))
        db.session.commit()
        return 200

    @marshal_with(Hotel_resource)
    def patch(self):
        args = patch_args.parse_args()
        print(args)
        Hotel = HotelModel.query.filter_by(id=args['id']).first()
        if not Hotel:
            abort(404, message="Hotel with such ID was not found...")
        if args['Price'] is not None:
            Hotel.Price = args['Price']
        if args['Name'] is not None:
            Hotel.Name = args['Name']
        if args['Number'] is not None:
            Hotel.Number = args['Number']
        db.session.commit()
        print(Hotel)
        return Hotel

    def delete(self):
        args = delete_args.parse_args()
        Hotel = HotelModel.query.filter_by(id=args['id']).first()
        if not Hotel:
            abort(404, message="Hotel with such ID was not found...")
        HotelModel.query.filter_by(id=args['id']).delete()
        db.session.commit()
        return '', 204


api.add_resource(HotelResource, '/Hotel')


if __name__ == "__main__":
    app.run()