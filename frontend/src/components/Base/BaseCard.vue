<template>
  <div class="card">
    <div class="card-title">
      <slot name="title"> </slot>
    </div>
    <div class="card-content">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  margin: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
  font-weight: 300;
  background-color: #181717;
  transition: all 0.6s;
}
.card:hover {
  background-color: #000;
  cursor: pointer;
}
.card-title {
  font-weight: 700;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
