<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ exportErrorMessage(error) }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." loader>
    </base-dialog>
    <section>
      <base-card>
        <div class="header">
          <h2>Sign In</h2>
        </div>
        <sign-in-form @login="systemLogin"></sign-in-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import SignInForm from './SignInForm';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    SignInForm,
  },
  computed: {
    ...mapGetters('user', ['error', 'isLoading']),
  },
  methods: {
    ...mapActions('user', ['login', 'clearError']),
    systemLogin(data) {
      this.login(data).then(() => {
        // this.$router.replace('/suppliers');
        console.log('success')
      });
    },
    handleError(){
      this.clearError();
    },
    exportErrorMessage(error) {
      return (typeof error.errorMessage === 'string')
          ? error.errorMessage
          : error.errorMessage?.["non_field_errors"][0];
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

