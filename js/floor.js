//为主页面的固定楼层添加
$(document).scroll(function(){
  var num=$("body").scrollTop();
  if(num>500){ $("#fixed").css("display","block");
  }else{$("#fixed").css("display","none");}
  if(num>500&&num<1200){
    $("#f1").addClass("floorr").siblings(".floorr")
          .removeClass("floorr");}
  if(num>=1200&&num<1900){
    $("#f2").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
    $("#maoa img").removeClass("animated fadeInDown");
  }else if(num>=1900&&num<2400){
    $("#maoa img").addClass("animated fadeInDown");
    $("#mao4 img").removeClass("animated fadeInDown");
    $("#f3").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
  }else if(num>=2400&&num<2900){
    $("#maoa img").removeClass("animated fadeInDown");
    $("#mao4 img").addClass("animated fadeInDown");
    $("#mao5 img").removeClass("animated fadeInDown");
    $("#f4").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
  }else if(num>=2900&&num<3305){
    $("#mao4 img").removeClass("animated fadeInDown");
    $("#mao5 img").addClass("animated fadeInDown");
    $("#mao6 img").removeClass("animated fadeInDown");
    $("#f5").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
  }else if(num>=3305&&num<3710){
    $("#mao5 img").removeClass("animated fadeInDown");
    $("#mao6 img").addClass("animated fadeInDown");
    $("#mao7 img").removeClass("animated fadeInDown");
    $("#f6").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
  }else if(num>=3710&&num<4115){
    $("#mao6 img").removeClass("animated fadeInDown");
    $("#mao7 img").addClass("animated fadeInDown");
    $("#mao8 img").removeClass("animated fadeInDown");
    $("#f7").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
  }else if(num>=4115&&num<4520){
    $("#mao7 img").removeClass("animated fadeInDown");
    $("#mao8 img").addClass("animated fadeInDown");
    $("#mao9 img").removeClass("animated fadeInDown");
    $("#f8").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
  }else if(num>=4520&&num<4925){
    $("#mao8 img").removeClass("animated fadeInDown");
    $("#mao9 img").addClass("animated fadeInDown");
    $("#f9").addClass("floorr").siblings(".floorr")
      .removeClass("floorr");
  }
});

$(".change").mousemove(function(e){
  $target=$(e.target);
  $target.addClass("headShake");
});
$(".change").mouseleave(function(e){
  $target=$(e.target);
  $target.removeClass("headShake");
});


//为登录添加时间，弹出模态框

$("#deng").click(
  function(e){
    e.preventDefault();
    $("#modal").css("display","block");
  }
);
$("#modal01 .closed").click(
  function(){
    $("#modal").css("display","none");
  }
);
//点击登录按钮，实现异步加载验证客户信息
$("#denglu").click(
  function(){
    var uname=username.value;
    var upwd=userpwd.value;
    sessionStorage.setItem('NAME',uname);
    //异步加载请求
    var data=`username=${uname}&userpwd=${upwd}`;
    //console.log(data);
    $.ajax({
      type: 'POST',
      url: 'php/denglu.php',
      data: data,
      success: function(result){
        if(result=='ok'){
          $("#modal").css("display","none");
          $("#deng").html(
            `<a href="#">欢迎回来 ${uname}</a>`
          );
        }else {
          alert('请重新登录！');
        }
      }
    });

  }
);


