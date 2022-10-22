<template>
  <div>
    <base-dialog :show="false" title="An error occurred!" @close="handleError">
      <p>{{ 'some text' }}</p>
    </base-dialog>
    <base-dialog :show="false" title="Authenticating..." loader>
    </base-dialog>
    <section>
      <base-card>
        <div class="header">
          <h2>Sign In</h2>
        </div>
        <sign-in-form @sign-in="signIn"></sign-in-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import SignInForm from './SignInForm';
// import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    SignInForm,
  },
  // computed: {
  //   ...mapGetters('users', ['error', 'isAuthenticated', 'isLoading']),
  // },
  methods: {
    // ...mapActions('users', ['loginUser', 'clearError']),
    signIn(data) {
      this.loginUser(data).then(() => {
        // this.$router.replace('/suppliers');
        console.log('success')
      });
    },
    handleError(){
      // this.clearError();
    }
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
}
</style>

