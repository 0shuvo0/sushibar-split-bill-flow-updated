<template>
    <div class="modal-wrapper">
        <div class="modal-content">
            <p class="title-text text-center">One last thing</p>
            <p class="order-notify-description">How should we notify you your order is ready to collect?</p>
            <div class="order-notify-methods-container">
                <div
                 class="order-notify-method"
                 v-for="(method, index) in orderNotifyMethods"
                 :key="index"
                 :class="{active: activeMethodIdx === index}"
                 @click="activeMethodIdx = index"
                >
                    <i class="bi bi-check-circle-fill"></i>
                    <span>{{ method }}</span>
                </div>
            </div>
            <div v-if="activeMethodIdx === 0">
                <p class="order-notify-info">
                    <i class="bi bi-exclamation-circle-fill"></i>
                    <span>We will contact you via text message when your order is ready.</span>
                </p>
                <label class="label">Phone number</label>
                <div
                class="search-box-container error email-box w-100"
                >
                    <input v-model="methodModels[0]" type="number" placeholder="Enter your phone number">
                    <i class="icon bi bi-telephone"></i>
                </div>
            </div>
            <div v-else-if="activeMethodIdx === 1">
                <p class="order-notify-info">
                    <i class="bi bi-exclamation-circle-fill"></i>
                    <span>We will contact you via email when your order is ready.</span>
                </p>
                <label class="label">Email address</label>
                <div
                class="search-box-container email-box w-100"
                >
                    <input v-model="methodModels[1]" type="email" placeholder="Enter your email address">
                    <i class="icon bi bi-envelope"></i>
                </div>
            </div>
            <div v-else>
                <p class="order-notify-info">
                    <i class="bi bi-exclamation-circle-fill"></i>
                    <span>We will call your name when your order is ready.</span>
                </p>
                <label class="label">Name</label>
                <div
                class="search-box-container email-box w-100"
                >
                    <input v-model="methodModels[2]" type="text" placeholder="Enter your name">
                    <i class="icon bi bi-person"></i>
                </div>
            </div>
            <div class="error-message">
                <i class="bi bi-exclamation-lg"></i>
                <span>Invalid phone number.</span>
            </div>
            <button
             @click="handleClick"
             class="btn btn-primary btn-block"
             :disabled="!methodModels[activeMethodIdx]"
            >Continue</button>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            orderNotifyMethods: [
                'Phone',
                'Email',
                'Name'
            ],
            activeMethodIdx: 0,
            methodModels: [null, '', '']
        }
    },
    methods: {
        handleClick(){
            const i = this.activeMethodIdx
            const method = this.orderNotifyMethods[i]
            const val = this.methodModels[i]
            this.$store.state.notifyMethod = {
                val,
                method
            }
            this.$router.push({ path: '/order-placed' })
        }
    }
}
</script>

<style lang="scss">
.order-notify-description{
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    padding: 0 2em;
    margin: 1em 0;
}

.order-notify-methods-container{
    display: flex;
    gap: 1em;
    margin-bottom: 1em;
}
.order-notify-method{
    flex-grow: 1;
    background-color: rgba(255,255,255,.9);
    border: 1px solid #DFE4EA;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 103px;
    &.active{
        border: 2px solid #0A2540;
        i{
            opacity: 1;
        }
    }
    i{
        font-size: 1.75em;
        opacity: 0;
    }
    span{
        font-weight: 700;
        font-size: 18px;
    }
}
.order-notify-info{
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;
    span{
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -0.015em;
    }
    i{
        font-size: 1.5em;
        color: #999999;
    }
}
</style>
<style lang="scss" scoped>
.search-box-container{
    margin-top: .5em !important;
}
.search-box-container.error{
    border: 2px solid #CC686E !important;
}
</style>

