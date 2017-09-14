$("#submitsearch").click(function(event) {
  event.preventDefault();
  wikiQuery($("#searchtext").val());
});

function wikiQuery(searchPar) {
  $.ajax({
    type: "GET",
    url: " https://en.wikipedia.org/w/api.php",
    data: {
      action: "query",
      prop: "info",
      format: "json",
      list: "search",
      inprop: "url",
      srsearch: searchPar
    },
    dataType: "jsonp",
    success: function(x) {
      if (x.query.search.length === 0 || $("#searchtext").val() === 0) {
        $("#info").html('<div class="row"><h3>No Results</h3></div>');
      } else {
        console.log(x.query.search[0].pageid);
        $("#info").html('<div class="row"><h3>Search Results:</h3></div>');
        for (i = 0; i < x.query.search.length; i++) {
          $("#info").append(
            '<a href="https://en.wikipedia.org/?curid=' + x.query.search[i].pageid + '" class="hoverclass" target="_blank"><div class="row searchresults shadow-radial"><div class="col-md-2"><h4>' +
              x.query.search[i].title +
              '</h4></div><div class="col-md-10"><span class="align-middle">' +
              x.query.search[i].snippet +
              "</span></div></div></a>"
          );
        }
      }
    },
    error: function() {
      console.log("Error");
    }
  });
}