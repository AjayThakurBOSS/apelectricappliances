const JWT = require('jsonwebtoken');
console.log("token", JWT)

module.exports = async (req, res, next) => {
    try{
        const token = req.headers['authorization']?.split(" ")[1];
    JWT.verify(token, "XYZGHSJ123", (err, decode) => {
        console.log(err)
        console.log(decode)
        if(err){    
            
            return res.status(200).send({
                message: 'Auth Failed',
                success: false
            })
        }else{
            req.body.userId =  decode.id;
            next()
        }
    })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Auth Failed catch",
            success: false
        })
    }
}