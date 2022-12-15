module.exports={
    verify : function verify(req,res,done){
        console.log(this.jwt)
        res.code(401).send({code:'401'})
    }
}