<template>
  <md-card>
    <form novalidate class="md-layout" @submit.prevent="validateProject">
      <div class="md-layout">
        <div class="md-layout-item md-small-size-100 status-select__layout">
          <md-checkbox v-model="form.status" :true-value="1" :false-value="0"
            >Published</md-checkbox
          >
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('title')">
            <label for="title">Projekttitel</label>
            <md-input name="title" id="title" v-model="form.title" />
            <span class="md-error" v-if="!$v.form.title.required"
              >A title is required</span
            >
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('lecturer')">
            <label for="lecturer">Lecturer</label>
            <md-input name="lecturer" id="lecturer" v-model="form.lecturer" />
            <span class="md-error" v-if="!$v.form.lecturer.required"
              >A lecturer is required</span
            >
          </md-field>
        </div>
      </div>

      <md-content class="fieldset">
        <label class="md-body-2">Kontaktperson</label>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('contact_name')">
              <label for="contact_name">Name</label>
              <md-input
                name="contact_name"
                id="contact_name"
                v-model="form.contact_name"
              />
              <span class="md-error" v-if="!$v.form.contact_name.required"
                >A name is required</span
              >
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-datepicker v-model="form.contact_date" placeholder="Datum" />
          </div>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('contact_email')">
            <label for="contact_email">E-Mail</label>
            <md-input
              name="contact_email"
              id="contact_email"
              v-model="form.contact_email"
            />
            <span class="md-error" v-if="!$v.form.contact_email.required"
              >An email is required</span
            >
            <span class="md-error" v-else-if="!$v.form.contact_email.email"
              >This has to be a valid email address</span
            >
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
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "ProjectForm",
  mixins: [validationMixin],
  props: {
    project: null
  },
  components: {},
  mounted() {
    if (this.project) {
      this.form.title = this.project.title;
      this.form.lecturer = this.project.lecturer;
      this.form.comment = this.project.comment;
      this.form.contact_name = this.project.contact_name;
      this.form.contact_email = this.project.contact_email;
      this.form.contact_date = this.project.contact_date;
      this.form.contact_date = this.project.contact_date;
      this.form.status = this.project.status;
    }
  },
  data: function() {
    return {
      form: {
        title: null,
        lecturer: null,
        comment: null,
        contact_name: null,
        contact_email: null,
        contact_date: new Date(),
        status: 0
      }
    };
  },
  validations: {
    form: {
      title: {
        required
      },
      lecturer: {
        required
      },
      contact_name: {
        required
      },
      contact_email: {
        required,
        email
      }
    }
  },
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
