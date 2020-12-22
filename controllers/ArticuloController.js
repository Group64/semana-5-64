const models = require('../models');
const categoria = require('../models/categoria');

exports.list = async(req, res, next) =>{
    try{
        const register = await models.Articulo.findAll(
            {include:[{model: models.Categoria, as: 'categoria', attributes: ["id", "nombre", "descripcion"]},]}
        );
        if(register){
            res.status(200).json(register);
            //res.status(200).send({register});
        }else{
            res.status(404).send({
                message: 'No hay Articulos registrados'
            })
        } 
    } catch(error){
        res.status(500).send({
            message: 'Error!!'
        })
        next(error);
    }
};

exports.add = async(req, res, next) =>{
    try{
        const register = await models.Articulo.create(req.body);
        res.status(200).json(register)
    } catch(error){
        res.status(500).send({
            message: 'Error'
        })
        next(error);
    }
};

exports.update = async(req, res, next) =>{
    try{
        const register = await models.Articulo.update({estado: req.body.estado, codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, categoriaId: req.body.categoriaId, color: req.body.color},
                {
                    where: {
                        id: req.body.id
                    },
                });
                res.status(200).json(register);
        }catch(error) {
            res.status(500).send({
                message: 'Error.'
            });
            next(error);
        }
    };   

exports.activate = async(req, res, next) =>{
    try{
        const register = await models.Articulo.update({estado: 1},
                {
                    where: {
                        id: req.body.id
                    },
                });
                res.status(200).json(register);
        }catch(error) {
            res.status(500).send({
                message: 'Error.'
            });
            next(error);
        }
    };       

exports.deactivate = async(req, res, next) =>{
    try{
        const register = await models.Articulo.update({estado: 0},
                {
                    where: {
                        id: req.body.id
                    },
                });
                res.status(200).json(register);
        }catch(error) {
            res.status(500).send({
                message: 'Error.'
            });
            next(error);
        }
    };    