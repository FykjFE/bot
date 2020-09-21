#!/usr/bin/env node
const program = require("commander");
const version = require("../package.json").version;
const create = require("../init")
program.version(version, "-v, --version");
program
    .command("init <project>")
    .description("使用 bot 创建一个新的项目")
    .option('-f, --force', '忽略文件夹检查，如果已存在则直接覆盖')
    .action(async name => {
        await create(name)
    });

program.parse(process.argv)