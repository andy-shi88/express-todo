import db from '../database/db';

export default class Model {
    /**
     * Base model class providing base operation with the model
     * @param {string} table 
     */
    constructor(table) {
        this.table = table
    }

    findAll(callback) {
        return db.query("SELECT * FROM " + this.table, callback);
    }

    show(id, callback) {
        return db.query("SELECT * FROM " + this.table + " WHERE id = ?", [id], callback);
    }

    create(task, callback) {
        return db.query("INSERT INTO " + this.table + " VALUES(?, ?, ?)",[task.id, task.title, task.status], callback);
    }

    delete(id, callback) {
        return db.query("DELETE FROM  " + this.table + " WHERE id=?", [id], callback);
    }

    update(id, task, callback){
        return db.query("UPDATE " + this.table + " SET title=?, status=? WHERE id=?", [task.title, task.status, id], callback);
    } 
}