<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <span class="md-title">Praxis-Projektverwaltung</span>
    </md-app-toolbar>
    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 3rem;
}
h1 {
  text-align: left;
  padding-top: 0;
  margin: 0;
}
.md-app {
  height: 100%;
  padding-bottom: 2rem;
}
.md-content {
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
}
.projectlist-header {
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-self: center;
}
</style>
