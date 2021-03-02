<template>
  <div>
    <!-- <div
      v-if="img"
      :style="{ backgroundImage: 'url(' + loginImg + ')', backgroundSize: cover }"
    ></div> -->
    <img class="login-img" src="@/assets/img/login.jpg" />
    <form class="form-signin" @submit.prevent="signin"> 
      <h3 class="text-center">台灣尋寶王 後台管理系統</h3>
      <h5 class="text-center">請先登入</h5>
      <!-- <label for="inputEmail" class="sr-only">Email address</label> -->
      <input v
        type="email"
        id="inputEmail"
        class="form-control text-center"
        placeholder="請輸入管理者帳號"
        v-model.trim="user.userEmail"
        required
        autofocus
      /> 
      <!-- <label for="inputPassword" class="sr-only">Password</label> -->
      <input
        type="password"
        id="inputPassword"
        class="form-control text-center"
        v-model.trim="user.userPassword"
        placeholder="請輸入管理者密碼"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" type="sumbit" @keyup="signin">
        登入
      </button>
    </form>
  </div>
</template>
<script>
import loginImg from "../assets/img/login.jpg";
export default {
  name: "HelloWorld",
  data() {
    return {
      loginImg,
      user: {
        userEmail: "",
        userPassword: "",
      },
     apiUrl:'/api',
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${vm.apiUrl}/blogin`;
      vm.$http.post(api).then((response) => {
        //console.log(response);
        let data = response.data;
        if(response.data){
          //res.json({ret_code: 2, ret_msg: '請輸入帳號和密碼'});
          console.log('success 4 :' + data.ret_msg + data.ret_code);
           vm.$router.push("/admin/dashboard");
        }
        // if (data.ret_code === 1) {
        //     console.log('1 :' + data.ret_msg);
        //   //vm.$router.push("/admin/dashboard");
        // }else if(data.ret_code === 2){
        //   console.log('2 :' + data.ret_msg);
        //   vm.$router.push("/admin/dashboard");
        // }else if(data.ret_code === 5){
        //   console.log('5 :' + data.ret_msg);
        // }else{
        //   console.log('success 4 :' + data.ret_msg);
        //   vm.$router.push("/admin/dashboard");
        // }
      });
    },
  },
  computed: {
    
  }
};
</script>

<style scoped>
img {
  /* z-index: -1; */
  width: 100%;
  position: relative;
  top: 0%;
  left: 0%;
}
form {
  position: absolute;
  background-color: rgb(255, 255, 255, 0.8);
  top: 20%;
  right: 0%;
  /* bottom:0%; */
  left: 0%;
  margin: auto;
  border-radius: 3px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
h3 {
  font-weight: bolder;
}
h5 {
  font-weight: 700;
}
</style>