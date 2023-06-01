use escuelafutbol;

CREATE TABLE generos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL
);

CREATE TABLE tiposdesangre(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(8) NOT NULL
);

CREATE TABLE usuariosExtended(
    id_usuario INT NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_genero INT NOT NULL,
    id_tiposangre INT,
    tel_contacto LONG,
    FOREIGN key (id_genero) REFERENCES generos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)