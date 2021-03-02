<template>
  <div>
    <!-- table -->
    <table class="table">
      <thead class="tableHeader">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">姓名</th>
          <th scope="col">信箱</th>
          <th scope="col">密碼</th>
          <th scope="col">金幣數量</th>
          <th scope="col">年齡</th>
          <!-- <th scope="col">權限</th> -->
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.userID">
          <td scope="row">{{ item.userID }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.userEmail }}</td>
          <td>{{ item.userPassword }}</td>
          <td>{{ item.userAllcount }}</td>
          <td>{{ item.userAge }}</td>
          <!-- <td>{{ item.userAuthority }}</td> -->
          <td class="operateBtn">
            <i class="fas fa-edit" @click="openModel(false, item)"></i>
            <i class="fas fa-trash-alt" @click="openDeleteModal(item)"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!--add & edit userModal -->
    <div
      class="modal fade"
      id="userModal"
      tabindex="-1"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="userModalLabel">編輯會員</h5>
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
              <form @submit.prevent="updateuser">
            <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="customFile"
                      >上傳照片
                      <i class="fas fa-spinner fa-spin"></i>
                    </label>
                    <input
                      type="file"
                      id="customFile"
                      class="form-control"
                      ref="files"
                    />
                  </div>
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=200&q=80"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="col-sm-8">
                  <div class="form-group">
                    <label for="userName">姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="userName"
                      name="userName"
                      :class="{ 'is-invalid': errors.has('userName') }"
                      v-model="tempUser.userName"
                      placeholder="請輸入姓名"
                      v-validate="'required'"
                    />
                    <span class="text-danger" v-if="errors.has('userName')"
                      >姓名必須輸入</span
                    >
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="userEmail">信箱</label>
                      <input
                        type="text"
                        class="form-control"
                        id="userEmail"
                        name="userEmail"
                        v-validate="'required|email'"
                        :class="{ 'is-invalid': errors.has('userEmail') }"
                        v-model="tempUser.userEmail"
                        placeholder="請輸入信箱"
                      />
                      <span class="text-danger" v-if="errors.has('userEmail')">
                        {{ errors.first("email") }}
                      </span>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="userPassword">密碼</label>
                      <input
                        type="text"
                        class="form-control"
                        id="userPassword"
                        name="userPassword"
                        :class="{ 'is-invalid': errors.has('userPassword') }"
                        v-model="tempUser.userPassword"
                        placeholder="請輸入密碼"
                        v-validate="'required|min:6'"
                      />
                      <span
                        class="text-danger"
                        v-if="errors.has('userPassword')"
                        >密碼必須6位元以上</span
                      >
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="userAllcount">金幣</label>
                      <input
                        type="number"
                        class="form-control"
                        id="userAllcount"
                        name="userAllcount"
                        v-model="tempUser.userAllcount"
                        placeholder="金幣"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="userAge">出生日</label>
                      <input
                        type="number"
                        class="form-control"
                        id="userAge"
                        name="userAge"
                        v-model="tempUser.userAge"
                        placeholder="請輸入出生日"
                      />
                    </div>
                  </div>
                </div>
            </div>
              </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-success" @click="updateuser">
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
            <strong class="text-danger">{{ tempUser.userName }}</strong>
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
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      users: [],
      //表單驗證
      tempUser: {
        userName: "",
        userEmail: "",
        userPassword: "",
        userAllcount: "",
        userAge: "",
      },
      message: "",
      isNew: false,
    };
  },
  methods: {
    getUser() {
      const api = `http://140.112.30.202:3000/users`;
      const vm = this;
      this.$http.get(api).then((response) => {
        //console.log(response.data);
        vm.users = response.data;
        console.log(vm.users);
      });
    },
    openModel(isNew, item) {
      if (isNew) {
        this.tempUser = {};
        this.isNew = true;
      } else {
        this.tempUser = Object.assign({}, item);
        this.isNew = false;
      }
      $("#userModal").modal("show");
    },
    openDeleteModal(item) {
      const vm = this;
      $("#deleteModal").modal("show");
      this.tempUser = Object.assign({}, item);
    },
    deleteWalk() {
      const vm = this;
      let api = `http://localhost:3000/users/${vm.tempUser.userID}`;
      this.$http.delete(api).then((response) => {
        // console.log(response, vm.tempUser);
        console.log(response.data.message, vm.tempUser);
        this.$bus.$emit("message:push", "已成功刪除會員", "success");
        $("#deleteModal").modal("hide");
        this.getUser();
      });
    },
    updateuser() {
      let api = `http://localhost:3000/users/`;
      let httpMethod = "post";
      const vm = this;
      console.log(api);
      this.$validator.validate().then((result) => {
        if (result) {
          if (!vm.isNew) {
            api = `http://localhost:3000/users/${vm.tempUser.userID}`;
            httpMethod = "put";
          }
          vm.$http[httpMethod](api, vm.tempUser).then((response) => {
            console.log("data" + response.data);
            if (Object) {
              $("#userModal").modal("hide");
              vm.getUser();
              //console.log('已成功~! 編輯會員資料')
              this.$bus.$emit(
                "message:push",
                "已成功~! 編輯會員資料",
                "success"
              );
            } else {
              vm.getUser();
              //console.log('新增失敗');
            }
          });
        } else {
          console.log("欄位不完整");
        }
      });
    },
  },
  created() {
    this.getUser();
    //this.$bus.$emit('message:push','error','success');
  },
};
</script>
<style scoped lang="scss">
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