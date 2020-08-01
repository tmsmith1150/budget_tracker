'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]); //heroku enviroment 
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config); //local database
}

fs //reading an entire folder.
  .readdirSync(__dirname) //read directory (all the files in this folder and in the filter, it's only getting the javascript file.. checking the extension if it adds an extension and the extension is js, then all the javascript import them and add them to the db)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) { //iterrating through all of the javascript files in this folder (except for index) and then adding them to the db object
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// table is associated with another table . letting sequelize know which tables are related.


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
