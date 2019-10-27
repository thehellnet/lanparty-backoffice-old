<template>
  <the-layout>
    <entity-table :entity="entity"></entity-table>
  </the-layout>
</template>

<script>
import TheLayout from "../layouts/TheLayout";
import EntityTable from "../../components/Entity/EntityTable";
export default {
  name: "EntityView",
  components: { TheLayout, EntityTable },
  props: ["entity"]
};
</script>

<style scoped></style>
