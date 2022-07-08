<template>
  <div class="sidebar">
    <div class="sidebar-logo">
        <router-link to="/">
          <img src="../assets/logo-text-component.png" />
        </router-link>

      
    </div>
    <div class="sidebar-nav">
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/dash.png" />
        </div>
        <a href="#"> Личный кабинет </a>
      </div>
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/second.png" />
        </div>
        <a href="#"> Новые заявки </a>
      </div>
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/thirds.png" />
        </div>
        <a href="#"> Консультации </a>
      </div>
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/fifth.png" />
        </div>
        <a href="#"> База клиентов </a>
      </div>
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/sixth.png" />
        </div>
        <router-link to="/emp">Сотрудники</router-link>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/question.png" />
        </div>

        <a href="#"> Помощь </a>
      </div>
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/settings.png" alt="" srcset="" />
        </div>

        <a href="#"> Настройки </a>
      </div>
      <div class="sidebar-item">
        <div class="sidebar-mini-logo">
          <img src="../assets/logout.png" alt="" srcset="" />
        </div>

        <a href="#"> Выход </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap");

.sidebar {
  background: #222222;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.content {
  background-color: #ebebeb;
  padding: 30px 65px 0px 65px;
}

.sidebar-logo {
  width: 105px;
  height: 102px;
}
.sidebar-nav {
  width: 200px;
  height: 235px;
}

.sidebar-footer {
  width: 200px;
  height: 135px;
}

.sidebar-footer,
.sidebar-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #f50057;
}

.sidebar-mini-logo {
  width: 50px;
}

.sidebar-item {
  display: flex;
  align-items: center;
}

.sidebar-item > a {
  width: 135px;
  text-align: start;
  text-decoration: none;
  color: #f50057; 
}
</style>