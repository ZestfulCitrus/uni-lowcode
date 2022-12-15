const { MongoClient , ObjectId } = require('mongodb');
const config = require('../utils/config')
const client = new MongoClient(config.mongodb.url);
const dbName = config.mongodb.database_name;
const db = client.db(dbName);
client.connect().then(async e=>{
    console.log('Connected successfully to server');
    const result = await db.collection('table_users').createIndex(
        { first_name: 1 },
        { unique: true }
    )
    console.log(`Index created: ${result}`);

    // await 
}).catch(err=>{
    console.log(`Connect Fail`);
    console.log(err)
});
client.on('commandStarted', (event) => console.debug(event));
client.on('commandSucceeded', (event) => console.debug(event));
client.on('commandFailed', (event) => console.debug(event));
// 退出的时候
process.on('SIGINT', function() {
    client.close()
    process.exit(0);
});

module.exports = {
    db,
    ObjectId
}

