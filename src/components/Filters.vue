<template>
    <div>
        <div class="filters-wrapper">
            <div class="filters-container">
                <span
                data-toggle="tooltip"
                data-placement="top"
                v-for="(filter, index) in filters"
                :key="index"
                :title="svgIcons[filter].text"
                v-html="svgIcons[filter].icon"
                :class="{'active': activeFilters.indexOf(index) > -1}"
                @click="toggleFilter(index)"
                >
                </span>
            </div>
            <span v-if="activeFilters.length > 0" @click="activeFilters = []" class="reset-btn">reset</span>
        </div>
        <p class="filters-info" v-if="activeFilters.length > 0">
           <span> Only showing <span class="tags">{{ activeFilters.map(i => svgIcons[filters[i]].text).join(", ") }}</span> items.</span>
           <!-- <span class="clear" @click="activeFilters = []">clear all</span> -->
        </p>
    </div>
</template>

<script>
import svgIcons from '@/data/svgIcons'

export default {
    data(){
        let activeFilters = []
        const storeFilters =  this.$store.state.filters
        const filters = Object.keys(svgIcons)
        if(storeFilters.length){
            activeFilters = storeFilters.map(f => filters.indexOf(f))
        }
        return {
            svgIcons,
            filters,
            activeFilters
        }
    },
    methods: {
        toggleFilter(index){
            const indexOf = this.activeFilters.indexOf(index)
            if (indexOf > -1) {
                this.activeFilters.splice(indexOf, 1)
            } else {
                this.activeFilters.push(index)
            }
        }
    },
    watch: {
        activeFilters: {
            handler(){
                this.$store.commit('setFilters', this.activeFilters.map(f => this.filters[f]))
            },
            deep: true
        }
    }
}
</script>

<style lang="scss">
.filters-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(100% - 3.5em);
    .reset-btn{
        font-weight: 700;
        font-size: 0.75em;
        color: var(--color-body);
        text-transform: uppercase;
        cursor: pointer;
    }
}

.filters-container{
    display: flex;
    flex-wrap: wrap;
    gap: .3em;
    align-items: center;
}
.filters-container span{
    --size: 32px;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
}
.filters-container span svg{
    width: 100%;
    height: 100%;
    opacity: .5;
    transition: opacity .2s ease-in-out;
}
.filters-container span.active svg,
.filters-container span:hover svg{
    opacity: 1;
    cursor: pointer;
}
.filters-container span.active{
    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
}

.filters-info{
    margin-top: 1em;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-body);
    .tags{
        font-weight: 700;
    }
}

</style>