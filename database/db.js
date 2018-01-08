"use strict";

import mysql from 'mysql';

let db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'GAKtahu',
    database: 'tutb'
});

module.exports = db;
