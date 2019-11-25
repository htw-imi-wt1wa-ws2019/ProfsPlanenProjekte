<template>
  <div>
    <header class="projectlist-header">
      <h1 class="md-headline">Öffentliche Projekte</h1>
    </header>
        <ProjectList :projects="projects" :type="'ext'" />
  </div>
</template>

<script>
// Axios is a Http-Client module that makes writing http requests easier and more clearly structured
import axios from "axios";
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "ProjectIdeaOverview",

  // Register components we want to use
  components: {
    ProjectList
  },

  // Reactive variables. View gets updated when these properties change
  data: function() {
    return {
      projects: []
    };
  },

  // Lifecycle hook: Gets called when the component gets mounted
  // (see: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
  mounted() {
    axios
      .get("http://localhost:8080/api/projects/published")
      .then(res => (this.projects = res.data));
  },

  // Methods we want to call from template / component
  methods: {
    goToAddProject: function() {
      this.$router.push("/add");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
