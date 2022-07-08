<template>
  <div class="container">
    <Sidebar />

    <div class="content">
      <div class="main-content">
        <div class="header">
          <div class="header-name">Новые заявки</div>

          <div class="header-images">
            <img src="../assets/search.png" alt="" class="search" />
            <img src="../assets/avatar.png" alt="" />
          </div>
        </div>
        <div class="task-filter">
          <div>
            <span class="underline">Все клиенты</span>
          </div>
          <div>
            <span>Холодные</span>
          </div>
          <div>
            <span>Горячие</span>
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
                  <img src="../assets/caret2.png" alt="" />
                </div>
              </th>
              <th></th>
            </tr>
            <TableRow
              id="1"
              firstName="Hovo Simonyan"
              email="example@gamil.com"
              phone="+329 654654 654"
              type="hot"
              data="08.07.2022"
            />
            <TableRow
              id="2"
              firstName="Hovo Simonyan"
              email="example@gamil.com"
              phone="+329 654654 654"
              type="cold"
              data="08.07.2022"
            />
            <TableRow
              id="3"
              firstName="Hovo Simonyan"
              email="example@gamil.com"
              phone="+329 654654 654"
              type="hot"
              data="08.07.2022"
            />
            <TableRow
              id="4"
              firstName="Hovo Simonyan"
              email="example@gamil.com"
              phone="+329 654654 654"
              type="hot"
              data="08.07.2022"
            /><TableRow
              id="5"
              firstName="Hovo Simonyan"
              email="example@gamil.com"
              phone="+329 654654 654"
              type="inwork"
              data="08.07.2022"
            />
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import TableRow from "@/components/TableRow.vue";
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
  padding: 30px 45px 30px 45px;
  display: flex;
  align-items: center;
}

.main-content {
  width: 100%;
  height: 700px;
  gap: 10px 10px;

  padding: 25px;
  padding-bottom: none;

  background: #fcfcfc;

  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);
  border-radius: 8px;
}
.header-images {
  display: flex;
  align-items: center;
}
.header {
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
}

.header-name {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 43px;
}
.content-table {
  padding-left: 30px;
  padding-top: 30px;
}
.task-filter {
  display: flex;
  padding-left: 18px;
  padding-top: 20px;
  height: 30px;
}
.task-filter div {
  width: 150px;
  cursor: pointer;
}
.underline {
  text-decoration: underline;
  text-decoration-color: red;
}

.task-filter div span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;

  color: #000000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.table-img {
  background: #ffffff;
  cursor: pointer;
  box-shadow: inset 0px -1px 0px #cccccc;
}

table {
  width: 100%;
  border-collapse: collapse;
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

.search {
  width: 24px;
  height: 24px;
  margin-right: 40px;
}

.hg {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.hg img {
  margin-left: 10px;
}
</style>