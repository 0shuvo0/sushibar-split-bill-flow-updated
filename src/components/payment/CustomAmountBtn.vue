<template>
    <button @click="showModal = true" class="btn btn-block btn-secondary mt-1">Custom amount</button>
    <div class="modal-wrapper" v-if="showModal">
        <div class="modal-content add-item-modal-conetnt">
            <i @click="showModal = false" class="bi bi-x modal-close-btn"></i>
            <p class="text-center title-text mt-2 mb-1">Choose a custom amount</p>
            <div
             class="search-box-container custom-amount-input email-box w-100"
            >
                <input
                 type="text"
                 class="text-center"
                 placeholder=""
                 @focus="showNumpad = true"
                 v-model="amount"
                >
                <i class="icon bi bi-currency-pound"></i>
            </div>
             <div class="or-indicator mb-1 mt-1">
                <div class="hr"></div>
            </div>
            <div class="mb-2">
                <div class="cart-service-charge cart-subtotal">
                    <span class="prop">Total left to pay</span>
                    <span class="val">£{{leftToPay.toFixed(2)}}</span>
                </div>
            </div>
            <p v-if="err" class="err-text mb-1">{{ err }}</p>
            <ProceedCheckoutCustomAmountBtn
             :subtotal="parseFloat(amount) || 0"
            />
            <div class="mt-1" v-show="showNumpad">
                <Numpad
                 :current="amount"
                 @input="v => amount = v"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Numpad from './Numpad.vue'
import ProceedCheckoutCustomAmountBtn from './ProceedCheckoutCustomAmountBtn.vue'

const SERVICE_CHARGE = 12.5

export default {
    components: {
        Numpad,
        ProceedCheckoutCustomAmountBtn
    },
    data(){
        return {
            showModal: false,
            showNumpad: false,
            amount: null,
            err: '',
            SERVICE_CHARGE
        }
    },
    watch: {
        amount(){
            this.err = ''
            let a
            if(isNaN(parseFloat(this.amount))){
                this.err = 'Amount must be a valid number!'
                return
            }
            a = parseFloat(this.amount)
            if(a <= 0){
                this.err = 'Amount must be greater than zero!'
                return
            }
            if(parseInt(this.amount) > parseInt(this.total)){
                this.err = 'Amount is greater than due!'
                return
            }
        }
    },
    computed: {
        cart(){
            return this.$store.state.cart
        },
        cartTotal(){
            const total = this.cart.map(item => +item.totalPrice)
                                    .reduce((acc, val) => acc + val, 0)
            return total.toFixed(2)
        },
        cartServiceCharge(){
            return (this.cartTotal * (SERVICE_CHARGE / 100)).toFixed(2)
        },
        total(){
            return( +this.cartTotal + +this.cartServiceCharge)
        },
        leftToPay(){
            const total = parseFloat(this.amount) || 0
            const t = this.total - total
            return Math.max(t, 0)
        }
    }
}
</script>

<style lang="scss">
.err-text{
    color: var(--color-danger);
}
.custom-amount-input input{
    padding: 0 !important;
}
</style>
