<template>
  <div
    class="picked-item menu-item"
    :style="{
      '--anim-delay': animDelay
    }"
    @click="showAddItemModal = true"
  >
    <div
     class="picked-item-img-container"
     :class="{'no-img-w-selected': !item.img && itemCountInCart}"
    >
      <img
      v-if="item.img"
      :src="item.img"
      alt=""
      class="picked-item-img"
      >
      <div v-if="itemCountInCart" class="picked-item-picked-indication-container">
        <span class="picked-item-picked-indication">
          {{itemCountInCart}}
        </span>
      </div>
    </div>
    <div class="picked-item-data">
      <p class="title-text font-size-1" v-html="item.filteredTitle || item.title"></p>
      <p
       class="description whitespace-normal"
       v-html="item.filteredDescription || item.description"
       :class="{ellipsis: !$store.state.menuItemExpanded}"
      ></p>
      <div class="title-text font-size-1 picked-item-price">
        <span>£{{item.price.toFixed(2)}}</span>
        <div class="tags-container">
            <span
            class="tag"
            v-for="(tag, index) in item.tags"
            :key="index"
            v-html="svgIcons[tag].icon"
            ></span>
        </div>
      </div>
    </div>
  </div>
  <AddItemModal
    v-if="showAddItemModal"
    @close="showAddItemModal = false"
    :item="item"
  />
</template>

<script>
import AddItemModal from '@/components/AddItemModal.vue'

import svgIcons from '@/data/svgIcons'

export default {
    components: {
      AddItemModal
    },
    props: {
      item: {
          type: Object,
          required: true
      },
      animDelay: {
          type: String,
          default: 0
      }
    },
    data(){
      return {
          svgIcons,
          showAddItemModal: false
      }
    },
    computed: {
      itemCountInCart(){
        const cart = this.$store.state.cart
        const filteredCart = cart.filter(i => i.title === this.item.title)
        let total = 0
        filteredCart.forEach(i => total += i.qty)
        return total
      }
    }
}
</script>

<style lang="scss">
.picked-item.menu-item{
  overflow: hidden;
  padding: 0;
  animation: none;
  gap: 0;
  height: fit-content;
  min-height: var(--menuitem-minheight);
  &:hover{
    transform: none !important;
  }
  .picked-item-img-container{
    position: relative;
    &.no-img-w-selected{
      width: calc(var(--menuitem-minheight) * 1.1);
      background-color: #fff;
    }
  }
  .picked-item-data{
    padding: .5em;
    padding-left: .75em;
    flex-grow: 1;
    overflow: hidden;
    .description{
      font-weight: 500;
      font-size: 0.8em;
      line-height: 150%;
    }
    .description.ellipsis{
      width: auto !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .text-highlight{
      background-color: var(--color-custom);
      color: #fff;
      display: inline-block;
      padding: 0 .25em;
      border-radius: 5px;
    }
  }
  .picked-item-img{
    width: calc(var(--menuitem-minheight) * 1.1);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .picked-item-price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 10pxx;
  }
  .tags-container{
    gap: .35em;
    display: flex;
    svg{
      height: 1.5em;
      width: 1.5em;
    }
  }
}

.picked-item-picked-indication-container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  display: flex;
  justify-content: center;
  align-items: center;
}
.picked-item-picked-indication{
  --size: 32px;
  height: var(--size);
  width: var(--size);
  line-height: var(--size);
  text-align: center;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 700;
  font-size: 1em;
}
</style>