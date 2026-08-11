import { v4 as uuidV4 } from "uuid";
import { readFileJson, writeFileJson } from "../utils/utils.js";

const filename = "users.json";

class User {
    constructor(firstname, lastname, email, id = uuidV4()){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.id = id;
    }

    save(){
        const data = readFileJson(filename);

        // Comprueba si ya existe un usuario con el mismo email.
        const exist = data.users.some(u => u.email == this.email);

        if(exist){
            const error = new Error("Ya existe un usuario registrado con el correo: " + this.email);
            error.code = 400;

            throw error;
        }

        data.users.push(this);

        writeFileJson(filename, data);

        return true;
    }

    update(){
        const data = readFileJson(filename);

        let indexUser = data.users.findIndex(u=> u.id == this.id);

        if(indexUser == -1){
            const error = new Error("Usuario no existe en la BD.");
            error.code = 400;
            throw error;
        }

        // Reemplaza el usuario existente con la versión actualizada.
        data.users[indexUser] = this;
        writeFileJson(filename, data);
        return true;
    }

    delete(){
        const data = readFileJson(filename);
        let indexUser = data.users.findIndex(u=> u.id == this.id);

        if(indexUser == -1){
            const error = new Error("Usuario no existe en la BD.");
            error.code = 400;
            throw error;
        }

        // Elimina el usuario del arreglo persistido.
        data.users.splice(indexUser, 1);

        writeFileJson(filename, data);
        return true;
    }

    static findAll(){
        const { users } = readFileJson(filename);
        return users.map(u => new User(u.firstname, u.lastname, u.email, u.id));
    }

    static findById(id){
        const { users } = readFileJson(filename);
        let user = users.find(u=> u.id == id);

        if(user){
            user = new User(user.firstname, user.lastname, user.email, user.id);
        }

        return user;
    }

    static findByEmail(email){
        const { users } = readFileJson(filename);
        // Normaliza mayúsculas y espacios para evitar errores de coincidencia.
        email = email.toLowerCase().trim();
        let user = users.find(u=> u.email.toLowerCase().trim() == email);

        if(user){
            user = new User(user.firstname, user.lastname, user.email, user.id);
        }

        return user;
    }
}

export default User;