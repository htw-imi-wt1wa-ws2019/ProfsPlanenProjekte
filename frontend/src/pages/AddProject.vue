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
  props: {
    projects: Array
  },
  components: {
    ProjectForm
  },
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
