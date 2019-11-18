<template>
  <div class="project-list">
    <md-list class="md-double-line">
      <md-list-item v-for="(project, index) in projects" :key="index">
        <ProjectListItem
          :project="project"
          :allowEdit="allowEdit"
          :showStatus="showStatus"
        />
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import ProjectListItem from "./ProjectListItem.vue";

export default {
  name: "ProjectList",
  props: {
    projects: Array,
    allowEdit: Boolean,
    showStatus: Boolean
  },
  components: {
    ProjectListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
