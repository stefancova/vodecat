/**
 * htmlToPlaintext filter : remove html tags from string
 */
app.filter('htmlToPlaintext', function() {
        return function(text) {
            return String(text).replace(/<(?:.|\n)*?>/gm, '');
        }
    }
);