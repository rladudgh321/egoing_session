const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = FileSync('db.json');
const db = low(adapter);

db.defulats({user:[]}).write();

module.exports=db;