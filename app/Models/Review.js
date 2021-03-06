'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Review extends Model {
	user () {
		return this.belongsTo('App/Models/User');
	}

	room () {
		return this.belongsTo('App/Models/Room');
	}
}

module.exports = Review;
