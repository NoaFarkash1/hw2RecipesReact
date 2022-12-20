import { render } from '@testing-library/react';
import React from 'react';
import FCRecipeCard from './FCRecipeCard';

function FCRecipes(props){
const counter = props.counter;

const removeRecipeFromRecipes =(name2Delete)=>{
    props.sendId2DeleteFromRecipes(name2Delete);
}

const AddRecipeFromRecipes =(name2Add)=>{
    console.log(name2Add)

    props.sendId2AddFromRecipes(name2Add);
}

    return(
        <div>
            <h3>Counter: {counter}</h3>  <br/>   
             <div className="recipesDiv" style={{display: "inline-flex"}}>
            {  
                props.recipesArr.map((recipe,ind)=> <FCRecipeCard recipe={recipe} sendId2AddFromCard={AddRecipeFromRecipes} sendId2DeleteFromCard={removeRecipeFromRecipes} btnText={props.btnText} key={ind}/>
                )
            }
            </div>
        </div>
    );

    }

export default FCRecipes;