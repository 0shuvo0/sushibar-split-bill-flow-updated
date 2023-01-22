<template>
    <button
    class="btn btn-block btn-secondary"
    @click="showModal = true"
    >Split the bill</button>
    <div class="modal-wrapper" v-if="showModal">
        <div class="modal-content add-item-modal-conetnt">
            <i @click="showModal = false" class="bi bi-x modal-close-btn"></i>
            <p class="text-center title-text mt-2">How to split the bill?</p>
            <SplitWaySelectBtn />
            <div class="or-indicator my-1">
                <div class="hr"></div>
                <span>OR</span>
                <div class="hr"></div>
            </div>
            <SelectItemsBtn />
            <CustomAmountBtn />
        </div>
    </div>
</template>

<script>
import SplitWaySelectBtn from './SplitWaySelectBtn.vue'
import CustomAmountBtn from './CustomAmountBtn.vue'
import SelectItemsBtn from './SelectItemsBtn.vue'

export default {
    components: {
        SplitWaySelectBtn,
        CustomAmountBtn,
        SelectItemsBtn
    },
    data(){
        return {
            showModal: false
        }
    }
}
</script>
