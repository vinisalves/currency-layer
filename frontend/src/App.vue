<template>
  <Header></Header>
  <section class="container">
    <div class="cards">
      <CurrencyCard
        v-for="currency in computedValues"
        :key="currency.code"
        :code="currency.code"
        :description="currency.description"
        :value="currency.value"
      >
      </CurrencyCard>
    </div>
  </section>
</template>

<script lang="ts">
import Header from "@/components/Base/Header.vue";
import CurrencyCard from "@/components/CurrencyCard.vue";
import { computed, defineComponent, onMounted } from "vue";
import store from "./store/store";

export default defineComponent({
  components: { Header, CurrencyCard },
  setup() {
    onMounted(async () => {
      await store.getCountries();
      await store.getCurrencies();
    });

    const formatValue = (value: number): string => {
      if (value >= 1e9 && value < 1e12) return +(value / 1e9).toFixed(1) + "B";
      return value.toFixed(2);
    };

    const computedValues = computed(() => {
      return store.state.currencies.map((currency) => {
        const code = currency.code.substring(3);

        const country = store.state.countries.find((x) => x.code === code);

        return {
          code: code,
          description: country?.description,
          value: formatValue(currency.value),
        };
      });
    });

    return { computedValues };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap");
:root {
  --primary-color: #111;
  --secondary-color: #1289a7;
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: var(--secondary-color);
  background-color: var(--primary-color);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cards {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
