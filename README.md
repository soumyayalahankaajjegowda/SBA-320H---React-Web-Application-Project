# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# SBA-320H---React-Web-Application-Project


# Movie App

A React-based web application to search and favorite movies using The Movie Database (TMDb) API.

## Technologies Used
- **React**: For building the UI with components and hooks.
- **React Router**: For navigation between Home and Favorites pages.
- **Context API**: For managing the favorites state.

- **TMDb API**: const API_KEY = "c09720d50160ea7d43ecc2ab28e96f05";
const BASE_URL = "https://api.themoviedb.org/3";
 External data source for movie information.

- **CSS**: For styling components.

- **localStorage**: For persisting favorites across sessions.

## Approach
The app fetches popular movies on load using the TMDb API and displays them in a grid. Users can search for movies by title, add them to a favorites list (stored in localStorage), and view favorites on a separate page. Pagination is implemented to browse multiple pages of results, with a loading spinner and no-results message enhancing the UX.

## Live Site
[]

## Usage
1. On the Home page, view popular movies or search for a specific title.
2. Click the heart icon (♥) on a movie card to add/remove it from favorites.
3. Use the "Previous" and "Next" buttons to navigate pages of movies.
4. Visit the Favorites page to see your saved movies.




Approach Taken
Planning:

Determined the key features of the application.
Created a layout wireframe for the UI.
Selected OMDb API as the data source for the project.
Development:

Frontend: Built using HTML, CSS, and React.js for a responsive and interactive UI.
AJAX Calls: Utilized fetch to make asynchronous requests to the OMDb API and render data dynamically.
State Management: Managed UI state using React's built-in hooks like useState and useEffect.
Deployment:

Hosted the project on Netlify for live access.