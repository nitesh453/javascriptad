//document obeject model
/* get the element in html */
//getElementById
//getElementByTags
//

  /* const heading = document.getElementById('heading')
    console.log(heading); 
   const heading = document.getElementsByTagName('h1');
   console.log(heading[0]);  //written html collaction
   
  //getElementByClassName
    const heading = document.getElementsByClassName('heading')
    console.log(heading[1]);
    
  //querySelector
    const heading = document.querySelector('.heading') 
    console.log(heading); //this target the first heading
  //querySelectorAll
    var eading = document.querySelectorAll('.heading')  
    console.log(eading);
    */

 // Traversal DOM
 
  //childNode
   // const child = document.querySelector('.parent')
     //console.log(child.childNodes);
  
  //parentNodes
    //const   parent = document.querySelector('.child') 
      // console.log(parent.parentNode);

  //nextElementSibling
       // const sub = document.querySelector('.child')
       // console.log(sub.nextElementSibling);

 //priviousElementSibling
        //const prev = document.querySelector('.child')
        //console.log(prev.previousElementSibling); //they focus on first

  
 // Manipulation
     /* const heading = document.querySelector('.heading')     
       heading.innerHTML = 'hello web dev';
       heading.style.color = 'red';
       heading.style.fontSize = '50px'
       heading.classList.add('title')
       heading.classList.remove('title')
       
     //append class
     
     const heading = document.createElement('h1')
      heading.innerHTML = 'javascript is awesome';
      const parent = document.querySelector('.append');
      parent.appendChild(heading);

      const sub = document.createElement('h3')
       sub.innerHTML = 'web dev'
       heading.insertAdjacentElement('beforeEnd',sub)

    */

   
 // dom event
 
   /*   const para = document.querySelector('#para')
    const btn = document.querySelector('#btn')

    btn.addEventListener('click', function(){
        para.style.fontSize = '100px'
       para.style.color = 'purple'
       para.style.border ='2px solid black'
       para.style.borderRadius = '10px'
       para.style.textAlign = 'center'
       para.style.backgroundColor = 'lightgray'
    })
   */
  
  //api
  
    const root = document.querySelector('#root')
    const btn = document.querySelector('button')
    function createitem(item) {
      //card
      const card = document.createElement('div')
      card.classList.add('card');

      //photo
       const photo = document.createElement('img')
       photo.src = item.thumbnailUrl;
      //title
       const title = document.createElement('h4')
       title.innerHTML = item.title;

       card.appendChild(photo);
       card.appendChild(title);
       root.appendChild(card);
    }
      function displayimage(item){
        
           item.forEach(function(item) {
                createitem(item);
           })
        
      }
      btn.addEventListener('click', function(){
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((item) =>{
          displayimage(item);
        })
      })
   



