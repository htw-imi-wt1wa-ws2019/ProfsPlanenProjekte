<template>
  <md-card>
    <form novalidate class="md-layout" @submit.prevent="addProject">
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="title">Projekttitel</label>
            <md-input name="title" id="title" v-model="form.title" />
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="lecturer">Lecturer</label>
            <md-input name="lecturer" id="lecturer" v-model="form.lecturer" />
          </md-field>
        </div>
      </div>

      <md-content class="fieldset">
        <label class="md-body-2">Kontaktperson</label>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="contact_name">Name</label>
              <md-input
                name="contact_name"
                id="contact_name"
                v-model="form.contact.name"
              />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-datepicker v-model="form.contact.date" placeholder="Datum" />
          </div>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="contact_mail">E-Mail</label>
            <md-input
              name="contact_mail"
              id="contact_mail"
              v-model="form.contact.mail"
            />
          </md-field>
        </div>
      </md-content>

      <md-field>
        <label for="comment">Kommentare</label>
        <md-textarea name="comment" id="comment" v-model="form.comment" />
      </md-field>
      <md-card-actions>
        <md-button class="md-secondary" v-on:click="cancel"
          >Abbrechen</md-button
        >
        <md-button type="submit" class="md-primary">Speichern</md-button>
      </md-card-actions>
    </form>
  </md-card>
</template>

<script>
export default {
  name: "ProjectForm",
  props: {
    projects: Array
  },
  components: {},
  data: function() {
    return {
      form: {
        title: null,
        lecturer: null,
        comment: null,
        contact: {
          name: null,
          date: new Date(),
          mail: null
        }
      }
    };
  },
  methods: {
    addProject: function() {
      this.$emit("saved", this.form);
    },
    cancel: function() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-project__modal {
  width: 70vw;
  height: 90vw;
  background: white;
}
.md-card-actions {
  width: 100%;
}
.md-card {
  padding: 2rem;
}
.fieldset {
  padding: 2rem 0 1rem;
}
form {
  flex-direction: column;
}
</style>
