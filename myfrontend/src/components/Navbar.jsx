import React, { useState } from 'react'

function Navbar() {

    const [animate, setAnimate] = useState(true)

   let circle = document.getElementsByClassName("circle")

    function transform(e){
        console.log(e.target.innerText)
        console.log(animate)
   if(animate){
for(let x = 0; x<circle.length; x++){

    if(circle[x].innerText=== e.target.innerText){
       circle[x].classList.add("dropbal")
       circle[x].classList.remove("upbal")
   
    }else {
     circle[x].classList.remove("dropbal") 
    
         circle[x].classList.add("upbal")
    } 
    
     
} 
      console.log(animate)
   }
          setAnimate(true)

    }
  

  return (
    <div>
<ul className='navbar'>
    <li>
        <div className='circle' onClick={transform} >
Home
        </div>
        
    </li>
   
    <li>
         <div className='circle' onClick={transform}> 
        
         Projects 
         </div>
    </li> 
    <li>
        <div className='circle' onClick={transform}>
            Contact
        </div>
        
    </li>
</ul>



    </div>
  )
}

export default Navbar