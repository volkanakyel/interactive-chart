<template>
  <div ref="chart"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'BarChart',
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const data = [10, 15, 30, 40, 20];
      const svg = d3.select(this.$refs.chart)
        .append('svg')
        .attr('width', 400)
        .attr('height', 300);

      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 80)
        .attr('y', d => 300 - 10 * d)
        .attr('width', 50)
        .attr('height', d => d * 10)
        .attr('fill', 'teal');
    }
  }
};
</script>