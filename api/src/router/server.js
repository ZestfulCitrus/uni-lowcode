const fastify = require('fastify')()
const config = require('../utils/config')
const auth = require('./auth')
fastify.register(require('@fastify/auth'))
fastify.register(require('@fastify/jwt'), { secret: 'supersecret' })
fastify.decorate('verify', auth.verify)
fastify.after(()=>{
    const { apis } = require('./api')
    apis.forEach(e=>{
        fastify.route(e)
    })    
})


module.exports=fastify