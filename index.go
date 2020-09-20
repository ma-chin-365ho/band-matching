package main
import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
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

    r.Run()
}
