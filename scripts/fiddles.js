//
// * first step - parse markdown content and search for:
//    * files ending with `exercises.md`
//    * Build meta informations for each exercises parsed from markdown
//    content, searching for `Open the file`, `Use the file`, 'You task is
//    to' patterns.
// * second step - use the generated meta descriptions for each exercises
// and generate the prepared demo folders, probably in codes/fiddles
// * third step - add a link on each markdown file (or in the html
// files output after the main build, probably better to not touch
// markdown files.

var fs = require('fs'),
  path = require('path'),
  util = require('util'),
  findit = require('findit');

// some configs
var config = {
  content: path.join(__dirname, '..', 'content'),
  output: path.join(__dirname, '..', 'content'),
  fiddle: 'http://jsfiddle.net/gh/get/{framework}/{version}/{user}/{repo}/{tree}'
};

// first step: build meta from markdown content
// todo: move regex creation outside of iteration
var meta = findit.findSync(config.content)
  .filter(function(file) {
    return /exercises\.md$/.test(file);
  })
  .map(function(file) {
    var content = fs.readFileSync(file, 'utf8'),
      lines = content.split('\n'),
      exercises = content.match(/###\s?.+/gm) || [];

    exercises = exercises.map(function(ex) {
      return ex.replace(/###\s?/, '').trim();
    });

    var sections = {},
      last = ''; 
    lines.forEach(function(line) {
      var parts = line.replace(/###\s?/, '');
      if(~exercises.indexOf(line) && !sections[line]) {
        console.log('True for: ', line);
        last = line;
        sections[line] = {};
      }

      if(!sections[last]) return;

      var exercise = sections[last];
      // check for Open the File/Use the File/ Your task is to pattern.
      if(/Open the file/.test(line)) {
        console.log('Open the file: ', line);
      }

      // check for Open the File/Use the File/ Your task is to pattern.
      if(/Use the file/.test(line)) {
        console.log('Use the file: ', line);
      }

      // check for Open the File/Use the File/ Your task is to pattern.
      if(/Your task is to/.test(line)) {
        console.log('Your task is to: ', line);
      }
    });


    return {
      path: file,
      content: content,
      exercises: exercises
    };
  });


// inspect(meta);



// ### helpers
function inspect(data) {
  process.stdout.write(util.inspect(data, false, 2, true) + '\n');
}
