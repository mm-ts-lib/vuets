#!/usr/bin/env node

require('commander')
  .version(require('../package.json').version, '-v, --version')
  .usage('<command> [options]')
  .command('init', 'Initialize a project from a template')
  .parse(process.argv)