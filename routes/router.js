const router = require('express').Router()
const userController = require("../controllers/user.controller")

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: array
 */

router.get('/users', userController.getAllUsers)

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create new User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: User succesfully created
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               email: example@example.com
 */
router.post('/users', userController.createUser)


module.exports = router