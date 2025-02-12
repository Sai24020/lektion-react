import Image from "next/image";
import styles from "./cards.module.css";
import { Recipe } from "@/interfaces";

// function som returnerar jsx men används inte
// som komponent och har därför inga props
// som de övriga
const pills = (tagNames: string[]) => {
  return (
    <ul role="list" className={styles.tags}>
      {tagNames.map((tag, index) => (
        <li className={styles.tag} key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

//komponent med props som gör listan med kort
export function CardList({ recipes }: { recipes: Recipe[] }) {
  return (
    <ul className={styles.cards} role="list">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

//komponent för ett kort som tar emot recipe som prop

// interface cardProps {
//   recipe: Recipe
// }
//export function Card(props: cardProps) {
//export function Card(props: {recipe: Recipe}) {
//  const recipe = props.recipe
export function Card({ recipe }: { recipe: Recipe }) {
  return (
    <li className={styles.card}>
      <h2>{recipe.name}</h2>
      <span>{recipe.servings} servings</span>
      <div>{pills(recipe.tags)}</div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={recipe.image}
          width={200}
          height={200}
          alt={`Bild ${recipe.name}`}
        />
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((instructions, index) => (
          <li key={index}>{instructions}</li>
        ))}
      </ol>
    </li>
  );
}