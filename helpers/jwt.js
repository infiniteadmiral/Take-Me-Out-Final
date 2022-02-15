
const expressJwt=require('express-jwt')

function authJwt(){
    const secret=process.env.SECRET
    return expressJwt({
secret,
algorithms:['HS256']
    }).unless({
        path:[
            '/api/v1/users/login',
            '/api/v1/users/register',
        ]
    })
}

module.exports=authJwt;