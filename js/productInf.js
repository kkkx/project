function getQueryStringArgr(){

    var qs = location.search.length>1?location.search.substr(1):"";
    var items = qs.length>1?qs.split("&"):[];
    var obj = {},key,value,item;
    for(i = 0;i<items.length;i++){
        item =items[i].split("=");
        key = item[0];
        value = item[1];
        obj[key]=value;
    }
    return obj;
}
var searchId = getQueryStringArgr();

$.ajax({
    url:"http://182.254.146.100:3000/api/getproduct?productid="+searchId.productid,
    type:'get',
    dataType:'json',
    success:function(data){
        var html = template("product_page",data);
        $("#product_infor").html(html);
        $("#product_title .breadcrumb li:nth-child(3)").html(data.result[0].productName);
        $.ajax({
        url:"http://182.254.146.100:3000/api/getcategorybyid?categoryid="+data.result[0].categoryId,
        type:'get',
        dataType:"json",
        success:function(data){
       $("#product_title .breadcrumb li:nth-child(2)").html(data.result[0].category);
    }
});
    }
})
$.ajax({
    url:"http://182.254.146.100:3000/api/getproductcom?productid="+searchId.productid,
      type:'get',
    dataType:'json',
    success:function(data){
        var html = template("product_message",data);
        $("#commend .message").html(html);
        
    }
})