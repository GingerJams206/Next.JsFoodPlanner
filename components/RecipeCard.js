export const getStaticProps = async (context) => {

}

const RecipeCard = ({ recipe = {} }) => {
  return (
    <div className="recipe-card">
      <h2 className="card-title">{recipe?.title}</h2>
      <span className="card-description">{recipe?.description}</span>
    </div>
  )
}

export default RecipeCard;