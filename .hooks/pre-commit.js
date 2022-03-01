#!/usr/bin/env node
const { run, finish } = require('./utils');

run({
  title: 'Running project build...',
  command: 'pdflatex',
  args: ['main.tex'],
});

finish();
