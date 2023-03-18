import React from 'react'



const MovieList= ({tittle,genre,year}) =>{





    return(
        
        <tr>
          <td>{tittle}</td>
          <td>{genre}</td>
          <td>{year}</td>
        </tr>
      
    )
}


export default MovieList;