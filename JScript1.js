/* global $ */ 
$('body').append('<h1>hello</h1>');
$('#searchButton').click(function(){
    console.log('hello');
    var userInput = $('#searchTerm').val();
    var movieInfo = 'http://www.omdbapi.com/?apikey=8e9ded79&s='+ userInput +'';
    
    $.ajax({
        url: movieInfo,
        method: 'GET',
        success: function(response){
            var title = response.Search[0].Title;
            var moviedSrc = response.Search[0].Poster;
            
            var moviePoster = '<img src="' + moviedSrc + '">';
            
            $('body').append(moviePoster);
        }
    });
});