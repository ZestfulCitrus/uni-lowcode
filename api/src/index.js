const fastify = require('./router/server')
const config = require('./utils/config')
// require('./utils/boot')
process.on('SIGINT', function () {
    console.log("???")
    process.exit(0);
});
fastify.listen(config.server).then(r => {
    console.log(r)
}).catch(e => {
    console.log(e)
}
)