<template>
  <div v-if="show" @click="close" class="background"></div>
  <transition name="dialog">
    <dialog open v-if="show">
      <div class="header">
        <h3>{{ title }}</h3>
      </div>
      <div v-if="!loader">
        <section>
          <slot></slot>
        </section>
        <menu>
          <slot name="actions">
            <base-button @click="close">Close</base-button>
          </slot>
        </menu>
      </div>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    loader: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  methods: {
    close() {
      if (this.loader) {
        return;
      }
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
.background {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $shadow-light;
  z-index: 10;
}

dialog {
  position: fixed;
  top: 10vh;
  left: 30%;
  width: 40%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px $shadow-light;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

.header {
  background-color: $dark_slate_blue;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.header h3 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
