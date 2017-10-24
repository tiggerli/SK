<?php
//修改响应消息头部
header('Content-Type:text/plain;charset=UTF-8');
$uname=$_REQUEST['username'];
$upwd=$_REQUEST['userpwd'];
//连接数据库
include('config.php');
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
$sql="set names utf8";
mysqli_query($conn,$sql);
$sql="select uid from user where uname='$uname' and upwd='$upwd'";
$result=mysqli_query($conn,$sql);
if($result){
  $row=mysqli_fetch_assoc($result);
  if($row){
    echo 'ok';
  }else{
  echo 'err';
  }
}else{
   echo 'sqlerr';
}