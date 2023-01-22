<template>
    <div class="cart-tip" v-if="subtotal > 0">
        <p class="title">Want to add a Tip?</p>
        <div class="tip-btns">
            <div
                class="tip-btn"
                v-for="(option, index) in tipOptions"
                :key="index"
                :class="{active: activeTipIdx == index}"
                @click="handleTipBtnClick(option, index)"
            >
                <span>{{option}}%</span>
                <span>£{{(subtotal * (option / 100)).toFixed(2)}}</span>
            </div>
        </div>
        <div
        class="search-box-container no-icon w-100">
            <input v-model="tipModel" type="number" placeholder="Or enter custom tip...">
        </div>
    </div>
</template>

<script>
export default {
    props: ['subtotal'],
    data: () => ({
        tipOptions: [5, 10, 15, 20],
        activeTipIdx: -1,
        tipModel: null
    }),
    computed: {
        tip(){
            let tip = 0
            if(this.activeTipIdx > -1){
                tip = this.subtotal * (this.tipOptions[this.activeTipIdx] / 100)
            }
            if(this.tipModel && this.tipModel > 0){
                tip = +this.tipModel
            }
            return tip.toFixed(2)
        }
    },
    methods: {
        handleTipBtnClick(option, index){
            if(this.tipOptions.indexOf(option) == this.activeTipIdx){
                return this.activeTipIdx = -1
            }
            if(this.tipModel != null){
                this.tipModel = ""
            }
            this.activeTipIdx = index
        }
    },
    watch: {
        tipModel(){
            if(this.tipModel < 0){
                this.tipModel = 0
            }
            if(this.tipModel > 0){
                this.activeTipIdx = -1
            }
        },
        tip(){
            this.$store.state.tip = this.tip
            this.$emit('tip', this.tip)
        }
    }
}
</script>

<style>
.cart-tip{
    margin: 3em 0;
}
.cart-tip .title{
    margin-bottom: 1em !important;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}
.tip-btns{
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin-bottom: 1em;
}
.tip-btns .tip-btn{
    height: 73px;
    background-color: #fff;
    border: 1px solid #DFE4EA;
    box-shadow: 0px 11px 24px rgba(0, 0, 0, 0.03);
    border-radius: 12.8867px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5em;
    cursor: pointer;
    user-select: none;
    flex-grow: 1;
    transition: .3s;
}
.tip-btns .tip-btn.active{
    border: 1px solid #B0BDCB;
    transform: translateY(-7px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
}
.tip-btns .tip-btn span:first-child{
    font-weight: 700;
    font-size: 18px;
    color: var(--color-dark);
}
.tip-btns .tip-btn span:last-child{
    font-weight: 400;
    font-size: 12px;
}
.cart-tip .input-group__input{
    width: 100%;
    margin-top: 1em;
    border-radius: 6px;
    padding: .75em 1em;
    border: none;
    box-shadow: 0 7px 15px rgba(0, 0, 0, .1);
    border-radius: 7px;
    outline-color: #0A2540;
}
</style>