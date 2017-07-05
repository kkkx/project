$.ajax({
    url:"http://182.254.146.100:3000/api/getcategorytitle",
    type:'get',
    dataType:'json',
    success:function(data){
        var html  = template("product_list_",data);
        $("#product_list").html(html);

        $("#product_list #accordion .panel-default .panel-title a").click(function(){
            var title = $(this).data("titleid");
            var $row = $(this).parent().parent().siblings().find(".panel-body .row");
            if($row.children().length === 0){
                $.ajax({
              url:"http://182.254.146.100:3000/api/getcategory?titleid="+title,
              type:'get',
              dataType:'json',
              success:function(data){
                  var html = template("list_",data);
                  $row.html(html);
              }
            });
            }
           
        })
    }
})