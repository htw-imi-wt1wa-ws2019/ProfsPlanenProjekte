<template>
  <div class="project-list">
    <md-list class="md-double-line">
      <md-list-item v-for="(project, index) in projects" :key="index">
        <ProjectListItemInt
          v-if="type === 'int'"
          :project="project"
        />
        <ProjectListItemExt
          v-if="type === 'ext'"
          :project="project"
          :index="index"
        />
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import ProjectListItemInt from "./ProjectListItemInt.vue";
import ProjectListItemExt from "./ProjectListItemExt.vue";

export default {
  name: "ProjectList",
  // Register components we want to use
  components: {
    ProjectListItemInt,
    ProjectListItemExt
  },

  // Properties that parent elements can input data into
  props: {
    projects: Array,
    type: 'int' | 'ext',
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
