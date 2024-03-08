<template>
  <div
    class="carousel"
    ref="carouselContainer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="items" :style="{ transform: `translateX(calc(100% / ${shown} * ${number}))` }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,

      isCarouselVisible: false,
      isHovered: false
    }
  },
  props: {
    total: {
      default: 5
    },
    interval: {
      default: 2500
    },
    shown: {
      default: 4
    }
  },

  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust threshold as needed
    }
    const observer = new IntersectionObserver(this.handleIntersection, options)
    observer.observe(this.$refs.carouselContainer)
  },
  methods: {
    handleIntersection(entries) {
      if (entries[0].isIntersecting && !this.isCarouselVisible) {
        this.isCarouselVisible = true
        this.nextUni()
      }
    },
    nextUni() {
      setInterval(() => {
        if (this.number < this.total - this.shown && !this.isHovered) {
          this.number++
        } else if (this.number < this.total - this.shown && this.isHovered) {
          this.nextUni
        } else {
          this.number = 0
        }
      }, this.interval)
    }
  }
}
</script>

<style>
.carousel {
  margin-inline: auto;
  overflow: hidden;
}
.items {
  display: flex;
  transition: transform 0.5s ease;
}
.items > * {
  flex: 0 0 calc(100% / v-bind(shown));
  box-sizing: border-box;
  text-align: center;
}
</style>
