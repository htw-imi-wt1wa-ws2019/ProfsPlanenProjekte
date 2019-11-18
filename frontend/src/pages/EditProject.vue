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
  data: function() {
    return {
      project: null
    };
  },
  components: {
    ProjectForm
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get("http://localhost:8080/api/projects/" + id).then(res => {
      this.project = res.data[0];
    });
  },
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
