<template>
    <div class="font-size-btn">
        <div class="ctrl-btn" @click="decreaseFontSize">
            <i class="bi bi-dash"></i>
        </div>
        <div class="text">
            <span class="small">A</span>
            <span class="large">A</span>
        </div>
        <div class="ctrl-btn" @click="increaseFontSize">
            <i class="bi bi-plus"></i>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fontSize: 16,
            factor: 1
        }
    },
    methods: {
        increaseFontSize(){
            this.factor += .25
        },
        decreaseFontSize(){
            if(this.factor > .5){
                this.factor -= .25
            }
        }
    },
    watch: {
        factor(){
            document.body.style.fontSize = (this.fontSize * this.factor) + 'px'
        }
    }
}
</script>

<style lang="scss">
.font-size-btn{
    background-color: var(--color-light);
    color: var(--color-body);
    font-weight: 700;
    padding: .5em 1em;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: .5em;
    .ctrl-btn{
        color: var(--color-dark);
        cursor: pointer;
        font-size: 1.25em;
    }
    .text{
        .small{
            font-size: .9em;
            opacity: .8;
        }
        .large{
            font-size: 1.1em;
        }
    }
}
</style>