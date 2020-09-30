<template>
    <div id="product-list-two">
        <h2>TryOne</h2>
        <ul>
            <li>
                <span class="name">{{ $store.state.tryNum }}</span>
                <span class="price">${{ $store.state.tryHrefMessage }}</span>
            </li>
            <h3>{{$store.state.a.products[0].price}} --- 1</h3>
            <h4>{{abc}}</h4>
            <button @click="addName">增加价格</button> //添加按钮
        </ul>
    </div>
</template>

<script>
export default {
    // props: ['products'],
    data () {
        return {
            products : this.$store.state.products, //获取store中state的数据
            abc:0
        }
    },
    methods: {
        addName() {
            this.abc++;
            this.$store.commit('SET_TRY', {num:this.$store.state.tryNum+1,Message:this.$store.state.tryHrefMessage+1}); //提交`minusPrice,payload为2
        },
    }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    display: flex;
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
