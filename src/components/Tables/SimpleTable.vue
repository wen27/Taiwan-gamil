<template>
  <div>
    <input v-model="search" placeholder="搜尋...." />
    <!-- <div v-if="searchData.length > 0"> -->
      <button type="button" class="btn btn-info" @click="openModel(true)">
        新增
      </button>
      <!-- table -->
      <table class="table">
        <thead class="tableHeader">
          <tr>
            <!-- <th scope="col">ID</th> -->
            <th scope="col">步道名稱</th>
            <th scope="col">地址</th>
            <th scope="col">地區</th>
            <th scope="col">介紹</th>
            <th scope="col">總長度</th>
            <th scope="col">電話</th>
            <th scope="col">照片(一)</th>
            <th scope="col">照片(二)</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in walk.data" :key="item.walkId">
            <!-- <td scope="row">{{ item.walkId }}</td> -->
            <td scope="row">{{ item.walkPlaceName }}</td>
            <td class="walkAddress">{{ item.walkAddress }}</td>
            <td>{{ item.walkArea }}</td>
            <td class="walkDetial">{{ item.walkDetial }}</td>
            <td>{{ item.walkLength }}</td>
            <td>{{ item.walkTel }}</td>
            <td class="walkPic1">
              <figure>
                <img :src="item.walkPic1" alt="步道圖片" srcset="" />
              </figure>
            </td>
            <td class="walkPic2">
              <figure>
                <img :src="item.walkPic2" alt="步道圖片" srcset="" />
              </figure>
            </td>
            <td class="operateBtn">
              <i class="fas fa-edit" @click="openModel(false, item)"></i>
              <i class="fas fa-trash-alt" @click="openDeleteModal(item)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    <!--</div>
     <div v-else>無</div> -->
    <!--add & edit walkModal -->
    <div
      class="modal fade"
      id="walkModal"
      tabindex="-1"
      aria-labelledby="walkModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="walkModalLabel">新增步道</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="walkPic1">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="walkPic1"
                    name="walkPic1"
                    v-model="tempwalk.walkPic1"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="walkPic2">輸入圖片網址</label>
                  <!-- <input type="text" class="form-control" id="walkPic2" name="walkPic2" v-model="tempwalk.walkPic2" placeholder="請輸入圖片連結"> -->
                  <input
                    type="file"
                    class="form-control"
                    id="walkPic2"
                    name="walkPic2"
                  />
                </div>
                <!-- <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=200&q=80"
                  class="img-fluid"
                  alt=""
                /> -->
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="walkPlaceName">步道名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="walkPlaceName"
                    name="walkPlaceName"
                    v-model="tempwalk.walkPlaceName"
                    placeholder="請輸入步道名稱"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="walkAddress">地址</label>
                    <input
                      type="text"
                      class="form-control"
                      id="walkAddress"
                      name="walkAddress"
                      v-model="tempwalk.walkAddress"
                      placeholder="請輸入地址"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="walkArea">地區</label>
                    <input
                      type="text"
                      class="form-control"
                      id="walkArea"
                      name="walkArea"
                      v-model="tempwalk.walkArea"
                      placeholder="請輸入地區"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="walkTel">電話</label>
                    <input
                      type="text"
                      class="form-control"
                      id="walkTel"
                      name="walkTel"
                      v-model="tempwalk.walkTel"
                      placeholder="請輸入電話"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="walkLength">總長度</label>
                    <input
                      type="number"
                      class="form-control"
                      id="walkLength"
                      name="walkLength"
                      v-model="tempwalk.walkLength"
                      placeholder="請輸入總長度"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="walkDetial">步道描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="walkDetial"
                    name="walkDetial"
                    v-model="tempwalk.walkDetial"
                    placeholder="請輸入步道描述"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-success" @click="updateWalk">
              存檔
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="walkModalLabel">刪除步道</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除?
            <strong class="text-danger">{{ tempwalk.walkPlaceName }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="deleteWalk">
              刪除
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !pagination.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getWalks(pagination.curPage - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.totalPages"
          :key="page"
          :class="{ active: pagination.curPage === page }"
        >
          <a class="page-link" href="#" @click.prevent="getWalks(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pagination.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getWalks(pagination.curPage + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
import "bootstrap";
export default {
  // name: 'simple-table',
  // props: {
  //   tableHeaderColor: {
  //     type: String,
  //     default: ""
  //   }
  // },
  data() {
    return {
      walk: [],
      tempwalk: {},
      pagination: {},
      isNew: false,
      search: "",
      apiUrl: "http://140.112.30.202:3000",
    };
  },

  methods: {
    //get method
    getWalks(page = 1) {
      const vm = this;
      const api = `${vm.apiUrl}/walkPagination?curPage=${page}`;
      //console.log(api);
      this.$http.get(api).then((response) => {
        //console.log(response.data);
        vm.walk = response.data;
        vm.pagination = response.data.pagination;
        //console.log('page' + page)
        //console.log('curPage' + response.data.pagination.curPage)
        //console.log(vm.walk);
      });
    },
    //add & Edite Model
    openModel(isNew, item) {
      if (isNew) {
        this.tempwalk = {};
        this.isNew = true;
      } else {
        this.tempwalk = Object.assign({}, item);
        this.isNew = false;
      }
      $("#walkModal").modal("show");
    },
    //delete Model
    openDeleteModal(item) {
      const vm = this;
      $("#deleteModal").modal("show");
      this.tempwalk = Object.assign({}, item);
    },
    deleteWalk() {
      const vm = this;
      let api = `${vm.apiUrl}/walkPlaceList/${vm.tempwalk.walkId}`;
      this.$http.delete(api).then((response) => {
        //console.log(response.data.message, vm.tempwalk);
        let data = response.data;
        $("#deleteModal").modal("hide");
        this.$bus.$emit(
          "message:push",
          `${data.message}  ,  ${vm.tempwalk.walkPlaceName}`,
          "danger"
        );
        this.getWalks();
      });
    },
    //post & put methods
    updateWalk() {
      const vm = this;
      let api = `${vm.apiUrl}/walkPlaceList`;
      let httpMethod = "post";
      // console.log(api);
      if (!vm.isNew) {
        api = `${vm.apiUrl}/walkPlaceList/${vm.tempwalk.walkId}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](api, vm.tempwalk).then((response) => {
        let data = response.data;
        if (Object) {
          $("#walkModal").modal("hide");
          vm.getWalks();
          console.log(response.data);
          this.$bus.$emit(
            "message:push",
            `${data.message}  ,  ${vm.tempwalk.walkPlaceName}`,
            "success"
          );
        } else {
          vm.getWalks();
          this.$bus.$emit(
            "message:push",
            `${data.message}  ,  ${vm.tempwalk.walkPlaceName}`,
            "danger"
          );
          //console.log(response.data);
        }
      });
    },
  },

  created() {
    this.getWalks();
  },
  computed: {
    searchData: function () {
      //let vm = this;
      let search = this.search;
      let data = this.walk.data;
      //console.log(this.walk.data);
      if (search) {
        return this.data.filter(function (item) {
          return Object.keys(data).some(function (key) {
            return String(item[key]).toLowerCase().indexOf(search) > -1;
          });
        });
        console.log(search);
      }
      return this.data;
      console.log(this.data)
    },
  },
};
</script>
<style lang="scss" scoped>
.walkAddress {
  width: 100px;
  overflow: hidden;
  //white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.walkDetial {
  width: 300px;
  max-height: 80px;
  overflow: hidden;
  //white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.walkPic1 img,
.walkPic2 img {
  width: 100px;
  height: 80px;
}
.operateBtn {
  i {
    font-size: 20px;
  }
  i:first-child {
    color: blue;
    //margin-right: 5px;
  }
  i:last-child {
    color: red;
  }
}
.modal-content .modal-footer button + button {
  margin-bottom: 0px;
  margin-left: 5px;
}
</style>