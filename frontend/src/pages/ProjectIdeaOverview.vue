<template>
  <div>
    <header class="projectlist-header">
      <h1 class="md-headline">Projektideen</h1>
      <md-button v-on:click="goToAddProject">Projekt hinzufügen</md-button>
    </header>
    <ProjectList :projects="projects" :allowEdit="true" :showStatus="true" />
  </div>
</template>

<script>
import axios from "axios";
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "ProjectIdeaOverview",
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
  methods: {
    goToAddProject: function() {
      this.$router.push("/add");
    }
  },
  components: {
    ProjectList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
