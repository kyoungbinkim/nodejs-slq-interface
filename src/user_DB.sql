-- database 생성
DROP DATABASE IF EXISTS user_DB;
CREATE DATABASE user_DB;

USE user_DB;

-- table 생성
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    idx int(11) unsigned NOT NULL AUTO_INCREMENT,
    id varchar(32) NOT NULL,
    pw  varchar(64) NOT NULL,
    email varchar(128) NOT NULL,
    PRIMARY KEY (idx),
    UNIQUE (id),
    UNIQUE (email)
);

-- 계정 권한 추가
USE mysql;
create user IF NOT EXISTS 'nodejs_sql'@'localhost' identified by 'node_sql1580`';
FLUSH privileges;

GRANT ALL privileges ON `user_DB`.* TO 'nodejs_sql'@'localhost';