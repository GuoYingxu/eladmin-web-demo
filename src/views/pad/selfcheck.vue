<template>
  <div class="app-container">

    <el-form ref="form" :model="form" style="margin-top: 6px;" size="small" label-width="100px">
      <el-form-item label="产品序列号:" prop="subject">
        <div style="display:flex;flex-direction:row">
          <el-input value="" @blur="showtable" />
          <span style="margin-left:20px" @click="showv"> <i class="icon iconfont iconscan" style="font-size:26px;" />
          </span>
        </div>
      </el-form-item>
      <el-form-item label="主机手:" prop="subject">
        <div style="display:flex;flex-direction:row">
          <el-input value="" />
          <span style="margin-left:20px" @click="showv"> <i class="icon iconfont iconscan" style="font-size:26px;" />
          </span>
        </div>
      </el-form-item>
    </el-form>
    <el-form inline style="width:100%">
      <el-form-item style="width:50%" label="用户姓名:" prop="subject">
        <label style="width: 646px"> 张三</label>
      </el-form-item>
      <el-form-item label="工序:" prop="subject">
        <label style="width: 646px"> 包装</label>
      </el-form-item>

    </el-form>
    <el-card v-if="tv">
      <el-table ref="table" v-loading="crud.loading" :data="crud.data" highlight-current-row style="width: 100%" @selection-change="crud.selectionChangeHandler" @current-change="handleCurrentChange">
        <el-table-column prop="content" label="包装" />
        <el-table-column prop="type2" width="80" label="">
          <template>
            <div>欠料<el-checkbox /></div>
          </template>
        </el-table-column>

        <el-table-column prop="memo" width="220" label="">
          <template>
            <div>
              <el-input placeholder="备注" value="" />
            </div>
          </template>
        </el-table-column>
        <el-table-column width="80" prop="cs" label=" ">

          <template>
            <div>确认<el-checkbox /></div>
          </template>
        </el-table-column>

      </el-table>
    </el-card>
    <!--分页组件-->
    <div style="position:fixed;bottom:0;display:flex;flex-direction;row;justify-content:center;padding:10px;width:100%">
      <el-button type="primary" @click="$router.go(-1)"> 返回 </el-button>
      <el-button type="primary" style="margin-left:30px">提交</el-button></div>
    <el-dialog :visible.sync="vv">
      <div style="margin:auto;text-align:center">
        <video id="video" ref="vvv" width="500px" height="500px" autoplay="autoplay" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import crudSync from '@/api/basedata/syncsap'
import CRUD, { presenter, header, crud } from '@crud/crud'
// import rrOperation from '@crud/RR.operation'
// import crudOperation from '@crud/CRUD.operation'
// import DateRangePicker from '@/components/DateRangePicker'
export default {
  name: 'App',
  cruds() {
    return CRUD({ title: '质检版本', url: 'api/sc', crudMethod: { ...crudSync }})
  },

  mixins: [presenter(), header(), crud()],
  data() {
    return {
      tv: false,
      vv: false,
      form: {},
      permission: {
        add: [],
        edit: ['admin', 'app:edit'],
        del: ['admin', 'app:del']
      }
    }
  },
  methods: {
    showtable() {
      this.tv = true
    },
    showv() {
      this.vv = true
      this.$nextTick().then(() => {
        if (!this.m) { this.getMedia() }
      })
    },
    getMedia() {
      const constraints = {
        video: { width: 500, height: 500 },
        audio: true
      }
      // 获得video摄像头区域
      const video = this.$refs.vvv
      // 这里介绍新的方法，返回一个 Promise对象
      // 这个Promise对象返回成功后的回调函数带一个 MediaStream 对象作为其参数
      // then()是Promise对象里的方法
      // then()方法是异步执行，当then()前的方法执行完后再执行then()内部的程序
      // 避免数据没有获取到
      const promise = navigator.mediaDevices.getUserMedia(constraints)
      this.m = true
      promise.then(function(MediaStream) {
        video.srcObject = MediaStream
        video.play()
        // this.m = true
      })
    }
  }
}
</script>
