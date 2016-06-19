'use strict';

var https = require("https");
var Searches = require('../models/searches.js');

function ImageHandler() {
    var bingKey = process.env.BING_KEY;

    //save latest query keywords to mongodb
    var saveQuery = function(keywords) {
        var doc = new Searches({"term": keywords, "when": new Date().toISOString()});
        doc.save(function(err) {
            if (err) throw err;
        });
    };
    
    this.getQuery = function(req, res) {
        var keywords = req.params.keywords;
        var queryOptions = req.query;
        var getOptions = {
            hostname: 'bingapis.azure-api.net',
            path: '/api/v5/images/search?q=' + encodeURIComponent(keywords),
            headers: {
                "Ocp-Apim-Subscription-Key": bingKey
            }
        };
        var offsetNum = 0;
        //validate keywords
        if (keywords.match(/^[a-z0-9- ]+$/i)) {
            //save request to MongoDB
            try {
                saveQuery(keywords);
            } catch (e) {
                console.log(e.message);
                return res.status('500').send("Invalid search, please try again.");
            }
        } else {
            return res.status('500').send("Invalid search, please try again.");
        }
        //united states market, strict content filtering
        getOptions.path += '&mkt=en-us&safeSearch=Strict&count=10';
        //add any optional query parameters
        //handle offset as "pagination"
        //i.e. offset of page 2 would skip the first 20 results
        for (var prop in queryOptions) {
            if (prop === 'offset' && Number(queryOptions[prop])) {
                offsetNum = Number(queryOptions[prop]) * 10;
                getOptions.path += '&' + prop + '=' + offsetNum;
            }
        }
        //node.js get request
        https.get(getOptions, function(response) {
            var images = "";
            //read stream as String
            response.setEncoding('utf8');
            //read and combine stream chunks
            response.on("data", function(chunk) {
                images += chunk;
            });
            //parse and clean final data, then return it
            response.on("end", function() {
                try {
                    var values = [];
                    var i;
                    //read string as JSON
                    images = JSON.parse(images);
                    //get items needed
                    for (i = 0; i < images.value.length; i++) {
                        values.push({
                            "url": images.value[i].contentUrl,
                            "snippet": images.value[i].name,
                            "thumbnail": images.value[i].thumbnailUrl,
                            "context": images.value[i].hostPageDisplayUrl
                        });
                    }
                    //send back items as JSON through Express response
                    return res.json(values);
                }
                catch (e) {
                    return res.status('500').send("Error found, please try again.");
                }
            });
            //handle response stream error
            response.on("error", function(error) {
                console.log(error);
                return res.status('500').send("Error found, please try again.");
            });
        }).on("error", function(error) {
            //handle http get error
            console.log(error.message);
            return res.status('500').send("Error found, please try again.");
        });
    };

    //from MongoDB get last 10 requests made
    this.getLatest = function(req, res) {
    	Searches
		.find({}, {'_id':0, 'term':1, 'when':1})
		.limit(10)
		.sort({ when: -1 })
		.exec(function (err, results) {
			if (err) {
			    console.log(err.message);
			    return res.status('500').send("Error found, please try again.");
			}
			return res.json(results);
		});
    };

}

module.exports = ImageHandler;
