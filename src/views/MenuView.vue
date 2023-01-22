<template>
  <div id="top-el" class="page menu-page">
    <div class="page-banner">
      <img src="@/assets/banners/home.jpg" alt="">
      <div class="banner-overlay"></div>
    </div>

    <div class="page-content after-page-banner">
      <div class="col main relative">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" class="main-content-logo">
        </router-link>
        
        <div
         class="menu-page-stickey-top"
         ref="stickyTop"
         :class="{bb: scrollY === 0}"
        >
          <CartWaiterNav />
          <!-- <div class="d-sm-block menu-page-mobile-content mt-05">
            
            <div class="logo-data container-px" v-if="scrollY !== 0">
              <img src="@/assets/logo.png" alt="" class="logo">
              <div class="data">
                <p class="menu-name">Sushi bar</p>
              </div>
            </div>
          </div> -->

          <!-- <div class="font-size-btn-container container-px subtitle-text d-lg-block">
            <router-link to="/"><i class="bi bi-chevron-left"></i> Home</router-link>
          </div> -->
          <div class="menu-types-contaier" @wheel="handleVScroll">
            <router-link to="/"
              class="menu-type-item home"
            >
              <i class="bi bi-chevron-left"></i> Home
            </router-link>
            <div
            @click="showSearchBar = !showSearchBar"
            class="menu-type-item search-icon"
            >
              <i :class="showSearchBar ? 'bi bi-x-lg' : 'bi bi-search'"></i>
            </div>
            <div
              class="menu-type-item"
              v-for="(menu, index) in menuTypes"
              :key="index"
              :class="{active: index === activeMenuTypeIdx}"
              @click="handleMenuTypeClick(index)"
            >
                {{menu}}
            </div>
          </div>
          <div class="container-px">
            <div class="menu-search-container" v-if="showSearchBar">
              <SearchBar
              :expanded="true"
              :noContainer="true"
              :defaultText="searchText"
              @searchInput="t => searchText = t"
              />
            </div>
          </div>
        </div>
        
        <div class="container-px pt-05">
          <Filters />
          <div
           class="menu-items-container mt-1"
           v-for="(menu, menuIdx) in menus"
           :key="menuIdx"
           :class="{'mb-0': menuIdx === menus.length - 1}"
           :id="menu.title.replaceAll(' ', '-').replaceAll('\'', '')"
          >
            <p class="menu-items-data">
              <span class="menu-title">
                <span>{{menu.title}}</span>
                <span class="menu-items-count">{{menu.items.length}} results</span>
              </span>
              <ExpandCategoryBtn v-if="menuIdx === 0" />
            </p>
            <!-- <div></div> -->
            <div class="menu-items-container-content">
              <MenuItem
                v-for="(item, i) in menu.items"
                :key="i"
                :item="item"
                :animDelay="(i * .075) + 's'"
              />
            </div>
          </div>
          <p class="text-center mt-1">
            <a href="#top-el" class="subtitle-text td-none">Back to top</a>
          </p>
        </div>
      </div><!-- /Main col -->

      <div class="col side transparent">
        <UserOrder />
        <CallAWaiterSection />
      </div><!-- /Side col -->
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import UserOrder from '@/components/UserOrder.vue'
import CallAWaiterSection from '@/components/CallAWaiterSection.vue'
import Filters from '@/components/Filters.vue'
import SearchBar from '@/components/SearchBar.vue'
import MenuItem from '@/components/MenuItem.vue'
import ExpandCategoryBtn from '@/components/ExpandCategoryBtn.vue'

import menu from "@/data/menuItems"
import CartWaiterNav from '@/components/CartWaiterNav.vue'

function throttle (callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback.apply(this, arguments);  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
}

