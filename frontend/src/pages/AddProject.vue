<template>
  <div>
    <h1 class="md-headline">Projektidee hinzufügen</h1>
    <ProjectForm @saved="addProject" />
  </div>
</template>

<script>
import ProjectForm from "../components/ProjectForm.vue";
import axios from "axios";
export default {
  name: "AddProject",

  // Register components we want to use
  components: {
    ProjectForm
  },

  // Properties that parent elements can input data into
  props: {
    projects: Array
  },
  
  // Methods we want to call from template / component
  methods: {
    addProject: function(data) {
      axios.post("http://localhost:8080/api/projects", data).then(res => {
        if (res.status == "200") {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
