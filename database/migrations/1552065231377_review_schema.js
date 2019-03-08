'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ReviewSchema extends Schema {
	up () {
		this.create('reviews', (table) => {
			table.increments();
			table.integer('user_id').unsigned().references('id').inTable('users');
			table.integer('room_id').unsigned().references('id').inTable('rooms');
			table.integer('rating');
			table.string('review', 2000);
			table.timestamps();
		});
	}

	down () {
		this.drop('reviews');
	}
}

module.exports = ReviewSchema;
