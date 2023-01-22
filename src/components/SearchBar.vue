<template>
    <div
     :class="{'container-px': !noContainer}">
        <form
        class="search-box-container mx-auto"
        :class="{'w-100': expanded}"
        method="post"
        action="?"
        @submit.prevent="handleSubmit"
        >
            <input @keyup="handleKeyDown" v-model="searchText" type="text" placeholder="Search for a dish">
            <i class="icon bi bi-search"></i>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        expanded: {
            type: Boolean,
            default: false
        },
        noContainer: {
            type: Boolean,
            default: false
        },
        defaultText: {
            type: String,
            required: false
        }
    },
    data(){
        return {
            searchText: this.defaultText || ''
        }
    },
    methods: {
        handleKeyDown(){
            this.$emit('searchInput', this.searchText.trim())
        },
        handleSubmit(){
            this.$emit('search', this.searchText.trim())
        }
    }
}
</script>

<style lang="scss">
.search-box-container{
    border: 1px solid #DFE4EA;
    box-shadow: 0px 10px 23px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    height: 2.75em;
    width: 100%;
    max-width: 325px;
    margin-top: 1.75em !important;
    // margin-bottom: 3.5em !important;
    position: relative;
    &.w-100{
        max-width: 100%;
    }
    &.no-icon input{
        padding-left: 1em;
    }
    input{
        width: 100%;
        height: 100%;
        color: var(--color-dark);
        font-size: 0.875em;
        font-weight: 500;
        background-color: transparent;
        padding-left: 3.5em;
        padding-right: 1em;
        &::placeholder{
            color: var(--color-body);
        }
    }
    .icon{
        position: absolute;
        top: 50%;
        left: 1em;
        transform: translateY(-50%);
        color: var(--color-body);
    }
}
</style>