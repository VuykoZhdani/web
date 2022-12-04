package main

import (
	
	"github.com/gin-gonic/gin"
	"errors"
	"net/http"

	"strconv"
)

type hotel struct {
	ID			int `json:"id"`
	Header 		string `json:"header"`
	stars 		string `json:"stars"`
	Country 	string `json:"country"`
	Text		string `json:"text"`
	Price 		int `json:"price"`
	Img			string `json:"img"`
}

var hotels = []hotel{
  {
      ID:1,
      Header: "hotel",
      stars: "5",
      Country: "Ukraine",
      Price: 2000,
      Img: "https://1.bp.blogspot.com/-mKIdMWZR_-U/T3a3cR4Wp0I/AAAAAAAAGQc/kpyhXbnJ5BI/s1600/hotelbara-02.JPG",
  },
  {
      ID:2,
      Header: " hotel",
      stars: "fe5",
      Country: "Ukraine",
      Price: 4000,
      Img: "https://i.pinimg.com/736x/47/af/c6/47afc6e240c7945286915a7dce20a4f8.jpg",
  },
  {
      ID:3,
      Header: " hotel",
      stars: "5",
      Country: "Germany",
      Price: 6000,
      Img: "https://img.cooljapan-videos.com/r/400x250/files/articles/9zx7h1ej/thumbnail/bae0c1de0cf2e3dbbec309eb786b4c85.jpg.webp",
  },
  {
      ID:4,
      Header: "hotel",
      stars: "5",
      Country: "China",
      Price: 8000,
      Img: "https://preview.redd.it/t39iuxswmiy71.jpg?auto=webp&s=14c7dd007e57f7c134185301a99d6157a45c80e2",
  },
  {
      ID:5,
      Header: " hotel",
      stars: "5",
      Country: "China",
      Price: 10000,
      Img: "https://preview.redd.it/ua3tudoh8ay41.jpg?auto=webp&s=dd31f7eec768ab039e6ee6cea85aad35ba2af6ca",
  },
  {
      ID:6,
      Header: "hotel",
      stars: "fe5",
      Country: "USA",
      Price: 10000,
      Img: "https://pbs.twimg.com/media/E9QjKmHVoAM-Wc8?format=jpg&name=360x360",
  },
  {
	ID:7,
	Header: "hotel",
	stars: "5",
	Country: "USA",
	Price: 1000,
	Img: "https://i.kym-cdn.com/photos/images/newsfeed/002/237/356/00a.jpg",
},

}

func gethotels(context *gin.Context){
	context.IndentedJSON(http.StatusOK, hotels)
}

func addhotel(context *gin.Context){
	var newhotel hotel

	if err := context.BindJSON(&newhotel); err !=nil{
		return
	}

	hotels = append(hotels, newhotel)

	context.IndentedJSON(http.StatusCreated, newhotel)
}

func gethotelById(id int) (*hotel, error){
	for i, t:= range hotels{
		if t.ID == id {
			return &hotels[i], nil
		}
	}

	return nil, errors.New("hotel not found")
}

func gethotel(context *gin.Context){
	id, err := strconv.Atoi(context.Param("id"))
	hotel, err := gethotelById(id)

	if err != nil{
		context.IndentedJSON(http.StatusNotFound, gin.H{"message":"To do not found"})
		return
	}

	context.IndentedJSON(http.StatusOK, hotel)
}

// func togglehotelStatus(context *gin.Context){
// 	id := context.Param("id")
// 	todo, err := getTodoById(id)

// 	if err != nil{
// 		context.IndentedJSON(http.StatusNotFound, gin.H{"message":"To do not found"})
// 		return
// 	}

// 	todo.Completed = !todo.Completed

// 	context.IndentedJSON(http.StatusOK, todo)
// }
func filteredhotels(stars string, country string , c *gin.Context){
	var newhotels []hotel;
	for i, t:= range hotels{
		if t.stars == stars && t.Country == country{
			newhotels = append(newhotels, hotels[i])
		}
	}
	c.IndentedJSON(http.StatusOK, newhotels)
}
func filteredhotelsBystars(stars string, c *gin.Context){
	var newhotels []hotel;
	for i, t:= range hotels{
		if t.stars == stars {
			newhotels = append(newhotels, hotels[i])
		}
	}
	c.IndentedJSON(http.StatusOK, newhotels)
}
func filteredhotelsByCountry(country string , c *gin.Context){
	var newhotels []hotel;
	for i, t:= range hotels{
		if t.Country == country{
			newhotels = append(newhotels, hotels[i])
		}
	}
	c.IndentedJSON(http.StatusOK, newhotels)
}
func main() {
	router := gin.Default()
	router.GET("/hotels", gethotels)
	router.GET("/hotels/filters", func(c *gin.Context){
		stars := c.Query("stars")
		country := c.Query("country")
		if( stars == "None" && country == "None"){
			gethotels(c)
		} else if stars == "None"{
			filteredhotelsByCountry(country, c)
		}else if country == "None"{
			filteredhotelsBystars(stars, c)
		}else {
			filteredhotels(stars, country, c)
		}
		
		
	})
	router.GET("/hotels/:id", gethotel)
	
	//router.PATCH("/hotels/:id", toggleToDoStatus)
	router.POST("/hotels", addhotel)
	router.Run("localhost:8090")
}