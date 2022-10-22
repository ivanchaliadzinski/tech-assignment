<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !username.isValid}">
      <input
          type="text"
          id="username"
          placeholder="Username"
          v-model.trim="username.value"
          @blur="clearValidation('username')"
      />
      <p v-if="!username.isValid">Enter User Name.</p>
    </div>
    <div class="form-control" :class="{invalid: !password.isValid}">
      <input
          type="password"
          id="password"
          placeholder="**********"
          v-model.trim="password.value"
          @blur="clearValidation('password')"
      />
      <p v-if="!password.isValid">Enter Password.</p>
    </div>
    <p v-if="!formIsValid">To proceed, fix issues above.</p>
    <base-button>Sign In</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: {
        value: '',
        isValid: true,
      },
      password: {
        value: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  emits: ['sign-in'],
  methods: {
    clearValidation(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.username.value === '') {
        this.username.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.value === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const body = {
        username: this.username.value,
        password: this.password.value,
      };

      this.$emit('sign-in', body);
    },
  },
};
</script>

<style scoped lang="scss">
.form-control {
  margin: 0.5rem 0;
}

p {
  margin-left: 10%;
  color: $rubine_red;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 80%;
  padding: 10px;
  margin: 20px 10%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font: inherit;
}

.invalid input,
.invalid textarea {
  border: 1px solid $rubine_red;
}
button, a {
  margin-left: 80%;
}
</style>

