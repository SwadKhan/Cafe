import React from 'react';

const Sidebar = ({recipeQueue,handleRemove,prepareRecipe,totalTime,calculateTimeAndCalories,totalCalories}) => {
    return (
        <div className='md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100'>
          {/* Want to Cook:   */}
          <div className="overflow-x-auto">
            <h2 className='border-b-w mx-auto font-semibold text-2xl text-center text-gray-600 pb-2'>Wants to Cook: {recipeQueue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {recipeQueue.map((recipe,index)=>(
         <tr className='hover' key={index}>
         <th>{index+1}</th>
         <td>{recipe.recipe_name}</td>
         <td>{recipe.preparing_time}</td>
         <td>{recipe.calories}</td>
         <td>
         <button className="bg-green-400 rounded-full px-2 py-1 md:px-4 md:py-2 my-2 text-grey-600  font-medium " onClick={()=>{
         handleRemove(recipe.recipe_id)
            calculateTimeAndCalories(recipe.preparing_time,recipe.calories)
         }}>preparing</button>
         </td>
      </tr>
     )
    )}
    </tbody>
  </table>
</div>
{/* currently Cooking */}
<div className="overflow-x-auto mt-8">
            <h2 className='border-b-w mx-auto font-semibold text-2xl text-center text-gray-600 pb-2'>Currently Cooking: {prepareRecipe.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {prepareRecipe.map((recipe,index)=>(
         <tr className='hover' key={index}>
         <th>{index+1}</th>
         <td>{recipe.recipe_name}</td>
         <td>{recipe.preparing_time}</td>
         <td>{recipe.calories}</td> 
        
      </tr>
     ))}

     <tr className='border-none'>
       <th></th> 
       <td></td>
       <td>Total Time = {totalTime} min</td>
       <td>Total Calories = {totalCalories} cal</td>
    </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Sidebar;