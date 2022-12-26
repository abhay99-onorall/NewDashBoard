import ApexCharts from "apexcharts";
import React, { useEffect, useState } from "react";
import styles from "./DashChart.module.css";
import Chart from "react-apexcharts";
import { Data, Data2 } from "../../../Data/ChartData";


const DashChart = () => {
  const [amount, setAmount] = useState(Data?.map((items) => items.amount));
  const [xname, setXname] = useState(Data?.map((item) => item.name));
  const [coloring, setColoring] = useState(Data?.map((item) => item.color));
  const [learners, setLearners] = useState(Data2?.map((item) => item.learners));
  const [creators, setCreators] = useState(Data2?.map((item) => item.creators));
  const [month, setMonth] = useState(Data2?.map((item) => item.month));

  useEffect(() => {
    setAmount(Data?.map((items) => items.amount));
    setXname(Data?.map((item) => item.name));
    setColoring(Data?.map((item) => item.color));
  }, []);

  // console.log(amount, xname, coloring, learners, creators, month);

  var option = {
    chart: {
      height: 280,
      width: "100%",
      type: "area",
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 33],
      },
    ],
    xaxis: {
      dataLabels: {
        enabled: false,
      },
      categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan"],
      fill: {
        colors: ["#28C76F"],
      },
      markers: {
        colors: ["#28C76F"],
      },
      stroke: {
        curve: "smooth",
        colors: ["#28C76F"],
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            chart: {
              width: "100%",
            },
          },
        },
      ],
    },
  };

  var option2 = {
    series: amount,

    options: {
      chart: {
        width: "140%",
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      labels: xname,
      fill: {
        colors: coloring,
      },
      legend: {
        show: false,
      },

      markers: {
        colors: coloring,
      },
      filter: coloring,
      tooltip: {
        enabled: true,
        items: {
          backgroundColor: `${coloring}`,
        },
      },
    },
  };

  const series = [
    {
      name: "Learners",
      data: learners,
    },
    {
      name: "Creators",
      data: creators,
    },
  ];

  var option3 = {
    xaxis: {
      categories: month,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
    },
    fill: {
      colors: ["#A06CD5", "#FF0A36"],
    },
    stroke: {
      curve: "smooth",
      colors: ["#A06CD5", "#FF0A36"],
    },
    colors: ["#A06CD5", "#FF0A36"],
  };

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <div className={styles.info_card_container}>
          <div className={styles.box1}>Total</div>
          <div className={styles.box2}>
            <span className={styles.heading}>Creators</span>
            <span className={styles.number}>402+</span>
          </div>
          <div className={styles.box3}>
            <span className={styles.heading}>Creators</span>
            <span className={styles.number}>402+</span>
          </div>
          <div className={styles.box4}>
            <span className={styles.heading}>Creators</span>
            <span className={styles.number}>402+</span>
          </div>
        </div>
        <div className={styles.info_areamap_container}>
          <div className={styles.div1}>
            <div className={styles.span1}></div>
            <div className={styles.span2}>Revenue</div>
          </div>
          <div className={styles.div2}>
            <span>93.5M</span>
            {"     "}
            REVENUE GENERATED
          </div>
          <div className={styles.div3}>
            <Chart
              options={option.xaxis}
              series={option.series}
              type="area"
              width="110%"
              heigh="40%"
            />
          </div>
        </div>
        <div className={styles.info_donutchart_container}>
          <div className={styles.info_donutchart}>
            <Chart
              options={option2.options}
              series={option2.series}
              type="donut"
              width="95%"
              height="100%"
            />
          </div>
          <div className={styles.info_video_categories}>
            {Data.map((item) => {
              return (
                <div
                  className={
                    styles.info_video_categories_circle_title
                  }
                >
                  <span
                    style={{ backgroundColor: `${item.color}` }}
                    className={styles.info_video_categories_circle}
                  ></span>
                  <span className={styles.info_video_categories_title}>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.info2}>
        <div className={styles.multiple_charts_container}>
          <Chart options={option3} series={series} width="160%" type="area" />
        </div>
        <div className={styles.creator_dropdown}>
          <div className={styles.heading_container}></div>
          <div className={styles.content_container}></div>
        </div>
      </div>
    </div>
  );
};

export default DashChart;