export default {
  components: {
    Footer,
    UserOrder,
    CallAWaiterSection,
    Filters,
    SearchBar,
    MenuItem,
    CartWaiterNav,
    ExpandCategoryBtn
},
  data(){
    return {
      // menuTypes: ["Mains", "Desserts", "Sushi Set Meals"],
      activeMenuTypeIdx: -1,
      searchText: this.$route.query.search || '',
      showSearchBar: false,
      scrollY: 0
    }
  },
  computed: {
    menuTypes(){
      const id = this.$route.params.menu
                                    .replaceAll('-', ' ')
                                    .replaceAll("_", '\'')
      const menuItems = menu[id]
      return [...menuItems.map(m => m.title), 'Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7']
    },
    menus(){
      const id = this.$route.params.menu
                                    .replaceAll('-', ' ')
                                    .replaceAll("_", '\'')
      const menuItems = menu[id]
      const filters = this.$store.state.filters
      if(!filters.length && !this.searchText) return menuItems
      let menus = JSON.parse(JSON.stringify(menuItems))
      if(filters.length){
        menus = menus.map(
          m => ({
            ...m,
            items: m.items.filter(i => filters.every(f => (i.tags || []).includes(f)))
          })
        )
      }
      if(this.searchText){
        const search = this.searchText.toLowerCase()
        menus = menus.map(
          m => ({
            ...m,
            items: m.items.map(item => {
              const title = item.title.toLowerCase()
              const description = item.description.toLowerCase()

              const titleMatch = title.includes(search)
              const descriptionMatch = description.includes(search)
              
              if(!titleMatch && !descriptionMatch) return null

              if(titleMatch){
                item.filteredTitle =item.title.replace(new RegExp(search, 'gi'), `<span class="text-highlight">${search}</span>`)
              }
              if(descriptionMatch){
                item.filteredDescription =item.description.replace(new RegExp(search, 'gi'), `<span class="text-highlight">${search}</span>`)
              }

              return item
            }).filter(i => i != null)
          })
        )
      }
      return menus.filter(m => m.items.length > 0)
    }
  },
  mounted(){
    // window.addEventListener('scroll', this.handleScroll)

    const id = this.$route.params.id.replaceAll(' ', '-').replaceAll('\'', '')
    const el = document.getElementById(id)
    window.scrollTo(0, 0)
    if(id === 'all'){
      return
    }else if(el){
      el.scrollIntoView()
      const rect = this.$refs.stickyTop.getBoundingClientRect()
      window.scrollTo(0, el.offsetTop - rect.height - -35)
    }
    
    // this.addScrollSpy()
    // const menuId = this.menuTypes.indexOf(id.replaceAll('-', ' '))
    // this.activeMenuTypeIdx = menuId
  },
  beforeUnmount(){
    // window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleVScroll(e){
        e.preventDefault()
        e.currentTarget.scrollLeft += e.deltaY / 2
    },
    handleScroll(){
      throttle(() => {
        if(!this.$refs.stickyTop) return
        const rect = this.$refs.stickyTop.getBoundingClientRect()
        this.scrollY = rect.y < 10 ? 0 : rect.y
      },  100)()
    },
    addScrollSpy(){
      const menus = [...document.querySelectorAll('.menu-items-container')]
      //add intersection observer to menus to see if one is visibe
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting){
              const menu = entry.target
              const menuId = menu.getAttribute('id').replaceAll('-', ' ')
              const id = this.menuTypes.indexOf(menuId)
              this.activeMenuTypeIdx = id
            }
          })
      }, {root: null, rootMargin: '-100px 0px 0px 0px', threshold: 1 })
      menus.forEach(menu => {
          observer.observe(menu)
      })
    },
    handleMenuTypeClick(index){
      this.activeMenuTypeIdx = index
      const menu = this.menuTypes[index].replaceAll(' ', '-')
      const el = document.getElementById(menu)
      if(el){
        if(!this.$refs.stickyTop) el.scrollIntoView()
        const rect = this.$refs.stickyTop.getBoundingClientRect()
        window.scrollTo(0, el.offsetTop - rect.height - -35)
      }
    }
  }
}
</script>

<style lang="scss">
.subtitle-text a{
  text-decoration: none;
  color: var(--color-body);
}

.menu-search-container .search-box-container{
  margin-bottom: 1em !important;
  margin-top: 2em !important;
}

.menu-items-container{
  margin-bottom: 3em;
  &.mb-0{
    margin-bottom: 0;
  }
  .menu-items-container-content{
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1.5em;
    font-size: var(--items-font);
  }
  .menu-items-data{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu-title{
      font-weight: 700;
      font-size: 1.25em;
      color: var(--color-dark);
      span{
        display: block;
      }
    }
    .menu-items-count{
      font-weight: 500;
      font-size: 0.75em;
      color: var(--color-body);
      letter-spacing: -0.015em;
    }
  }
}

.menu-page-mobile-content{
  .subtitle-text{
    font-weight: 700;
    font-size: 18px;
    color: var(--color-dark);
  }
  .logo-data{
    display: flex;
    margin: 3em 0 2em 0;
    align-items: center;
    gap: 1em;
    .logo{
      height: 40px;
      display: block;
      object-fit: cover;
    }
    .restaurant-name{
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      color: var(--color-body);
      &.lg{
        font-weight: 700;
        font-size: 24px;
        color: var(--color-dark);
      }
    }
    .menu-name{
      font-weight: 700;
      font-size: 24px;
      color: var(--color-dark);
    }
  }
}

.d-sm-block{
  display: none;
}
@media(max-width: 576px){
  .menu-page{
    .page-banner{
      display: none;
    }
    .main-content-logo{
      display: none;
    }
    .after-page-banner{
      margin-top: 0 !important;
      padding-top: .5em;
    }
    .d-lg-block{
      display: none;
    }
    .d-sm-block{
      display: block;
    }
  }
}

.font-size-btn-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-nav-btns{
  display: flex;
  flex-direction: column;
  gap: .5em;
  position: fixed;
  top: var(--container-padding);
  right: var(--container-padding);
  z-index: 99;
  .menu-nav-btn{
    box-shadow: 0 5px 10px rgba(0, 0, 0, .15);
    --size: 3em;
    height: var(--size);
    width: var(--size);
    background-color: var(--color-light);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    .menu-nav-btn__badge{
      position: absolute;
      background-color: var(--color-primary);
      box-shadow: 0 3px 51px rgba(255, 255, 255, .2);
      color: #fff;
      --size: 24px;
      height: var(--size);
      width: var(--size);
      display: inline-block;
      font-size: 12px;
      text-align: center;
      line-height: var(--size);
      border-radius: 50%;
      top: 0;
      right: 0;
      transform: translate(30%, -25%);
    }
    &.bg-body{
      background-color: var(--color-body);
    }
  }
}
.menu-page .menu-nav-btns{
  top: 2.35em;
}

.menu-type-item.search-icon{
  --size: 33px;
  height: var(--size);
  width: var(--size);
  padding: 0;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
}

.menu-page-stickey-top{
  position: sticky;
  top: 0;
  background-color: #fafafa;
  z-index: 9;
  &.bb{
    border-bottom: 1px solid var(--color-light);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .06);
  }
}

.menu-type-item.home{
  background-color: transparent;
  font-weight: 700;
  padding-left: 0;
}
.menu-page .search-box-container{
  margin-top: .5em !important;
}
</style>

<style lang="scss" scoped>
</style>