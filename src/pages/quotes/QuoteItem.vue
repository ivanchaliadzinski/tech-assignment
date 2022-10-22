<template>
  <li>
    <h3>{{`${id} - ${name}`}}</h3>
  </li>
</template>

<script>
export default {
  props: ['id', 'name'],
};
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
}

div {
  margin: 0.5rem 0;
}

</style>
