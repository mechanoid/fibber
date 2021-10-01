#!/usr/bin/env node

import Eleventy from '@11ty/eleventy'

console.log(process.cwd())

console.log(Eleventy)

const cwd = process.cwd()

const eleventy = new Eleventy(cwd, cwd, {
  // --quiet and --quiet=true both resolve to true
  // quietMode: argv.quiet,
  // configPath: argv.config,
  source: 'cli',
  dir: {
    input: 'views',
    output: 'dist'
  }
})

await eleventy.init()
const result = await eleventy.toJSON()

console.log(JSON.stringify(result, null, 2));
