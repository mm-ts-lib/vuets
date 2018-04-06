const request = require('superagent')

function checkVersion(url){
  request
  .get('https://raw.githubusercontent.com/mm-ts-lib/vuets-framework/master/package.json')
  .then((res) => {
    const remoteVersion = JSON.parse(res.text);
    console.log('result is ', remoteVersion);
  });
}

checkVersion()