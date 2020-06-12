<template>
  <GChart
    :settings="{packages: ['bar']}"    
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'ChartComponent',
  components: {
    GChart
  },
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Search Metrics',
          subtitle: 'gtihub searches'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google
    }
  }
}
</script>
