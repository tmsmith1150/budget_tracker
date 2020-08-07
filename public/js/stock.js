$(document).ready(function(){
    const stockBtn=document.getElementById("stockBtn")



    function getStocks(stockNumbers){
        console.log(stockNumbers)
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://bloomberg-market-and-financial-news.p.rapidapi.com/stock/get-statistics?id=aapl%253Aus",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
                "x-rapidapi-key": "65ad3a27b2mshd8ce4330aac67b8p1bb273jsndab5d0330779"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        $.get(settings,function(res){
            let data = res.stockNumbers;
            console.log(res)
            

            $('#stockNum').text(`${data}`);
          
        })

    }

    getStocks();
});


