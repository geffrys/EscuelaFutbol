drop table usuarios;
drop table tipoUsuario;

CREATE TABLE tipo_usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  google_id VARCHAR(100) NOT NULL,
  access_token VARCHAR(200) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  id_tipousuario INT NOT NULL,
  FOREIGN KEY (id_tipousuario) REFERENCES tipo_usuarios (id)
);

INSERT INTO tipo_usuarios(nombre) VALUES ("Estudiante");
INSERT INTO tipo_usuarios(nombre) VALUES ("Entrenador");
INSERT INTO tipo_usuarios(nombre) VALUES ("Especialista");
INSERT INTO tipo_usuarios(nombre) VALUES ("Futbolista");
INSERT INTO tipo_usuarios(nombre) VALUES ("Padre de familia");

SELECT * FROM tipo_usuarios;

INSERT INTO usuarios(nombre,email, google_id, access_token, id_tipousuario) VALUES ("geffry", "geffry.ospina", "1234","1234",  1);