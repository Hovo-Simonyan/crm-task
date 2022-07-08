<template>
  <div
    class="dotted-item"
    :style="{ 'background-color': backgroundColor, border: borderColor }"
  >
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  buttonType: String,
});

let backgroundColor = "";
let borderColor = "";
let title = "";


switch (props.buttonType) {
  case "hot":
    backgroundColor = "rgba(245, 0, 87, 0.1)";
    borderColor = "1px solid #bb5751";
    title = "Горячий";
    break;
  case "cold":
    backgroundColor = "rgba(72, 193, 244, 0.1)";
    borderColor = "1px solid #519bbb";
    title = "Холодный";
    break;
  case "inwork":
    backgroundColor = "rgba(88, 235, 84, 0.1)";
    borderColor = "1px solid #58eb54";
    title = "В работе";
    break;
}

</script>

<style scoped>
.dotted-item {
  width: 122px;
  height: 22px;
  cursor: pointer;
}

.dotted-item {
  box-sizing: border-box;
  border-radius: 8px;
}
</style>