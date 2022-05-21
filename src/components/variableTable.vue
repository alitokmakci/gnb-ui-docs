<template>
  <div class="has-table">
    <table class="table dark bordered striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default Value</th>
          <th>Computed Value</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr v-for="(item, index) in variables" :key="index">
          <td v-html="item.name"></td>
          <td v-text="item.value"></td>
          <td v-text="item.computed"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "variableTable",
  props: {
    variables: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
