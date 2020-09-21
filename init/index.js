const choose = require('./choose')
const downloadRepo = require('./downloadRepo')
const initGit = require('./initGit')
module.exports = async function (project) {
    const url = await choose()
    await downloadRepo(url,project)
    await initGit(project)
};