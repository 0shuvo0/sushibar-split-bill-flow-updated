<template>
    <div class="page menu-page prev-order-page">
        <div class="page-content container-px container-py">
            <div class="prev-orders-page menu-page-mobile-content mt-05">
                <div class="font-size-btn-container subtitle-text subtitle-text">
                    <router-link to="/"><i class="bi bi-chevron-left"></i> Back to home</router-link>
                    <!-- <CartWaiterNav /> -->
                </div>
                <div class="logo-data">
                    <img src="@/assets/logo.png" alt="" class="logo">
                    <div class="data">
                    <p class="restaurant-name lg">Sushi  bar</p>
                    </div>
                </div>

                <div class="previous-orders-container">
                    <div
                     class="previous-order-container"
                     v-for="(order, index) in previousOrders"
                     :key="index"
                    >
                        <p class="order-time">{{order.time}}</p>
                        <div class="order-items">
                            <div
                             class="order-item"
                             v-for="(item, idx) in order.items"
                             :key="idx"
                            >
                                <span class="qty">{{item.qty}}</span>
                                <span class="name">{{item.title}}</span>
                                <span class="price">£{{item.price.toFixed(2)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/menu/Mains" class="btn text-center btn-primary btn-block mt-2">New order</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CartWaiterNav from '@/components/CartWaiterNav.vue'

const previousOrder = {
    time: '12:42 PM',
    items: [
        {
            title: 'S16 Tori Gyoza Starter',
            qty: 1,
            price: 4.3
        },
        {
            title: 'S16 Tori Gyoza Starter',
            qty: 1,
            price: 4.3
        },
        {
            title: 'E2 Egg Fried Rice',
            qty: 1,
            price: 3.00
        },
        {
            title: 'S16 Tori Gyoza Starter',
            qty: 1,
            price: 4.3
        },
        {
            title: 'R4 Tori Katsu Curry',
            qty: 1,
            price: 9
        }
    ]
}

const previousOrders = [previousOrder]

export default {
    data() {
        return {
            previousOrders
        }
    },
    components: { CartWaiterNav }
}
</script>

<style lang="scss">
.previous-order-container{
    margin-bottom: 1.75em;
    .order-time{
        font-weight: 700;
        color: var(--color-body);
    }
    .order-items{
        margin-top: .75em;
        .order-item{
            display: flex;
            align-items: center;
            gap: 1em;
            margin-bottom: .5em;
            .qty{
                --size: 1.75em;
                height: var(--size);
                width: var(--size);
                line-height: var(--size);
                text-align: center;
                background-color: var(--color-light);
                border-radius: 50%;
                font-size: 0.875em;
                font-weight: 700;
                color:#788DA1;
            }
            .name{
                font-weight: 700;
                color: var(--color-dark);
                flex-grow: 1;
            }
            .price{
                font-weight: 700;
                font-size: 0.875em;
                color: var(--color-dark);
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.page{
    background-color: #fff;
    min-height: 100vh;
}
.prev-orders-page{
    width: 100%;
}
</style>