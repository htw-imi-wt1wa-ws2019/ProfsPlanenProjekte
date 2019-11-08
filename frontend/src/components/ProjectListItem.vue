<template>
  <md-card>
    <md-content>
      <md-subheader class="projectlist__item__header">ID</md-subheader>
      <md-divider></md-divider>
      <md-subheader>{{ project.id }}</md-subheader>
    </md-content>
  </md-card>
</template>

<script>
export default {
  name: "ProjectIdeaListItem",
  props: {
    project: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projectlist__item__header {
  font-weight: bold;
}
.md-card {
  width: 100%;
  display: flex;
}
.md-content {
  margin: 1em;
}
</style>
