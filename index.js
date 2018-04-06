#!/usr/bin/env node

const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');

program.command('*')
  .option('-u, --username <username>', 'The user to authenticate as')
  .option('-p, --password <password>', 'The user\'s password')
  .action(function (fn) {
    console.log('aaa')
  }).parse(process.argv)