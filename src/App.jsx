
import Header from './Components/Header';
import Banner from './Components/Banner';
import OurRecipes from './Components/OurRecipes';
import Recipes from './Components/Recipes';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';
const App = () => {
  const [recipeQueue,setRecipeQueue]=useState([]);
  const [prepareRecipe,setPrepareRecipe]=useState([]);
  const [totalTime,setTotalTime]=useState(0);
  const [totalCalories,setTotalCalories]=useState(0);


  const calculateTimeAndCalories=(time,calories)=>{
    setTotalTime(totalTime+time)
    setTotalCalories(totalCalories+calories)

  }

  const addRecipeQueue= recipe=>{
    const isExist= recipeQueue.find(previousRecipe=>previousRecipe.recipe_id===recipe.recipe_id)
    if (!isExist){setRecipeQueue([...recipeQueue,recipe])}
    else{
      alert("Recipe already chosen before.")
    }
  }
  const handleRemove=id=>{
    // which one to remove
    const deleteRecipe=recipeQueue.find(recipe=> recipe.recipe_id===id)
    // remove from want to cook
    const updatedQueue=recipeQueue.filter(recipe=>recipe.recipe_id!==id)
    setRecipeQueue(updatedQueue)
    setPrepareRecipe([...prepareRecipe,deleteRecipe])
  }

  return (
    <div className='container mx-auto px-4'>
      <Header>
      </Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      {/* Recipe Card section */}
      <section className='flex flex-col md:flex-row gap-6'>
        {/* Cards Sections */}
        <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar handleRemove={handleRemove}
         recipeQueue={recipeQueue}
         prepareRecipe={prepareRecipe}
         calculateTimeAndCalories={calculateTimeAndCalories}
         totalTime={totalTime}
         totalCalories={totalCalories}></Sidebar>
      </section>
    </div>
  );
};

export default App;