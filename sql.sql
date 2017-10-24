SET NAMES UTF8;
DROP DATABASE IF EXISTS sk;
CREATE DATABASE sk CHARSET=UTF8;
USE sk;

CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    umail VARCHAR(128),
    uage VARCHAR(16)
);
INSERT INTO user VALUES(
    NULL,'张三','123456789','macc@qq.com','25'
);
SELECT * FROM user;

CREATE TABLE product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(64),
    price FLOAT(10,2),
    pic VARCHAR(128)
);
INSERT INTO product VALUES
(1,'普拉达男士多色压纹牛皮手提包 公文包单肩包','11429','1.jpg'),
(2,'蔻驰达男士黑色十字纹纹牛皮手提包 公文包单肩包','11529','4.jpg'),
(3,'普拉达男士黑色尼龙手提包 公文包邮差包单肩包','13429','5.jpg'),
(4,'蔻驰达男士多色压纹牛皮手提包 公文包单肩包','11929','6.jpg'),
(5,'普拉达男士多色压纹牛皮手提包 公文包单肩包','11439','7.jpg'),
(6,'普拉达男士多色手提包 公文包单肩包','15629','8.jpg'),
(7,'蔻驰达男士多色牛皮手提包 公文包单肩包','1489','9.jpg'),
(8,'普拉达男士压纹牛皮手提包 公文包邮差包单肩包','11429','10.jpg'),
(9,'博柏利男士黑色织物、配皮经典手提包 公文包单肩包','11429','11.jpg'),
(10,'普拉达男士海军蓝手提包 公文包单肩包','71229','12.jpg'),
(11,'博柏利男士多色压纹牛皮手提包 公文包单肩包','13429','13.jpg'),
(12,'普拉达男士海军蓝手提包 公文包单肩包','11629','14.jpg'),
(13,'巴利男士 多色压纹牛皮手提包 公文包邮差包单肩包','16429','15.jpg'),
(14,'巴利达男士多色牛皮配经典条纹手提包 公文包单肩包','19329','16.jpg'),
(15,'蔻驰达男士多色压纹牛皮手提包 公文包斜挎包单肩包','11429','17.jpg'),
(16,'普拉达男士多色压纹牛皮手提包 公文包休闲包单肩包','12729','18.jpg'),
(17,'巴利男士多色压纹牛皮手提包 公文包休闲包单肩包','13929','19.jpg'),
(18,'普拉达男士小牛皮经典翻盖牛皮手提包 公文包单肩包','14429','20.jpg'),
(19,'蔻驰达男士小牛皮经典翻盖手提包 公文包邮差包休闲包单肩包','15829','21.jpg'),
(20,'蔻驰达男士多色压纹牛皮手提包 公文包邮差包单肩包','18729','22.jpg'),
(21,'普拉达男士小牛皮经典翻盖手提包 公文包休闲包单肩包','16229','23.jpg'),
(22,'巴利男士多色压纹牛皮手提包 公文包单肩包','21429','24.jpg'),
(23,'普拉达男士多色压纹牛皮手提包 公文包休闲包单肩包','17229','25.jpg'),
(24,'巴利男士多色压纹牛皮手提包 公文包休闲包单肩包','81429','26.jpg');

SELECT * FROM product;

CREATE TABLE cart(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    uid VARCHAR(32)
);
INSERT INTO cart VALUES(
    NULL,1
);
SELECT * FROM cart;

CREATE TABLE cartdeil(
    did INT PRIMARY KEY AUTO_INCREMENT,
    cid VARCHAR(32),
    pid VARCHAR(32),
    count VARCHAR(16)
);
INSERT INTO cartdeil VALUES(
    NULL,1,1,5
);
SELECT * FROM cartdeil;