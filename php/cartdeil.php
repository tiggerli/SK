<?php
header('Content-Type:application/json;charset=UTF-8');
$uname=$_REQUEST['uname'];
include('config.php');
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
//���ñ��뷽ʽ
$sql="set names utf8";
mysqli_query($conn,$sql);
//�����û��ύ��uname�����û����
$sql="select uid from user where uname='$uname'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$uid=intval($row['uid']);
//�����û���Ų��ҹ��ﳵ���
$sql="select cid from cart where uid=$uid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$cid=$row['cid'];
$cid=intval($cid);
//���ݹ��ﳵ��Ų������еĲ�Ʒ
$sql="select did,cid,cartdeil.pid,count,pname,price,pic from cartdeil,product where cid='$cid' and cartdeil.pid=product.pid";
$result=mysqli_query($conn,$sql);
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);
