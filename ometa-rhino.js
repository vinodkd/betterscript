load("/Users/vinodkd/installed/ometa-js/lib.js")
load("/Users/vinodkd/installed/ometa-js/ometa-base.js")
load("/Users/vinodkd/installed/ometa-js/parser.js")
load("/Users/vinodkd/installed/ometa-js/bs-js-compiler.js")
load("/Users/vinodkd/installed/ometa-js/bs-ometa-compiler.js")
load("/Users/vinodkd/installed/ometa-js/bs-ometa-optimizer.js")
load("/Users/vinodkd/installed/ometa-js/bs-ometa-js-compiler.js")

matchFailed = function (grammar, errorPos) {
  var lines = grammar.input.lst.split('\n');
  var pos = 0, l = 0;
  var msg = ["Execution error: input matching failed at position: " + errorPos];

  while (pos < errorPos) {
    var line = lines[l], length = line.length;
    if (pos + length >= errorPos) {
      var c = errorPos - pos;
      msg.push("  line:" + (l + 1) + ", column:" + c);
      msg.push(line)
      // replicate str n times
      function replicate(str, n) {
        if (n < 1) return "";
        var t = [];
        for (var i=0; i<n; i++) t.push(str);
        return t.join('');
      }
      msg.push(replicate('-', c) + '^');
    }
    pos += length + 1;
    l++;
  }
  alert(msg.join('\n'));
}

alert = print

translateCode = function(s) {
  tree = BSOMetaJSParser.matchAll(s, "topLevel", undefined, matchFailed)
  return BSOMetaJSTranslator.match(tree, "trans", undefined, matchFailed)
}
var grammar = readFile(arguments[0]);
var pgm     = readFile(arguments[1]);

var compUnit = grammar + "\n" + pgm;
var compiledUnit = translateCode(compUnit);
//print(compiledUnit);
eval(compiledUnit);

