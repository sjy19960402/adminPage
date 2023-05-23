// chart colors
var colors = [
  "rgba(151, 103, 253, 0.85)",
  "#f5f5ff",
  "#333",
  "#fff",
  "#dc3545",
  "#6c757d",
];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
  labels: ["7:00", "10:00", "13:00", "16:00", "19:00", "22:00", "24:00"],
  datasets: [
    {
      label: "매장주문수",
      data: [0, 10, 5, 35, 12, 18, 22],
      backgroundColor: "transparent",
      borderColor: colors[0],
      borderWidth: 4,
      pointBackgroundColor: colors[0],
    },
    {
      label: "배달주문수",
      data: [, 2, 22, 4, 10, 20, 38],
      backgroundColor: colors[3],
      borderColor: colors[1],
      borderWidth: 4,
      pointBackgroundColor: colors[1],
    },
  ],
};

if (chLine) {
  new Chart(chLine, {
    type: "line",
    data: chartData,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
}

//bar chart
var ctxB = document.getElementById("barChart").getContext("2d");
var myBarChart = new Chart(ctxB, {
  type: "bar",
  data: {
    labels: [
      "양념치킨",
      "간장치킨",
      "콜라",
      "단짠치킨세트",
      "페퍼로니피자",
      "고구마피자",
    ],
    datasets: [
      {
        label: "오늘의 베스트 메뉴",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
