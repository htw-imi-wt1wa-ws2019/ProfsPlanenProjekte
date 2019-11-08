<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <span class="md-title">Praxis-Projektverwaltung</span>
    </md-app-toolbar>
    <md-app-content>
      <h1 class="md-headline">Projektideen</h1>
      <ProjectList :projects="projects" />
    </md-app-content>
  </md-app>
</template>

<script>
import ProjectList from "./components/ProjectList.vue";
import axios from "axios";

export default {
  name: "app",
  data: function() {
    return {
      projects: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/projects")
      .then(res => (this.projects = res.data));
  },
  components: {
    ProjectList
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
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
  padding-left: 1rem;
  padding-top: 1rem;
}
.md-content {
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
}
</style>
