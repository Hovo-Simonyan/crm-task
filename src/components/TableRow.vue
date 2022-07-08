<template>
  <tr>
    <td>{{id}}</td>
    <td>{{firstName}}</td>
    <td>{{email}}</td>
    <td>{{phone}}</td>
    <td align="center"><Button :buttonType='type' /></td>
    <td>{{data}}</td>
    <td>
      <img src="../assets/table-item.png" alt="" class="table-img" />
    </td>
  </tr>
</template>

<script setup>
import Button from './Button.vue'

const props =  defineProps({
      id: String,
      firstName: String,
      email: String,
      phone: String,
      type: String,
      data: String
})
</script>

<style scoped>
tr {
  height: 50px;
}
th {
  height: 50px;
  border: 1px solid rgb(67, 60, 60);
  text-align: center;
  border-top: none;
  border-right: none;
  border-left: none;
}
td {
  border: 1px solid black;
  border-top: none;
  border-right: none;
  border-left: none;
}
img{
    cursor: pointer;
}
</style>