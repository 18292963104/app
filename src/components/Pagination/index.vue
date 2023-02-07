<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" v-if="pageNo !== 1" @click="$emit('getPageNo', pageNo - 1)">
          <a href="#">«上一页</a>
        </li>
        <li v-if="startNumendNum.start > 1" >
          <a href="#">1</a>
        </li>
        <li>
          <a href="#" v-if="startNumendNum.start > 2">...</a>
        </li>
        <li
        v-for="(page, index) in startNumendNum.end"
        :key="index" v-if="page >= startNumendNum.start"
        :class="{ active: pageNo === page }"
        @click="$emit('getPageNo', page)"
        >
          <a href="#">{{ page }}</a>
        </li>

        <li class="dotted" v-if="startNumendNum.end < totalPage" ><span>...</span></li>
        <li
        class="next"
        v-if="startNumendNum.end < totalPage"
        @click="$emit('getPageNo', pageNo + 1)"
        >
          <a href="#">下一页»</a>
        </li>
      </ul>
      <div><span>共{{ totalPage }}页&nbsp;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues', 'getPageNo'],
  computed: {
    totalPage() {
        return Math.ceil(this.total/this.pageSize)
    },
    startNumendNum(){
      const { continues, pageSize, totalPage, pageNo} = this
      let start = 0, end = 0;


      if (continues > totalPage){
          start = 1;
          end = this.totalPage
      } else {
        start = pageNo - parseInt(continues / 2)
        end = pageNo + parseInt(continues / 2)
        if (start < 1) {
          start = 1
          end = continues
        }
        if (end >= totalPage) {
          end = totalPage
          start = pageNo - parseInt(continues / 2)
        }
      }
      console.log('miliya-->', start, end );

      return {start, end}
    }
  }
};
</script>

<style lang="less">
.page {
  width: 900px;
  height: 66px;
  overflow: hidden;
  float: right;

  .sui-pagination {
    margin: 18px 0;

    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      width: 650px;
      float: left;

      li {
        line-height: 18px;
        display: inline-block;

        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }

        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }

    div {
      color: #333;
      font-size: 14px;
      float: right;
      width: 241px;
    }
  }
}
</style>