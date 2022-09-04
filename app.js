const loadAllCatagory = async () =>{
 // const res = await  fetch("https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a")
  const res = await  fetch("https://openapi.programming-hero.com/api/news/categories")
  const data =await res.json()
  console.log(data.data)
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
 //return data.data
 
 
}
//---------------------//-----------

const setNews2 = Newses=>{
  console.log(Newses)

  for(const catagoryNewse in Newses ){

        console.log(catagoryNewse)
      
      }


}

setNews2()
//---------------------//-----------

// const setNews =async ()=>{
  
//   const data =await loadAllNews22()
//   console.log(data)
//   for(const catagoryNews of data ){

//     console.log(catagoryNews.author)
  
//   }
// }
           

 // setNews()
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