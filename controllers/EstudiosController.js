var bcrypt = require('bcryptjs');
const models = require('../models');
const token = require('../services/token');


module.exports = {

    add: async (req, res, next) => {
        try {
                        
            const reg = await models.Estudios.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Estudios.findOne({
                id: req.query.id
            });
            if (!reg) {
                res.status(404).send({
                    message: 'User Not Found.'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Estudios.findAll();
            res.status(200).json(reg);

        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },

    update: async (req, res, next) => {
        try {
            let pas = req.body.password;
            const reg0 = await models.Estudios.findOne({
                where: {
                    id: req.body.id
                }
            });
            if (pas != reg0.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const reg = await models.Estudios.update(req.body, {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Estudios.findByIdAndDelete({
                id: req.body.id
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Estudios.update({
                estado: 1
            }, {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Estudios.update({
                estado: 0
            }, {
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },

    describe: async (req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Estudios.describe();
            res.status(200).json(reg);

        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    }
}