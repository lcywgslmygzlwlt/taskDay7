<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <pannel>
        <template v-slot:title>
          <h4>案例:折叠面板123456789</h4>
        </template>
        <template v-slot:content>
          <img src="../assets/mm.gif" alt="" />
        </template>
      </pannel>
    </div>
  </div>
</template>

<script>
import pannel from "../components/04/Pannel.vue";
export default {
  components: { pannel },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>
