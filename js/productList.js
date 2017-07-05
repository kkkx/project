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
var pageId = parseInt(searchId.pageid)||1;
$.ajax({
    url:"http://182.254.146.100:3000/api/getcategorybyid?categoryid="+searchId.categoryid,
    type:'get',
    dataType:"json",
    success:function(data){
       $("#product_title .breadcrumb li:nth-child(3)").html(data.result[0].category);
    }
});
$.ajax({
    url:'http://182.254.146.100:3000/api/getproductlist?categoryid='+searchId.categoryid+'&pageid='+pageId,
    type:"get",
    dataType:'json',
    success:function(data){
        var html = template("product_data",data);
        $("#productList").html(html);
        var pages = Math.ceil(data.totalCount/data.pagesize);

        var prev_href = "productList.html?categoryid="+searchId.categoryid+"&pageid="+(pageId-1>1?pageId-1:1);
        var next_href = "productList.html?categoryid="+searchId.categoryid+"&pageid="+(pageId+1<pages?pageId+1:pages);
         $("#pagination .prev").attr("href",prev_href);
        $("#pagination .next").attr("href",next_href);
    }
})
