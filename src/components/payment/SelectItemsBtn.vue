<template>
    <button @click="showModal = true" class="btn btn-block btn-secondary">Select items</button>
    <div class="modal-wrapper" v-if="showModal">
        <div class="modal-content add-item-modal-conetnt">
            <i @click="showModal = false" class="bi bi-x modal-close-btn"></i>
            <p class="text-center title-text mt-2">Select the items you want to pay for</p>
            <p class="text-center subtitle-text mt-1 whitespace-normal px-2">{{ selectionCount }} item selected</p>
            <!-- <p class="text-right" v-if="selectionCount > 0">
                <span @click="selections = {}" class="reset-selection-btn">RESET</span>
            </p> -->
            <div class="items-selections-container mt-2">
                <div
                 class="selection-item"
                 v-for="(item, index) in cart"
                 :key="index"
                 :class="{active: index in selections}"
                 @click="selectItem(index)"
                >
                    <span class="qty">{{ (selections[index] && item.qty !== 1) ? `${selections[index]}/${item.qty}` : item.qty }}</span>
                    <div>
                        <p class="name">{{ item.title }}</p>
                    </div>
                    <span class="price">£{{ item.totalPrice }}</span>
                </div>
            </div>
            <div class="or-indicator mb-1 mt-1">
                <div class="hr"></div>
            </div>
            <div>
                <div class="cart-service-charge bb-0">
                    <span class="prop">Service charge ({{SERVICE_CHARGE}}%)</span>
                    <span class="val">£{{serviceCharge}}</span>
                </div>
                <div class="cart-service-charge cart-subtotal">
                    <span class="prop">Total left to pay</span>
                    <span class="val">£{{leftToPay.toFixed(2)}}</span>
                </div>
            </div>
            <ProceedCheckoutItems
             :subtotal="subtotal"
             :selections="selections"
            />
            <p @click="showModal = false" class="change-mind-btn">Changed your mind?</p>
        </div>
    </div>
</template>

<script>
import ProceedCheckoutItems from './ProceedCheckoutItems.vue'

const SERVICE_CHARGE = 12.5

export default {
    components: {
        ProceedCheckoutItems
    },
    data(){
        return {
            showModal: false,
            selections: {},
            SERVICE_CHARGE
        }
    },
    computed: {
        selectionCount(){
            let total = 0
            const itemIdxs = Object.keys(this.selections)
            if(!itemIdxs.length) return 0
            itemIdxs.forEach(i => {
                total += this.selections[i]
            })
            return total
        },
        cart(){
            return this.$store.state.cart
        },
        total(){
            const itemIdxs = Object.keys(this.selections)
            if(!itemIdxs.length) return 0
            let total = 0
            itemIdxs.forEach(i => {
                const item = this.cart[i]
                if(item.qty === 1){
                    return total += +item.totalPrice
                }
                const price_qty_1 = +item.totalPrice / item.qty
                total += price_qty_1 * this.selections[i]
            })
            return +total
        },
        cartTotal(){
            const total = this.cart.map(item => +item.totalPrice)
                                    .reduce((acc, val) => acc + val, 0)
            return total.toFixed(2)
        },
        serviceCharge(){
            return (this.total * (SERVICE_CHARGE / 100)).toFixed(2)
        },
        cartServiceCharge(){
            return (this.cartTotal * (SERVICE_CHARGE / 100)).toFixed(2)
        },
        subtotal(){
            return +this.total + +this.serviceCharge
        },
        leftToPay(){
            const t = (+this.cartTotal + +this.cartServiceCharge) - +this.subtotal
            return Math.max(t, 0)
        }
    },
    methods: {
        selectItem(index){
            if(index in this.selections){
                if(this.selections[index] < this.cart[index].qty) this.selections[index]++
                else delete this.selections[index]
            }else{
                this.selections[index] = 1
            }
        }
    }
}
</script>

<style lang="scss">
.reset-selection-btn{
    cursor: pointer;
    font-weight: 700;
    color: var(--color-dark);
}
.selection-item{
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 4px;
    padding-right: 8px;
    gap: .75em;
    cursor: pointer;
    margin: .5em;
    user-select: none;
    &:last-child{
        margin-bottom: 0;
    }
    &.active{
        background-color: var(--color-body);
        color: #FAFAFA;
    }
    .qty{
        --size: 28px;
        height: var(--size);
        width: var(--size);
        line-height: var(--size);
        text-align: center;
        border-radius: 50%;
        font-weight: 700;
        font-size: 14px;
        color: #788DA1;
        background-color: #D0D8DF;
    }
    .name{
        font-weight: 700;
        line-height: 150%;
    }
    .price{
        font-weight: 700;
        margin-left: auto;
    }
}
.change-mind-btn{
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    margin: 1em;
    cursor: pointer;
}
</style>
