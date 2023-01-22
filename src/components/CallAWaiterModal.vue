<template>
    <div class="modal-wrapper" v-if="showCallAWaiterModal">
        <div class="modal-content">
            <div v-if="state == 'default'">
                <p class="text-center title-text">Call a waiter</p>
                <p class="text-center subtitle-text mt-05">Are you sure?</p>
                <button @click="callWaiter" class="btn btn-primary btn-block mt-2">Yes, I'm sure</button>
                <button @click="$emit('close')" class="btn btn-transparent btn-block pb-0">Cancel</button>
            </div>
            <div v-else-if="state == 'called'">
                <div class="waiter-called-icon">
                    <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.17432 13.7664L14.2308 25.823C14.504 26.0961 14.9466 26.0972 15.221 25.8253L39.4954 1.77979" stroke="#788DA1" stroke-width="3.50917" stroke-linecap="round"/>
                    </svg>
                </div>
                <p class="text-center subtitle-text subtitle-lg mt-2">The waiter will be with you shortly</p>
                <button @click="$emit('close')" class="btn btn-primary btn-block mt-2">Close</button>
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
    props: ['showCallAWaiterModal'],
    components: {
        LoadingSpinner
    },
    data(){
        return {
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