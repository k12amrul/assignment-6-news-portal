const loadAllNews1 = () =>{
    const url='https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
    .then(res => res.json())  //[0].category_name
   // .then(data =>  displayCatagory(data.data.news_category))ory[0].category_name,data.data.news_category.category_id))
   // .then(data =>  displayCatagory(data.data.news_categ
   //  .then(data => displayCatagory(data.data.news_category.news_category))//data.data.news_category[0].category_id
     .then(data => displayCatagory(data.data.news_category))//data.data.news_category[0].category_id
    console.log(data)

    

    // for (data1 of data){
    //     console.log(data1)


    // }
    // console.log(category_name)

    // data.forEach(element => {
    //   console.log(element)
      
    // });
    
  }
 // const displaymeals = meals =>{
  const displayCatagory= catagory1 =>{
        console.log(catagory1)
        
        
      //   catagory1.forEach(element => {
      //         console.log(element)
              
      //       });


    
  }
 displayCatagory()

 loadAllNews1()