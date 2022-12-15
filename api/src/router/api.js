const { db, ObjectId } = require('../db/db')
const { code_status } = require('../utils/config.js')
const fastify = require('./server')
console.log(fastify.auth)
module.exports = {
    apis: [
        {
            method: 'GET',
            url: '/',
            preHandler: fastify.auth([
                fastify.verify,
            ]),
            handler: (req, res) => {
                res.send({ 'server': 'yes' })
            }
        },
        {
            method: 'POST',
            url: '/tablebuild',
            handler: (req, res) => {
                db.collection('200000000000').insertOne({
                    "11101010101010": "101001"
                }).then(msg => {
                    res.send(msg)
                }).catch(err => {
                    res.send(err)
                })
            }
        },
        {
            method: 'POST',
            url: '/user/register',
            handler: async (req, res) => {
                let msg = {}
                try {
                    msg = await db.collection('table_users').insertOne({
                        "first_name": "c22dmidn2",
                        "refs": {
                            "_id": ObjectId("637585bcb933e86ddc604ff1")
                        }
                    })
                }
                catch (e) {
                    res.send({
                        code: code_status.FAIL,
                        e: e.name,
                        msg: e.message
                    })
                }
                finally {
                    res.send({
                        code: code_status.SUCCESS,
                        msg
                    })
                }
            }
        },
        {
            method: 'GET',
            url: '/users',
            handler: async (req, res) => {
                let data = {}
                try {
                    data = await db.collection('table_users').find({}).toArray()
                }
                catch (e) {
                    res.send({
                        code: code_status.FAIL,
                        e: e.name,
                        msg: e.message
                    })
                }
                finally {
                    res.send({
                        code: code_status.SUCCESS,
                        data,
                        msg: "success"
                    })
                }
            }
        }
    ]
}