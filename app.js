const loadAllCatagory = async () =>{
  const res = await  fetch("https://openapi.programming-hero.com/api/news/categories")
  const data =await res.json()
  //console.log(data)
  return data.data.news_category
}


const setcatagory =async ()=>{
           // console.log(loadAllNews2())
             // loadAllNews2()
             // .then(data =>console.log(data) )
  const data =await loadAllCatagory()
  console.log(data)
 const setcatagory=document.getElementById('set-catagory')

  for(const cata of data ){
  const div=document.createElement('div');
  div.innerHTML= `  
  <button onclick="setAllNews22('${cata.category_id}')"> ${cata.category_name}</button>
    `;//console.log('p')
  //  <button onclick="https://openapi.programming-hero.com/api/news/${cata.category_id}"> ${cata.category_name}</button>
    // <button onclick="https://openapi.programming-hero.com/api/news/${category_id}"> ${cata.category_name}</button>
    // <button onclick="https://openapi.programming-hero.com/api/news/${category_id}"> ${cata.category_name}</button$>

    setcatagory.appendChild(div)
    

   // console.log(cata.category_name)

  }

}
//---------------------
const loadAllNews22 = async (id) =>{

  // https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
//  https://openapi.programming-hero.com/api/news/category/01
// const res = await  fetch("https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a")
const res = await  fetch("https://openapi.programming-hero.com/api/news/category/{category_id}")
  const data =await res.json()


//   console.log(data.data)
  return data.data//.data.news_category

}

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