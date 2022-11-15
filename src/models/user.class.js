export class User {

    name = "";
    lastName = "";
    email = "";
    identification = 0;
    fines = [];

    constructor(name, lastName, email, identification, fines) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.identification = identification;
        this.fines = fines;
    }

}