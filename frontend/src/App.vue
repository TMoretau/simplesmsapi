<template>
  <div id="app">
    <div class="nav">
      <b-container>
        <b-row>
          <b-col md="6">
            <h1 class="nav-title">SimpleSMSAPI<span class="light">.com</span></h1>
          </b-col>
          <b-col md="6">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  padding: 20px 30px;
  background: linear-gradient(to right, #2062cd, #4aa5f7);
  color: #FFFFFF;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #9de8b2;
    }
  }
  &-title {
    font-weight: bolder;
    display: inline-block;
    padding: 0;
    margin: 0;
    .light {
      font-weight: lighter;
    }
  }
}
</style>
