load("/Users/vinodkd/installed/ometa-js/lib.js")
load("/Users/vinodkd/installed/ometa-js/ometa-base.js")
load("/Users/vinodkd/installed/ometa-js/parser.js")
load("/Users/vinodkd/installed/ometa-js/bs-js-compiler.js")
load("/Users/vinodkd/installed/ometa-js/bs-ometa-compiler.js")
load("/Users/vinodkd/installed/ometa-js/bs-ometa-optimizer.js")
load("/Users/vinodkd/installed/ometa-js/bs-ometa-js-compiler.js")

alert = print

translateCode = function(s) {
  var translationError = function(m, i) { alert("Translation error - please tell Alex about this!"); throw fail },
      tree             = BSOMetaJSParser.matchAll(s, "topLevel", undefined, function(m, i) {
                                                                              throw objectThatDelegatesTo(fail, {errorPos: i}) })
  return BSOMetaJSTranslator.match(tree, "trans", undefined, translationError)
}
var grammar = readFile(arguments[0]);
var pgm     = readFile(arguments[1]);

var compUnit = grammar + "\n" + pgm;
eval(translateCode(compUnit));

