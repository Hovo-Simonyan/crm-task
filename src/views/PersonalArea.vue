<template>
  <div class="container">
    <Sidebar />

    <div class="content">
      <div class="content-header">
        <div class="dotted">
          <Button buttonType="hot" />
          <Button buttonType="cold" />
          <Button buttonType="inwork" />
        </div>
      </div>

      <div class="content-table">
        <table>
          <tr>
            <th>#</th>
            <th>Имя Фамилия</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Тип</th>
            <th>
                <div class="hg">

                    Дата заявки
                    <img
                      src="../assets/caret2.png"
                      alt=""
                    />
                </div>
              </th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            <td>Floyd Miles</td>
            <td>debra.holit@example.com</td>
            <td>+7 (983) 255-72-12</td>
            <td align="center"><Button buttonType="hot" /></td>
            <td>20.05.2022</td>
            <td>
              <img src="../assets/table-item.png" alt="" class="table-img" />
            </td>
          </tr>
        </table>
      </div>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import Button from "@/components/Button.vue";
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

.main-content {
  margin-top: 25px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 300px;
  gap: 20px 20px;
}

.content {
  background-color: #ffffff;
  padding: 75px;
}

.content-header {
  height: 70px;
}

.dotted {
  display: flex;
  justify-content: space-around;
  width: 400px;
  box-sizing: border-box;
  height: 62px;
  align-items: center;
  width: 447px;
  height: 62px;
  border: 1px dashed #9747ff;
  border-radius: 5px;
}

.content-table {
  margin-top: 40px;
}

.table-img {
  background: #ffffff;
  cursor: pointer;
  box-shadow: inset 0px -1px 0px #cccccc;
}

table {
  width: 100%;
  border-collapse: collapse;
  /* border: 1px solid black; */
  border-top: none;
  border-right: none;
  border-left: none;
}
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
.hg{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.hg img{
   margin-left: 10px;
   
}

@media only screen and (max-width: 1570px) {
  .main-content {
    grid-template-columns: auto auto;
  }
}
</style>