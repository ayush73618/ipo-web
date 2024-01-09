import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const API_KEY = "sk_30fd4380631243f3a6858b896703722f";
  const symbol = "AAPL";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${API_KEY}`
        );
        const data = response.data;
        const labels = data.map((item) => item.label);
        const values = data.map((item) => item.value);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Your Chart Title",
              data: values,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("myChart");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: chartData,
        options: {},
      });
    }
  }, [chartData]);

  return (
    <div className="chart-container">
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default ChartComponent;
