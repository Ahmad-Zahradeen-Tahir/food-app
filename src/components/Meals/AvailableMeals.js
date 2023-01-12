import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Grilled Chicken',
    description: 'Spicy finger licking good chicken',
    price: 5000.00,
  },
  {
    id: 'm2',
    name: 'Chicken Pizza',
    description: 'An Italian specialty',
    price: 5200.00,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 3500.00,
  },
  {
    id: 'm4',
    name: 'Chicken Salad',
    description: 'Healthy...and green...',
    price: 2500.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
