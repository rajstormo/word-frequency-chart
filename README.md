
# Word Frequency Bar Chart

This is a React project that displays a bar chart representing the frequency of words extracted from a text file. The component fetches data from the [Terribly Tiny Tales](https://www.terriblytinytales.com/test.txt) API, calculates the word frequency, and visualizes it using the Chart.js library.

## Features

- Fetches text data from the Terribly Tiny Tales API
- Extracts words from the text and calculates word frequency
- Displays a bar chart representing the word frequency
- Supports dark and light themes
- Provides an option to export the chart data to a CSV file

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd word-frequency-chart
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the application.


## Components Involved 
The application consists of two main components:

- App: This is the main component where all the other components are being rendered. Here, I am using React ContextAPI to manage the theme globally across the other components. Also, I have used the React Router to implement routing in the page.

- SubmitPage: This component basically contains a submit button and on the click of it the *GetGraphData* component loads which further calls *BarChart* component to display the chart.

- GetGraphData: This component handles the fetching part. It gets the text in response and then basically it is extracting the words out of it and also sorting it on the basis of their frequency. The application uses React Router to handle routing between these components. By default, when you open the application, you will be directed to the SubmitPage component.

- BarChart: This component uses the data of words sorted according to their frequency(highest to lowest) received from the *GetGraphData* component to plot a histogram using the *react-chartjs-2* library.

## Theming
The application supports both dark and light themes. The theme can be toggled using the "Dark Mode" or "Light Mode" button. The theme selection is managed using the ThemeContext provided by the App component.

## Libraries Used

This component was built using the following libraries:

- [React](https://reactjs.org/)
- [Chart.js](https://www.chartjs.org/)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [react-csv](https://www.npmjs.com/package/react-csv)
- [React Router](https://reactrouter.com/en/main)

## Deployed on Firebase
**https://word-freq-chart-terribly.web.app/**

