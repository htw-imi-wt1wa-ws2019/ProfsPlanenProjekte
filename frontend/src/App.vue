<template>
  <div id="app">
    <ProjectList :projects="projects" />
  </div>
</template>

<script>
import ProjectList from "./components/ProjectList.vue";
import axios from "axios";

export default {
  name: "app",
  data: function() {
    return {
      projects: [
        {
          id: "project1"
        },
        {
          id: "project2"
        },
        {
          id: "project3"
        }
      ]
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/projects")
      .then(response => (this.projects = response));
  },
  components: {
    ProjectList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
