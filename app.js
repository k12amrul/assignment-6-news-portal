
const loadAllCatagory = async () =>{
   const res = await  fetch("https://openapi.programming-hero.com/api/news/categories")
   const data =await res.json()
  //  console.log(data.data.news_category)
   return data.data.news_category
 }
 
 
 
 const setcatagory =async ()=>{
            
   const data =await loadAllCatagory()
 //  console.log(data)
  const setcatagory=document.getElementById('set-catagory')
  
  for(const catagory of data ){
    //  console.log(catagory)
    //  console.log(data)
   const catagoryItem=document.createElement('div');
   catagoryItem.innerHTML= `  
   <button  onclick="loadAllNews22('${catagory.category_id}')"> ${catagory.category_name}</button>
     `;
    
 
     setcatagory.appendChild(catagoryItem)
     
 
    
 
   }
 
 }
 //---------------------
 const loadAllNews22 = async id =>{
 const res = await  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)// cata.category_id  /{category_id}
   const data =await res.json()
 
   console.log(data)//thumbnail_url
 
   setNewscontainer(data)//thumbnail_url
// 
  
 }
 //---------------------//-----------
 const setNewscontainer = async Newses=>{
   console.log(Newses)
   console.log(Newses.data)
   //console.log(Newses.data[0])

   //----------------------------------k
   const newsContainer = document.getElementById("news-container");

   newsContainer.textContent = '';
   Newses.data.forEach(singleNews => {
    const {total_view, author,details,image_url,title}=singleNews
    const {   img ,name,published_date}=author

    // const oldcard =document.getElementsByClassName('col')
    // newsContainer.removeChild(oldcard)
    // modal
    
    // modal
  
    const newsCard = document.createElement("div");
    
    newsCard.classList.add("col");

   
    newsCard.innerHTML=`
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${image_url}"/></figure>
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <p>${details}</p>
          <div > 
          <div class=" w-10 h-10 rounded-lg">
    <img src=${img}/>
  </div>
          <h4 class="card-title">${name}</h4>
          <p>${published_date}</p>
          </div>
          <p> views ${total_view}</p>

          <button onClick={'hhh'}>hh</button>

<label for="my-modal-6" class="btn">open modal</label>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <div class=" w-20 h-20 rounded-lg">
  <img src=${img}/>
</div>

    <h3 class="font-bold text-lg"> ${name } </h3>
    <p> ${ published_date }</p>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>

          

 
        </div>
      </div>
    
    `;
    // newsContainer.removeChild()
    newsContainer.appendChild(newsCard)


    
   });

   
 
 }
 
 //setNews2()
 //---------------------//-----------
 
    loadAllNews22()
 //------------------------
 
//  loadAllCatagory()
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
