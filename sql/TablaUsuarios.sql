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
  access_token VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
ALTER TABLE usuarios MODIFY access_token VARCHAR(500);

INSERT INTO tipo_usuarios(nombre) VALUES ("Estudiante");
INSERT INTO tipo_usuarios(nombre) VALUES ("Entrenador");
INSERT INTO tipo_usuarios(nombre) VALUES ("Especialista");
INSERT INTO tipo_usuarios(nombre) VALUES ("Futbolista");
INSERT INTO tipo_usuarios(nombre) VALUES ("Padre de familia");

INSERT INTO usuarios(nombre,email, google_id, access_token) VALUES ("geffry", "geffry.ospina", "1234","1234");

SELECT * FROM tipo_usuarios;
SELECT * FROM usuarios;