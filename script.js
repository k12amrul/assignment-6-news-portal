// const loadAllNews22 = async (id) =>{

//       // https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
//     //  https://openapi.programming-hero.com/api/news/category/01
//     // const res = await  fetch("https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a")
//     const res = await  fetch("https://openapi.programming-hero.com/api/news/category/{category_id}")
//       const data =await res.json()


//    //   console.log(data.data)
//       return data.data//.data.news_category

//     }

    const setAllNews = async  ()=>{
      const data = await loadAllNews22()
      console.log(data)
      for(const news of data ){
            console.log(news.category_id)
            
      }  

    }



    setAllNews()
    //loadAllNews()