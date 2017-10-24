<?php
//修改响应消息头部
header('Content-Type:application/json;charset=UTF-8');
$uname=$_REQUEST['username'];
$upwd=$_REQUEST['userpwd'];
$umail=$_REQUEST['usermail'];
$uage=$_REQUEST['userage'];
//连接数据库
include('config.php');
$conn=mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);
$sql="set names utf8";
mysqli_query($conn,$sql);
$sql="insert into user values(null,'$uname','$upwd','$umail','$uage')";
$result=mysqli_query($conn,$sql);
$output=[];
if($result){
    $output['msg']='succ';
    $output['uid']=mysqli_insert_id($conn);
}else{
    $output['msg']='err';
}
echo json_encode($output);