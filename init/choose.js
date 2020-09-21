const inquirer = require('inquirer')

module.exports = async function () {
    const {source} = await inquirer.prompt([{
        type: 'list',
        name: 'source',
        message: '请选择模版',
        choices: ["React", "Vue2"]
    }]);
    return new Promise((resolve, reject) => {
        if (source === 'React') {
            resolve("direct:https://github.com/FykjFE/bot-react.git")
        } else if (source === 'Vue2') {
            resolve("direct:https://github.com/FykjFE/bot-vue2.git")
        } else {
            reject('选择模版错误')
        }
    })
}