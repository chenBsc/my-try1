import {Ingredient} from '../Clasess/Ingredient';
import {DishRecipe} from '../Clasess/DishRecipe';
import RecipeList from './RecipeList'; 
import React from 'react';

const ing0=new Ingredient(1,'Broccoli','https://www.health.harvard.edu/media/content/images/p7_Broccoli_HH1812_gi905351392.jpg',34);
const ing1=new Ingredient(2,'Nudels','https://upload.wikimedia.org/wikipedia/commons/a/a8/Fresh_ramen_noodle_001.jpg',22);
const recipe0=new DishRecipe(1,'Shakshuka',[ing0,ing1],18,'Learbev','https://img.mako.co.il/2020/06/14/MY_BEST_SHAKSHUKA_i.jpg');
const recipe1=new DishRecipe(2,'Marak',[ing0,ing1],98,' arbe yerakot','https://img.mako.co.il/2017/11/21/marak_yerakot1_i.jpg');
const recipe2=new DishRecipe(3,'shawarma',[ing0,ing1],100,'lahtoh','https://img.mako.co.il/2022/10/06/ShawarmaHeadline_M566_autoOrient_i.jpg');
const recipeList=[recipe0,recipe1,recipe2];
export default class MyKitchen extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            recipes:recipeList,
            recipesReady:[],
            counterReadyToEat:0
        }
    }
    AddOrDelete = (res,number) => 
    {
        let newCounter;
        let newEatList;
        let newRecipeList;

        if(number===1)
        {
         newCounter = this.state.counterReadyToEat + 1;
         newEatList=[...this.state.recipesReady,res];
         newRecipeList = this.state.recipes.filter(recipe => recipe.id !== res.id);
        }
      else
      {
         newCounter = this.state.counterReadyToEat - 1;
         newRecipeList = [...this.state.recipes,res];
         newEatList=this.state.recipesReady.filter(recipe => recipe.id !==res.id);
      }
      this.setState({ recipes: newRecipeList, counterReadyToEat:newCounter ,recipesReady:newEatList});

    }
    render(){
        return(
            <div >
    
            <RecipeList list={this.state.recipes} number={1}  counter={this.state.counterReadyToEat}xxx={this.AddOrDelete}/>
            <div>Number Of Ready Dishes:{this.state.counterReadyToEat}</div><br/> <br/>
            <RecipeList list={this.state.recipesReady}  number={2} counter={this.state.counterReadyToEat}  xxx={this.AddOrDelete}/>
            </div>
            );
        }
    }  
