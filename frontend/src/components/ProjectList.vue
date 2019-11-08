<template>
  <div class="project-list">
    <h1>Projektideen</h1>
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <ProjectListItem :project="project" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectListItem from "./ProjectListItem.vue";

export default {
  name: "ProjectList",
  props: {
    projects: Array
  },
  components: {
    ProjectListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
