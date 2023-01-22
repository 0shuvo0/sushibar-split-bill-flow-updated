<template>
    <div>
        <div class="cart-items-container">
            <div
               class="cart-item no-shadow"
               v-for="(item, index) in cart"
               :key="index"
              >
                <span class="item-qty">{{item.qty}}</span>
                <div class="item-data">
                    <p class="item-name-price">
                        <span class="item-name">{{item.title}} (£{{item.price.toFixed(2)}})</span>
                        <span class="item-price">£{{getTotal(item)}}</span>
                    </p>
                    <!-- <p
                    class="item-option text-left">
                    {{ item.title }} (£{{item.price.toFixed(2)}})
                    </p> -->
                    <p
                    class="item-option text-left"
                    v-for="(option, index) in getOptions(item)"
                    :key="index"
                    >{{option}}</p>
                </div>
            </div>
        </div>

        <div class="mt-2" v-if="cart.length">
            <div class="cart-service-charge">
                <span class="prop">Service charge ({{SERVICE_CHARGE}}%)</span>
                <span class="val">£{{serviceCharge}}</span>
            </div>
            <div class="cart-service-charge cart-subtotal">
                <span class="prop">Total left to pay</span>
                <span class="val">£{{(+totalWithTip + +serviceCharge).toFixed(2)}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'

const SERVICE_CHARGE = 12.5

export default {
    components: {
        CartItem
    },
    data(){
        return {
            SERVICE_CHARGE
        }
    },
    computed: {
        tip(){
            return +this.$store.state.tip
        },
        cart(){
            return this.$store.state.cart
        },
        total(){
            return this.cart
                        .map(item => +item.totalPrice)
                        .reduce((acc, val) => acc + val, 0)
                        .toFixed(2)
        },
        totalWithTip(){
            return +this.total + this.tip
        },
        serviceCharge(){
            return (+this.total * (SERVICE_CHARGE / 100)).toFixed(2)
        }
    },
    methods: {
      getOptions(item){
        if(!item.optionGroups) return []
            return item.optionGroups.map(g => {
                if(!g.selectedCount) return []
                return g.activeOptionIdxs.map(i => {
                    const option = g.options[i]
                    return `${option.title} (£${option.price.toFixed(2)})`
                })
            }).flat()
      },
      getTotal(item){
        let price = item.price
        if(!item.optionGroups) return price
        item.optionGroups.map(g => {
            if(!g.selectedCount) return price
            return g.activeOptionIdxs.map(i => {
                const option = g.options[i]
                price += option.price
            })
        })
        return price.toFixed(2)
      }
    }
}
</script>

<style lang="scss">
.cart-items-container{
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.cart-service-charge{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    color: var(--color-body);
    margin-top: .5em;
    padding-bottom: .5em;
    &:not(:last-child){
        border-bottom: 1px solid #E3E3E3;
    }
    &.bb-0{
        border-bottom: 0 !important;
    }
}
.cart-subtotal{
    color: var(--color-dark);
}
</style>