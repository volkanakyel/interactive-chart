<template>
  <div ref="chart"></div>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import { ref, onMounted } from 'vue';

const chart = ref(null);

const drawChart = () => {
  if (!chart.value) return;

  const svg = d3.select(chart.value)
    .append('svg')
    .attr('width', 400)
    .attr('height', 300);

  svg.selectAll('rect')
    .data([10, 15, 30, 40, 20])
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 60)
    .attr('y', d => 300 - 10 * d)
    .attr('width', 40)
    .attr('height', d => d * 10)
    .attr('fill', '#FF0000');
};

onMounted(drawChart);
</script>
