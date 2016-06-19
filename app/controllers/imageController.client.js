'use strict';

(function () {
    //key 1
    //aee08ab1ada241f69467c4ecd6fef9f3
    //key 2
    //396d1d99fd56412fab6b0eac22b6d6ef
   var apiUrl = 'https://bingapis.azure-api.net/api/v5/images/search?' + $.param(params) + '/api/:id/clicks';

   function updateClickCount (data) {
      var clicksObject = JSON.parse(data);
      clickNbr.innerHTML = clicksObject.clicks;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequestBing('GET', apiUrl, updateClickCount));


})();