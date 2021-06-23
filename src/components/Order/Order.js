
import classes from './Order.module.css';

const order=props=>{

    const ingredients=[]

    for(let ingredientname in props.ingredients)
    {
        ingredients.push(
            {
                name:ingredientname,
                amount:props.ingredients[ingredientname]

            }
        );
    }

    const ingOutput=ingredients.map(ig=>{
        return <span 
        style={{
            textTransform:"capitalize",
            display:'inline-block',
            margin:'0 8px',
            padding: '5px',
            border: '1px solid #ccc' 
        }}
        key={ig.name}>{ig.name} ({ig.amount}) </span>
    });
    
    return(
        <div className={classes.Order}>
            <p> Ingredients : {ingOutput}</p>
            <p> <strong> USD {props.price.toFixed(2)}</strong></p>
        </div>
    
    );

}

export default order;