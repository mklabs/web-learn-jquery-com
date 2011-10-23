
$('#twitter')
    .bind('getResults', function(e, term) {
        // make sure we don't have a box for this term already
        if (!search_terms[term]) {
            var $this = $(this);
            var $template = $this.find('div.template');

            // make a copy of the template div
            // and insert it as the first results box
            $results = $template.clone().
                removeClass('template').
                insertBefore($this.find('div:first')).
                twitterResult({
                    'term' : term
                });

            // load the content using the "refresh"
            // custom event that we bound to the results container
            $results.trigger('refresh');
            search_terms[term] = 1;
        }
    })
    .bind('getTrends', function(e) {
        var $this = $(this);
        $.getJSON('http://search.twitter.com/trends.json?callback=?', function(json) {
                var trends = json.trends;
                $.each(trends, function(i, trend) {
                    $this.trigger('getResults', [ trend.name ]);
                });
            });
    });
