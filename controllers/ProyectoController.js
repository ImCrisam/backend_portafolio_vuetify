var bcrypt = require('bcryptjs');
const models = require('../models');
const Chips = require('../models').Chips;


module.exports = {

    add: async (req, res, next) => {
        try {

            const reg = await models.Proyecto.create(req.body);
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
            const reg = await models.Proyecto.findOne({
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
            const reg = await models.Proyecto.findAll();
            var chips
            for (item in reg) {
                
                chips = await models.ChipsChips.findAll({
                    where: {
                        id_proyecto: reg[item].id
                    },
                    include: [{
                        model: Chips,
                        as: 'chips'
                    }],
                });
                var proyectoChips = [];
                Object.keys(chips).forEach(key => proyectoChips.push(chips[key].chips))
                reg[item].chips_code = proyectoChips;
            }
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
            const reg0 = await models.Proyecto.findOne({
                where: {
                    id: req.body.id
                }
            });
            if (pas != reg0.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const reg = await models.Proyecto.update(req.body, {
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
            const reg = await models.Proyecto.findByIdAndDelete({
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
            const reg = await models.Proyecto.update({
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
            const reg = await models.Proyecto.update({
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
            const reg = await models.Proyecto.describe();
            res.status(200).json(reg);

        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    }
}