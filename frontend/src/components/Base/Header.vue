<template>
  <header>
    <div class="brand">Currency Layer Project</div>
    <div>
      Currency Reference:
      <span class="currency-flag currency-flag-usd"></span>
      United States Dollar - USD 1.00
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.brand {
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;
}
</style>
