<template>
  <div id="app">
    <div class="nav">
      <b-container>
        <b-row>
          <b-col md="4">
            <router-link :to="{name: 'home'}">
              <h1 class="nav-title">
                SimpleSMSAPI<span class="light">.com</span>
              </h1>
            </router-link>
          </b-col>
          <b-col md="8" class="text-right">
            <div class="nav-item">
              <router-link :to="{name:'pricing'}">Pricing</router-link>
            </div>
            <div class="nav-item" v-b-modal.addfunds-modal>
              <b>Get Started</b>
            </div>
            <div class="nav-item">
              <router-link :to="{name:'documentation'}">Documentation</router-link>
            </div>
            <div class="nav-item" v-b-modal.addfunds-modal>
              <b>Add funds</b>
            </div>
            <b-modal
              id="addfunds-modal"
              hide-header
              hide-footer
              centered
              size="lg"
            >
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap');
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  padding: 20px 30px;
  background: linear-gradient(to right, #2062cd, #4aa5f7);
  color: #FFFFFF;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
  &-item {
    display: inline-block;
    padding: 10px 30px;
    font-size: 1.2em;
  }
  a {
    font-weight: bold;
    color: #FFFFFF;
    &.router-link-exact-active {
      color: #9de8b2;
    }
    &:hover {
      opacity: .75;
    }
  }
  &-title {
    font-weight: bolder;
    display: inline-block;
    padding: 0;
    margin: 0;
    color: #FFFFFF !important;
    .light {
      font-weight: lighter;
    }
  }
}
</style>
