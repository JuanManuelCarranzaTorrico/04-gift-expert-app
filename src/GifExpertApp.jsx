import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman']);

    const onAddCategory=(cat) =>{
        if(categories.includes(cat)) return;
        setCategories([cat, ...categories ]);

    }

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>
    {/* input */}
    <AddCategory 
    //setCategories={setCategories} 
    onNewCategory={(event)=>onAddCategory(event)}
    />


    {/* Listado de gif */}

        { categories.map((category) => (
               <GifGrid key={category} category={category}/>
        ))
        }

    {/* <button onClick={onAddCategory}>Agregar</button> */}

        {/* Gif Item */}
    </>
  )
}
