import React, { Component } from "react";
import { dishRecipeData } from "../Assets/dishRecipeData";
import { ingredientsData } from "../Assets/ingredientData";
import FCRecipeCard from "../Functional Components/FCRecipeCard";
import FCRecipes from "../Functional Components/FCRecipes";

const InitDoneRecipes = [
  ]; 
let InitRecipes =[];
InitRecipes = InitRecipes.concat(dishRecipeData); 

export default class CCMyKitchen extends Component{
    constructor(props){
        super(props);
        this.ingredients =[];
        this.state = {
            recipes:InitRecipes,
            doneRecipes:InitDoneRecipes,
            counter: InitDoneRecipes.length,
            counterOriginal: InitRecipes.length
        }
        this.ingredients = this.ingredients.concat(ingredientsData);//add ingredients to the array from assets inngredients- dont need
    }

    changeRecipes = (name2Del) => {
     let recipe = this.state.recipes.find((element) => {
        return element.name === name2Del;
      })

      
        //Remove from recipe array
        let tmpArray = this.state.recipes.filter( item => item.name !== name2Del);//Make new array without the removed recipe
        let tmpCounterOriginal = this.state.counterOriginal -1;
        console.log(tmpArray);
        this.setState({ recipes: tmpArray, counterOriginal:tmpCounterOriginal });//Set and change the state

        //Add to doneArray
        let newCounter = this.state.counter + 1;//Increasing the array of prepared recipes
        let tmpArrayDone = [...this.state.doneRecipes, recipe];//Adding the recipe to the set of prepared recipes
        this.setState({ doneRecipes: tmpArrayDone, counter: newCounter });//Updating the old array in the array with the new recipe
        
        }

        returnRecipe = (name2Add) => {
          let recipe = this.state.doneRecipes.find((element) => {
            return element.name === name2Add;
          })
            //Removal from the set of ready-to-eat recipes
            let tmpArrayDone = this.state.doneRecipes.filter( item => item.name !== name2Add);//Make new array without the removed recipe
            console.log(tmpArrayDone);
            let newCounter = this.state.counter - 1;
            this.setState({ doneRecipes: tmpArrayDone, counter: newCounter});//Set and change the state
            
            //Added to the original set of recipes
            let tmpArrayPrepare = [...this.state.recipes, recipe];//Adding the recipe to the set of prepared recipes
            let tmpCounterOriginal = this.state.counterOriginal +1;
            this.setState({ recipes: tmpArrayPrepare, counterOriginal:tmpCounterOriginal});//Updating the old array in the array with the new recipe
        }

        render() {
            return (                
             <div>   
                <FCRecipes recipesArr ={this.state.recipes} sendId2DeleteFromRecipes={this.changeRecipes} btnText ="Prepare dish!" counter={this.state.counterOriginal} /> 
                <FCRecipes recipesArr ={this.state.doneRecipes} sendId2AddFromRecipes={this.returnRecipe} btnText="Eat!" counter={this.state.counter}/> 
              </div>
            );
          }
    }


