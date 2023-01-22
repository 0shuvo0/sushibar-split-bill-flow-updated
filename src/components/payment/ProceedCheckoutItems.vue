<template>
    <button
     :disabled="!subtotal"
     class="btn btn-primary btn-block mt-2"
     @click="showModal = true"
    >Proceed to Checkout</button>
    <div v-if="showModal" class="modal-wrapper">
        <div class="modal-content add-item-modal-conetnt">
            <i @click="showModal = false" class="bi bi-x modal-close-btn"></i>
            <OrderTipVue
             :subtotal="subtotal"
            />

            <div class="mt-2">
                <div class="cart-service-charge bb-0">
                    <span class="prop">Your total</span>
                    <span class="val">£{{subtotal.toFixed(2)}}</span>
                </div>
                <div class="cart-service-charge bb-0">
                    <span class="prop">Service charge ({{SERVICE_CHARGE}}%)</span>
                    <span class="val">£{{serviceCharge}}</span>
                </div>
                <div class="cart-service-charge">
                    <span class="prop">Tip</span>
                    <span class="val">£{{tip}}</span>
                </div>
                <div class="cart-service-charge cart-subtotal">
                    <span class="prop">Subtotal</span>
                    <span class="val">£{{(+totalWithTip + +serviceCharge).toFixed(2)}}</span>
                </div>
            </div>

            <button
            class="btn btn-primary btn-block mt-2"
            @click="placeOrder"
            >Pay now</button>
        </div>
    </div>
</template>

<script>
import OrderTipVue from '../OrderTip.vue'
const SERVICE_CHARGE = 12.5

export default {
    emits: ['proceed'],
    props: ['subtotal', 'selections'],
    components: {
        OrderTipVue
    },
    data(){
        return {
            showModal: false,
            SERVICE_CHARGE
        }
    },
    computed: {
        tip(){
            return +this.$store.state.tip
        },
        total(){
            return +this.subtotal
        },
        totalWithTip(){
            return +this.total + this.tip
        },
        serviceCharge(){
            return (this.total * (SERVICE_CHARGE / 100)).toFixed(2)
        }
    },
    methods: {
        placeOrder(){
            this.$store.commit('setOrder', {
                type: 'items-select',
                selections: this.selections,
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