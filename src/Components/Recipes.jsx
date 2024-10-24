import  { useEffect, useState } from 'react';


const Recipes = ({addRecipeQueue}) => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('recipe.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[]) 

    return (
        <div className='md:w-2/3
        '>
     <div className='grid grid-col-1 lg:grid-cols-2 gap-6'>
  
         {
            recipes.map(recipe=>(
                <div key={recipe.recipe_id} className="card bg-base-100 border-2 shadow-lg">
                <figure className='px-8 pt-6'>
                  <img className='md:h-52 w-full rounded-xl'
                    src={recipe.recipe_image}
                    alt="recipe image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl text-grey-800 font-bold">{recipe.recipe_name}</h2>
                  <p className='text-gray-600 text-base'>{recipe.short_description}</p>
                  <h3 className='text-lg text-grey-800 font-medium'>
                    Ingredients: {recipe.ingredients.length}
                  </h3>
                  <ul className='ml-8'>
                   {recipe.ingredients.map((item,index)=><li className='list-disc text-grey-800' key={index}>{item}
                    </li>)}
                  </ul>
                  <div className='flex gap-4'>
                    <div className='flex item-center'>
                      <i className='fa-regular fa-clock mr-2 text-2xl'></i>
                      <p>{recipe.preparing_time} minutes</p>
                    </div>
                    <div className='flex item-center'>
                      <i className='fa-solid fa-fire-flame-curved mr-2 text-2xl'></i>
                      <p>{recipe.calories} calories</p>
                    </div>
                  </div>
                  <div className="card-actions justify-center">
                    <button className="btn bg-green-400 rounded-full px-8 text-xl text-grey-600 mt-8 font-medium " onClick={()=>addRecipeQueue(recipe)}>Want to Cook</button>
                  </div>
                </div>
              </div>
            ))
         }  
        </div>
     </div>

      
    );
   
};



export default Recipes;