<template>
  <div class="app-container">

    <el-form ref="form" :model="form" style="margin-top: 6px;" size="small" label-width="100px">
      <el-form-item label="产品序列号:" prop="subject">
        <div style="display:flex;flex-direction:row">
          <el-input value="" @blur="cv=true" />
          <span style="margin-left:20px" @click="showv"> <i class="icon iconfont iconscan" style="font-size:26px;" />
          </span>
        </div>
      </el-form-item>
    </el-form>
    <el-card v-if="cv">
      <div>不合格项</div>
      <el-table v-show="cv" ref="table" default-expand-all :data="crud.data" highlight-current-row style="width: 100%" @selection-change="crud.selectionChangeHandler" @current-change="handleCurrentChange">

        <el-table-column prop="content" label="检验内容">
          <template slot-scope="scope">
            <el-popover
              :content=" scope.row.content"
              placement="top-start"
              title="检验内容"
              width="200"
              trigger="hover"
            >
              <span
                slot="reference"
                style="word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color: #1890ff;font-size: 13px;"
              >
                {{ scope.row.content }}
              </span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="type2" label="问题分类" />
        <el-table-column prop="dep" label="责任部门" />
        <el-table-column prop="depman" label="责任人" />
        <el-table-column prop="cs" label="不合格描述" />
        <el-table-column prop="cs" align="center" width="120" label="不合格图片">
          <template>
            <el-image
              style="width: 100px; height: 100px"
              src="/pic.jpg"
              :preview-src-list="['/pic.jpg']"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px" align="center">
          <template>
            <el-button type="primary">提交 </el-button>
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <template>
            <div style="display:flex;flex-direction:row">
              <div> 签名：</div>
              <vue-signature :width="500" />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!--分页组件-->
    <div style="position:fixed;bottom:0;display:flex;flex-direction;row;justify-content:center;padding:10px;width:100%"> <el-button type="primary" @click="$router.go(-1)"> 返回 </el-button></div>
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
// import ThemeRiver from '../../components/Echarts/ThemeRiver.vue'
// import rrOperation from '@crud/RR.operation'
// import crudOperation from '@crud/CRUD.operation'
// import DateRangePicker from '@/components/DateRangePicker'
export default {
  name: 'App',
  cruds() {
    return CRUD({ title: '质检版本', url: 'api/uqc', crudMethod: { ...crudSync }})
  },

  mixins: [presenter(), header(), crud()],
  data() {
    return {
      cv: false,
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
