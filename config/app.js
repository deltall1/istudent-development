/*
 * General application configs
 */

module.exports = {
    "host": process.env.APP_HOST,
    "port": process.env.APP_PORT,
    "secretKey": process.env.APP_KEY || 'secret',
};