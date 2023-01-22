<template>
    <div class="modal-wrapper">
        <div class="modal-content add-item-modal-conetnt">
            <i @click="$emit('close')" class="bi bi-x modal-close-btn"></i>
            <p class="text-center title-text">{{item.title}}</p>
            <p class="text-center title-text font-size-1 mt-05">£{{item.price.toFixed(2)}}</p>
            <p class="text-center subtitle-text mt-1">{{item.description}}</p>
            <div class="item-option-groups-container">
                <div
                 class="item-option-group"
                 v-for="(group, index) in altItem.optionGroups"
                 :key="index"
                >
                    <div class="row header">
                        <span>{{group.title}}</span>
                        <span class="info-label" v-if="group.required === true">Required</span>
                        <span class="info-label" v-else-if="(typeof group.required === 'number') && group.required > 0">{{group.selectedCount}}/{{group.required}}</span>
                    </div>
                    <div
                     class="row"
                     v-for="(option, idx) in group.options"
                     :key="idx"
                     :class="{active: group.activeOptionIdxs.includes(idx)}"
                     @click="toggleOptionSelect(index, idx)"
                    >
                        <span class="title">
                            <span class="icon">
                                <i class="bi bi-check"></i>
                            </span>
                            {{option.title}}
                        </span>
                        <span class="price">£{{option.price}}</span>
                    </div>
                </div>
            </div>
            <div class="item-qty-ctrl">
                <div @click="decreaseQty" class="ctrl-btn"><i class="bi bi-dash"></i></div>
                <div class="ctrl-cout">{{altItem.qty}}</div>
                <div @click="increaseQty" class="ctrl-btn"><i class="bi bi-plus"></i></div>
            </div>
            <p @click="removeItemFromCart" class="remove-item-from-cart-btn text-center mt-2">Remove from order</p>
            <button
             @click="updateCart"
             :disabled="!allowAddToCart"
             class="btn btn-primary btn-block mt-2"
            >
                Update order (£{{totalPrice}})
            </button>
        </div>
    </div>
</template>

<script>
import { useToast } from "vue-toastification"

export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        itemIdxInCart: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            altItem: JSON.parse(JSON.stringify(this.item))
        }
    },
    computed: {
        totalPrice(){
            // const opsTotal = (this.altItem.optionGroups || []).map(o => {
            //     if(o.activeOptionIdxs === null || o.activeOptionIdxs === undefined || o.activeOptionIdxs === -1) return 0
            //     return o.options[o.activeOptionIdxs].price
            // }).reduce((acc, val) => acc + val, 0)
            // return ((this.altItem.price * this.altItem.qty) + opsTotal).toFixed(2)
            const opsTotal = (this.altItem.optionGroups || []).map(o => {
                if(!o.activeOptionIdxs) return [0]
                return o.activeOptionIdxs.map(i => o.options[i].price)
            }).flat().reduce((acc, val) => acc + val, 0)
            return ((this.altItem.price + opsTotal) * this.altItem.qty).toFixed(2)
        },
        allowAddToCart(){
            if(!this.altItem.optionGroups.length) return true
            return this.altItem.optionGroups.every(group => {
                if(!group.required) return true
                if(group.freeSelect){
                    if(!group.required) return true
                    return group.selectedCount >= 1
                }
                if((typeof group.required === 'boolean') && group.selectedCount === 1) return true
                return group.required === group.selectedCount
            })
        }
    },
    methods: {
        increaseQty(){
            this.altItem.qty++
        },
        decreaseQty(){
            this.altItem.qty > 1 && this.altItem.qty--
        },
        updateCart(){
            this.$store.commit('updateCartItem', {
                idx: this.itemIdxInCart,
                item: {
                    ...this.altItem,
                    totalPrice: this.totalPrice
                }
            })
            const toast = useToast()
            toast.success(`Item${this.altItem.qty > 1 ? 's' : ''} updated in cart`, {
                timeout: 2000
            })
            this.$emit('close')
        },
        removeItemFromCart(){
            this.$store.commit('removeItemFromCart', this.itemIdxInCart)
            const toast = useToast()
            toast.success(`Item${this.altItem.qty > 1 ? 's' : ''} deleted from cart`, {
                timeout: 2000
            })
            this.$emit('close')
        },
        toggleOptionSelect(groupIndex, itemIndex){
            const group = this.altItem.optionGroups[groupIndex]
            const i = group.activeOptionIdxs.indexOf(itemIndex)
            if(i === -1){
                if((typeof group.required === 'boolean')){
                    group.activeOptionIdxs = [itemIndex]
                    group.selectedCount = 1
                    return
                }
                if(group.selectedCount >= group.required) return
                group.activeOptionIdxs.push(itemIndex)
                group.selectedCount++
            }else{
                group.activeOptionIdxs.splice(i, 1)
                group.selectedCount--
            }
        }
    }
}
</script>

<style lang="scss">
.remove-item-from-cart-btn{
    color: rgb(223, 32, 32);
    cursor: pointer;
    &:hover{
        color: rgb(245, 13, 13);
    }
}
</style>