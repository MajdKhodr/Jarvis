'use strict';

const Model = use('Model');

class Room extends Model {
	bookings () {
		return this.hasMany('App/Models/Booking');
	}

	reviews () {
		return this.hasMany('App/Models/Review');
	}

	reports () {
		return this.hasMany('App/Models/Report');
	}

	static get table () {
		return 'rooms';
	}

	// Getter to retreive the room name by it's id
	static async getName (room_id) {
		var room = await this.findOrFail(room_id);
		return room.name;
	}
}

module.exports = Room;
