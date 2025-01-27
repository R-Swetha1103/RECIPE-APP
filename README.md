# Recipe App

This is a simple React-based Recipe App that allows users to search for recipes, view recipe details, and manage their favorite recipes.

## Features

- **Recipe List**: Search and filter recipes by categories like "Vegetarian" and "Gluten-Free".
- **Recipe Details**: View detailed information about each recipe, including ingredients and instructions.
- **Favorite Recipes**: Add recipes to your favorites and view them separately.
- **Loading Animation**: A loading GIF is displayed before the content fully loads.

## Components

### RecipeList

- Displays a list of recipes.
- Search functionality to filter recipes by name.
- Category filter to display specific types of recipes.
- Visuals:
  - Fancy background using a repeated image.
  - Heading using the Lobster font and accent colors for icons.

### RecipeDetails

- Shows detailed information about a selected recipe.
- Displays ingredients, instructions, preparation time, and serving size.
- Uses a loading state to display a loading animation before showing content.

### Favourites

- Displays all favorite recipes added by the user.
- Initial loading animation before displaying content.
- Allows navigation back to the main recipe list or home page.

## API

This application fetches recipe data from [TheMealDB API](https://www.themealdb.com/), which provides a database of meal recipes and details. 

- **Endpoints Used**: 
  - List of recipes based on search criteria.
  - Specific recipe details using recipe IDs.

## UI/UX Design

The application features a clean and modern design with:

- Consistent color scheme: Dark blue background with complementary yellow accents.
- Use of Lobster font for headings.
- User interface components like buttons are styled for both aesthetic appeal and usability.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing the app's state.
- React Router: For routing and navigation between pages.
- Axios: For making API calls to fetch data.
- CSS & Inline Styles: Used for styling components.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

