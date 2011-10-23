
the root of the demos folders.

**have lot more docs to write**, but here's the idea.

Parsing out markdown content from the content/ folder. Probably, the
next step would be to adapt this to also work on the code/examples/ and
code/solutions/ folders (maybe using @Suggsgested's [work](https://github.com/jquery/web-learn-jquery-com/pull/22))

## build.js

a node script, less than ~100 loc, that:

* lookup in content/ folders any markdown file (`md`).
* parse each markdown content, build according codes block sections.
  * done using `<div class="example" markdown="1">` and `</div>` markers.
* generate proper folder structure under demos/ and create a snippet-xx
  folder for each revelant snippet of codes (parsed from markdown
content)
* create the `demo.js file with the content of the snippet of code
  parsed, and copy `demo.html`, `demo.css` and `demo.details`  in each
  of the snippet's folder.

Then, if it's working correctly, one could use the according [jsfilddle
url](http://doc.jsfiddle.net/use/github_read.html#run-in-jsfiddle) to see the demo loaded in a jsFiddle.

## Demo directory structure

### DemoDirectory

    demo.js
    demo.html
    demo.css
    demo.details
  

* demo.[js/html/css]: contains fiddle code for the specific panel
* demo.details: is a description of the demo written in YAML, structure compatible with MooTools doc


    Everything before the line containing only '---' will not be parsed

    ---
     name: The Name of the Demo
     description: Some description, please keep it in one line
     authors:
       - John Doe
       - Jan Wisniewski
     resources:
       - http://some.url.com/some/file.js
       - http://other.url.com/other_filename.css
     normalize_css: no
     ...

    Everything after the line containing only '...' will not be parsed

All above fields are optional.



