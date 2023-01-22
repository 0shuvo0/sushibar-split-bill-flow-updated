<template>
    <div class="picked-for-you-section mt-2">
        <p class="container-px subtitle-text subtitle-lg">Picked for you</p>
        <div
         class="container-pl picked-items-container"
         @wheel="handleVScroll"
        >
            <PickedMenuItem
            v-for="(item, i) in pickedItems"
            :key="i"
            :item="item"
            :animDelay="(i * .075) + 's'"
            />
        </div>
    </div>
</template>

<script>
import PickedMenuItem from '@/components/PickedMenuItem.vue'

import pickedItems from '@/data/pickedItems'

export default {
    components: {
        PickedMenuItem
    },
    data(){
        return {
            pickedItems
        }
    },
    methods: {
        handleVScroll(e){
            e.preventDefault()
            e.currentTarget.scrollLeft += e.deltaY / 2
        }
    }
}
</script>

<style lang="scss">
.picked-items-container{
    padding-top: .5em;
    padding-right: 1em;
    display: flex;
    gap: 1em;
    overflow: auto;
    white-space: nowrap;
    padding-bottom: 1em;
    margin-bottom: 2em;
}
</style>