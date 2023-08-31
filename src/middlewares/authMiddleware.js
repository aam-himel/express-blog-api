const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authMiddleware(req, res, next){
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({error: 'Unauthorized'});
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: 'Unauthorized' });
    }
}
