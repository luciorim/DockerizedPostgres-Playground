const db = require('../database/db')
const bcrypt = require('bcrypt')
const UserDto = require('../dtos/userDto')

class UserService{
    async getAllUsers(){
        const users = await db.query('select * from users')
        return users;
    }

    async createUser(email, password){
        const hashPassword = await bcrypt.hash(password, 3)
        const result = await db.query('insert into users(email, password) values ($1, $2)', [email, hashPassword])
        return result.rows;

    }
}

module.exports = new UserService()