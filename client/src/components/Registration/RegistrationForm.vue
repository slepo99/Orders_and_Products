<template>
  <div class="container-body">
    <div class="container-body__logo">
      <img
        class="container-body__logo-image"
        src="@/assets/noun-sign-up-638654.png"
        alt="Sign Up Logo"
      />
    </div>
    <form @submit.prevent="validate" class="container-body__form">
      <div class="container-body__field">
        <span
          class="container-body__error-message"
          :class="{ username_visible: error.username }"
        >
          Username should not be less than 4 symbols
        </span>
        <input
          class="container-body__input username"
          type="text"
          v-model="regData.username"
          placeholder="USERNAME"
        />
      </div>
      <div class="container-body__field">
        <span
          class="container-body__error-message"
          :class="{ password_visible: error.password }"
        >
          Password should not be less than 4 symbols
        </span>
        <input
          class="container-body__input password"
          type="text"
          v-model="regData.password"
          placeholder="password"
        />
      </div>
      <div class="container-body__field">
        <span
          class="container-body__error-message"
          :class="{ confirm_visible: error.confirmPassword }"
        >
          Passwords not the same, try again
        </span>
        <input
          class="container-body__input password"
          type="text"
          v-model="regData.confirmPassword"
          placeholder="confirm password"
        />
      </div>
      <div class="container-body__field">
        <button class="container-body__field-btn">
          <p>Sign up</p>
        </button>
      </div>
    </form>
    <div>
      <p>
        Already have an accont ?
        <a>
          <router-link style="color: blue; cursor: pointer" to="/login"
            >Sign in</router-link
          >
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/authModule";
import { registrationData, authData } from "@/types/UserTypes";
import { reactive } from "vue";

const authStore = useAuthStore();
const error = reactive({˝
  username: false,
  password: false,
  confirmPassword: false,
});
const regData = reactive<registrationData>({
  username: "",
  password: "",
  confirmPassword: "",
});
async function validate() {
  if (regData.username.length < 4) {
    error.username = true;
    setTimeout(() => {
      error.username = false;
    }, 4000);
    return;
  }
  if (regData.password.length < 4) {
    error.password = true;
    setTimeout(() => {
      error.password = false;
    }, 4000);
    return;
  }
  if (
    regData.password.toLowerCase() !== regData.confirmPassword.toLowerCase()
  ) {
    error.confirmPassword = true;
    setTimeout(() => {
      error.username = false;
    }, 4000);
    return;
  }
  await registration();
}
async function registration() {
  const data: authData = {
    username: regData.username,
    password: regData.password,
  };
  await authStore.createNewUser(data);
}
</script>

<style scoped lang="scss">
.container-body {
  min-height: 80vh;
  padding: 0;
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  padding-top: 150px;
  &__logo {
    &-image {
      margin-bottom: 40px;
      width: 144px;
      height: 142px;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
  }
  &__field {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-btn {
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

    &-btn:hover {
      background: #ffffff;
      p:hover {
        color: #000000;
      }
    }
    .username {
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
      color: black;
      margin: 0;
    }
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
      background: url("@/assets/lock.svg") center left 20px;
      background-repeat: no-repeat, repeat;
      background-size: 30px;
      outline-color: black;
      margin-bottom: 30px;
      color: #000000;
      margin: 0;
    }
  }

  &__error-message {
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
  .username_visible {
    visibility: visible;
  }
  .password_visible {
    visibility: visible;
  }
  .invalid {
    border: 1px solid red;
  }
}
</style>
