var qs = require('querystring');

// http://developer.yahoo.com/geo/placefinder/guide/requests.html
exports.geocode = function(location, appid, callback, locale, flags, gFlags){
	var args = {
		'location': location,
		'flags': 'JS',
		'gFlags': 'R',
		'appid': appid
	}

	if(locale){ args.locale = locale; }
	if(flags){ args.locale = flags; }

	var path = '/geocode?' + qs.stringify(args);
	
	makeRequest(path, false, returnObjectFromJSON(callback));
}

//  Wraps the callback function to convert the output to a javascript object
var returnObjectFromJSON = function(callback){
	return function(err, jsonString){
		callback(err , JSON.parse(jsonString));
	}
}

// Makes the request to Yahoo Maps API.
// If secure is true, uses https. Otherwise http is used.
var makeRequest = function(path, secure, callback){
	var protocol = (secure) ? require('https') : require('http')
		, options = { host: 'where.yahooapis.com', path: path, }
	protocol.get(options, function (res) {
		var data = "";
		var httpEnd = function(){
			if (res.statusCode == 200) callback(null, data);
			else callback(new Error("Response status code: " + res.statusCode), data);
		};
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on('end', httpEnd);
		res.on('close', httpEnd);
	}).on('error', function (err) { callback(err); });
}

