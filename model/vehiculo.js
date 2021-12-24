module.exports={
    obtener:function (conexion,funcion){
        conexion.query("SELECT *FROM vehiculos", funcion);
    },
    insertar:function (conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO vehiculos (placa, modelo, año, marca, estado, imagen) VALUES (?,?,?,?,?,?)",[datos.placa,datos.modelo,datos.año,datos.marca,datos.estado, archivos.filename], funcion);
    },
    retornarDatosId:function (conexion,id,funcion) {
        conexion.query("SELECT *FROM vehiculos WHERE placa=?",[id], funcion);
    },
    borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM vehiculos WHERE placa=?",[id],funcion);
    },
    actualizar:function (conexion,datos,funcion){
        conexion.query("UPDATE vehiculos SET modelo=?, año=?, marca=?, estado=? WHERE placa=?",[datos.modelo,datos.año,datos.marca,datos.estado,datos.id,], funcion);
    },  
    actualizarArchivo:function (conexion,datos,archivo,funcion){
        conexion.query("UPDATE vehiculos SET imagen=? WHERE placa=?",[archivo.filename,datos.id], funcion);
    }
}