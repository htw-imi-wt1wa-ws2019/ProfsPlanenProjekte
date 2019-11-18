<template>
  <div>
    <header class="projectlist-header">
      <h1 class="md-headline">Öffentliche Projekte</h1>
    </header>
    <ProjectList :projects="projects" :allowEdit="false" :showStatus="false" />
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
      .get("http://localhost:8080/api/projects/published")
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
