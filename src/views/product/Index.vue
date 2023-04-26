<template>
  <div>
    <div id="#page-wrap">
      <div class="grid-wrap">
        <!-- cara MAPing di vue -->
        <div v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.imageUrl" alt="image" />
          <h3 class="product.name">{{ product.name }}</h3>
          <p class="product-price">Rp{{ product.price }}</p>
          <!-- ketika button di click akan menangkap id nya menggunakan router-link ini -->
          <router-link :to="{ name: 'product-detail', params: { id: product.id } }"> <button>Detail</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Mengimport semua data product di file data-seed
import { products } from "../../data-seed";

//cara pemanggilan kembali data product di vue
export default {
  data() {
    return {
      products,
    };
  },
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

.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 5%;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>
