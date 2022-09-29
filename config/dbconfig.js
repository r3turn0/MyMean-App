// The pool config in optional and it will be used to SEQUELIZE the connection pool
// max,min = connections in pool; idle = max idle time before releasing connection; acquire = max time for connection retries
module.exports = {
    HOST: "localhost",
    USER: "johncericta",
    PASSWORD: "XIIIcsz1305!",
    DB: "test",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}