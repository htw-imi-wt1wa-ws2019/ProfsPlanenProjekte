<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <span class="md-title">Praxis-Projekte</span>
      <md-button v-if="activeRoute === '/'" to="/projects" exact
        >Veröffentlichte Projekte</md-button
      >
      <md-button v-if="activeRoute === '/projects'" to="/" exact
        >Projektideen</md-button
      >
    </md-app-toolbar>
    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      activeRoute: null
    };
  },
  mounted() {
    this.activeRoute = this.$route.path;
  },
  updated() {
    this.activeRoute = this.$route.path;
  }
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
.md-toolbar.md-app-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
.md-content {
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
}
.projectlist-header {
  padding: 1rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-self: center;
}
</style>
