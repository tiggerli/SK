<?php
header('Content-Type:application/json;charset=UTF-8');
$uname=$_REQUEST['uname'];
include('config.php');
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
//设置编码方式
$sql="set names utf8";
mysqli_query($conn,$sql);
//根据用户提交的uname查找用户编号
$sql="select uid from user where uname='$uname'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$uid=intval($row['uid']);
//根据用户编号查找购物车编号
$sql="select cid from cart where uid=$uid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$cid=$row['cid'];
$cid=intval($cid);
//根据购物车编号查找其中的产品
$sql="select did,cid,cartdeil.pid,count,pname,price,pic from cartdeil,product where cid='$cid' and cartdeil.pid=product.pid";
$result=mysqli_query($conn,$sql);
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);
