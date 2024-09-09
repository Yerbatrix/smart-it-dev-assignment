# User Management App

This project is a **User Management App** that allows users to view, filter, and sort a list of users fetched from an external API. The app is built using **React**, **Redux** for state management, and **TypeScript**. It is styled using modern CSS techniques and follows responsive design principles to adapt to various screen sizes.

## Features

- **Filterable User List**: Users can filter the user list by `name`, `username`, `email`, or `phone`, with real-time updates.
- **Sortable Columns**: Users can sort the data by clicking on the respective column headers (name, username, email, phone). Sorting is available in both ascending and descending order.
- **API Integration**: Data is fetched from a public API (JSONPlaceholder) using `axios`, with error handling and loading states managed through Redux.
- **Notifications**: Utilizes `Notiflix` to display success or error notifications when fetching user data.
- **Responsive Design**: The layout is optimized for both desktop and mobile devices, ensuring a smooth user experience on different screen sizes.

## Project Structure

The project follows a modular structure, separating components, Redux state management, and styles. The primary sections are:

### Components

- **`Header.tsx`**: Displays the app's title.
- **`Footer.tsx`**: Displays the footer with links to LinkedIn and GitHub.
- **`UserTable.tsx`**: The main component displaying the user table with filters and sorting functionality.
- **`FilterInput.tsx`**: A reusable input component for filtering users.

### Redux

- **`userSlice.ts`**: Handles the fetching and storing of users from the API.
- **`filterSlice.ts`**: Manages the filter state for the user list.
- **`sortSlice.ts`**: Manages the sort state for the table columns.
- **`store.ts`**: Configures the Redux store, combining the user, filter, and sort reducers.

### Styles

- **`App.css`**: Global styles, including layout and background styling.
- **`Header.css`**: Styling for the header component.
- **`Footer.css`**: Styling for the footer component.
- **`UserTable.css`**: Styling for the user table, ensuring responsive and accessible design.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library used to manage global state.
- **TypeScript**: A superset of JavaScript that provides static typing.
- **Axios**: A promise-based HTTP client for API requests.
- **Notiflix**: A library used to display notifications.
- **CSS**: Styling language for defining the appearance and layout of the application.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Yerbatrix/user-management-app.git
   cd user-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at http://localhost:3000

Available Scripts
In the project directory, you can run:
npm start: Runs the app in development mode.
npm build: Builds the app for production to the build folder.

API
The application fetches data from the JSONPlaceholder API. This is a fake online REST API for testing and prototyping:

Users Endpoint: https://jsonplaceholder.typicode.com/users
Future Improvements
Pagination: Implement pagination to handle larger datasets more efficiently.
User Details Page: Enable clicking on a user to see more detailed information about them.
Unit Tests: Add unit tests to ensure component and Redux logic reliability.

Author
Developed by Rafal The Druid.
Explore more projects on GitHub.

License
This project is open source and available under the MIT License.

### Summary:

This README.md provides:

1. A detailed project overview and feature list.
2. Instructions for setting up and running the app.
3. Technical details about the libraries and tools used.
4. Future improvement suggestions.

Let me know if you'd like any further customizations!
