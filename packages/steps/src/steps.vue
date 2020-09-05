<template>
  <div class="jal-steps">
    <div class="jal-steps-line"></div>
    <div
      class="jal-step"
      v-for="index in count"
      :key="index"
      :style="{
        color: active >= index ? activeColor: defaultColor
      }"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
import './steps.css'
export default {
  name: 'JalSteps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 1
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    defaultColor: {
      type: String,
      default: 'green'
    }
  },
}
</script>

<style>

</style>