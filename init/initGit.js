const cmd=require('./cmd')
const ora = require("ora")

module.exports = async function initGit(project) {
    const spinner=ora("初始化git").start()
    await cmd(`cd ${project}`);
    process.chdir(project);
    await cmd(`git init`);
    spinner.succeed('Git初始化完成！');
}