
var cobs = require('../'),
    assert = require('assert');
    
function run(text, ws) {
    var program = cobs.compile(text);
    
    if (ws) {
        program.data = program.data || { };
        program.data.working_storage = ws;
    }
    
    var text = program.command.compile(program);
    var runtime = null;
    cobs.run(text, runtime, program);
};

// simple if

var ws = { a: 1 };
run('if a > 0 then move 0 to a.', ws);
assert.equal(ws.a, 0);

// if with two commands

var ws = { a: 1, b: 2 };
run('if a > 0 then move 0 to a move 1 to b.', ws);
assert.equal(ws.a, 0);
assert.equal(ws.b, 1);