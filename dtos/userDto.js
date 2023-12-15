class UserDto{
    email;
    password;

    constructor(model){
        this.email = model.email
        this.password = model.password
    }
}

module.exports = UserDto