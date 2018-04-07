#!/usr/bin/env node

const program = require('commander')
const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk');
const ProgressBar = require('progress');
const {
  downloadTem
} = require('../lib/download')
const {
  checkPath
} = require('../lib/check-path')

const log = console.log

let PROJECT_NAME = ''; // 创建的工程名称

/**
 * 命令参数的配置
 */
program
  .usage('init <project-name>')
  .arguments('<project-name>')
  .option('-n, --name <projectname>', 'The generating project\'s name')
  .action(function (name) {
    PROJECT_NAME = name;
  })
  .parse(process.argv);

if (program.args.length < 1 && !PROJECT_NAME) {
  co(function* () {
    PROJECT_NAME = yield prompt('Please enter the name of project to be created: ');
    return PROJECT_NAME
  }).then(val => {
    if (val) {
      init();
    } else {
      throw new Error('The project\'s name is required!');
    }
  }, err => {
    throw new Error(err);
  })
} else {
  PROJECT_NAME = program.args[0] ? program.args[0] : program.name;
  init();
};

// 初始化
function init() {
  let bar = new ProgressBar(':bar :current/:total', {
    total: 2
  });
  bar.tick();
  bar.interrupt(chalk.green('Download Template ...'));
  let checkPathResult = checkPath(PROJECT_NAME);
  if (checkPathResult.result) {
    downloadTem(checkPathResult.msg, () => {
      bar.tick();
      process.exit();
    });
  } else {
    console.log(checkPathResult.msg);
    bar.tick();
    process.exit();
  }
}