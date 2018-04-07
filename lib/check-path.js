const path = require('path')
const fs = require('fs')

const current_dir = process.cwd();

module.exports = {
  checkPath(project) {
    const dir = path.resolve(current_dir, project);
    if (fs.existsSync(dir)) {
      return {
        result: false,
        msg: 'Directory already exists'
      }
    } else {
      return {
        result: true,
        msg: dir
      }
    }
  }
}