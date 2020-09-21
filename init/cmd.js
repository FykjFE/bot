const childProcess = require('child_process');

module.exports = async function cmd(params) {
    return new Promise((resolve, reject) => {
        childProcess.exec(params, (err, ...arg) => {
            if (err) return reject(err)
            return resolve(...arg)
        })
    })
}