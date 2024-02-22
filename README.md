<h1><center> MERN STACK APPLICATION </center></h1>

# Backend task
<p align="justify">✍ This project involves the creation of a suite of RESTful APIs designed to manage, analyze, and visualize transaction data. The goal is to build a robust backend system that can initialize a database with seed data from a third-party API, offer detailed transaction listings with search and pagination features, and provide insights through statistical analysis and chart data generation.</p>


### Data Source Initialization
   - <b style="color:black">Task:</b> Develop an API endpoint to seed the database with initial data.
   - <b style="color:black">Source:</b> Data will be fetched from <b style="color:black">https://s3.amazonaws.com/roxiler.com/product_transaction.json</b> using a GET request.
   - <b style="color:black">Details:</b> The API should parse the JSON response and populate the database accordingly, ensuring an efficient structure for future queries.
### List All Transactions
   - ##### Method: GET
   - ##### Features:
       - ###### Support search and pagination.
       - ###### Filter transactions based on search parameters (product title, description, price).
       - ###### Return all records for a given page number  
       - ###### Default pagination: page = 1, per page = 10.
### Generate Statistics
   - ##### Method: GET
   - ##### Output:
      - ###### Total sale amount for the selected month.
      - ###### Total number of sold items for the selected month.
      - ###### Total number of not sold items for the selected month.

### Chart Data APIs
   - ##### Method: GET
   - ##### <b style="color:black"> =Description:</b>  Create an API to provide data for a bar chart, including price ranges and the count of items within those ranges for the selected month, regardless of the year.
### Input Parameters:
   - ###### <p align="justify">All APIs should accept a month parameter, representing any month from January to December, and should compare this against the dateOfSale field in the data, regardless of the year.</p>


# Frontend task
<p align="justify">✍ This project showcases a detailed dashboard designed as a single-page application for visualizing transaction data. It connects with existing APIs to retrieve and exhibit details related to transactions, enabling users to conduct thorough analyses. The dashboard displays this information through a well-organized table and interactive charts, providing a clear and efficient way to understand transaction trends and patterns.</p>

### Click the Go Live button and see the live👉 [Go Live](https://frontend-with-vishalkumar.netlify.app/)

## Installation
- Install the required dependencies using npm install.
- Start the server using npm start.

## Folder Structure
   - #### public
   - #### src
        - #### components
           - ###### barChar
              - ###### barChar.css
              - ###### BarChart.js
           - ###### statistics
              - ###### statistics.css
              - ###### Statistics.js
           - ###### transactions 
              - ###### transactions.css
              - ###### Transactions.js
        - ##### App.css
        - ##### App.js
        - ##### index.css
        - ##### index.js
   - #### package.json
   - ##### README.md

## Features
   ### Transactions Table
   #### <b style="color:black">Data Fetching:</b> Utilizes the transactions listing API to populate the table with transaction records. 
   #### <b style="color:black">Month Selection:</b> Includes a dropdown to select a month (January to December), with March set as the default selection.
   #### <b style="color:black"> Dynamic Listing:</b> Displays transactions of the selected month across all years, fetched from the API.
   #### <b style="color:black">Search Functionality:</b> Allows searching for transactions by title, description, or price. Results are filtered based on the search query for the selected month.
   #### <b style="color:black">Pagination:</b> Supports navigation through the dataset with "Next" and "Previous" buttons, loading corresponding data via the API.

## Transactions Statistics
   #### <b style="color:black">Overview Boxes:</b> Showcases the total sales amount, total sold items, and total unsold items for the selected month, leveraging data from a dedicated API.
## Transactions Bar Chart
   #### <b style="color:black">Visual Representation:</b> Illustrates the distribution of transactions within different price ranges for the selected month, regardless of year, using data from the API.
   #### <b style="color:black">Consistent Month Selection:</b> Applies the same month selection from the dropdown above the table to the bar chart data.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
