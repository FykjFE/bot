const download = require("download-git-repo")
const ora = require("ora")
const chalk = require("chalk")
const logSymbols = require("log-symbols")
module.exports = function (downloadUrl,project) {
    return new Promise((resolve, reject) => {
        const spinner = ora("模板下载中^.^ 请稍后").start()
        download(downloadUrl, project, {clone: true}, async err => {
            if (err) {
                spinner.fail()
                console.log(logSymbols.error, chalk.red(`下载失败${err}`))
               return  reject("下载失败")
            } else {
                spinner.succeed()
                console.log(logSymbols.success, chalk.yellow("模版下载成功"))
               return  resolve()
            }
        })
    })
};