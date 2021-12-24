const req = require('express/lib/request');
var conexion=require('../config/conexion');
var vehiculo=require('../model/vehiculo');
var borrar=require('fs');

module.exports={
    index:function(req, res) {
            vehiculo.obtener(conexion,function (err, datos) {
                console.log(datos);
                res.render('vehiculos/index', { title: 'Aplicacion', vehiculos:datos });
            });
    },
    crear:function (req,res) {
        res.render('vehiculos/crear');
    },
    guardar:function (req,res) {
        console.log(req.body);
        console.log(req.file.filename);
        vehiculo.insertar(conexion,req.body,req.file,function (err) {
             res.redirect('/vehiculos');
        });
    },
    eliminar:function (req,res) {
        console.log("Recepcion de datos");
        console.log(req.params.id);
        vehiculo.retornarDatosId(conexion,req.params.id,function (err,registros) {
            var nombreImagen="public/images/"+(registros[0].imagen);

            if (borrar.existsSync(nombreImagen)) {
            borrar.unlinkSync(nombreImagen);
        } 
        vehiculo.borrar(conexion,req.params.id,function (err) {
            res.redirect('/vehiculos');
        });
        });
    },
    editar:function (req,res) {
        vehiculo.retornarDatosId(conexion,req.params.id,function (err,registros) {
            console.log(registros[0]);
            res.render('vehiculos/editar',{vehiculo:registros[0]});
        });
    },
    actualizar:function (req,res) {
        console.log(req.body.nombre);
        
        if (req.file) {
            if (req.file.filename) {
                vehiculo.retornarDatosId(conexion,req.body.id,function (err,registros) {
                    var nombreImagen="public/images/"+(registros[0].imagen);
        
                    if (borrar.existsSync(nombreImagen)) {
                    borrar.unlinkSync(nombreImagen);
                } 
                vehiculo.actualizarArchivo(conexion,req.body,req.file,function (err) {});
                });   
            }
        }
        if (req.body.nombre) {
            vehiculo.actualizar(conexion,req.body,function (err) {});
            }
        res.redirect('/vehiculos');
    }
}
