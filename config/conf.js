/**
 * mongodb 连接配置
 */
module.exports = {
    localUrl: 'localhost',
    localPort:27017,
    mongoDB: {
        guwen: 'guwen',
        guwenbook:'guwenbookDB'
    },
    options: {
        server: { poolSize: 5 }
    },
    originIp:'47.52.115.169',
    // originIp:'localhost',



}