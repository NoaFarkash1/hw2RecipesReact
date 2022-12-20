import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FCRecipeCard(props) {
const recipe = props.recipe;
const btnText =props.btnText;

const removeRecipe =()=>{
  if(btnText ==="Prepare dish!"){
    props.sendId2DeleteFromCard(recipe.name);
  }
  else{
    props.sendId2AddFromCard(recipe.name);

  }
  
}

  return (
    <Card style={{ width: '50%', border:"solid black", padding:'10px', margin:'10px' }}>
      <Card.Img  variant="top" height={50} src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>
            {recipe.cookingMethod}
        </Card.Text>
        <Button variant="primary" onClick={removeRecipe}>{btnText}</Button> 
      </Card.Body>
    </Card>
  );
}

export default FCRecipeCard;