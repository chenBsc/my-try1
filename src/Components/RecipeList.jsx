
import RecipeCard from './RecipeCard'
export default function SomeList(props)
{
        let RecipesArr = props.list.map((Recipe) =>
        <RecipeCard res={Recipe}
        key={props.id}
        number={props.number}  
        counter={props.counter}
        sendNewList={props.xxx}
        />);
    return(
        <div style={{minHeight:'200px' ,border:'1px solid white' , width: '100%' }}>
               {RecipesArr}
        </div>
        );

}

