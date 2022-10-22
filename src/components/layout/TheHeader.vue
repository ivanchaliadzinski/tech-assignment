<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Technical Assignment</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/suppliers" v-if="login">Suppliers</router-link>
          <router-link to="/signup" v-else>Sign Up</router-link>
        </li>
        <li>
          <router-link to="/" v-if="login">Quotes</router-link>
          <router-link to="/signin" v-else>Sign In</router-link>
        </li>
        <li>
          <base-button v-if="login" @click="$emit('logout')">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['logout'],
  props: {
    login: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $dark_slate_blue;
}

header a {
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: $light_yellow;
  border-radius: 30px;
  border: 1px solid transparent;
}


a:active,
a:hover,
a.router-link-active {
  border: 1px solid $light_yellow;
  background-color: $light_yellow_opacity;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
  background-color: transparent;
}

header nav {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

header ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

</style>
