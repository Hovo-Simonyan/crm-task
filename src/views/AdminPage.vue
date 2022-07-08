<template>
  <div class="container">
    <Sidebar />

    <div class="content">
      <div class="main-content">
        <div class="header">
          <div class="header-name">Личный кабинет</div>
          <div><img src="../assets/agent-settings.png" alt="" /></div>
        </div>
        <div class="info">
          <div class="agent-info">
            <div>
              <img src="../assets/avatar-big.png" alt="" />
            </div>
            <div class="info-name">
              <p>Иван Иванович</p>
              <span>Старший менджер</span>
            </div>
          </div>
          <div class="agent-contact">
            <div align="start">
              <p>Email</p>
              <span>skjhdjksdf@example.com</span>
            </div>
            <div align="start">
              <p>Телефон</p>
              <span>+567 8655 8865</span>
            </div>
            <div align="start">
              <p>Дата назначение агента</p>
              <span>12.12.1212</span>
            </div>
          </div>
        </div>
        <div class="divs">
          <div class="item1">
            <p>Новые клиенты</p>
            <span>274</span>
          </div>
          <div class="item2">
            <p>Новые клиенты</p>
            <span>274</span>
          </div>
          <div class="item3">
            <p>Новые клиенты</p>
            <span>274</span>
          </div>
          <div class="item4">
            <p>Новые клиенты</p>
            <span>274</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
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
  align-items: center
}

.main-content {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 80px 530px;
  gap: 10px 10px;

  padding: 25px;
  padding-bottom: none;

  background: #fcfcfc;

  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);
  border-radius: 8px;
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
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.agent-info {
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.info-name p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
}

.info-name span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;

  /* white-badge-text */

  color: #676767;
}

.agent-contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
  height: 220px;
}

.agent-contact p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #3f3d56;
}

.agent-contact span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  /* white-badge-text */

  color: #676767;
}

.divs {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  gap: 10px 10px;
}

.item1,
.item2,
.item3,
.item4 {
  text-align: start;
  padding-left: 20px;
  padding-top: 20px;
}

.item1 > p,
.item2 >p,
.item3 > p,
.item4 > p {


  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #3B3A68;
}

.item1,
.item2,
.item3,
.item4 span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;

  color: #3b3a68;
}

.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
  background: rgba(229, 64, 223, 0.5);
  box-shadow: 2px 3px 30px rgba(229, 64, 223, 0.45);
  border-radius: 8px;
}

.item2 {
  background: rgba(141, 139, 251, 0.5);
  box-shadow: 2px 3px 30px rgba(141, 139, 251, 0.45);
  border-radius: 8px;
}
.item3 {
  background: rgba(254, 91, 111, 0.5);
  box-shadow: 2px 3px 30px rgba(254, 173, 183, 0.45);
  border-radius: 8px;
}

.item4 {
  background: rgba(88, 235, 84, 0.5);
  box-shadow: 2px 3px 30px rgba(172, 245, 170, 0.45);
  border-radius: 8px;
  grid-row-start: 2;
  grid-row-end: 4;
}
</style>