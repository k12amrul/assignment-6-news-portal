const loadAllCatagory = async () =>{
  const res = await  fetch("https://openapi.programming-hero.com/api/news/categories")
  const data =await res.json()
  return data.data.news_category
}


const setcatagory =async ()=>{
           
  const data =await loadAllCatagory()
//  console.log(data)
 const setcatagory=document.getElementById('set-catagory')
 
 for(const catagory of data ){
  const div=document.createElement('div');
  div.innerHTML= `  
  <button  onclick="loadAllNews('${catagory.category_id}')"> ${catagory.category_name}</button>
    `;
    

    setcatagory.appendChild(div)
    


  }

}
//---------------------
const loadAllNews = async id =>{
const res = await  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)// cata.category_id  /{category_id}
  const data =await res.json()


  console.log(data)//thumbnail_url
 setNews(data.data)
 
 
}
//---------------------//-----------


const setNews = async Newses=>{
   console.log(Newses)
   const newsArray=Newses
   console.log(newsArray)


}

setNews()
//---------------------//-----------

   loadAllNews()
//------------------------

loadAllCatagory()
setcatagory()





// https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul
// https://silly-raindrop-d1eb5b.netlify.app/

// git add .
// git commit -m "first commit"
// git branch -M main
// git push -u origin main

















// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul.git
// git push -u origin main
