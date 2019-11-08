<template>
  <table class="project-list__item">
    <tr>
      <td>ID: {{ project.id }}</td>
    </tr>
  </table>
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
td {
  border: 1px solid black;
}
</style>
