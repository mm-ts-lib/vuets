const ProgressBar = require('progress')
const download = require('download-git-repo')
const https = require('https')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk');

module.exports = {
  downloadTem(p, cb) {
    download('mm-ts-lib/vuets-framework', p, err => {
      if (err) {
        console.log(chalk.red('Download Template Failed!'));
        cb();
      } else {
        cb();
      }
    })
  }
}