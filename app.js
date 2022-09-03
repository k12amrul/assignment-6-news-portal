const loadAllNews2 = async () =>{
  const res = await  fetch("https://openapi.programming-hero.com/api/news/categories")
  const data =await res.json()
  //console.log(data)
  return data.data.news_category
}


const setcatagory =async ()=>{
           // console.log(loadAllNews2())
             // loadAllNews2()
             // .then(data =>console.log(data) )
  const data =await loadAllNews2()
 // console.log(data)
 const setcatagory=document.getElementById('set-catagory')
  for(const cata of data ){
  const div=document.createElement('div');
    div.innerHTML= `
    <button onclick="console.log('p')"> ${cata.category_name}</button$>
    `;
    setcatagory.appendChild(div)
    

   // console.log(cata.category_name)

  }




}

loadAllNews2()
setcatagory()




















// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul.git
// git push -u origin main



// git remote add origin https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-k12amrul.git
// git branch -M main
// git push -u origin main