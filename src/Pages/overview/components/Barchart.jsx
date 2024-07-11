import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
  const data = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        label: "",
        data: [5000, 10000, 10000, 15000, 20000, 25000, 30000],
        backgroundColor: "black",
        borderColor: "",
        borderRadius: 5,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false,
        text: "Custom Bar Chart",
      },
      tooltip: {
        enabled: false, // Disable the default tooltip
        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.background = "transparent";
            tooltipEl.style.color = "black";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.transform = "translate(-50%, 0)";
            tooltipEl.style.transition = "all .1s ease";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set Text
          if (tooltipModel.body) {
            const bodyLines = tooltipModel.body.map((b) => b.lines);
            const innerHtml = bodyLines[0];

            tooltipEl.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.opacity = 1;
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY - 30 + "px"; // Adjusted to move the tooltip above the bar
          tooltipEl.style.fontFamily = "leagueSpartan"; // Custom font family
          tooltipEl.style.fontSize = "1rem"; // Custom font size
          tooltipEl.style.marginBottom = "10px"; // Add margin bottom
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return data.labels[index].toUpperCase();
          },
          color: "primary",
          font: {
            size: 10,
            family: "leagueSpartan",
          },
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Barchart;
