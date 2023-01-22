<template>
    <div class="numpad">
        <div
         class="numpad-key"
         v-for="(key, index) in numpadButtons"
         :key="index"
         v-html="key === 'del' ? `<i class='bi bi-backspace'></i>` : key"
         @click="handleClick(key)"
        >
        </div>
        <div class="numpad-key bottom-text">
            Use the numpad to enter the amount.
        </div>
    </div>
</template>

<script>
export default {
    props: ['current'],
    data(){
        return {
            numpadButtons: [
                1, 2, 3,
                4, 5, 6,
                7, 8, 9,
                '.', 0, 'del'
            ],
            value: this.current
        }
    },
    methods: {
        handleClick(key){
            if(key === 'del'){
                this.value = this.value.slice(0, -1)
            } else if(key === '.' && this.value.includes('.')){
                return
            } else {
                this.value += key
            }
            this.$emit('input', this.value)
        }
    },
    watch: {
        current(){
            this.value = '' + this.current
        }
    }
}
</script>

<style>
.numpad{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background-color: rgb(226, 226, 226);
}
.numpad-key{
    text-align: center;
    background-color: #fff;
    padding: .75em 0;
}
.numpad-key.bottom-text{
    grid-column: span 3;
    font-size: .75em;
    padding: 1.25em;
    color: #969494;
    display: none !important;
}
.numpad-key:hover{
    background-color: #f5f5f5;
    cursor: pointer;
}


@media(max-width: 576px){
    .numpad-key.bottom-text{
        display: block !important;
    }
}
</style>
