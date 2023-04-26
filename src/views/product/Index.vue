<template>
  <div>
    <div id="#page-wrap">
      <div class="grid-wrap">
        <!-- melemparkan data dari kolom -->
        <ProductItem v-for="product in products" :key="product.id" :products="products" />
      </div>
    </div>
  </div>
</template>
<script>
// Mengimport semua data product di file data-seed
import { products } from "../../data-seed";
import ProductItemVue, { ProductItem } from "../../components/ProductItem.vue";

//cara pemanggilan kembali data product di vue
export default {
  comments: {
    ProductItem,
  },
  data() {
    return {
      products,
    };
  },
  components: { ProductItemVue },
};
</script>

<!-- menggunakan scoped di style agar tidak ke styling file lainnya -->
<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
