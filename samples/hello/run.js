var cobs = require('../..'),    fs = require('fs');function runFile(filename) {    var text = fs.readFileSync(filename).toString();    var parser = new cobs.Parser(text);    var command = parser.parseCommand();    var program = command.compile();    cobs.run(program);};process.argv.forEach(function(val) {    if (val.slice(-5) == ".cobs" || val.slice(-4) == ".cob")        runFile(val);});