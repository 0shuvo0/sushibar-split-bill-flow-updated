<template>
    <div class="menu-nav-btns">
        <router-link to="/cart" class="menu-nav-btn bg-body">
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.2555 18.5212L16.0737 5.21352C16.0484 4.91808 15.7993 4.69438 15.5081 4.69438H13.077C13.0432 2.47432 11.2284 0.680542 8.99986 0.680542C6.77136 0.680542 4.95648 2.47432 4.92272 4.69438H2.49162C2.19618 4.69438 1.95138 4.91808 1.92605 5.21352L0.744272 18.5212C0.744272 18.5381 0.740051 18.555 0.740051 18.5719C0.740051 20.0871 2.12865 21.3195 3.83801 21.3195H14.1617C15.8711 21.3195 17.2597 20.0871 17.2597 18.5719C17.2597 18.555 17.2597 18.5381 17.2555 18.5212ZM8.99986 1.82012C10.5995 1.82012 11.9037 3.1032 11.9374 4.69438H6.06229C6.09606 3.1032 7.40024 1.82012 8.99986 1.82012ZM14.1617 20.18H3.83801C2.76596 20.18 1.89651 19.4709 1.87963 18.5972L3.01076 5.83818H4.9185V7.56864C4.9185 7.88519 5.17173 8.13843 5.48828 8.13843C5.80483 8.13843 6.05807 7.88519 6.05807 7.56864V5.83818H11.9374V7.56864C11.9374 7.88519 12.1907 8.13843 12.5072 8.13843C12.8238 8.13843 13.077 7.88519 13.077 7.56864V5.83818H14.9847L16.1201 18.5972C16.1032 19.4709 15.2295 20.18 14.1617 20.18Z" fill="#FAFAFA"/>
        </svg>
        <span class="menu-nav-btn__badge" v-if="totalItemCount">
            {{totalItemCount}}
        </span>
        </router-link>
        <CallAWaiterBtnMobile />
    </div>
</template>

<script>
import CallAWaiterBtnMobile from '@/components/CallAWaiterBtnMobile.vue'

export default {
    components: {
        CallAWaiterBtnMobile
    },
    computed: {
        totalItemCount(){
            const total = this.$store.state.cart
                                            .map(i => i.qty)
                                            .reduce((acc, val) => acc + val, 0)
            return total > 9 ? '9+' : total
        }
    }
}
</script>