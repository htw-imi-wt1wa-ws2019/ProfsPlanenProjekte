<template>
  <md-card>
    <md-toolbar class="project-item__header">
      <h2 class="md-title">{{ project.title }}</h2>
      <md-subheader>{{ project.lecturer }}</md-subheader>
    </md-toolbar>

    <div class="md-layout contact-layout">
      <label class="md-body-2">Kontaktperson</label>

      <div class="md-layout">
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header">Name</md-subheader>
          <md-subheader>{{ project.contact_name }}</md-subheader>
        </md-content>
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header">Date</md-subheader>
          <md-subheader>{{ project.contact_date }}</md-subheader>
        </md-content>
      </div>

      <md-content class="md-layout-item md-layout__email">
        <md-subheader class="projectlist__item__header">E-Mail</md-subheader>
        <md-subheader>{{ project.contact_email }}</md-subheader>
      </md-content>
    </div>

    <div v-if="project.comment !== 'null'">
      <md-divider></md-divider>
      <div class="md-layout">
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header"
            >Bemerkungen</md-subheader
          >
          <md-subheader>{{ project.comment }}</md-subheader>
        </md-content>
      </div>
    </div>
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
}
.md-layout__email {
  margin-top: 0;
}
.md-subheader {
  min-height: 2.5em;
}
</style>
