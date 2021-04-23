<template>
  <Card>
    <template #title> {{ code }} </template>
    <template #content>
      <div>
        <span class="card-content-currency-value">{{ value }}</span>
      </div>
      <div class="card-content-description">
        <span
          class="currency-flag"
          :class="'currency-flag-' + code.toLowerCase()"
        ></span>
        <span> {{ description }}</span>
      </div>
    </template>
  </Card>
</template>
<script lang="ts">
import Card from "@/components/Base/BaseCard.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Card,
  },

  props: {
    description: String,
    code: String,
    value: String,
  },
});
</script>
<style scoped>
.card-content-currency-value {
  font-size: 2.7em;
  font-weight: 700;
  color: var(--secondary-color);
}

.card-content-description {
  font-size: 0.8em;
  text-align: center;
}
.currency-flag {
  margin-right: 8px;
}
</style>
