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
            columns: ['walkId', 'walkPlaceName', 'walkAddress','walkArea','walkDetial','walkLength',
             'walkTel'],//, 'walkPic1', 'walkPic2'
            tableData: [],
            options: {
                headings: {
                    walkId: 'ID',
                    walkPlaceName: '步道名稱',
                    walkAddress: '地址',
                    walkArea: '地區',
                    walkDetial: '介紹',
                    walkLength: '總長度',
                    walkTel: '電話',
                    // walkPic1: '照片(一)',
                    // walkPic2: '照片(二)',
                },
                sortable: ['walkId','walkPlaceName', 'walkAddress','walkArea','walkDetial'],
                filterable: ['walkId','walkPlaceName', 'walkAddress','walkArea','walkDetial']
            }
        }
    },
    mounted() {
        this.axios.get('http://localhost:3000/walkPlaceList').then(res => {
            this.tableData = res.data
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