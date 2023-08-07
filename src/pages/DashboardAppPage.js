import { Helmet } from 'react-helmet-async';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------
/* async function logMovies() {
  const response = await fetch('http://localhost:3001/dashboard/app');
  const movies = await response.json();
  console.log(movies);
} */

export default function DashboardAppPage() {
  const theme = useTheme();
  /*   const [sensorData, setSensorData] = useState([]);*/
  const fetchSensorData = () => {
    axios
      .get('http://localhost:8000/api/messageplus')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const datadata = fetchSensorData();
  console.log(datadata);

  useEffect(() => {
    fetchSensorData();
  }, []);

  /* console.log(logMovies()); */
  const mongoValues = [
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
  ];
  const earthMoist = [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 10];
  const airMoisture = [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 10];
  const airTemperature = [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 10];
  const highchartsOptions = {
    title: {
      text: 'U.S Solar Employment Growth',
      align: 'left',
    },

    subtitle: {
      text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
      align: 'left',
    },

    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2020',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: 'Installation & Developers',
        data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
      },
      {
        name: 'Manufacturing',
        data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050],
      },
      {
        name: 'Sales & Distribution',
        data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663],
      },
      {
        name: 'Operations & Maintenance',
        data: [null, null, null, null, null, null, null, null, 11164, 11218, 10077],
      },
      {
        name: 'Other',
        data: [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
  useEffect(() => {
    Highcharts.chart('container', highchartsOptions);
  }, [highchartsOptions]);
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back Yanfer
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Greenhouses" total={12} icon={'simple-icons:homeassistant'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Modules" total={100} color="info" icon={'simple-icons:esphome'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Plants" total={1000} color="warning" icon={'cil:plant'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Notes" total={'none'} color="error" icon={'ant-design:woman-outlined'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Module Overview"
              subheader="Quick gathering of the last 24 hours"
              chartLabels={
                mongoValues
                // Assuming it's a 24-hour format
              }
              chartData={[
                {
                  name: 'Earth Humidity',
                  type: 'line',
                  fill: 'solid',
                  data: earthMoist,
                },
                {
                  name: 'Air Temperature',
                  type: 'line',
                  fill: 'solid',
                  data: airTemperature,
                },
                {
                  name: 'Air Humidity',
                  type: 'line',
                  fill: 'solid',
                  data: airMoisture,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Pie yummy"
              chartData={[
                { label: 'Earth Humidity', value: 4344 },
                { label: 'Air Humidity', value: 5435 },
                { label: 'Air Temperature', value: 1443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <figure className="highcharts-figure">
              <div id="container" />
              <p className="highcharts-description">
                Basic line chart showing trends in temperature and humidity data.
              </p>
            </figure>
          </Grid>
        </Grid>
      </Container>
      <div>
        <button onClick={fetchSensorData}>getapi</button>
      </div>
      {/* <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Sensor Data
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ul>
              {sensorData.map((data) => (
                <li key={data.ID}>
                  Date Time: {data.DATE_TIME}, Temperature: {data.T}, Humidity: {data.RH}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
}
