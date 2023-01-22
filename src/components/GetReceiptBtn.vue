<template>
    <button @click="showCallAWaiterModal = true" class="btn btn-transparent" style="color: var(--color-body)">Get receipt</button>
    <div class="modal-wrapper" v-if="showCallAWaiterModal">
        <div class="modal-content">
            <div v-if="state == 'default'">
                <i @click="showCallAWaiterModal = false" class="bi bi-x modal-close-btn"></i>
                <p class="title-text text-left">Get receipt</p>
                <div
                class="search-box-container email-box w-100"
                >
                    <input type="text" placeholder="Enter email address">
                    <i class="icon bi bi-envelope"></i>
                </div>
                <button @click="callWaiter" class="btn btn-primary btn-block">Continue</button>
            </div>
            <div v-else-if="state == 'called'">
                <div class="waiter-called-icon">
                    <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.17432 13.7664L14.2308 25.823C14.504 26.0961 14.9466 26.0972 15.221 25.8253L39.4954 1.77979" stroke="#788DA1" stroke-width="3.50917" stroke-linecap="round"/>
                    </svg>
                </div>
                <p class="text-center subtitle-text subtitle-lg mt-2">A receipt of this order has been sent to your email</p>
                <button @click="showCallAWaiterModal = false" class="btn btn-primary btn-block mt-2">Close</button>
            </div>
            <div v-else class="text-center">
                <LoadingSpinner />
            </div>
        </div>
    </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
    components: {
        LoadingSpinner
    },
    data(){
        return {
            showCallAWaiterModal: false,
            state: 'default'
        }
    },
    methods: {
        callWaiter(){
            this.state = 'loading'
            setTimeout(() => this.state = 'called', 1500)
        }
    }
}
</script>

<style lang="scss">
.email-box{
    margin: 1em 0 !important;
    margin-top: 2em !important;
}
</style>