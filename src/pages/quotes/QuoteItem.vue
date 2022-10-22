<template>
  <li>
    <div class="wrapper">
      <h3>{{`${id} - ${title}`}}</h3>
      <h4>{{`Created: ${created}`}}</h4>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'created'],
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

</style>
