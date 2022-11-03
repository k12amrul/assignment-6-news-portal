
const loadAllCatagory = async () =>{
  // const res = await  fetch("https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a")
   const res = await  fetch("https://openapi.programming-hero.com/api/news/categories")
   const data =await res.json()
 //  console.log(data.data)
   return data.data.news_category
 }
 
 
 const setcatagory =async ()=>{
            
   const data =await loadAllCatagory()
 //  console.log(data)
  const setcatagory=document.getElementById('set-catagory')
  
  for(const catagory of data ){
   //  console.log(catagory)
   const div=document.createElement('div');
   div.innerHTML= `  
   <button  onclick="loadAllNews22('${catagory.category_id}')"> ${catagory.category_name}</button>
     `;
     //'${catagory.category_id}'
     //onclick="loadAllNews22('${catagory.category_id}')

 
     setcatagory.appendChild(div)
     
 
    // console.log(cata.category_name)
 
   }
 
 }
 //---------------------
 const loadAllNews22 = async id =>{
 //https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
   // https://openapi.programming-hero.com/api/news/category/01
 //const res = await  fetch(`https://openapi.programming-hero.com/api/news/category/01`)// cata.category_id  /{category_id}
 // const res = await  fetch('https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a')// cata.category_id  /{category_id}
 const res = await  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)// cata.category_id  /{category_id}
   const data =await res.json()
 
 
   console.log(data)//thumbnail_url
   setNews2(data)//thumbnail_url
// setNews2(data.data)//  .category_id  thumbnail_url//  [0].author  image_url
  //return data.data
  
  
 }
 //---------------------//-----------
 
 
 const setNews2 = async Newses=>{
   console.log(Newses.data)
   console.log(Newses)
   //console.log(Newses.data[0])

   //----------------------------------k
   const newsContainer = document.getElementById("news-container");
   Newses.data.forEach(singleNews => {
    const {author,details,image_url,title}=singleNews
    const {name,published_date}=author
    
  //  console.log(name,details)
   // console.log(singleNews)
    const newsCard = document.createElement("div");
    newsCard.classList.add("col");
    newsCard.innerHTML=`
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${image_url}"/></figure>
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <p>${details}</p>
          <h4 class="card-title">${name}</h4>
          <p>${published_date}</p>


          <div class="card-actions justify-end">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        
           
           
           


          </div>
        </div>
      </div>
    
    `;

    // modal button
    
    //     <button onclick="${published_date}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    // Launch demo modal
    // </button>

    // modal button
    newsContainer.appendChild(newsCard)


    
   });

   //------------------------------------k
// image_url details   author
  // for(const dd of Newses ){
  //   console.log(dd)
  // ///  console.log(dd.author.rating.thumbnail_url)
  //   // console.log(dd.author.image_url)
  //   // console.log(dd.author.name)
  //   // console.log(dd.author.img)
  // }
  //  console.log(Newses[0].author)
    // const newsArray=Newses
    // console.log(newsArray)
 //    N.forEach(news11 => {
 //    // console.log(newsArray)
     
 //   // console.log(news)
 //  });
 
   // for(const catagoryNewse in Newses ){
 
   //       console.log(catagoryNewse)
       
   //     }
 
 
 }
 
 //setNews2()
 //---------------------//-----------
 
 // const setNews =async ()=>{
   
 //   const data =await loadAllNews22()
 //   console.log(data)
 //   for(const catagoryNews of data ){
 
 //     console.log(catagoryNews.author)
   
 //   }
 // }
            
 
 //  setNews2()
    loadAllNews22()
 //------------------------
 
 loadAllCatagory()
 setcatagory()
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // git init
 // git add README.md
 // git commit -m "first commit"
 // git branch -M main
 // git remote add origin https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul.git
 // git push -u origin main
 
 // git add .
 // git commit -m "first commit"
 // git branch -M main
 // git push -u origin main
 
 // git remote add origin https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul.git
 // git branch -M main
 // git push -u origin main


//////////////////////////////////////////

// const loadAllCatagory = async () =>{
//   const res = await  fetch("https://openapi.programming-hero.com/api/news/categories")
//   const data =await res.json()
//   return data.data.news_category
// }


// const setcatagory =async ()=>{
           
//   const data =await loadAllCatagory()
// //  console.log(data)
//  const setcatagory=document.getElementById('set-catagory')
 
//  for(const catagory of data ){
//   const div=document.createElement('div');
//   div.innerHTML= `  
//   <button  onclick="loadAllNews('${catagory.category_id}')"> ${catagory.category_name}</button>
//     `;
    

//     setcatagory.appendChild(div)
    


//   }

// }
// //---------------------
// const loadAllNews = async id =>{
// const res = await  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)// cata.category_id  /{category_id}
//   const data =await res.json()


//   console.log(data)//thumbnail_url
//  setNews(data.data)
 
 
// }
// //---------------------//-----------


// const setNews = async Newses=>{
//    console.log(Newses)
//    const newsArray=Newses
//    console.log(newsArray)


// }

// setNews()
// //---------------------//-----------

//    loadAllNews()
// //------------------------

// loadAllCatagory()
// setcatagory()





// // https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul
// // https://silly-raindrop-d1eb5b.netlify.app/

// // git add .
// // git commit -m "first commit"
// // git branch -M main
// // git push -u origin main

















// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul.git
// git push -u origin main
