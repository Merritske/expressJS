import React from 'react'

function navbar() {
      let circle = document.getElementsByClassName("circle")
    function transform(){
   
        circle = circle[0]
        circle.classList.add("dropbal")

    }
  
    circle = circle[0]
circle.classList.remove("dropbal")
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

export default navbar