<template>
  <div class="hello">
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
     apiUrl: "http://140.112.30.202:3000/walkPagination",
    };
  },
  methods: {
    signout() {
      const api = `${apiUrl}/logout`;
      const vm = this;
      this.$http.post(api).then((response) => {
        console.log(response);
        if (response) {
          vm.$router.push('/login');
        }else{
          console.log('登出失敗，請重試')
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
