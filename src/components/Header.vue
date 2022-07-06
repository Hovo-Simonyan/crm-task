<template>
  <div class="content-header">
    <div>
      <h1>{{title}}</h1>
    </div>
    <div>
      <img src="../assets/avatar.png" />
    </div>
  </div>
</template>

<script setup>

const props =  defineProps({
      title: String,
   })

</script>



<style scoped>
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.content-header h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  font-weight: 800;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
}
</style>