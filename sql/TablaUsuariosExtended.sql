use escuelafutbol;

CREATE TABLE generos(
    id INT NOT NULL AUTO_INCREMENT primary key,
    nombre VARCHAR(20) NOT NULL
);

INSERT INTO generos(nombre) VALUES ("masculino");
INSERT INTO generos(nombre) VALUES ("femenino");


CREATE TABLE tiposdesangre(
    id INT NOT NULL AUTO_INCREMENT primary key,
    nombre VARCHAR(8) NOT NULL
);

INSERT INTO tiposdesangre(nombre) VALUES ("A-");
INSERT INTO tiposdesangre(nombre) VALUES ("A+");
INSERT INTO tiposdesangre(nombre) VALUES ("AB-");
INSERT INTO tiposdesangre(nombre) VALUES ("AB+");
INSERT INTO tiposdesangre(nombre) VALUES ("O-");
INSERT INTO tiposdesangre(nombre) VALUES ("O+");

CREATE TABLE usuariosExtended(
    id_usuario INT NOT NULL primary key,
    fecha_nacimiento VARCHAR(20) NOT NULL,
    id_genero INT NOT NULL,
    id_tiposangre INT,
    tel_contacto LONG,
    id_tipousuario INT,
    FOREIGN KEY (id_tipousuario) REFERENCES tipo_usuarios(id),
    FOREIGN key (id_genero) REFERENCES generos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)