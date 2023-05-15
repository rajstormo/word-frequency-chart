import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import { CSVLink } from "react-csv";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GetGraphData = () => {
  const [data, setData] = useState([]);

  const calculateWordFreq = (words) => {
    // calculate freq of words
    let freqencyOfWords = {};
    words.forEach((word) => {
      if (word in freqencyOfWords) freqencyOfWords[word]++;
      else freqencyOfWords[word] = 1;
    });

    //sort in descending order
    let sortedData = Object.entries(freqencyOfWords).sort(
      (a, b) => b[1] - a[1]
    );

    //take only the first 20 words
    sortedData = sortedData.slice(0, 20);
    return sortedData;
  };

  const extractWords = (text) => {
    // extract only the words
    const words = text
      .toLowerCase()
      .match(/[a-z'’]+/g)
      .toString()
      .split(",");

    const sortedData = calculateWordFreq(words);

    let result = [];
    sortedData.forEach((data) => {
      let obj = { word: data[0], freq: data[1] };
      result.push(obj);
    });

    setData(result);
  };

  const fetchData = async () => {
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();
    extractWords(text);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <BarChart chartData={data} />

};

const BarChart = ({ chartData }) => {
  const {isDarkMode, handleThemeChange} = useContext(ThemeContext);
  const data = {
    labels: chartData.map((item) => item.word),
    datasets: [
      {
        label: "Frequency",
        data: chartData.map((item) => item.freq),
        barPercentage: 0.8,
        backgroundColor: !isDarkMode
          ? ["#0E8388", "#19a7ce"]
          : ["#1355ff", "#57d3dd"],
      },
    ],
  };

  const options = {
    responsive: true,
    color: isDarkMode ? "#fff" : "#000",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Word Frequency",
        color: isDarkMode ? "#fff" : "#000",
        font: {
          size: 25,
          weight: "bold",
        },
      },
      
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkMode ? "#fff" : "#000",
          font: {
            size: 13,
            color: "#eee",
          },
        },
        title: {
          display: true, 
          text: "Words",
          color: isDarkMode ? "#fff" : "#000",
          font: {
            size: 16,
            weight: "bold"
          }
        }
      },

      y: {
        grid: {
          display: true,
          color: isDarkMode ? "gray" : "#eee",
        },
        ticks: {
          color: isDarkMode ? "#fff" : "#000",
          font: {
            size: 13,
            color: isDarkMode ? "#fff" : "#000",
          },
        },
        title: {
          display: true, 
          text: "Frequency",
          color: isDarkMode ? "#fff" : "#000",
          font: {
            size: 16,
            weight: "bold"
          },
          padding:15
        }
      },
    },
  };


  return (
    <div className="container">
      <div className="options-bar">
        <CSVLink data={chartData} className="csv-btn"> Export </CSVLink>
        <button
          onClick={handleThemeChange}
          className={isDarkMode ? "btn-dark" : "btn-light"}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <Bar
        data={data}
        options={options}
        className={`${isDarkMode && "bar-chart-dark"} bar-chart`}
      />
    </div>
  );
};

export default GetGraphData;
