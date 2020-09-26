package main
import (
    "time"
 //   "os"
    "net/http"
    "github.com/gin-gonic/gin"
 //   "database/sql"
    _ "github.com/go-sql-driver/mysql"
 //   "encoding/json"
)

type Band struct {
    Id                    int       `json:"id"`
    Overview              string    `json:"overview"`
    Icon_id               int       `json:"icon_id"`
    Introduction          string    `json:"introduction"`
    Leader_user_id        int       `json:"leader_user_id"`
    Member1_user_id       int       `json:"member1_user_id"`
    Member2_user_id       int       `json:"member2_user_id"`
    Member3_user_id       int       `json:"member3_user_id"`
    Member4_user_id       int       `json:"member4_user_id"`
    Member5_user_id       int       `json:"member5_user_id"`
    Member6_user_id       int       `json:"member6_user_id"`
    Member7_user_id       int       `json:"member7_user_id"`
    Member8_user_id       int       `json:"member8_user_id"`
    Member9_user_id       int       `json:"member9_user_id"`
    Status_id             int       `json:"status_id"`
    Activity_area         string    `json:"activity_area"`
    Activity_direction_id int       `json:"activity_direction_id"`
    Activity_date         string    `json:"activity_date"`
    Online_flg            int       `json:"online_flg"`
    Youtube_url           string    `json:"youtube_url"`
    Soundcloud_url        string    `json:"soundcloud_url"`
    Band_url              string    `json:"band_url"`
    Genre                 string    `json:"genre"`
    Rule_age              string    `json:"rule_age"`
    Rule_sex              string    `json:"rule_sex"`
    Recruitment_part      string    `json:"recruitment_part"`
    Create_date           string    `json:"create_date"`
}

type Band_user struct {
  Id                    int       `json:"id"`
  Pswd                  string    `json:"pswd"`
  Nm                    string    `json:"nm"`
  Icon_id               int       `json:"icon_id"`
  Part                  string    `json:"part"`
  Hope_to_join_flg      int       `json:"hope_to_join_flg"`
  Like_genre            string    `json:"like_genre"`
  Like_artist           string    `json:"like_artist"`
  Activity_area         string    `json:"activity_area"`
  Activity_direction_id int       `json:"activity_direction_id"`
  Activity_date         string    `json:"activity_date"`
  Youtube_url           string    `json:"youtube_url"`
  Soundcloud_url        string    `json:"soundcloud_url"`
  User_url              string    `json:"user_url"`
  Introduction          string    `json:"introduction"`
  Last_login_date       string    `json:"last_login_date"`
  Create_date           string    `json:"create_date"`
}

type Band_htj struct {
  Band_id               int       `json:"band_id"`
  Htj_user_id           int       `json:"htj_user_id"`
  Msg                   string    `json:"msg"`
  Create_date           string    `json:"create_date"`
}

type Band_htj_msg struct {
  Band_id               int       `json:"band_id"`
  Htj_user_id           int       `json:"htj_user_id"`
  Msg_seq               int       `json:"msg_seq"`
  Sender_user_id        int       `json:"sender_user_id"`
  Msg                   string    `json:"msg"`
  Create_date           string    `json:"create_date"`
}

/*
type Test struct {
  Test string `json:"test"`
  Abc string `json:"abc"`
}
*/

