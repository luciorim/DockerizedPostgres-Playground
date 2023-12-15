const db = require("../database/db")
const userService = require('../services/user-service')

class UserController{
    async getAllUsers(req, res, next){
        try {
            const users = await userService.getAllUsers()
            return res.status(200).json(users.rows)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Something went wrong..."})
        }
    }

    async createUser(req, res, next){
        try {
            const {email, password} = req.body
            const user = await userService.createUser(email, password)
            return res.status(200).json(user)
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "Something went wrong"})
        }
    }

}

module.exports = new UserController();