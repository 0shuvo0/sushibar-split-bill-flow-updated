<template>
  <div class="page home-page">
    <div class="page-banner">
      <img src="@/assets/banners/home.jpg" alt="">
      <div class="banner-overlay"></div>
    </div>

    <div class="page-content after-page-banner">
      <div class="col main home-main-col">
        <CartWaiterNav />
        <router-link to="/">
          <img id="top-el" src="@/assets/logo.png" alt="" class="main-content-logo">
        </router-link>
        <p class="text-center title-text container-px">Sushi Bar</p>
        <p class="text-center subtitle-text container-px mt-05 mb-3">
          <router-link to="/previous-orders">My previous orders</router-link>
        </p>
        <!-- <SearchBar
         @search="handleSearch"
        /> -->
        <PickedForYouSection />
        <BrowseOurMenuSection />
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
import SearchBar from '@/components/SearchBar.vue';
import PickedForYouSection from '@/components/PickedForYouSection.vue'
import BrowseOurMenuSection from '@/components/BrowseOurMenuSection.vue';
import UserOrder from '@/components/UserOrder.vue';
import CallAWaiterSection from '@/components/CallAWaiterSection.vue';
import CartWaiterNav from '@/components/CartWaiterNav.vue'

export default {
  components: {
    Footer,
    SearchBar,
    PickedForYouSection,
    BrowseOurMenuSection,
    UserOrder,
    CallAWaiterSection,
    CartWaiterNav
  },
  mounted(){
    window.scrollTo(0, 0)
  },
  methods: {
    handleSearch(e){
      this.$router.push({
        path: '/menu/Mains',
        query: {
          search: e
        }
      })
    }
  }
}
</script>

<style lang="scss">
.home-main-col{
  position: relative;
  .menu-nav-btns{
    display: none;
  }
}
</style>