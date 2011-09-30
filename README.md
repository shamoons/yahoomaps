# Yahoo Maps API for Node.js
A simple way to query the Yahoo Maps API from Node.js

This was a quick hack to work with Node.js

# Installation
### Installing npm (node package manager)

    curl http://npmjs.org/install.sh | sh

### Installing yahoomaps

    npm install yahoomaps

# Status
APIs implemented:

* [Geocoding](http://developer.yahoo.com/geo/placefinder/guide/requests.html)

TODO:

# Usage
    var ym = require('yahoomaps');
    var sys = require('sys');

    ym.geocode('41.850033+-87.6500523', 'my_app_id', function(err, data){
      sys.puts(JSON.stringify(data));
    });


All callbacks are expected to follow:
    function(error, results)
Where the error returned is an Error object.

# Contributors

* [shamoon](https://github.com/shamoons)
