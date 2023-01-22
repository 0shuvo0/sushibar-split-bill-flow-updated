<template>
    <div>
        <p class="container-px subtitle-text subtitle-lg">Browse our menus</p>
        <div class="menu-types-contaier" @wheel="handleVScroll">
            <div
             class="menu-type-item"
             v-for="(menu, index) in menuTypes"
             :key="index"
             :class="{active: index === activeMenuTypeIdx}"
             @click="activeMenuTypeIdx = index"
            >
                {{menu}}
            </div>
        </div>
        <div class="menu-covers-container container-px">
            <router-link
             class="menu-cover-item"
             :to="'/menu/' + activeMenuType + '/all'"
            >
                <img src="@/assets/banners/home.jpg" alt="">
                <div class="menu-cover-name">View All</div>
            </router-link>
            <router-link
             class="menu-cover-item"
             v-for="(menuItem, index) in menu"
             :key="index"
             :to="'/menu/' + activeMenuType + '/' + menuItem.title.replaceAll(' ', '-')"
            >
                <img :src="menuItem.img" alt="">
                <div class="menu-cover-name">{{menuItem.title}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import menus from '@/data/menu'

export default {
    data(){
        return {
            menuTypes: ["Main menu", "Children's menu", "Third-extra menu"],
            activeMenuTypeIdx: 0
        }
    },
    computed: {
        menu(){
            return menus[this.menuTypes[this.activeMenuTypeIdx]]
        },
        activeMenuType(){
            return this.menuTypes[this.activeMenuTypeIdx]
                        .replace(' menu', '')
                        .replaceAll(' ', '-')
                        .replaceAll("'", '_')
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
.menu-types-contaier{
    display: flex;
    flex-wrap: nowrap;
    gap: .4em;
    overflow: auto;
    white-space: nowrap;
    padding-left: var(--container-padding);
    padding-block: .5em;
}
.menu-type-item{
    // height: 33px;
    user-select: none;
    font-size: .9em;
    color: var(--color-body);
    background-color: var(--color-light);
    text-decoration: none;
    font-weight: 500;
    padding: .5em 1em;
    border-radius: 2em;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color .2s, color .2s;
    &.active{
        background-color: var(--color-custom);
        color: #FAFAFA;
    }
}

.menu-covers-container{
    display: grid;
    gap: .5em;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    margin-bottom: var(--container-padding);
}
.menu-cover-item{
    height: 120px;
    background-color: var(--color-light);
    border: 1px solid #DFE4EA;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    & img, & .menu-cover-name{
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform .5s ease-out;
        border-radius: 12px;
    }
    .menu-cover-name{
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.55) 100%);
        color: #fff;
        font-size: 1.5em;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover img{
        transform: scale(1.2);
    }
}
</style>