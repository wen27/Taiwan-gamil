<template>
  <!-- <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Daily Sales</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Email Subscription</h4>
            <p class="category">Last Campaign Performance</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 10 days ago
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Completed Tasks</h4>
            <p class="category">Last Campaign Performance</p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              campaign sent 26 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Revenue</p>
            <h3 class="title">$34,245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">Used Space</p>
            <h3 class="title">
              49/50
              <small>GB</small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Get More Space...</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Fixed Issues</p>
            <h3 class="title">75</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Tracked from Github
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Folowers</p>
            <h3 class="title">+245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div> 
  </div>-->

    <!-- <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">COVID-19 DATA</h1>
      </div>
    </div> -->
    <div class="row" v-if="arrPositive.length > 0">
      <div class="col">
        <h2 class="text-center">Positive</h2>
        <line-chart
          :chartData="arrPositive"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Positive"
        />
      </div>
    </div>

    <!-- <div class="row mt-5" v-if="arrHospitalized.length > 0">
      <div class="col">
        <h2 class="text-center">Hospitalized</h2>
        <line-chart
          :chartData="arrHospitalized"
          :options="chartOptions"
          :chartColors="hospitalizedChartColors"
          label="Hospitalized"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrInIcu.length > 0">
      <div class="col">
        <h2 class="text-center">In ICU</h2>
        <line-chart
          :chartData="arrInIcu"
          :options="chartOptions"
          :chartColors="inIcuColors"
          label="In ICU"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrOnVentilators.length > 0">
      <div class="col">
        <h2 class="text-center">On Ventilators</h2>
        <line-chart
          :chartData="arrOnVentilators"
          :options="chartOptions"
          :chartColors="onVentilatorsColors"
          label="On Ventilators"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrRecovered.length > 0">
      <div class="col">
        <h2 class="text-center">Recovered</h2>
        <line-chart
          :chartData="arrRecovered"
          :options="chartOptions"
          :chartColors="recoveredColors"
          label="Recovered"
        />
      </div>
    </div> -->

    <!-- <div class="row mt-5 mb-5">
      <div class="col">
        <h2 class="text-center">Deaths</h2>
        <line-chart
          v-if="arrDeaths.length > 0"
          :chartData="arrDeaths"
          :options="chartOptions"
          :chartColors="deathColors"
          label="Deaths"
        />
      </div>
    </div> -->

  
</template>

<script>
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import LineChart from "../pages/LineChart";
// import {
//   StatsCard,
//   ChartCard,
//   NavTabsCard,
//   NavTabsTable,
//   OrderedTable,
// } from "@/components";

export default {
  components: {
    // StatsCard,
    // ChartCard,
    // NavTabsCard,
    // NavTabsTable,
    // OrderedTable,
    LineChart,
  },
  data() {
    return {
      // dailySalesChart: {
      //   data: {
      //     labels: ["M", "T", "W", "T", "F", "S", "S"],
      //     series: [[12, 17, 7, 17, 23, 18, 38]],
      //   },
      //   options: {
      //     lineSmooth: this.$Chartist.Interpolation.cardinal({
      //       tension: 0,
      //     }),
      //     low: 0,
      //     high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      //     chartPadding: {
      //       top: 0,
      //       right: 0,
      //       bottom: 0,
      //       left: 0,
      //     },
      //   },
      // },
      // dataCompletedTasksChart: {
      //   data: {
      //     labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
      //     series: [[230, 750, 450, 300, 280, 240, 200, 190]],
      //   },

      //   options: {
      //     lineSmooth: this.$Chartist.Interpolation.cardinal({
      //       tension: 0,
      //     }),
      //     low: 0,
      //     high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      //     chartPadding: {
      //       top: 0,
      //       right: 0,
      //       bottom: 0,
      //       left: 0,
      //     },
      //   },
      // },
      // emailsSubscriptionChart: {
      //   data: {
      //     labels: [
      //       "Ja",
      //       "Fe",
      //       "Ma",
      //       "Ap",
      //       "Mai",
      //       "Ju",
      //       "Jul",
      //       "Au",
      //       "Se",
      //       "Oc",
      //       "No",
      //       "De",
      //     ],
      //     series: [
      //       [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
      //     ],
      //   },
      //   options: {
      //     axisX: {
      //       showGrid: false,
      //     },
      //     low: 0,
      //     high: 1000,
      //     chartPadding: {
      //       top: 0,
      //       right: 5,
      //       bottom: 0,
      //       left: 0,
      //     },
      //   },
      //   responsiveOptions: [
      //     [
      //       "screen and (max-width: 640px)",
      //       {
      //         seriesBarDistance: 5,
      //         axisX: {
      //           labelInterpolationFnc: function (value) {
      //             return value[0];
      //           },
      //         },
      //       },
      //     ],
      //   ],
      //   // this is char js
      // },
       arrPositive: [],
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
      arrHospitalized: [],
      hospitalizedChartColors: {
        borderColor: "#251F47",
        pointBorderColor: "#260F26",
        pointBackgroundColor: "#858EAB",
        backgroundColor: "#858EAB"
      },
      arrInIcu: [],
      inIcuColors: {
        borderColor: "#190B28",
        pointBorderColor: "#190B28",
        pointBackgroundColor: "#E55381",
        backgroundColor: "#E55381"
      },
      arrOnVentilators: [],
      onVentilatorsColors: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "#BBE5ED"
      },
      arrRecovered: [],
      recoveredColors: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#31E981",
        backgroundColor: "#31E981"
      },
      arrDeaths: [],
      deathColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: "#402A2C"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  async created () {
    const { data } = await this.$http.get("https://covidtracking.com/api/us/daily");
  
  data.forEach(d => {
    const date = moment(d.date, "YYYYMMDD").format("MM/DD");
  
    const {
      positive,
      hospitalizedCurrently, 
      inIcuCurrently,
      onVentilatorCurrently,
      recovered,
      death
    } = d;
    this.arrPositive.push({ date, total: positive });
     this.arrHospitalized.push({
     date, total: hospitalizedCurrently 
    });
    this.arrInIcu.push({ date, total: inIcuCurrently });
    this.arrOnVentilators.push({ 
      date, total: onVentilatorCurrently 
    });
    this.arrRecovered.push({ date, total: recovered });
    this.arrDeaths.push({ date, total: death });
  });
  }
};
</script>
