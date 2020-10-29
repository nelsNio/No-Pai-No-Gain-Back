'use strict';
const Sede = require('../services/sede.services');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = function(req, res) {
    Sede.findAll(function(err, sedes) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', sedes);
        res.send(sedes);
    });
};


exports.finById = function(req, res) {
    Sede.finById(req.params.id, function(err, sedes) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', sedes);
        res.send(sedes);
    });
};

exports.findUsers = function(req, res) {
    Sede.findUsers(req.params.id, function(err, sedes) {
        console.log('controller')
        if (err)
            res.status(400).send(err);
        console.log('res', sedes);
        res.send(sedes);
    });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = function(req, res) {

    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Sede.create(req.body, function(err, city) {
            if (err)
                res.status(400).send(err);
            else {

                res.json({ error: false, message: "Sede added successfully!", data: city });
            }
        });
    }
};