<?php
header('Content-Type:application/json;charset=UTF-8');
@$uname=$_REQUEST['uname'];
@$pid=$_REQUEST['pid'];
//�ж��ύ���û����Ͳ�Ʒ����Ƿ�Ϊ��
if(!$uname||!$pid){
    echo "{}";
    return;//�˳���ǰҳ���ִ��
}
//���������json����
$output=[
    'msg'=>null,
    'uid'=>0,
    'cid'=>0,
    'pid'=>intval($pid),
    'count'=>0
];
//���ӷ�����
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
$output['uid']=$uid;
//�����û���Ų��ҹ��ﳵ���
$sql="select cid from cart where uid=$uid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
//�ж��Ƿ��й��ﳵ�����û�о�ִ����ӹ��ﳵ���
if($row){//��Ӧ�û��й��ﳵ
    $cid=$row['cid'];
}else{//��Ӧ�û�û�й��ﳵ
    $sql="insert into cart values(null,'$uid')";
    $result=mysqli_query($conn,$sql);
    $cid=mysqli_insert_id($conn);
}
$cid=intval($cid);
$output['cid']=$cid;
//���ݹ��ﳵ��źͲ�Ʒ��Ų���
$sql="select * from cartdeil where cid='$cid' and pid='$pid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
//�жϸ���Ʒ�Ƿ���ڣ���ִ�в���
if($row){//���������Ʒ
    $count=$row['count'];
    $sql="update cartdeil set count=count+1 where cid='$cid' and pid='$pid'";
    mysqli_query($conn,$sql);
}else{//û���������Ʒ
    $sql="insert into cartdeil values(null,'$cid','$pid',1)";
    mysqli_query($conn,$sql);
    $count=1;
}
$output['count']=$count;
//���
echo json_encode($output);