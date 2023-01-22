<template>
    <div
    class="picked-item"
    :style="{
        '--anim-delay': animDelay
    }"
    @click="showAddItemModal = true"
    >
        <img :src="item.img" alt="" class="picked-item-img">
        <div class="picked-item-data">
            <p class="title-text font-size-1">{{item.title}}</p>
            <p class="picked-item-description">{{item.description}}</p>
            <p class="title-text font-size-1 picked-item-price">£{{item.price.toFixed(2)}}</p>
        </div>
    </div>
    <AddItemModal
     v-if="showAddItemModal"
     @close="showAddItemModal = false"
     :item="item"
    />
</template>

<script>
import AddItemModal from '@/components/AddItemModal.vue'

import svgIcons from '@/data/svgIcons'

export default {
    components: {
        AddItemModal
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        animDelay: {
            type: String,
            default: 0
        }
    },
    data(){
        return {
            svgIcons,
            showAddItemModal: false
        }
    }
}
</script>

<style lang="scss">
.picked-item{
    height: 6.25em;
    background: #FFFFFF;
    box-shadow: 0px 11px 24px rgba(0, 0, 0, 0.1);
    border-radius: 0.75em;
    padding: .75em;
    display: flex;
    gap: .75em;
    transition: .2s ease-out;
    animation: .5s slideInRight ease-out;
    animation-fill-mode: backwards;
    animation-delay: var(--anim-delay, 0s);
    cursor: pointer;
    &:hover{
        transform: translateY(-10%) scale(1.025) !important;
    }
    .picked-item-img{
        height: 100%;
        width: calc(6.25em - 1.5em);
        object-fit: cover;
        border-radius: .5em;
    }
    .picked-item-data{
        display: flex;
        flex-direction: column;
    }
    .picked-item-description{
        font-size: 0.813em;
        font-weight: 500;
        color: var(--color-body);
        margin-top: .25em;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .picked-item-price{
        margin-top: auto;
        font-weight: 500;
        color: var(--color-dark);
    }
}
@keyframes slideInRight{
    0%{
        transform: translateX(200px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}
</style>