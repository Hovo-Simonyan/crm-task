<template>
  <div class="container">
    <Sidebar />

    <div class="content">
      <Header title="Сотрудники компании" />

      <div class="main-content">
        <div class="card">
          <div class="employee-name" align="start">
            <div class="employee-img">
              <img src="../assets/employee-img.png" alt="" />
              <div class="verif">
                <img src="../assets/verified.png" alt="" />
              </div>
            </div>
            <div>
              <p>Владимир Вильгеймлейбниц</p>
              <span>Старший менеджер</span>
            </div>
          </div>

          <div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/email-white.png" alt="" />
              </div>
              <div class="employee-inf">vlad.vilmgemlebnits@yandex.ru</div>
            </div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/phone-white.png" alt="" />
              </div>
              <div class="employee-inf">+ 384 33 56 89 580</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="employee-name" align="start">
            <div class="employee-img">
              <img src="../assets/employee-img.png" alt="" />
              <div class="verif">
                <img src="../assets/verified.png" alt="" />
              </div>
            </div>
            <div>
              <p>Владимир Вильгеймлейбниц</p>
              <span>Старший менеджер</span>
            </div>
          </div>

          <div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/email-white.png" alt="" />
              </div>
              <div class="employee-inf">vlad.vilmgemlebnits@yandex.ru</div>
            </div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/phone-white.png" alt="" />
              </div>
              <div class="employee-inf">+ 384 33 56 89 580</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="employee-name" align="start">
            <div class="employee-img">
              <img src="../assets/employee-img.png" alt="" />
              <div class="verif">
                <img src="../assets/verified.png" alt="" />
              </div>
            </div>
            <div>
              <p>Владимир Вильгеймлейбниц</p>
              <span>Старший менеджер</span>
            </div>
          </div>

          <div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/email-white.png" alt="" />
              </div>
              <div class="employee-inf">vlad.vilmgemlebnits@yandex.ru</div>
            </div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/phone-white.png" alt="" />
              </div>
              <div class="employee-inf">+ 384 33 56 89 580</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="employee-name" align="start">
            <div class="employee-img">
              <img src="../assets/employee-img.png" alt="" />
              <div class="verif">
                <img src="../assets/verified.png" alt="" />
              </div>
            </div>
            <div>
              <p>Владимир Вильгеймлейбниц</p>
              <span>Старший менеджер</span>
            </div>
          </div>

          <div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/email-white.png" alt="" />
              </div>
              <div class="employee-inf">vlad.vilmgemlebnits@yandex.ru</div>
            </div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/phone-white.png" alt="" />
              </div>
              <div class="employee-inf">+ 384 33 56 89 580</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="employee-name" align="start">
            <div class="employee-img">
              <img src="../assets/employee-img.png" alt="" />
              <div class="verif">
                <img src="../assets/verified.png" alt="" />
              </div>
            </div>
            <div>
              <p>Владимир Вильгеймлейбниц</p>
              <span>Старший менеджер</span>
            </div>
          </div>

          <div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/email-white.png" alt="" />
              </div>
              <div class="employee-inf">vlad.vilmgemlebnits@yandex.ru</div>
            </div>
            <div class="employee-contact">
              <div class="elips">
                <img src="../assets/phone-white.png" alt="" />
              </div>
              <div class="employee-inf">+ 384 33 56 89 580</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
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
  padding: 30px 65px 0px 65px;
}

.main-content {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 300px 300px;
  gap: 10px 10px;
}

.card {
  padding: 40px;
  background: #fcfcfc;
  /* shadow */

  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);
  border-radius: 8px;
}

.employee-name {
  display: flex;
  align-items: center;
  margin-bottom: 23px;
}

.employee-name p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 5px;
  color: #676767;
}

.employee-name span {
  color: #676767;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.employee-img {
  position: relative;
  margin-right: 20px;
}

.verif {
  position: absolute;
  bottom: 10%;
  right: 0;
  border-radius: 50%;
  background-color: white;
}

.employee-contact {
  display: grid;

  grid-template-columns: 46px 1fr;
  grid-template-rows: 42px;
  gap: 15px 20px;

  margin-bottom: 15px;
}

.elips {
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.employee-inf {
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
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