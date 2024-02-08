<template>
  <div class="highlight-bar-charts" style="user-select: none;">
    <button type="button" class="btn update" @click="zoomOut">Zoom Out</button>

    <LineChart
      :width="800"
      :height="400"
      :data="data"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="zoom"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis :allowDataOverflow="true" dataKey="name" :domain="[left, right]" type="number" />
      <YAxis :allowDataOverflow="true" :domain="[bottom, top]" type="number" :yAxisId="1" />
      <YAxis :orientation="right" :allowDataOverflow="true" :domain="[bottom2, top2]" type="number" :yAxisId="2" />
      <Tooltip />
      <Line
        :yAxisId="1"
        type="natural"
        dataKey="cost"
        stroke="#8884d8"
        :animationDuration="300"
      />
      <Line
        :yAxisId="2"
        type="natural"
        dataKey="impression"
        stroke="#82ca9d"
        :animationDuration="300"
      />

      <ReferenceArea v-if="refAreaLeft && refAreaRight" :yAxisId="1" :x1="refAreaLeft" :x2="refAreaRight" stroke-opacity="0.3" />
    </LineChart>
  </div>
</template>

<script>
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea
} from "recharts";

const initialData = [
  // Your initial data here
];

export default {
  data() {
    return {
      data: [...initialData],
      left: "dataMin",
      right: "dataMax",
      refAreaLeft: "",
      refAreaRight: "",
      top: "dataMax+1",
      bottom: "dataMin",
      top2: "dataMax+50",
      bottom2: "dataMin+50"
    };
  },
  methods: {
    handleMouseDown(e) {
      this.refAreaLeft = e.activeLabel;
    },
    handleMouseMove(e) {
      if (this.refAreaLeft && this.refAreaRight === "") {
        this.refAreaRight = e.activeLabel;
      }
    },
    zoom() {
      let { refAreaLeft, refAreaRight } = this;
      const { data } = this;

      if (refAreaLeft === refAreaRight || refAreaRight === "") {
        this.refAreaLeft = "";
        this.refAreaRight = "";
        return;
      }

      // xAxis domain
      if (refAreaLeft > refAreaRight) {
        [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];
      }

      // yAxis domain
      const [bottom, top] = this.getAxisYDomain(refAreaLeft, refAreaRight, "cost", 1);
      const [bottom2, top2] = this.getAxisYDomain(refAreaLeft, refAreaRight, "impression", 50);

      this.data = [...data];
      this.left = refAreaLeft;
      this.right = refAreaRight;
      this.bottom = bottom;
      this.top = top;
      this.bottom2 = bottom2;
      this.top2 = top2;

      this.refAreaLeft = "";
      this.refAreaRight = "";
    },
    zoomOut() {
      const { data } = this;
      this.data = [...data];
      this.refAreaLeft = "";
      this.refAreaRight = "";
      this.left = "dataMin";
      this.right = "dataMax";
      this.top = "dataMax+1";
      this.bottom = "dataMin";
      this.top2 = "dataMax+50";
      this.bottom2 = "dataMin+50";
    },
    getAxisYDomain(from, to, ref, offset) {
      const refData = this.data.slice(from - 1, to);
      let [bottom, top] = [refData[0][ref], refData[0][ref]];

      refData.forEach((d) => {
        if (d[ref] > top) top = d[ref];
        if (d[ref] < bottom) bottom = d[ref];
      });

      return [(bottom | 0) - offset, (top | 0) + offset];
    },
  },
};
</script>

<style scoped>

</style>
