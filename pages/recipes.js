import Link from 'next/link'
import { Container, Button } from 'semantic-ui-react'
import RecipeCard from '../components/RecipeCard'

import { firebaseApp } from "../firebase/index"
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'

const firestore = getFirestore(firebaseApp)
const q = query(collection(firestore, "recipes"))

export const getStaticProps = async () => {
  let recipes = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    recipes = [...recipes, doc.data()]

  })
  return {
    props: { recipes }
  }
}

const Recipes = ({ recipes = [] }) => {
  return (
    <Container id="recipes-page-container">
      <div id="recipe-page-body">
        <div id="recipe-edit-pane">
          <br />
          <Button>{'Add Recipe'}</Button>
          <Button>Clear Recipe</Button>
          <Button>Delete Recipe</Button>
        </div>
        <div id="recipe-list-pane">
          {
            recipes.length === 0 ?
              null :
              recipes.map((recipe, i) => <h1 key={i}><RecipeCard recipe={recipe} /> </h1>)
          }
        </div>
      </div>
    </Container>
  );
}

export default Recipes;