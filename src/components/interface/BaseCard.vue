<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 12px;
  box-shadow: 0 4px 8px $shadow-light;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 50rem;
}
</style>
