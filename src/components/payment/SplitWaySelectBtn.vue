<template>
    <button @click="showModal = true" class="btn btn-block btn-primary mt-2">Evenly</button>
    <div class="modal-wrapper" v-if="showModal">
        <div class="modal-content add-item-modal-conetnt">
            <i @click="showModal = false" class="bi bi-x modal-close-btn"></i>
            <p class="text-center title-text mt-2">How many ways to split?</p>
            
            <div class="split-ctrl">
                <span class="ctrl" @click="splitCount > 2 && splitCount--">
                    <i class="bi bi-dash-lg"></i>
                </span>
                <span class="count">
                    {{splitCount}}
                </span>
                <span class="ctrl" @click="splitCount++">
                    <i class="bi bi-plus-lg"></i>
                </span>
            </div>
            <p class="splitted-amount">£{{ amountForIndividual }} each</p>
            <PaySplittedBtn
             :subtotal="amountForIndividual"
             :spliCount="splitCount"
            />
        </div>
    </div>
</template>

<script>
import PaySplittedBtn from './PaySplittedBtn.vue'

const SERVICE_CHARGE = 12.5

export default {
    components: {
        PaySplittedBtn
    },
    data(){
        return {
            showModal: false,
            splitCount: 2
        }
    },
    computed: {
        cart(){
            return this.$store.state.cart
        },
        total(){
            const total = this.cart.map(item => +item.totalPrice)
                                    .reduce((acc, val) => acc + val, 0)
            return +total
        },
        amountForIndividual(){
            return ((+this.total + +this.serviceCharge) / this.splitCount).toFixed(2)
        },
        serviceCharge(){
            return (this.total * (SERVICE_CHARGE / 100)).toFixed(2)
        }
    },
}
</script>

<style lang="scss">
.split-ctrl{
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    gap: 2em;
    .ctrl{
        --size: 56px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background-color: #D0D8DF;
        color: #788DA1;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        i{
            font-size: 2em;
        }
    }
    .count{
        font-weight: 500;
        font-size: 64px;
        letter-spacing: -0.01em;
        color: var(--color-dark);
    }
}
.splitted-amount{
    font-weight: 700;
    font-size: 18px;
    color: var(--color-dark);
    text-align: center;
    margin-top: .5em;
}
</style>

