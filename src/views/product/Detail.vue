<template>
  <div>
    <!-- v-if jika ada data product jalankan, berhubungan dengan else NotFound yang di bawah -->
    <div id="page-wrap" v-if="product">
      <div class="img">
        <img :src="product.imageUrl" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">{{ product.price }}</h3>
        <p>{{ product.averageRating }}</p>
        <button id="add-to-cart">add to cart</button>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>

    <!-- jika data product tidak di temukan akan mengarahkan ke file 404 -->
    <NotFound v-else />
  </div>
</template>
<script>
import { products } from "../../data-seed";
import NotFound from "../errors/404.vue";

export default {
  components: {
    NotFound,
  },
  data() {
    return {
      products,
    };
  },
  // ketika user mengklik detail produck akan di tampilkan sesuai id nya begitu juga id yang di rote path
  computed: {
    product() {
      return this.products.find((p) => {
        return p.id === this.$route.params.id;
      });
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>
<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>
