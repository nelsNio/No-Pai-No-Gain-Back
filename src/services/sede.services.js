'use strict';
var dbConn = require('../../config/db.config');
var Sede = require('../models/sede.models');

exports.findAll = (result) => {
    dbConn.query("Select idsede, name,  namecity from sede  join city where city.idcity=sede.city_idcity", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('sedes : ', res);
            result(null, res);
        }
    });
};

exports.finById = (id, result) => {
    dbConn.query("Select * from sede where idsede = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('sede : ', res);
            result(null, res);
        }
    });
};

exports.findUsers = (id, result) => {
    dbConn.query("Select * from user where sede_idsede = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};


exports.create = function(newUser, result) {
    const new_sede = new Sede(newUser);

    dbConn.query("INSERT INTO sede set ?", new_sede, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};