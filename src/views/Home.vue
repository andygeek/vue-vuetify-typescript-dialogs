<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola mundo cruel</h1>
    <TableEdit />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TableEdit from "@/components/TableEdit.vue";

@Component({
  components: {
    TableEdit
  }
})
export default class Home extends Vue {}
</script>
