<template>
  <div class="container">
   <Sidebar />

  

    <div class="content">
      <Header title="Активные консультации" />

      <div class="bages">
        <div class="bage-item">
          <div align="start">
            <h2>Николай Пономарев</h2>
            <h4>Контактыне данные</h4>
          </div>

          <div class="bage-info">
            <div class="bage-phone">
              <div>
                <img src="../assets/phone.png" alt="" srcset="" />
                + 934872347687
              </div>
              <div>
                <img src="../assets/email.png" alt="" srcset="" />

                hovo.simonyan.2000@mail.ru
              </div>
            </div>

            <div class="bage-photo-name">
              <div>
                <img src="../assets/elips.png" class="bage-img" />
              </div>
              <div align="start">
                <p>Иван Иванов</p>
                <p>Младший инженер</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bage-item">
          <div align="start">
            <h2>Николай Пономарев</h2>
            <h4>Контактыне данные</h4>
          </div>

          <div class="bage-info">
            <div class="bage-phone">
              <div>
                <img src="../assets/phone.png" alt="" srcset="" />
                + 934872347687
              </div>
              <div>
                <img src="../assets/email.png" alt="" srcset="" />

                hovo.simonyan.2000@mail.ru
              </div>
            </div>

            <div class="bage-photo-name">
              <div>
                <img src="../assets/elips.png" class="bage-img" />
              </div>
              <div align="start">
                <p>Иван Иванов</p>
                <p>Младший инженер</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bage-item">
          <div align="start">
            <h2>Николай Пономарев</h2>
            <h4>Контактыне данные</h4>
          </div>

          <div class="bage-info">
            <div class="bage-phone">
              <div>
                <img src="../assets/phone.png" alt="" srcset="" />
                + 934872347687
              </div>
              <div>
                <img src="../assets/email.png" alt="" srcset="" />

                hovo.simonyan.2000@mail.ru
              </div>
            </div>

            <div class="bage-photo-name">
              <div>
                <img src="../assets/elips.png" class="bage-img" />
              </div>
              <div align="start">
                <p>Иван Иванов</p>
                <p>Младший инженер</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bage-item">
          <div align="start">
            <h2>Николай Пономарев</h2>
            <h4>Контактыне данные</h4>
          </div>

          <div class="bage-info">
            <div class="bage-phone">
              <div>
                <img src="../assets/phone.png" alt="" srcset="" />
                + 934872347687
              </div>
              <div>
                <img src="../assets/email.png" alt="" srcset="" />

                hovo.simonyan.2000@mail.ru
              </div>
            </div>

            <div class="bage-photo-name">
              <div>
                <img src="../assets/elips.png" class="bage-img" />
              </div>
              <div align="start">
                <p>Иван Иванов</p>
                <p>Младший инженер</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bage-item">
          <div align="start">
            <h2>Николай Пономарев</h2>
            <h4>Контактыне данные</h4>
          </div>

          <div class="bage-info">
            <div class="bage-phone">
              <div>
                <img src="../assets/phone.png" alt="" srcset="" />
                + 934872347687
              </div>
              <div>
                <img src="../assets/email.png" alt="" srcset="" />

                hovo.simonyan.2000@mail.ru
              </div>
            </div>

            <div class="bage-photo-name">
              <div>
                <img src="../assets/elips.png" class="bage-img" />
              </div>
              <div align="start">
                <p>Иван Иванов</p>
                <p>Младший инженер</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap");
.container {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 100vh;
}


.content {
  background-color: #ebebeb;
  padding: 30px 65px 0px 35px;
}



/* ------------ Content ------------ */
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.content-header h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  font-weight: 800;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
}

.bages {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 200px 200px 200px;
  gap: 9px;
}

.bage-item {
  background: #fcfcfc;

  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);
  border-radius: 8px;

  padding: 30px;
}

.bage-item > div > h2 {
  margin-bottom: 25px;
}

.bage-info {
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  align-items: center;
  height: 80px;
}

.bage-photo-name {
  display: flex;
  align-items: center;
}

.bage-img {
  margin-right: 20px;
}

.bage-phone {
  text-align: start;
}



@media only screen and (max-width: 1920px) {
  /* .bages {
    grid-template-columns: auto auto;
    grid-template-rows: 230px 230px 230px;
  } */
}

@media only screen and (max-width: 1600px) {
  /* .bages {
    grid-template-columns: auto auto;
  } */
}
@media only screen and (max-width: 1150px) {
  /* .bages {
    grid-template-columns: auto;
    grid-template-rows: 200px 200px 200px;

    justify-content: center;
  } */
}
</style>