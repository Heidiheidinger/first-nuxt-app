import Vue from 'vue'

Vue.prototype.$myInjectedJq = () => {
  $(document).ready(function(){
    $("ul>li").click(function(){
      $(this).hide()
    })
  })
}


