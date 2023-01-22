<template>
    <div class="col container-px side-col-section container-py user-order-col">
        <div class="side-col-section__content-lg">
            <p class="title-text">Your order</p>
            <p class="cart-item-edit-info" v-if="cart.length !== 0">
                <i class="bi bi-bell-fill"></i> Click any item to edit or remove it.
            </p>
            <p class="subtitle-text mt-05" v-if="cart.length === 0">Your basket is empty.</p>
            <CartContent />
            <CartActions />
        </div>
    </div>
</template>

<script>
import CartContent from './CartContent.vue'
import CartActions from './CartActions.vue'

export default {
    components: {
        CartContent,
        CartActions
    },
    computed: {
        cart(){
            return this.$store.state.cart
        }
    }
}
</script>

<style lang="scss">
.bottom-cart-btn{
    height: 100px;
    background-color: var(--color-dark);
    color: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;
    text-decoration: none;
    border-radius: 12px 12px 0 0;
    box-shadow: 0px -20px 100px rgba(36, 64, 92, 0.5);
    display: flex;
    align-items: center;
    padding: 1em 2em;
    gap: 1em;
    cursor: pointer;
    .item-count{
        --size: 56px;
        height: var(--size);
        width: var(--size);
        line-height: var(--size);
        text-align: center;
        border-radius: 50%;
        font-size: 1.5em;
        color: #788DA1;
        background-color: var(--color-light);
        display: inline-block;
        font-weight: 700;
    }
    .cart-data{
        margin-left: auto;
        text-align: right;
        .total{
            font-weight: 700;
            font-size: 24px;
        }
        .info{
            font-weight: 500;
            font-size: 0.875em;
        }
    }
}

.cart-item-edit-info{
    font-size: .9em;
    margin-block: .5em;
}
</style>