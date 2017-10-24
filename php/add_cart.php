<?php
header('Content-Type:application/json;charset=UTF-8');
@$uname=$_REQUEST['uname'];
@$pid=$_REQUEST['pid'];
//判断提交的用户名和产品编号是否为空
if(!$uname||!$pid){
    echo "{}";
    return;//退出当前页面的执行
}
//创建输出的json数组
$output=[
    'msg'=>null,
    'uid'=>0,
    'cid'=>0,
    'pid'=>intval($pid),
    'count'=>0
];
//连接服务器
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
$output['uid']=$uid;
//根据用户编号查找购物车编号
$sql="select cid from cart where uid=$uid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
//判断是否有购物车，如果没有就执行添加购物车语句
if($row){//对应用户有购物车
    $cid=$row['cid'];
}else{//对应用户没有购物车
    $sql="insert into cart values(null,'$uid')";
    $result=mysqli_query($conn,$sql);
    $cid=mysqli_insert_id($conn);
}
$cid=intval($cid);
$output['cid']=$cid;
//根据购物车编号和产品编号查找
$sql="select * from cartdeil where cid='$cid' and pid='$pid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
//判断该商品是否存在，并执行操作
if($row){//购买过该商品
    $count=$row['count'];
    $sql="update cartdeil set count=count+1 where cid='$cid' and pid='$pid'";
    mysqli_query($conn,$sql);
}else{//没购买过该商品
    $sql="insert into cartdeil values(null,'$cid','$pid',1)";
    mysqli_query($conn,$sql);
    $count=1;
}
$output['count']=$count;
//输出
echo json_encode($output);