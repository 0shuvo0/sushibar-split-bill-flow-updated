<template>
    <div class="page menu-page prev-order-page">
      <div class="page-banner">
        <img src="@/assets/banners/home.jpg" alt="">
        <div class="banner-overlay"></div>
      </div>
  
      <div class="page-content after-page-banner">
        <div class="col main container-px cart-page-content">
          <img id="top-el" src="@/assets/logo.png" alt="" class="main-content-logo">
          
          <!-- <div class="d-sm-block menu-page-mobile-content mt-05">
            <div class="subtitle-text">
              <router-link to="/"><i class="bi bi-chevron-left"></i> Home</router-link>
            </div>
            <div class="logo-data">
              <img src="@/assets/logo.png" alt="" class="logo">
              <div class="data">
                <p class="restaurant-name lg">Sushi  bar</p>
              </div>
            </div>
          </div> -->
          
          
          <!-- <div class="subtitle-text mb-2 mt-05 d-lg-block">
            <router-link to="/"><i class="bi bi-chevron-left"></i> Home</router-link>
          </div> -->
          <UserOrderMobile />
        </div><!-- /Main col -->
      </div>
      
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue'
  import UserOrderMobile from '@/components/UserOrderMobile.vue'
  import CallAWaiterSection from '@/components/CallAWaiterSection.vue'
  import Filters from '@/components/Filters.vue'
  import SearchBar from '@/components/SearchBar.vue'
  import MenuItem from '@/components/MenuItem.vue'
  
  
  import testItemImg from '@/assets/test/picked-item.png'
  
  const item = {
    title: 'S16 Tori Gyoza Starter',
    description: 'Pan-fried chicken dumplings.',
    price: '4.30',
    tags: ['hot', 'vegetarian', 'organic'],
    img: testItemImg,
    optionGroups: [
      {
        title: 'Choose a size',
        required: true,
        options: [
          { title: 'Small', price: 0 },
          { title: 'Medium', price: 0 },
          { title: 'Large', price: 0 }
        ]
      }
    ]
  }
  
  const items = new Array(1).fill(item)
  
  export default {
    components: {
      Footer,
      UserOrderMobile,
      CallAWaiterSection,
      Filters,
      SearchBar,
      MenuItem
    },
    data(){
      return {
        menuTypes: ["Mian's", "Desserts", "Sushi Meals", "Beverages"],
        activeMenuTypeIdx: 0,
        items
      }
    },
    methods(){
      window.scrollTo(0, 0)
    }
  }
  </script>

  <style lang="scss" scoped>
  .cart-page-content{
    min-height: 500px;
    padding: var(--container-padding);
    margin: auto;
  }
  </style>