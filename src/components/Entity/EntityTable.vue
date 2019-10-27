<template>
  <div id="entity-table">
    <p v-if="entityList.length < 1" class="empty-table">
      No entity in list
    </p>
    <table v-else class="table-auto">
      <caption>
        {{
          entityTableConfig.label
        }}
      </caption>
      <thead>
        <tr>
          <th
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
            v-for="configField in entityTableConfig.fields"
            :key="configField.name"
          >
            {{ configField.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover:bg-grey-lighter"
          v-for="entity in entityList"
          :key="entity.id"
        >
          <td
            v-for="configField in entityTableConfig.fields"
            :key="configField.name"
          >
            {{ entity[configField.name] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import logger from "../../services/app-logger/app-logger.service";
import { entityService } from "../../services/entity.service";

export default {
  name: "EntityTable",
  props: {
    entity: {
      type: String
    }
  },
  data() {
    return {
      entityList: {
        type: Object,
        default: []
      },
      entityTableConfig: {
        type: Object,
        default: {}
      },
      entityService: entityService[this.entity]
    };
  },
  created() {
    logger.debug(this.entity);
    Promise.all([this.entityService.getAll(), this.entityService.config()])
      .then(data => {
        logger.info(data);
        this.entityList = data[0];
        this.entityTableConfig = data[1];
      })
      .catch(err => {
        logger.error(err);
      });
  }
};
</script>

<style scoped></style>
