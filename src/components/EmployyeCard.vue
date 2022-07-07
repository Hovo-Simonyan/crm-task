<template>
  <div class="card">
    <div class="employee-name" align="start">
      <div class="employee-img">
        <img src="../assets/employee-img.png" alt="" />
        <div class="verif">
          <img src="../assets/verified.png" alt="" />
        </div>
      </div>
      <div>
        <p>{{name}}</p>
        <span>{{position}}</span>
      </div>
    </div>

    <div>
      <div class="employee-contact">
        <div class="elips">
          <img src="../assets/email-white.png" alt="" />
        </div>
        <div class="employee-inf">{{email}}</div>
      </div>
      <div class="employee-contact">
        <div class="elips">
          <img src="../assets/phone-white.png" alt="" />
        </div>
        <div class="employee-inf">{{phone}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  name: String,
  position: String,
  email: String,
  phone: String,
});
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

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
</style>