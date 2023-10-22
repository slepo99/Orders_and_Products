<template>
  <div class="container-body">
    <div class="container-body__logo">
      <img
        class="container-body__logo-image"
        src="@/assets/Group.svg"
        alt="Login Logo"
      />
    </div>
    <form @submit.prevent="validate" class="container-body__form">
      <span
        class="container-body__form-error-message"
        :class="{ confirm_visible: error.wrongData }"
      >
        Incorrect username or password
      </span>
      <div class="input-container">
        <span
          class="container-body__form-error-message"
          :class="{ confirm_visible: error.username }"
        >
          Username should not be less than 4 symbols
        </span>
        <input
          class="container-body__input username"
          type="text"
          v-model="loginData.username"
          placeholder="username"
        />
      </div>

      <div class="input-container">
        <span
          class="container-body__form-error-message"
          :class="{ confirm_visible: error.password }"
        >
          Password should not be less than 4 symbols
        </span>
        <input
          class="container-body__input password"
          type="password"
          v-model="loginData.password"
          placeholder="password"
        />
      </div>

      <div>
        <button type="submit" class="container-body__btn">
          <p>Sign in</p>
        </button>
      </div>
    </form>
    <div>
      <p>
        Don't have an account?
        <a>
          <router-link style="color: blue; cursor: pointer" to="/registration"
            >Sign up</router-link
          >
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/authModule";
import { reactive } from "vue";

const authStore = useAuthStore();
const error = reactive({
  username: false,
  password: false,
  wrongData: false,
});
const loginData = reactive({
  username: "",
  password: "",
});
async function validate() {
  if (loginData.username.length < 4) {
    error.username = true;
    setTimeout(() => {
      error.username = false;
    }, 4000);
    return;
  }
  if (loginData.password.length < 4) {
    error.password = true;
    setTimeout(() => {
      error.password = false;
    }, 4000);
    return;
  }
  try {
    await login();
  } catch (e) {
    error.wrongData = true;
    setTimeout(() => {
      error.wrongData = false;
    }, 4000);
    throw e;
  }
}
async function login() {
  const data = {
    username: loginData.username.toLowerCase(),
    password: loginData.password.toLowerCase(),
  };
  await authStore.loginUser(data);
}
</script>
<style scoped lang="scss">
.container-body {
  min-height: 80vh;
  padding: 0;
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  padding-top: 200px;
  &__logo {
    margin-bottom: 40px;
  }
  &__form {
    .username,
    .password {
      width: 300px;
      height: 45px;
      left: 490px;
      top: 330px;
      border: 1px solid #b6b6b6;
      border-radius: 4px;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      text-transform: uppercase;
      background: url("@/assets/user.svg") center left 20px;
      background-repeat: no-repeat, repeat;
      background-size: 30px;
      margin-bottom: 30px;
      outline-color: black;
      color: #000000;
      margin: 0;
    }
    .inpit-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-error-message {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 5px;
      width: 300px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      position: relative;
      top: 5px;
      visibility: hidden;
    }
    .confirm_visible {
      visibility: visible;
    }

    .container-body__btn {
      width: 300px;
      height: 45px;
      left: 490px;
      top: 483px;
      padding: 0;
      cursor: pointer;
      background: #000000;
      box-shadow: 0px 4px 4px rgba(125, 125, 125, 0.3);
      border-radius: 4px;
      border: 0;
      margin-top: 30px;
      p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        margin: 5px 0 0 0;
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        height: 100%;
      }
    }
    .container-body__btn:hover {
      background: #ffffff;
      p:hover {
        color: #000000;
      }
    }
  }

  .error-message {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
    width: 300px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }
  .invalid {
    border-color: red;
    border: 1px solid red;
  }
}
</style>
