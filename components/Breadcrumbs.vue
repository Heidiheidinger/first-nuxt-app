<template>
  <div>
    {{ crumbs }} // printing raw json
    <br><br>
    <div class="container">
       <b-breadcrumb :items="crumbs"/>
    </div>
  </div>
</template>

<script>

console.log(this.$route)

export default {
  mounted(){
    // console.log(this.$route)
    // console.log(this.$route.path.split("/"))
  },
  computed: {
    // crumbs: () => {
      // let pathArray = this.$route.path.split("/")
  //     pathArray.shift()
  //     let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
  //       breadcrumbArray.push({
  //         path: path,
  //         to: breadcrumbArray[idx - 1]
  //           ? "/" + breadcrumbArray[idx - 1].path + "/" + path
  //           : "/" + path,
  //         text: this.$route.matched[idx].meta.breadCrumb || path,
  //       });
  //       return breadcrumbArray;
  //     }, [])
  //     return breadcrumbs;
    // }
  }
}
</script>

<style scoped>
.container{
  margin: auto;
  width: 50%
}
</style>
