<template>
    <div>
        <p class="title-text">Your order</p>
        <!-- <p class="cart-item-edit-info" v-if="cart.length !== 0">
            <i class="bi bi-bell-fill"></i> Click any item to edit or remove it.
        </p> -->
        <p class="subtitle-text mt-05" v-if="cart.length === 0">Your basket is empty.</p>
        <CartContent />
        <CartActions />
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