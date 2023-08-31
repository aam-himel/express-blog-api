const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();


const authController = {
    // register
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

    // login
    async login(req, res) {
        try {
            const {email, password} = req.body;
        const user  = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(!user) {
            res.status(401).json({error: 'Invalid username or email!'})
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = await authController.generateToken(user);
        res.json({message: 'login successfull!', token});
        } catch (err) {
            res.status(500).json({error: 'Internal server error'});
        }
        
    },

    // logout
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