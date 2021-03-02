<template>
  <div class="container">
      <v-client-table 
          :data="tableData"
          :columns="columns" 
          :options="options">
      </v-client-table>
  </div>
</template>
<script>
export default {
    data() {
        return {
            columns: ['userID', 'userName', 'userEmail','userPassword','userAllcount','userAge','userAuthority','addData'],
            tableData: [],
            options: {
                headings: {
                    userID: 'ID',
                    userName: '步道名稱',
                    userEmail: '信箱',
                    userPassword: '密碼',
                    userAllcount: '金幣數量',
                    userAge: '年齡',
                    userAuthority: '權限',
                    addData:'註冊日',
                   
                },
                sortable: ['userID','userEmail', 'userAllcount','userAge'],
                filterable: ['userID','userName', 'userEmail']
            }
        }
    },
    mounted() {
        this.axios.get('http://localhost:3000/users').then(res => {
          this.tableData = res.data
          // console.log(res)
        })
    }
 
}
</script>
<style scoped lang="scss">

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}

[v-cloak] {
  display:none;
}

</style>