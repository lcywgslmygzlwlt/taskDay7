<template>
  <div>
    <component :is="comName"></component>
  </div>
</template>

<script>
import Register from './components/01.compent.vue'
export default {
  data() {
    return { comName: 'Register' }
  },
  components: {
    Register,
  },
}
</script>

<style></style>
