
var findit = require('findit'),
fs = require('fs'),
path = require('path'),
exec = require('child_process').exec,
base = path.join(__dirname, '..', 'content'),
output = path.join(__dirname),
demo = {
  html: fs.readFileSync(path.join(output, 'demo.html')),
  css: fs.readFileSync(path.join(output, 'demo.css')),
  details: fs.readFileSync(path.join(output, 'demo.details'))
};

var markdowns = findit.sync(base)
  .filter(function(file) {
    return /\.md$/.test(file);
  });

console.log(markdowns.length, ' markdown files to process.');

markdowns = markdowns.map(function(file) {
  var codes = parse(fs.readFileSync(file, 'utf8'));
  return {
    file: file,
    codes: codes
  };
});

markdowns.forEach(function(file) {
  var folder = file.file.replace(base, '').split('/').slice(1, -1)[0],
    filename = file.file.split('/').slice(-1)[0],
    out = path.join(output, folder);

  console.log('Generate fiddles to ', out);
  mkdirp(out, function(err) {
    if(err) throw err;
    console.log('Out folder created: ', out);

    (function next(codes, i) {
      var code = codes.pop();
      if(!code) return;
      var demoFolder = 'snippet-' + (i = i + 1);

      mkdirp(path.join(out, demoFolder), function(err) {
        if(err) throw err;
        console.log(demoFolder, ' folder created', path.join(out, demoFolder, 'demo.js'));

        fs.writeFileSync(path.join(out, demoFolder, 'demo.js'), code);
        fs.writeFileSync(path.join(out, demoFolder, 'demo.html'), demo.html);
        fs.writeFileSync(path.join(out, demoFolder, 'demo.css'), demo.css);
        fs.writeFileSync(path.join(out, demoFolder, 'demo.details'), demo.details);

        next(codes, i);
      });
    })(file.codes, 0);

    return console.log(filename, ' created');
  });
});

function parse(code) {
  var lines = code.split('\n'),
    sections = [],
    title = [],
    marker = '<div class="example" markdown="1">',
    code = false,
    reg = /^\s{4}/gm,
    save = function(line, i, arr) {
      if(line.match(marker)) {
        code = true;
        return;
      }

      if(code && line.match(/^<\/div>/)) {
        sections.push('##-marker-##');
        code = false;
      }

      if(code) {
        line = /^\w/.test(line) ? '// ' + line : line;
        sections.push(line.replace(reg, ''));
      }
    };

  lines.forEach(save);

  return sections
    .join('\n')
    .split('##-marker-##')
    .filter(function(line) { return line; });
}

function mkdirp(out, cb) {
  return exec('mkdir -p ' + out, cb);
}
