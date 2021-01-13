const models = require('../models');
const Chips = require('../models').Chips;

module.exports = {
    query: async (req, res, next) => {
        try {
            const reg = await models.Perfil.findOne({
                id: req.query.id
            });
            

            const languagesChips = await models.LanguagesChips.findAll({
                include: [{
                    model: Chips,
                    as: 'chips',
                }],
            });

            var languageslist = [];
            Object.keys(languagesChips).forEach(key => languageslist.push(languagesChips[key].chips))


            const toolsChips = await models.ToolsChips.findAll({
                include: [{
                    model: Chips,
                    as: 'chips'
                }],
            });

            var toolslist = [];
            Object.keys(toolsChips).forEach(key => toolslist.push(toolsChips[key].chips))

            reg.languages_code = languageslist;
            reg.tools_code = toolslist;
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