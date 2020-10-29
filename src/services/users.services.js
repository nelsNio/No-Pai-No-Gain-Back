'use strict';
var dbConn = require('./../../config/db.config');
var User = require('../models/users.models');

exports.findAll = (result) => {
    dbConn.query("Select * from user", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err);
        } else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};

exports.finById = (id, result) => {
    dbConn.query("Select * from user where iduser = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err);
        } else {
            console.log('User encontrado :', res[0].email);
            console.log('user : ', res);
            result(null, res);
        }
    });
};


exports.create = function(newUser, result) {
    const new_user = new User(newUser);

    if (new_user.sede_idsede) {
        dbConn.query("Select count(sede_idsede) users from user where sede_idsede = ? ", new_user.sede_idsede, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err);
            } else {

                console.log('users in sede : ', res[0].users);
                if (res[0].users < 2) {
                    dbConn.query("INSERT INTO user set ?", new_user, function(err, res) {
                        if (err) {
                            console.log("error: ", err);
                            result(err);
                        } else {
                            console.log(res.insertId);
                            result(null, res.insertId);
                        }
                    });

                } else {
                    console.log('Maxmimo');
                    result({ ok: false, err: 'Maximo de usarios por sede alcanzado' }, null);
                }
            }
        });
    } else {
        dbConn.query("INSERT INTO user set ?", new_user, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }

    /****/
};