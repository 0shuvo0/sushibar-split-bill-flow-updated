<template>
    <div class="modal-wrapper">
        <div class="modal-content add-item-modal-conetnt">
            <i @click="$emit('close')" class="bi bi-x modal-close-btn"></i>
            <p class="text-center title-text">{{item.title}}</p>
            <p class="text-center title-text font-size-1 mt-05">£{{item.price.toFixed(2)}}</p>
            <p class="text-center subtitle-text mt-1 whitespace-normal px-2">{{item.description}}</p>
            <p v-if="item.calories" class="calories-text text-center subtitle-text mt-1 whitespace-normal px-2">
                <span class="cal-title">Calories</span>
                <span class="cal-count">{{item.calories}}</span>
            </p>
            <div class="item-option-groups-container" v-if="optionGroups.length">
                <div
                 class="item-option-group"
                 v-for="(group, index) in optionGroups"
                 :key="index"
                >
                    <div class="row header">
                        <span>{{group.title}}</span>
                        <span class="info-label" v-if="group.label">{{group.label}}</span>
                        <span class="info-label" v-else-if="group.required === true">Required</span>
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
                        <span class="price">£{{option.price.toFixed(2)}}</span>
                    </div>
                </div>
            </div>
            <div class="item-qty-ctrl">
                <div @click="decreaseQty" class="ctrl-btn"><i class="bi bi-dash"></i></div>
                <div class="ctrl-cout">{{qty}}</div>
                <div @click="increaseQty" class="ctrl-btn"><i class="bi bi-plus"></i></div>
            </div>
            <button
             @click="addToCart"
             :disabled="!allowAddToCart"
             class="btn btn-primary btn-block mt-2"
            >
             Add to order (£{{totalPrice}})
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data(){
        return {
            qty: 1,
            optionGroups: (this.item.optionGroups || []).map(g => ({
                activeOptionIdxs: [],
                selectedCount: 0,
                ...g
            }))
        }
    },
    computed: {
        totalPrice(){
            const opsTotal = (this.optionGroups || []).map(o => {
                if(!o.activeOptionIdxs) return [0]
                return o.activeOptionIdxs.map(i => o.options[i].price)
            }).flat().reduce((acc, val) => acc + val, 0)
            return ((this.item.price + opsTotal) * this.qty).toFixed(2)
        },
        allowAddToCart(){
            if(!this.optionGroups.length) return true
            return this.optionGroups.every(group => {
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
            this.qty++
        },
        decreaseQty(){
            this.qty > 1 && this.qty--
        },
        addToCart(){
            this.$store.commit('addToCart', {
                ...this.item,
                qty: this.qty,
                totalPrice: this.totalPrice,
                optionGroups: this.optionGroups
            })
            this.$emit('close')
        },
        toggleOptionSelect(groupIndex, itemIndex){
            const group = this.optionGroups[groupIndex]
            const i = group.activeOptionIdxs.indexOf(itemIndex)
            if(i === -1){
                if((typeof group.required === 'boolean') && !group.freeSelect){
                    group.activeOptionIdxs = [itemIndex]
                    group.selectedCount = 1
                    return
                }
                if(!group.freeSelect && group.selectedCount >= group.required) return
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
.add-item-modal-conetnt{
    max-width: 375px !important;
    align-items: center;
}

.item-qty-ctrl{
    display: flex;
    justify-content: center;
    gap: 1em;
    font-size: 3em;
    margin-top: .65em;
    .ctrl-btn{
        --size: 56px;
        height: var(--size);
        width: var(--size);
        border-radius: 50%;
        text-align: center;
        line-height: var(--size);
        background-color: var(--color-light);
        color: #788DA1;
        cursor: pointer;
    }
}

.item-option-groups-container{
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
}
.item-option-group{
    border: 1px solid #DFE4EA;
    border-radius: 12px;
    overflow: hidden;
    color: var(--color-body);
    font-size: 1em;
    font-weight: 700;
    .row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5em 1em;
        height: 42px;
        cursor: pointer;
        &:not(:last-child){
            border-bottom: 1px solid #DFE4EA;
        }
        &.header{
            background-color: #EFF2F5;
            font-size: 0.875em;
            font-weight: 500;
            text-transform: uppercase;
            cursor: default;
            .info-label{
                font-weight: 700;
                font-size: 0.625em;
                color: var(--color-body);
                text-transform: none;
                background-color: #DDE5ED;
                padding: .3em .75em;
                display: inline-block;
                border-radius: 20px;
            }
        }
        .icon{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: .5em;
            width: 16px;
            height: 16px;
            border: 1px solid var(--color-body);
            border-radius: 50%;
            color: #fff;
            background-color: #fff;
            transition: background-color .2s;
        }
        &.active .icon{
            background-color: var(--color-body);
        }
    }
}
.calories-text{
    font-weight: 700;
    font-size: 0.75em;
    span{
        display: block;
    }
    .cal-title{
        letter-spacing: 0.02em;
        text-transform: uppercase;
    }
    .cal-count{
        color: var(--color-dark);
    }
}
</style>