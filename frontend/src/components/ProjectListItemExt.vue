<template>
  <md-card>
    <md-toolbar>
      <div class="project-item__header">
        <div class="project-item__title">
          <h2 class="md-title">#{{ project.id }} | </h2>
          <h2 class="md-title">{{ project.title }}</h2>
        </div>
        <md-subheader>Betreuer: {{ project.lecturer }}</md-subheader>
      </div>
    </md-toolbar>


    <div v-if="project.comment && project.comment !== ''">
      <md-divider></md-divider>
      <div class="md-layout">
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header"
            >Beschreibung</md-subheader
          >
          <md-subheader>{{ project.description }}</md-subheader>
        </md-content>
      </div>
    </div>
  </md-card>
</template>

<script>
export default {
  name: "ProjectListItemExt",

  // Properties that parent elements can input data into
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
  flex-direction: column;
  margin-bottom: 2rem;
}
.contact-layout {
  flex-direction: column;
}

.contact-layout label {
  padding-left: 2.3em;
  padding-top: 2rem;
}
.md-content {
  margin: 1em;
  width: auto;
}
.md-layout {
  width: 100%;
}
.project-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.md-layout__email {
  margin-top: 0;
}
.md-subheader {
  min-height: 2.5em;
}
.md-toolbar {
  flex-wrap: nowrap;
}
.project-item__title {
  display: flex;
  align-items: center;
}
.md-badge {
  margin-left: 1em;
}
</style>
