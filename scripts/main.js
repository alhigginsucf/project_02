$(function() {

    //variables
    var $input = $('#input');
    var $submit = $('#submit');
    var apiKey = 'N5uojbvhaV0L8zHWaInhm2DCBqFJV66q';
    var $imgBody = $('.img-body');
    // get input value when user presses submit
    $submit.on('click', function(event) {
        event.preventDefault();
        $imgBody.empty();
        var inputVal = $input.val();
        getGiphys(inputVal);
        //empties input box
        $inputVal.val(' ');
    });
    //make request to giphy api

    function getGiphys(inputVal) {
        $.get('http://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=' +
                apiKey + '&limit=20')
            .done(function(data) {
                for (var i = 0; i < 20; i++) {
                    var gifImg = data.data[i].images.original.url;
                    createBox(gifImg);
                }
            });
    };

    function createBox(gifImg) {
        var $newImg = $('<img>');
        $newImg.attr('src', gifImg);
        $newImg.addClass('img-box');

        $imgBody.append($newImg);

    }




});
//end of code