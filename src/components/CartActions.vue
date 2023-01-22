<template>
    <div v-if="cart.length">
        <PayNowBtn
         @proceed="placeOrder()"
         :subtotal="+total"
        />
        
        <div class="or-indicator my-1">
            <div class="hr"></div>
            <span>OR</span>
            <div class="hr"></div>
        </div>

        <SplitTheBillBtn />


        <div class="only-here-to-view-message">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="28" height="28" rx="14" fill="#D0D8DF"/>
            <path d="M15.3162 16.3309C15.5494 15.0486 15.7159 12.8172 15.7159 10.6023V7.80469H13.3179V10.6023C13.3179 12.7672 13.4678 14.9987 13.6843 16.3309H15.3162ZM14.5169 20.1943C15.233 20.1943 15.8491 19.5948 15.8491 18.8788C15.8491 18.146 15.233 17.5465 14.5169 17.5465C13.7675 17.5465 13.1514 18.146 13.1514 18.8788C13.1514 19.5948 13.7675 20.1943 14.5169 20.1943Z" fill="#788DA1"/>
            </svg>
            <p>Just here to view the menu?</p>
            <router-link to="/" class="btn btn-block btn-secondary">Take me there</router-link>
        </div>
    </div>
</template>

<script>
import PayNowBtn from './payment/PayNowBtn.vue'
import SplitTheBillBtn from './payment/SplitTheBillBtn.vue'

const SERVICE_CHARGE = 12.5

export default {
    components: {
        PayNowBtn,
        SplitTheBillBtn
    },
    computed: {
        cart(){
            return this.$store.state.cart
        },
        total(){
            const total = this.cart.map(item => +item.totalPrice)
                                    .reduce((acc, val) => acc + val, 0)
            return total.toFixed(2)
        },
        serviceCharge(){
            return ((+this.total) * (SERVICE_CHARGE / 100)).toFixed(2)
        },
        tip(){
            return +this.$store.state.tip
        }
    },
    methods: {
        placeOrder(){
            this.$store.commit('setOrder', {
                total: this.total,
                tip: this.tip,
                subtotal: ((+this.total + this.tip) + +this.serviceCharge).toFixed(2),
                serviceChargePercentage: SERVICE_CHARGE,
                serviceChargeAmount: this.serviceCharge
            })
            
            this.$router.push({ path: '/order-placed' })
        }
    }
}
</script>

<style lang="scss">
.only-here-to-view-message{
    padding: 24px;
    background-color: #ECF0F4;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    margin-top: 4em;
    p{
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
    }
}
</style>
