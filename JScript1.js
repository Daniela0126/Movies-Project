/* global $ */ 

$('.searchButton').click(function(){
    console.log('hello');
    var userInput = $('#searchTerm').val();
    var movieInfo = 'https://www.omdbapi.com/?apikey=8e9ded79&s='+ userInput +'';
    
    $.ajax({
        url: movieInfo,
        method: 'GET',
        success: function(response){
            var title = response.Search[0].Title;
            var moviedSrc = response.Search[0].Poster;
            
            var moviePoster = '<img src="' + moviedSrc + '">';
            
            $('body').append("<h1>" + title + "</h1>");
            $('body').append(moviePoster);


        }
    });
});