
//异步加载页头和页尾
$(function(){
  $("#top").load('php/header.php');
});
$(function(){
  $("#footer").load('php/footer.php');
});

//实现点击按钮异步加载商品信息
$(function(){
  $.ajax({
    url:'php/product.php',
    success:function(plist){
      var html='';
      for(var i=0;i<4;i++){
        html+=`
         <li>
               <a href="#"><img src="img/imags/${plist[i].pic}"/></a>
               <p><a href="#">${plist[i].pname}</a></p>
               <P>￥${plist[i].price}</P>
               <P><span class="cartadd" data="${plist[i].pid}"></span></P>
          </li>
        `;
      }
      $("#shop ul").html(html);
      $("#shop ul img").addClass("change");
            var j=4;
      $("#more").click(function(){
        var arr=plist.slice(j,j+4);
        for(var a=0;a<arr.length;a++){
          html+=`
         <li>
               <a href="#"><img src="img/imags/${arr[a].pic}"/></a>
               <p><a href="#">${arr[a].pname}</a></p>
               <P>￥${arr[a].price}</P>
               <P><span class="cartadd" data="${arr[a].pid}"></span></P>
          </li>
        `;
        }
        j+=4;
        $("#shop ul").html(html);
        $("#shop ul img").addClass("change");
      });
    }
  });
});
var uname=sessionStorage.getItem('NAME');
//为购物车添加单击事件实现异步请求
$("#shop").on('click','.cartadd',function(e){
  $target=$(e.target);
  var pid=$target.attr("data");
  $.ajax({
    type:'POST',
    url:'php/add_cart.php',
    data:{uname:uname,pid:pid},
    success:function(obj){
      var html=obj.count;
     $("#cartfixed").css("display","block");
     $("#cartfixed .pcount").html(obj.count);
    }
  });
});
$("#cartfixed .goshop").click(function(e){
  e.preventDefault();
  $("#cartfixed").css("display","none");
});

