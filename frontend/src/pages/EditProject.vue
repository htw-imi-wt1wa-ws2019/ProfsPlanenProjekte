<template>
  <div>
    <h1 class="md-headline">Projektidee hinzufügen</h1>
    <ProjectForm v-if="project" @saved="editProject" :project="project" />
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

  // Reactive variables. View gets updated when these properties change
  data: function() {
    return {
      project: null
    };
  },


  // Lifecycle hook: Gets called when the component gets mounted
  // (see: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
  mounted() {
    const id = this.$route.params.id;
    axios.get("http://localhost:8080/api/projects/" + id).then(res => {
      this.project = res.data[0];
    });
  },

  // Methods we want to call from template / component
  methods: {
    editProject: function(data) {
      axios
        .put(
          `http://localhost:8080/api/projects/${this.$route.params.id}`,
          data
        )
        .then(res => {
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
