$(document).ready(function () {

    

    $(".submit").on("click", function(e) {
        e.preventDefault();
        var searchWord = $("#exampleFormControlInput1").val();
        var limit = $("exampleFormControlSelect1").val();
        console.log(searchWord);

        var apiKey = "1mqSaqjM2OoDvqr9G6ns3SbBJXxEcojA";
    

        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchWord+"&api-key="+apiKey+ "&limit=" + limit;
        console.log(queryUrl);


        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            $.each(response.response.docs, function(index,value) {
                console.log(value.headline);
                $("#results-go-here").html(value.headline);
            });


        });






    });

});

