<template>
  <md-card>
    <md-toolbar>
      <div class="project-item__header">
        <div class="project-item__title">
          <h2 class="md-title">{{ project.title }}</h2>
          <md-badge
            v-if="showStatus && project.status === 1"
            class="md-square"
            md-content="Veröffentlicht"
          />
        </div>
        <md-subheader>{{ project.lecturer }}</md-subheader>
      </div>
      <md-button
        v-if="allowEdit"
        class="md-icon-button"
        :to="'/edit/' + project.id"
      >
        <md-icon>
          <img :src="iconUrl" alt="edit icon" />
        </md-icon>
      </md-button>
    </md-toolbar>

    <div class="md-layout contact-layout">
      <label class="md-body-2">Kontaktperson</label>

      <div class="md-layout">
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header">Name</md-subheader>
          <md-subheader>{{ project.contact_name }}</md-subheader>
        </md-content>
        <md-content class="md-layout-item">
          <md-subheader class="projectlist__item__header">Datum</md-subheader>
          <md-subheader>{{ formattedDate }}</md-subheader>
        </md-content>
      </div>

      <md-content class="md-layout-item md-layout__email">
        <md-subheader class="projectlist__item__header">E-Mail</md-subheader>
        <md-subheader>{{ project.contact_email }}</md-subheader>
      </md-content>
    </div>

    <div v-if="project.comment !== 'null' && project.comment !== ''">
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
    project: Object,
    allowEdit: Boolean,
    showStatus: Boolean
  },
  computed: {
    iconUrl() {
      return require("@/assets/icon-edit.svg");
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    },
    formattedDate() {
      const date = new Date(this.project.contact_date);
      return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    }
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
