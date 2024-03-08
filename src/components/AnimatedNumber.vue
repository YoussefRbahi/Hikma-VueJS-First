<template>
  <span ref="counterContainer">{{ number }}</span>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      interval: 0,
      isCounterVisible: false
    }
  },
  props: {
    target: {
      default: 666
    },
    duration: {
      default: 2000
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust threshold as needed
    }

    const observer = new IntersectionObserver(this.handleIntersection, options)
    observer.observe(this.$refs.counterContainer)
  },

  methods: {
    handleIntersection(entries) {
      if (entries[0].isIntersecting && !this.isCounterVisible) {
        this.isCounterVisible = true
        this.countUp()
      }
    },
    countUp() {
      const steps = this.target - this.number
      this.interval = this.duration / steps

      const intervalId = setInterval(() => {
        if (this.number < this.target) {
          this.number++
        } else {
          clearInterval(intervalId)
        }
      }, this.interval)
    }
  }
}
</script>

<style lang="scss" scoped></style>
