create database bmdb;

CREATE USER bmusr;
SET PASSWORD FOR bmusr=PASSWORD('********');
GRANT ALL PRIVILEGES ON `bmdb`.* TO 'bmusr';

use bmdb;

-- table definetion
create table band (
    id                    int unsigned NOT NULL PRIMARY KEY,
    overview              TEXT(100),                   -- 概要
    icon_id               int unsigned,                -- アイコンid
    introduction          TEXT(20000),                 -- 紹介文
    leader_user_id        int unsigned NOT NULL,       -- リーダユーザID
    member1_user_id       int unsigned,                -- メンバー1ユーザID
    member2_user_id       int unsigned,                -- メンバー2ユーザID
    member3_user_id       int unsigned,                -- メンバー3ユーザID
    member4_user_id       int unsigned,                -- メンバー4ユーザID
    member5_user_id       int unsigned,                -- メンバー5ユーザID
    member6_user_id       int unsigned,                -- メンバー6ユーザID
    member7_user_id       int unsigned,                -- メンバー7ユーザID
    member8_user_id       int unsigned,                -- メンバー8ユーザID
    member9_user_id       int unsigned,                -- メンバー9ユーザID
    status_id             int unsigned,                -- ステータスID (募集中、募集停止中)
    activity_area         TEXT(200),                   -- 活動エリア
    activity_direction_id int unsigned,                -- 活動方向性(プロ、アマチュア)
    activity_date         TEXT(200),                   -- 活動日程
    online_flg            int unsigned,                -- オンライン・オフライン フラグ
    youtube_url           TEXT(20000),                 -- youtube URL
    soundcloud_url        TEXT(20000),                 -- soundcloud URL
    band_url              TEXT(20000),                 -- バンド URL
    genre                 TEXT(200),                   -- ジャンル
    rule_age              TEXT(10),                    -- 年齢制限
    rule_sex              TEXT(20),                    -- 性別
    recruitment_part      TEXT(100),                   -- 募集パート
    create_date           datetime                     -- 作成日
);

create table band_user (
    id                    int unsigned NOT NULL PRIMARY KEY,
    pswd                  TEXT(200),
    nm                    TEXT(100), 
    icon_id               int unsigned,                -- アイコンid
    part                  TEXT(100),                   -- パート
    hope_to_join_flg      int unsigned,                -- 加入希望フラグ
    like_genre            TEXT(200),                   -- 好きなジャンル
    like_artist           TEXT(200),                   -- 好きなアーティスト
    activity_area         TEXT(200),                   -- 活動エリア
    activity_direction_id int unsigned,                -- 活動方向性(プロ、アマチュア)
    activity_date         TEXT(200),                   -- 活動日程
    youtube_url           TEXT(20000),                 -- youtube URL
    soundcloud_url        TEXT(20000),                 -- soundcloud URL
    user_url              TEXT(20000),                 -- ユーザ URL
    introduction          TEXT(20000),                 -- 紹介文
    last_login_date       datetime,                    -- 最終ログイン
    create_date           datetime                     -- 作成日
);

create table band_htj (                                -- hope_to_join
    band_id               int unsigned NOT NULL,
    htj_user_id           int unsigned NOT NULL,
    msg                   TEXT(200),
    create_date           datetime                     -- 作成日
);

create table band_htj_msg (
    band_id               int unsigned NOT NULL,
    htj_user_id           int unsigned NOT NULL,
    msg_seq               int unsigned NOT NULL,
    sender_user_id        int unsigned NOT NULL,
    msg                   TEXT(1000),
    create_date           datetime                     -- 作成日
);

create table band_msg (
    band_id               int unsigned NOT NULL,
    msg_seq               int unsigned NOT NULL,
    sender_user_id        int unsigned NOT NULL,
    msg                   TEXT(1000),
    create_date           datetime                     -- 作成日
);

-- test data


SHOW GRANTS FOR pgusr;
show tables;
show columns from band;
desc table_name;
show databases;
