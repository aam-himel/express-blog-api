const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();


const authController = {
    async register(req, res) {
        const {username, email, password} = req.body; 

        // check duplicate user
        const existingUser = await prisma.user.findFirst({
            where:{
                OR: [
                    {username},
                    {email}
                ]
            }
        })

        if(existingUser) {
            return res.status(400).json({ error: 'Username or email already exists' });
        }
        const hashPass = await bcrypt.hash(password, 10);
        
        // create new user
        const newUser = await prisma.user.create({
            data: {
                username,
                email, 
                password:hashPass
            }
        })

        const token = await authController.generateToken(newUser);
        return res.json({"msg" : `JWT generated token ${token}`});
    },

    login(req, res) {
        return res.json({"msg" : "login endpoint"});
    },

    logout(req, res) {
        return res.json({"msg" : "logout endpoint"});
    },

    async generateToken(user){
        const payload = {
            userId: user.id,
            username: user.username,
            email: user.email,
            role: "user"
        }
        return jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: '1h' })
    }
}

module.exports = authController;