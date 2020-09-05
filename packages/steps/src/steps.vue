<template>
  <div class="jiailing-steps">
    <div class="jiailing-steps-line"></div>
    <div
      class="jiailing-step"
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