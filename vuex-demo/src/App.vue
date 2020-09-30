<template>
  <div id="app">
      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
      <try-one></try-one>
      <try-module></try-module>
      <!-- <product-list-one v-bind:products="products"></product-list-one>
      <product-list-two v-bind:products="products"></product-list-two> -->
      <div>
        <h2>father</h2>
        <ul>
            <li v-for="product in products" :key="product.index">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
      </div>
      
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'
import TryOne from './components/TryOne.vue'
import TryModule from './components/TryModule.vue'

export default {
    name: 'app',
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo,
        'try-one': TryOne,
        'try-module': TryModule,
    },
    data () {
        return {
            products : this.$store.state.products
        }
    }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
