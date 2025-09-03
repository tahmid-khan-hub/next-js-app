import MealSearchInput from "./components/MealSearchInput";

export default async function Meals({ searchParams }) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      {/* search field */}
      <div>
        <MealSearchInput></MealSearchInput>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {meals.map((meal) => {
          return (
            <div className="border p-2">
              <p className="text-xl mb-3">{meal?.strMeal}</p>
              <p>{meal?.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
