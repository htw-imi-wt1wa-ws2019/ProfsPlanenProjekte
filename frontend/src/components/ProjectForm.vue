<template>
  <md-card>
    <form novalidate class="md-layout" @submit.prevent="validateProject">
      <div class="md-layout">
        <div class="md-layout-item md-small-size-100 status-select__layout">
          <md-checkbox v-model="form.status" :true-value="1" :false-value="0">
            Veröffentlicht
            </md-checkbox>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('title')">
            <label for="title">Projekttitel</label>
            <md-input name="title" id="title" v-model="form.title" />
            <span class="md-error" v-if="!$v.form.title.required">
              Bitte geben Sie einen Titel an.
            </span>
          </md-field>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('lecturer')">
            <label for="lecturer">Betreuer</label>
            <md-input name="lecturer" id="lecturer" v-model="form.lecturer" />
            <span class="md-error" v-if="!$v.form.lecturer.required">
              Bitte geben Sie einen Betreuer an.
            </span>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('professor')">
            <label for="professor">Professor</label>
            <md-input name="professor" id="professor" v-model="form.professor" />
            <span class="md-error" v-if="!$v.form.professor.required">
              Bitte geben Sie einen Professor an.
            </span>
          </md-field>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('description')">
            <label for="description">Beschreibung</label>
            <md-textarea name="description" id="description" v-model="form.description" />
            <span class="md-error" v-if="!$v.form.description.required">
              Bitte geben Sie eine Beschreibung an.
            </span>
          </md-field>
        </div>
      </div>

      <md-content class="fieldset">
        <label class="md-body-2">Kontaktperson</label>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="extern_name">Name</label>
              <md-input
                name="extern_name"
                id="extern_name"
                v-model="form.extern_name" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-datepicker v-model="form.extern_date" placeholder="Datum" />
          </div>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('extern_email')">
            <label for="extern_email">E-Mail</label>
            <md-input
              name="extern_email"
              id="extern_email"
              v-model="form.extern_email" />
            <span class="md-error" v-if="!$v.form.extern_email.email">
              Dies muss eine E-Mail-Adresse sein.
            </span>
          </md-field>
        </div>
      <md-field>
        <label for="comment">Bemerkungen</label>
        <md-textarea name="comment" id="comment" v-model="form.extern_comment" />
      </md-field>
      </md-content>

      <md-card-actions>
        <md-button class="md-secondary" v-on:click="cancel">
          Abbrechen
        </md-button>
        <md-button type="submit" class="md-primary">Speichern</md-button>
      </md-card-actions>
    </form>
  </md-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "ProjectForm",

  // Import functionality with mixins, e.g. for form validation in this case
  mixins: [validationMixin],
  
  // Properties that parent elements can input data into
  props: {
    project: null
  },
  
  // Reactive variables. View gets updated when these properties change
  data: function() {
    return {
      form: {
        title: null,
        description: null,
        lecturer: null,
        professor: null,
        extern_name: null,
        extern_email: null,
        extern_date: new Date(),
        extern_comment: null,
        status: 0
      }
    };
  },

  // Lifecycle hook: Gets called when the component gets mounted
  // (see: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
  mounted() {
    if (this.project) {
      this.form.title = this.project.title;
      this.form.description = this.project.description;
      this.form.lecturer = this.project.lecturer;
      this.form.professor = this.project.professor;
      this.form.extern_name = this.project.extern_name;
      this.form.extern_email = this.project.extern_email;
      this.form.extern_date = this.project.extern_date;
      this.form.extern_comment = this.project.extern_comment;
      this.form.status = this.project.status;
    }
  },

  // Define validation rules
  validations: {
    form: {
      title: {
        required
      },
      lecturer: {
        required
      },
      professor: {
        required
      },
      description: {
        required
      },
      extern_email: {
        email
      }
    }
  },

  // Methods we want to call from template / component
  methods: {
    addProject: function() {
      this.$emit("saved", this.form);
    },
    cancel: function() {
      this.$router.push("/");
    },
    getValidationClass: function(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    validateProject: function() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.addProject();
      }
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
.status-select {
  width: 10rem;
}
.status-select__layout {
  display: flex;
  justify-content: flex-end;
}
</style>
