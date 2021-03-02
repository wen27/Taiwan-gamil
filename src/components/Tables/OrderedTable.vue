<template>
  <div>
    <md-table  :table-header-color="tableHeaderColor">
      <md-table-row>
        <md-table-head md-numeric>步道名稱</md-table-head>
        <md-table-head>地址</md-table-head>
        <md-table-head>地區</md-table-head>
        <md-table-head>介紹</md-table-head>
        <md-table-head>總長度</md-table-head>
        <md-table-head>電話</md-table-head>
        <md-table-head>照片(一)</md-table-head>
        <md-table-head>照片(二)</md-table-head>
        <md-table-head>操作</md-table-head>
      </md-table-row>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="walkPlaceName">{{ item.walkPlaceName }}</md-table-cell>
        <md-table-cell md-label="walkAddress">{{ item.walkAddress }}</md-table-cell>
        <md-table-cell md-label="walkArea">{{ item.walkArea }}</md-table-cell>
        <md-table-cell md-label="walkDetial">{{ item.walkDetial }}</md-table-cell>
        <md-table-cell md-label="walkLength">{{ item.walkLength }}</md-table-cell>
        <md-table-cell md-label="walkTel">{{ item.walkTel }}</md-table-cell>
        <md-table-cell md-label="walkPic1">
            <img :src="item.walkPic1" alt="步道圖片" srcset="">
        </md-table-cell>
          <md-table-cell md-label="walkPic2">
            <img :src="item.walkPic2" alt="步道圖片" srcset="">
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
       walk: [],
      tempwalk: {},
      pagination: {},
      isNew: false,
      // selected: [],
      // users: [
      //   {
      //     id: 1,
      //     name: "Dakota Rice",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   {
      //     id: 2,
      //     name: "Minerva Hooper",
      //     salary: "$23,738",
      //     country: "Curaçao",
      //     city: "Sinaai-Waas"
      //   },
      //   {
      //     id: 3,
      //     name: "Sage Rodriguez",
      //     salary: "$56,142",
      //     country: "Netherlands",
      //     city: "Overland Park"
      //   },
      //   {
      //     id: 4,
      //     name: "Philip Chaney",
      //     salary: "$38,735",
      //     country: "Korea, South",
      //     city: "Gloucester"
      //   }
      // ]
    };
  },methods: {
    //取得所有walkLists資料
    getWalks(page = 1) {
      //const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const api = `http://localhost:3000/walkPlaceList?curPage=${page}`;
      const vm = this;
      console.log(api);
      this.$http.get(api).then((response) => {
        //console.log(response.data);
        vm.walk = response.data;
        vm.pagination = response.data.pagination;
        //console.log('page' + page)
        //console.log('curPage' + response.data.pagination.curPage)
        //console.log(vm.walk);
      });
    },

    openModel (isNew, item){
      if(isNew){
        this.tempwalk = {};
        this.isNew = true;
      }else{
        this.tempwalk = Object.assign({}, item);
        this.isNew = false;
      }
      $('#walkModal').modal('show');
    },
    openDeleteModal(item) {
      const vm = this;
      $("#deleteModal").modal("show");
     this.tempwalk = Object.assign({}, item);
    },
    deleteWalk() {
      const vm = this;
      let api = `http://localhost:3000/walkPlaceList/${vm.tempwalk.walkId}`;
      this.$http.delete(api).then((response) => {
       // console.log(response, vm.tempwalk);
       console.log(response.data.message, vm.tempwalk);
        $("#deleteModal").modal("hide");
        this.getWalks();
      });
    },
    //編輯一筆walk資料
    updateWalk(){
      let api = `http://localhost:3000/walkPlaceList`;
      let httpMethod = 'post';
      const vm = this;
      console.log(api);
      if(!vm.isNew){
        api = `http://localhost:3000/walkPlaceList/${vm.tempwalk.walkId}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api ,vm.tempwalk).then((response) => {
        console.log(response.data);
        if(Object){
           $('#walkModal').modal('hide');
           vm.getWalks();
           console.log('成功新增一筆步道資料')
        }else{
           vm.getWalks();
            console.log('新增失敗');
        }
    });
    },
  },
  created() {
    this.getWalks();
  },
};
</script>
