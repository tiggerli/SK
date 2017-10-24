/**
 * Created by bjwsl-001 on 2016/11/16.
 */
$(function(){
  $("#footer").load('php/footer.php');
});
//实现异步加载购物车详情内容
var uname=sessionStorage.getItem('NAME');
$(function(){
  $.ajax({
    url:'php/cartdeil.php',
    data:{uname:uname},
    success:function(list){
      var html='';
      var num=0;
      $.each(list,function(i,d){
          html+=`
          <tr>
                  <td>
                     <input type="checkbox"/>
                  </td>
                  <td class="table-wid">
                     <img src="img/imags/${d.pic}"/>
                     <span>${d.pname}</span>
                  </td>
                  <td>
                     中国大陆
                  </td>
                  <td>
                     ￥${d.price}元
                  </td>
                  <td>
                     <input type="button" value="-" class="inputadd" data="${d.did}"/><span class="shopnum">${d.count}</span><input  data="${d.did}" class="inputadd" type="button" value="+"/>
                  </td>
                  <td>
                     <p class="bac">￥${d.price}元</p>
                     <p>返利26库币</p>
                  </td>
                  <td >
                     <a href="#" class="delet" data="${d.did}">删除</a>
                  </td>
               </tr>
          `;
       num+=parseFloat(d.price)*parseFloat(d.count);
      });
      $("#tbodyadd").html(html);
      $("#zongshop").html("￥"+num+"元");
    }
  });
});
//为+-添加事件监听事件并同步到数据库
$("#tbodyadd").on('click','.inputadd',function(){
  var opertion=$(this).val();
  var count=parseInt($(this).siblings('span').html());
  if(opertion=='-'&&count>1){
    count--;
  }
  if(opertion=='+'){
    count++;
  }
  $(this).siblings('span').html(count);
  var did=$(this).attr("data");
  $.ajax({
    url:'php/cartadd.php',
    data:{did:did,count:count},
    success:function(result){
      console.log(result)
    }
  });
});
//为删除按钮添加单击事件，实现删除功能，同步到数据库
$("#tbodyadd").on('click','.delet',function(e){
  e.preventDefault();
  $target=$(e.target);
  var did=$target.attr("data");
  $("#carttofixed").css("display","block");
  $("#carttofixed01 #ok").click(function(){
    $.ajax({
      url:'php/cartdelet.php',
      data:{did:did},
      success:function(result){
        $target.parent().parent().remove();
        $("#carttofixed").css("display","none");
      }
    });
  });
  $("#carttofixed01 #err").click(function(){
    $("#carttofixed").css("display","none");
  });
});