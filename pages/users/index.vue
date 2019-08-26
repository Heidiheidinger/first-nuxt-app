<template>
  <div>
    <client-only>
      <b-container class="my-3">
        <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
          <p>For more information visit website</p>
          <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>
      </b-container>
      <b-container>
        <b-alert variant="success" show>Success Alert</b-alert>
      </b-container>
      <b-container>
        <ul>
          <li>If you click on me, I will disappear. (use jQuery plugin)</li>
          <li>Click me away!</li>
          <li>Click me too!</li>
        </ul>
      </b-container>
      <b-container>
        <div class="ymca">
          Test using SCSS
        </div>
      </b-container>
    </client-only>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$myInjectedJq()
    console.log(this.$route.name)
  }
}
</script>

<style lang="scss" scoped>
.ymca {
    // @include center; // will be resolved as position:absolute....
    color: $white; // will be resolved to #333
    background-color: $red;
  }
</style>
