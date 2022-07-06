<template>
  <div class="container">
    <Sidebar />

    <div class="content">
      <div class="content-header">
        <div class="dotted">
          <div class="dotted-item1">Горячий</div>
          <div class="dotted-item2">Холодный</div>
          <div class="dotted-item3">В работе</div>
        </div>
      </div>

      <div class="content-table">
        <table>
          <tr>
            <th align="start">#</th>
            <th align="start">Имя Фамилия</th>
            <th align="start">Email</th>
            <th align="start">Телефон</th>
            <th>Тип</th>
            <th>Дата заявки</th>
            <th>Дата заявки</th>
          </tr>
        </table>
        <table>
          <tr>
            <td>1</td>
            <td>Floyd Miles</td>
            <td>debra.holit@example.com</td>
            <td>+7 (983) 255-72-12</td>
            <td align="center"><div class="dotted-item1">Горячий</div></td>
            <td>20.05.2022</td>
            <td>
              <img src="../assets/table-item.png" alt="" class="table-img" />
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>2</td>
            <td>Floyd Miles</td>
            <td>debra.holit@example.com</td>
            <td>+7 (983) 255-72-12</td>
            <td align="center"><div class="dotted-item1">Горячий</div></td>
            <td>20.05.2022</td>
            <td>
              <img src="../assets/table-item.png" alt="" class="table-img" />
            </td>
          </tr>
        </table>
      </div>

      <div class="main-content"></div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

.xuy {
  border: 1px solid rgb(0, 0, 0);
  border-width: 0 0 1px 1px;
}
.container {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 100vh;
  gap-columns: 20px;
  gap-rows: 10px;
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

.dotted-item1,
.dotted-item2,
.dotted-item3 {
  width: 122px;
  height: 22px;
}

.dotted-item1 {
  box-sizing: border-box;
  background: rgba(245, 0, 87, 0.1);
  border: 1px solid #bb5751;
  border-radius: 8px;
}
.dotted-item2 {
  box-sizing: border-box;

  background: rgba(72, 193, 244, 0.1);
  border: 1px solid #519bbb;
  border-radius: 8px;
}

.dotted-item3 {
  box-sizing: border-box;

  background: rgba(88, 235, 84, 0.1);
  border: 1px solid #58eb54;
  border-radius: 8px;
}
.content-table {
  margin-top: 40px;
}
.content-table table {
  width: 100%;
  border-left: none;
  border-right: none;
}
.content-table table {
  border-bottom: 1px solid black;
  border-width: 2px;
}

.content-table tr {
  height: 48px;
}

content-table table th {
  align-items: center;
}

.table-img {
  background: #ffffff;
  /* Border */

  box-shadow: inset 0px -1px 0px #cccccc;
}

@media only screen and (max-width: 1570px) {
  .main-content {
    grid-template-columns: auto auto;
  }
}
</style>