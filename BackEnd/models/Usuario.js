class Usuario{
    constructor(id = null, nombre, email, google_id, access_token, id_tipousuario){
        this.id = id
        this.nombre = nombre
        this.email = email
        this.google_id = google_id
        this.access_token = access_token
        this.id_tipousuario = id_tipousuario
    }
    

    // get nombre(){return this.nombre}
    // set nombre(nombre){this.nombre = nombre}

    // get email(){return this.email}
    // set email(email){this.email= email}

    // get google_id(){return this.google_id}
    // set google_id(google_id){this.google_id = google_id}

    // get access_token(){return this.access_token}
    // set access_token(access_token){this.access_token = access_token}

    // get created_at(){return this.created_at}
    // set created_at(created_at){this.created_at = created_at}

    // get id_tipousuario(){return this.id_tipousuario}
    // set id_tipousuario(id_tipousuario){this.id_tipousuario = id_tipousuario}
}

export default Usuario