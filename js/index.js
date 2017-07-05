$.ajax({
    url:"http://182.254.146.100:3000/api/getindexmenu",
    type:'get',
    dataType:'json',
    success:function(data){

        var html = template("nav_list_",data);
        $("#nav_list .row").html(html);
        $("#nav_list .row>div:nth-last-child(-n+4)").hide();
        $("#nav_list .row>div:nth-last-child(5)").click(function(){
            $("#nav_list .row>div:nth-last-child(-n+4)").toggle();
        })

    },
    error:function(){

    }

});
$.ajax({
    url:"http://182.254.146.100:3000/api/getmoneyctrl",
    type:'get',
    dataType:'json',
    success(data){

        var html = template("low_price",data);
        $("#product_list").html(html);
    },
    error:function(){
        
    }

});