<template>
    <div class="cart-item" @click="showEditItemModal = true">
        <span class="item-qty">{{item.qty}}</span>
        <div class="item-data">
            <p class="item-name-price">
                <span class="item-name">{{item.title}}</span>
                <span class="item-price">£{{itemPrice.toFixed(2)}}</span>
            </p>
            <p
             class="item-option"
             v-for="(opt, key) in extraOptionsText"
             :key="key"
            >{{opt}}</p>
        </div>
    </div>
    <EditItemModalVue
     :item="item"
     v-if="showEditItemModal"
     @close="showEditItemModal = false"
     :itemIdxInCart="itemIdxInCart"
    />
</template>

<script>
import EditItemModalVue from '@/components/EditItemModal.vue'


export default {
    components: {
        EditItemModalVue
    },
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
            showEditItemModal: false
        }
    },
    computed: {
        options(){
            if(!this.item.optionGroups) return []
            return this.item.optionGroups
                            .filter(g => g.activeOptionIdx != null && g.activeOptionIdx > -1)
                            .map(g => g.options[g.activeOptionIdx].title)
        },
        extraOptionsText(){
            const item = this.item
            if(!item.optionGroups) return []
            return item.optionGroups.map(g => {
                if(!g.selectedCount) return []
                return g.activeOptionIdxs.map(i => {
                    const option = g.options[i]
                    return option.title
                })
            }).flat()
        },
        itemPrice(){
            let price = this.item.price
            const item = this.item
            if(!item.optionGroups) return price
            item.optionGroups.map(g => {
                if(!g.selectedCount) return price
                return g.activeOptionIdxs.map(i => {
                    const option = g.options[i]
                    price += option.price
                })
            })
            return price
        }
    }
}
</script>

<style lang="scss">
.cart-item{
    min-height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 10.9576px 23.9074px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: .6em;
    display: flex;
    gap: 1em;
    align-items: center;
    cursor: pointer;
    transition: background-color .2s;;
    &:hover{
        background-color: rgba(0, 0, 0, .002);
    }
    .item-qty{
        --size: 40px;
        height: var(--size);
        width: var(--size);
        line-height: var(--size);
        text-align: center;
        font-weight: 700;
        font-size: 1.25em;
        border-radius: 50%;
        background-color: var(--color-light);
        color: var(--color-body);
    }
    .item-data{
        flex-grow: 1;
        .item-name-price{
            display: flex;
            justify-content: space-between;
            color: var(--color-dark);
            .item-name{
                font-weight: 700;
                font-size: 0.875em;
            }
            .item-price{
                font-weight: 500;
                font-size: 0.813em;
            }
        }
        .item-option{
            color: var(--color-body);
            font-weight: 500;
            font-size: 0.75em;
            margin-top: .25em;
        }
    }
}
</style>