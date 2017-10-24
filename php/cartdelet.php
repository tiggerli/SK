<?php
header('Content-Type:text/plain;charset=UTF-8');
$did=$_REQUEST['did'];
include('config.php');
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
//设置编码方式
$sql="set names utf8";
mysqli_query($conn,$sql);
//根据用户提交的uname查找用户编号
$sql="delete from cartdeil where did='$did'";
$result=mysqli_query($conn,$sql);
if($result){
echo "succ";
}
