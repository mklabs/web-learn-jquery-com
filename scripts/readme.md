

The goal here is to:

* automatically generate/update jsFiddle links from code snippets in
  `/code` for exercises.
* be able to generate the fiddle links for inclusion in pages.

### open the file/use the file

noticed a convention used within content to display exercices in pages.

* Exercices page always refer to a file ending with `-exercices.md`
  (ajax/ajax-exercises.md, effetcs/effects.exercices.md, events/events-exercises.md)
* The usually use something like

> Open the file `/exercises/index.html` in your browser.  Use the file
> `/exercises/js/navigation.js`.  Your task is to ...

This could be used to drives the generation of jsfiddles, directly from
the markdown content.

The `Open the file` followed by the path of the main html file: demo.html

The `Use the file` followed by the path of the main js file: demo.js

`Your task is to ...` may even be used to setup the fiddles description
in demo.details.

### Implementation

* OK: first step - parse markdown content and search for:
  * files ending with `exercices.md`
  * Build meta informations for each exercices parsed from markdown
    content, searching for `Open the file`, `Use the file`, 'You task is
to' patterns.
* OK: second step - use the generated meta descriptions for each exercices
  and generate the prepared demo folders, probably in codes/fiddles
* TODO: third step - add a link on each markdown file (or in the html
  files output after the main build, probably better to not touch
markdown files.

Each generated fiddles link would use jquery/edge as jsfiddle
framework/version.

### Examples

Fiddles generated:

### Install

    cd scripts/ && npm install

### Usage

    node scripts/fiddles.js

Or, to generate fiddles using the `.js` file in `code/solutions` instead of `code/exercises`

    node scripts/fiddles.js solution

(one of `s`, `sol`, `solutions` command line args will switch the mode
to solutions).

The Rakefile could also define a task to trigger the node command, so
that `rake fiddle` could be used instead.

    desc "Generate jsFiddles folder in code/fiddles and add links to exercises h3 title"
    task :fiddle do
      system "cd scripts && npm install && node fiddles.js"
    end

### references

* http://doc.jsfiddle.net/use/github_read.html

