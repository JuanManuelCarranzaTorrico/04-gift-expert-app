import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman','Superman']);

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
    <ol>
        { categories.map((category, i) => {
            return <li key={i}> {category}</li>
        })}
    </ol>
    {/* <button onClick={onAddCategory}>Agregar</button> */}

        {/* Gif Item */}
    </>
  )
}
