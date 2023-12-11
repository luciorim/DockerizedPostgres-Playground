const db = require("../database/db")

class UserController{
    async getAllUsers(req, res, next){
        try {
            const users = await db.query('select * from users')
            return res.status(200).json(users.rows)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Something went wrong..."})
        }
        
    }

}

module.exports = new UserController();