/* global $ */ 
var htmlLines = [];
$('.searchButton').click(function(){
    console.log('hello');
    var userInput = $('#searchTerm').val();
    var movieInfo = 'https://www.omdbapi.com/?apikey=8e9ded79&s='+ userInput +'';
    
    $.ajax({
        url: movieInfo,
        method: 'GET',
        success: function(response){
            var title = response.Search[0].Title;
            var year = response.Search[0].Year;
            var moviedSrc = response.Search[0].Poster;
            var type = response.Search[0].Type;
            
            
            var moviePoster = '<img src="' + moviedSrc + '">';
            htmlLines.push("<h3>" + type + "</h3>");
            htmlLines.push("<h3>" + year + "</h3>");
            htmlLines.push(moviePoster);
            htmlLines.push("<h1>" + title + "</h1>")

            
            $("#content").empty();
            for( var i = htmlLines.length -1; i >= 0; i--) {

                $('#content').append(htmlLines[i]);
            }
        }
    });
});