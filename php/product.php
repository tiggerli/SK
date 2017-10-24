<?php
header('Content-Type:application/json;charset=UTF-8');
//连接数据库
include('config.php');
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
$sql="set names utf8";
mysqli_query($conn,$sql);
$sql="select * from product";
$result=mysqli_query($conn,$sql);
$plist=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($plist);