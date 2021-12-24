var express = require('express');
var router = express.Router();
const vehiculosController = require("../controllers/vehiculosController");
var multer = require('multer');
var fecha = Date.now();
var rutaAlmacen = multer.diskStorage( {
    destination:function (request, file, callback) {
        callback(null,'./public/images/');
         },
         filename:function (request, file, callback) {
             console.log(file);
             callback(null,fecha+"_"+file.originalname);
         }
    }
);
var cargar = multer({ storage:rutaAlmacen });

/* GET home page. */
router.get('/',vehiculosController.index);
router.get('/crear',vehiculosController.crear);
router.post('/',cargar.single("archivo"),vehiculosController.guardar);
router.post('/eliminar/:id',vehiculosController.eliminar);
router.get('/editar/:id',vehiculosController.editar);
router.post('/actualizar',cargar.single("archivo"),vehiculosController.actualizar);

module.exports = router;
