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
      <p v-if="!username.isValid">Enter Username.</p>
    </div>
    <div class="form-control" :class="{invalid: !password.isValid}">
      <input
          type="password"
          id="password"
          placeholder="********"
          v-model.trim="password.value"
          @blur="clearValidation('password')"
      />
      <p v-if="!password.isValid">Enter Password.</p>
    </div>
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <input
          type="text"
          id="firstname"
          placeholder="First Name"
          v-model.trim="firstName.value"
          @blur="clearValidation('firstName')"
      />
      <p v-if="!firstName.isValid">Enter First Name.</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          v-model.trim="lastName.value"
          @blur="clearValidation('lastName')"
      />
      <p v-if="!lastName.isValid">Enter Last Name.</p>
    </div>
    <div class="form-control" :class="{invalid: !email.isValid}">
      <input
          type="email"
          id="email"
          placeholder="your.mail@domen.com"
          v-model.trim="email.value"
          @blur="clearValidation('email')"
      />
      <p v-if="!email.isValid">Enter Email or provide valid Email.</p>
    </div>
    <base-button>Sign Up</base-button>
  </form>
</template>

<script>
import {EMAIL_REGEX} from "@/constants/EmailRegex";
export default {
  emits: ['signup'],
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
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      email: {
        value: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
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
      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.value === '' || !this.email.value.toLowerCase().match(EMAIL_REGEX)) {
        this.email.isValid = false;
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
        first_name: this.firstName.value,
        last_name: this.lastName.value,
        email: this.email.value,
      };

      this.$emit('signup', body);
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
