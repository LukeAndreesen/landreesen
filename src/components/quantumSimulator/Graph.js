import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ probs }) => {
  const data = {
    labels: ['000', '001', '010', '011', '100', '101', '110', '111'],
    datasets: [
      {
        label: 'States',
        data: probs,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: false, // Hide title
      },
    },
    layout: {
      padding: 0,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'State',
          color: '#F5F5F5',
          font: {
            size: 16, // Increase font size for x-axis title
          },
        },
        grid: {
          display: false, // Remove grid lines on x-axis
        },
        ticks: {
          color: 'white', // Change color of x-axis labels
          font: {
            size: 14, // Increase font size for x-axis labels
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Probability (%)',
          color: 'white',
          font: {
            size: 16, // Increase font size for y-axis title
          },
        },
        grid: {
          display: true, // Enable grid lines on y-axis
          color: 'rgba(255, 255, 255, 0.2)', // Change color of y-axis grid lines
        },
        ticks: {
          color: 'white', // Change color of y-axis labels
          font: {
            size: 14, // Increase font size for y-axis labels
          },
        },
        min: 0,
        max: 100, // Ensure y-axis always ranges from 0 to 100
      },
    },
  };

  return (
      <Bar data={data} options={options} />
  );
};

export default Graph;