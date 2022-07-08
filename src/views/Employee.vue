<template>
  <div class="container">
    <Sidebar />

    <div class="content">
      <Header title="Сотрудники компании" />

      <div class="main-content">
        <EmployyeCard
          name="Владимир Вильгеймлейбниц"
          position="Старший менеджер"
          phone="+ 384 33 56 89 580"
          email="vlad.vilmgemlebnits@yandex.ru"
        />
        <EmployyeCard
          name="Владимир Вильгеймлейбниц"
          position="Старший менеджер"
          phone="+ 384 33 56 89 580"
          email="vlad.vilmgemlebnits@yandex.ru"
        />
        <EmployyeCard
          name="Владимир Вильгеймлейбниц"
          position="Старший менеджер"
          phone="+ 384 33 56 89 580"
          email="vlad.vilmgemlebnits@yandex.ru"
        />
        <EmployyeCard
          name="Владимир Вильгеймлейбниц"
          position="Старший менеджер"
          phone="+ 384 33 56 89 580"
          email="vlad.vilmgemlebnits@yandex.ru"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import EmployyeCard from "@/components/EmployyeCard.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
.container {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 100vh;
  gap-columns: 20px;
  gap-rows: 10px;
}

.content {
  background-color: #ebebeb;
  padding: 20px 65px 20px 65px;
}

.main-content {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 300px 300px;
  gap: 10px 10px;
}

@media only screen and (max-width: 1570px) {
  .main-content {
    grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 1140px) {
  .main-content {
    grid-template-columns: 500px;
    justify-content: center;
  }
}
</style>