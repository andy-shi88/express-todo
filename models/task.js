import db from '../database/db';

class Task {
    
    findAll(callback) {
        return db.query("SELECT * FROM task", callback);
    }

    show(id, callback) {
        return db.query("SELECT * FROM task WHERE id = ?", [id], callback);
    }

    create(task, callback) {
        return db.query("INSERT INTO task VALUES(?, ?, ?)",[task.id, task.title, task.status], callback);
    }

    delete(id, callback) {
        return db.query("DELETE FROM task WHERE id=?", [id], callback);
    }

    update(id, task, callback){
        return db.query("UPDATE task SET title=?, status=? WHERE id=?", [task.title, task.status, id], callback);
    } 
};

module.exports = Task;
