<?php
header('Content-Type:text/plain;charset=UTF-8');
$did=$_REQUEST['did'];
include('config.php');
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
//���ñ��뷽ʽ
$sql="set names utf8";
mysqli_query($conn,$sql);
//�����û��ύ��uname�����û����
$sql="delete from cartdeil where did='$did'";
$result=mysqli_query($conn,$sql);
if($result){
echo "succ";
}
