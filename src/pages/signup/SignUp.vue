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
          <h2>Sign Up</h2>
        </div>
        <sign-up-form @signup="systemRegister"></sign-up-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import SignUpForm from './SignUpForm';
import { mapActions, mapGetters } from 'vuex';
import exportErrorMessage from "@/utils/exportErrorMessage";
export default {
  components: {
    SignUpForm,
  },
  computed: {
    ...mapGetters('user', ['error', 'isLoading']),
  },
  methods: {
    ...mapActions('user', ['register', 'clearError']),
    systemRegister(data) {
      this.register(data).then(() => {
        this.$router.replace('/suppliers');
      });
    },
    handleError(){
      this.clearError();
    },
    exportErrorMessage
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
}
</style>


