
const models = require('../models');

module.exports = {
    query: async (req, res, next) => {
        try {
            const reg = await models.Perfil.findOne({
                id: req.query.id
            });
            const languagesChips = await models.LanguagesChips.findAll({
                include: [{
                    model: Chips,
                    as: 'LanguagesChips'
                }],
            });
            const toolsChips = await models.ToolsChips.findAll({
                include: [{
                    model: Chips,
                    as: 'ToolsChips'
                }],
            });
            reg.languages_code = languagesChips;
            reg.tools_code = toolsChips;
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
        console.log('entrada');
        try {
            let valor = req.query.valor;
            const reg = await models.Perfil.findAll();
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
            const reg = await models.Perfil.update({
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
            const reg = await models.Perfil.update({
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
    }
}