import React from 'react'

document.addEventListener("DOMContentLoaded", () => {
    let allGenre=document.querySelectorAll('.gns');
    console.log(allGenre)
  });

const GenreFilter= ({gns}) =>{
    return(
        <div onClick={(e)=>{
            console.log(`Filtered by ${e.target.innerHTML}`)
        }} className='gns'>{gns}</div>
    )
}


export default GenreFilter;


// onClick={(e)=>console.log(e)}