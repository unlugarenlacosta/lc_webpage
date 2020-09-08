export class User {
    
    public id: number;
    public email: string;
    public isDeleted: boolean;
    public password: string;
    public username: string;

    constructor(
        _id: number,
        _email: string,
        _isDeleted: boolean,
        _password: string,
        _username: string
    ){
        this.id = _id;
        this.email = _email;
        this.isDeleted = _isDeleted;
        this.password = _password;
        this.username = _username;
    }
}