func webServer() {
  r := gin.Default()

  r.Static("./static", "./static")
  r.LoadHTMLGlob("html/*")

  // page
  r.GET("/landing", func(c *gin.Context) {
    c.HTML(http.StatusOK, "landing.html", gin.H{})
  })
  r.GET("/search", func(c *gin.Context) {
    c.HTML(http.StatusOK, "search.html", gin.H{})
  })
  r.GET("/message", func(c *gin.Context) {
    c.HTML(http.StatusOK, "message.html", gin.H{})
  })
  r.GET("/hopetojoin", func(c *gin.Context) {
    c.HTML(http.StatusOK, "hope_to_join.html", gin.H{})
  })
  r.GET("/profile", func(c *gin.Context) {
    c.HTML(http.StatusOK, "profile.html", gin.H{})
  })

  // JSON
  r.GET("/bands", func(c *gin.Context) {

    var bands []Band
    var band Band
    
    band = Band {
      Id                    :0         ,
      Overview              :"string"  ,
      Icon_id               :0         ,
      Introduction          :"string"  ,
      Leader_user_id        :0         ,
      Member1_user_id       :0         ,
      Member2_user_id       :0         ,
      Member3_user_id       :0         ,
      Member4_user_id       :0         ,
      Member5_user_id       :0         ,
      Member6_user_id       :0         ,
      Member7_user_id       :0         ,
      Member8_user_id       :0         ,
      Member9_user_id       :0         ,
      Status_id             :0         ,
      Activity_area         :"string"  ,
      Activity_direction_id :0         ,
      Activity_date         :"string"  ,
      Online_flg            :0         ,
      Youtube_url           :"string"  ,
      Soundcloud_url        :"string"  ,
      Band_url              :"string"  ,
      Genre                 :"string"  ,
      Rule_age              :"string"  ,
      Rule_sex              :"string"  ,
      Recruitment_part      :"string"  ,
      Create_date           :"string"  ,
    }

    bands = append(bands, band)
    bands = append(bands, band)
    bands = append(bands, band)
    bands = append(bands, band)

/*
    test := Test {
      Test : "aaaaaa"  ,
      Abc  : "bbbbbbb" ,
    }
*/

    c.JSON(http.StatusOK, bands)
  })
  r.GET("/bandusers", func(c *gin.Context) {

    var band_users []Band_user
    var band_user Band_user
    
    band_user = Band_user {
      Id                    :0            ,
      Pswd                  :"string"     ,
      Nm                    :"string"     ,
      Icon_id               :0            ,
      Part                  :"string"     ,
      Hope_to_join_flg      :0            ,
      Like_genre            :"string"     ,
      Like_artist           :"string"     ,
      Activity_area         :"string"     ,
      Activity_direction_id :0            ,
      Activity_date         :"string"     ,
      Youtube_url           :"string"     ,
      Soundcloud_url        :"string"     ,
      User_url              :"string"     ,
      Introduction          :"string"     ,
      Last_login_date       :"string"     ,
      Create_date           :"string"     ,
    }

    band_users = append(band_users, band_user)

    c.JSON(http.StatusOK, band_users)
  })
  r.GET("/bandhtjs", func(c *gin.Context) {

    var band_htjs []Band_htj
    var band_htj Band_htj
    
    band_htj = Band_htj {
      Band_id               : 0    ,
      Htj_user_id           : 0    ,
      Msg                   : "string" ,
      Create_date           : "string" ,
    }

    band_htjs = append(band_htjs, band_htj)

    c.JSON(http.StatusOK, band_htjs)
  })
  r.GET("/bandhtjmsgs", func(c *gin.Context) {

    var band_htj_msgs []Band_htj_msg
    var band_htj_msg Band_htj_msg
    
    band_htj_msg = Band_htj_msg {
      Band_id               : 0    ,
      Htj_user_id           : 0    ,
      Msg_seq               : 0    ,
      Sender_user_id        : 0    ,
      Msg                   : "string" ,
      Create_date           : "string" ,
    }

    band_htj_msgs = append(band_htj_msgs, band_htj_msg)

    c.JSON(http.StatusOK, band_htj_msg)
  })
  r.Run()
}


func main() {
  /*
	var dbusr string
	var dbpass string
	var dbnm string

	dbusr = os.Getenv("DB_USER")
	dbpass = os.Getenv("DB_PASS")
	dbnm = os.Getenv("DB_DTBS")
  */

	go webServer()

	for {time.Sleep(time.Second)}
}
