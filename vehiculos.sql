CREATE DATABASE autoar;
USE autoar;

CREATE TABLE vehiculos (
	placa varchar(8) PRIMARY KEY NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    año VARCHAR(100), 
    marca VARCHAR(100),
    estado VARCHAR(20),
    imagen VARCHAR(100)
);

INSERT INTO vehiculos (placa, modelo, año, marca, estado, imagen) VALUES ("P-GUA111", "PickUp", "2003", "Nissan", "Perfecto", "PickUp.jpg");
INSERT INTO vehiculos (placa, modelo, año, marca, estado, imagen) VALUES ("P-GUA112", "USV", "2005", "Chevrolet", "Perfecto", "Chvrolet.jpg");

-- UPDATE vehiculos SET modelo="s", año="s", marca="asd", estado="asd" where placa="R-BAV000";

SELECT *FROM vehiculos;
-- DROP TABLE vehiculos;