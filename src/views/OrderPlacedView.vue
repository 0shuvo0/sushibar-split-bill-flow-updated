<template>
    <div class="page menu-page">
      <div class="page-content">
        <div class="col main container-px container-py">
          <div class="text-center">
            <div class="waiter-called-icon order-placed-icon">
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="110" height="110" rx="55" fill="#D0D8DF"/>
              <path d="M26.2383 54.643L44.7024 73.1071C45.0952 73.4999 45.7315 73.5014 46.1262 73.1105L83.2566 36.3301" stroke="#788DA1" stroke-width="5.04587" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="text-center title-text mt-1">Your payment is made</p>
            <p class="text-center subtitle-text mt-05">
              Order #171-8259874
            </p>
            <div class="cart-items-container mt-4">
              <div
               class="cart-item no-shadow"
               v-for="(item, index) in order.items"
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
            <div class="cart-service-charge bb-0 mt-2">
                <span class="prop">Service charge ({{order.serviceChargePercentage}}%)</span>
                <span class="val">£{{order.serviceChargeAmount}}</span>
            </div>
            <div class="cart-service-charge">
                <span class="prop">Tip</span>
                <span class="val">£{{(order.tip || 0).toFixed(2)}}</span>
            </div>
            <div class="cart-service-charge bb-0 cart-subtotal">
                <span class="prop">Subtotal</span>
                <span class="val">£{{order.subtotal}}</span>
            </div>

            <div class="ordered-page-actions">
              <GetReceiptBtn />
              <router-link to="/" class="btn btn-secondary">Back to menu</router-link>
            </div>
          </div>
        </div><!-- /Main col -->
  
        <div class="col side transparent">
          <OrderThankYou />
          <CallAWaiterSection />
        </div><!-- /Side col -->
      </div>
      
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue'
  import CallAWaiterSection from '@/components/CallAWaiterSection.vue'
  import OrderThankYou from '@/components/OrderThankYou.vue'
  import GetReceiptBtn from '@/components/GetReceiptBtn.vue'

  export default {
    components: {
      Footer,
      OrderThankYou,
      CallAWaiterSection,
      GetReceiptBtn
    },
    created(){
      if(!this.$store.state.order){
        this.$router.push({ path: '/' })
      }
    },
    computed: {
      order(){
        return this.$store.state.order || {}
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
.order-placed-icon.waiter-called-icon{
  --size: 110px;
}
.cart-item.no-shadow{
  box-shadow: none;
  background-color: transparent;
  min-height: 40px;
  padding: 0;
}
.ordered-page-actions{
  display: flex;
  justify-content: flex-end;
  margin-top: 4em;
  & >.btn.back-btn{
    color: var(--color-body) !important;
  }
  & > .btn.receipt-btn{
    background-color: var(--color-body) !important;
    width: 180px;
  } 
}
</style>

<style lang="scss" scoped>
svg, svg path{
  fill: none !important;
}
</style>