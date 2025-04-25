import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";
// La importación anterior se evita con un "barrel file"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Piece' ]);
  
  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;
    
    setCategories([ newCategory, ...categories ]);
    // setCategories( categories.push('Valorant') ); // Esta no va bien
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories } 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      { 
        categories.map( (category) =>  (
          <GifGrid
            key={ category }
            category={ category }
          />
          
          // <div key={ category }>
          //   <h3>{ category }</h3>
          //   <li>{ category }</li>
          // </div>
        ))
      }
        
    </>
  )
}
