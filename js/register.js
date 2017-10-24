/**功能点1：对每个用户输入进行验证**/
  //用户名验证
$("#uname").focus(function(){
  $(this).next().html("用户名长度在6-9位之间")
    .addClass("msg-default")
    .removeClass("msg-success msg-error")
});
$('#uname').blur(function(){
  if(this.validity.valueMissing){
    $(this).next().html("用户名不能为空")
    .addClass("msg-error")
      .removeClass("msg-success");
  }else if(this.validity.tooShort){
    $(this).next().html("用户名不能少于6位")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else {
    $(this).next().html("用户名格式正确")
      .addClass("msg-success")
      .removeClass("msg-error");
  }
});
  //密码验证
$("#upwd").focus(function(){
  $(this).next().html("密码长度在6-12位之间")
    .addClass("msg-default")
    .removeClass("msg-success msg-error")
});
$('#upwd').blur(function(){
  if(this.validity.valueMissing){
    $(this).next().html("密码不能为空")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else if(this.validity.tooShort){
    $(this).next().html("密码不能少于6位")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else {
    $(this).next().html("密码格式正确")
      .addClass("msg-success")
      .removeClass("msg-error");
  }
});
//邮箱验证
$("#umail").focus(function(){
  $(this).next().html("请输入合法的邮箱地址")
    .addClass("msg-default")
    .removeClass("msg-success msg-error")
});
$('#umail').blur(function(){
  if(this.validity.typeMismatch){
    $(this).next().html("邮箱格式不正确")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else if(this.validity.valueMissing){
    $(this).next().html("邮箱不能为空")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else {
    $(this).next().html("邮箱格式正确")
      .addClass("msg-success")
      .removeClass("msg-error");
  }
});
//对年龄进行验证
$('#uage').blur(function(){
  if(this.validity.rangeOverflow){
    $(this).next().html("超过合法年龄")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else if(this.validity.rangeUnderflow){
    $(this).next().html("低于合法年龄")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else if(this.validity.valueMissing){
    $(this).next().html("年龄不能为空")
      .addClass("msg-error")
      .removeClass("msg-success");
  }else {
    $(this).next().html("年龄正确")
      .addClass("msg-success")
      .removeClass("msg-error");
  }
});


/**功能点2：实现异步的提交注册信息**/
$('#bt-register').click(function(){
  //表单序列化，获得所有的用户输入
  var data = $('#form-register').serialize();
  //异步提交请求数据
  $.ajax({
    type: 'POST',
    url: 'php/zhuce.php',
    data: data,
    success: function(result){
      if(result.msg=='succ'){
        $("#msg").css("display","block");
      }else {
        alert('注册失败！')
      }
    }
  });
})