<template>
  <md-card>
    <div class="md-layout">
      <md-content class="md-layout-item">
        <md-subheader class="projectlist__item__header">ID</md-subheader>
        <md-divider></md-divider>
        <md-subheader>{{ project.id }}</md-subheader>
      </md-content>
      <md-content class="md-layout-item">
        <md-subheader class="projectlist__item__header"
          >Projektname</md-subheader
        >
        <md-divider></md-divider>
        <md-subheader>{{ project.title }}</md-subheader>
      </md-content>
    </div>
    <div class="md-layout contact-layout">
      <label class="md-body-2">Kontaktperson</label>

      <div class="md-layout">
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header">Name</md-subheader>
          <md-divider></md-divider>
          <md-subheader>project.contact.name</md-subheader>
        </md-content>
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header">Date</md-subheader>
          <md-divider></md-divider>
          <md-subheader>project.contact.date</md-subheader>
        </md-content>
      </div>

      <md-content class="md-layout-item" style="width: 100%">
        <md-subheader class="projectlist__item__header">E-Mail</md-subheader>
        <md-divider></md-divider>
        <md-subheader>project.contact.mail</md-subheader>
      </md-content>
    </div>
    <div class="md-layout">
      <md-content class="md-layout-item">
        <md-subheader class="projectlist__item__header"
          >Bemerkungen</md-subheader
        >
        <md-divider></md-divider>
        <md-subheader>project.comment</md-subheader>
      </md-content>
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
}
.contact-layout {
  flex-direction: column;
}

.contact-layout label {
  padding-left: 2.3em;
}
.md-content {
  margin: 1em;
}
.md-layout {
  width: 100%;
}
</style>
