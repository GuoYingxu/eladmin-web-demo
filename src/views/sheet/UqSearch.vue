<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <div v-if="crud.props.searchToggle">
        <!-- 搜索 -->
        <el-input v-model="query.name" clearable placeholder="产品序列号" style="width: 200px" class="filter-item" />
        <!-- @keyup.enter.native="crud.toQuery" /> -->
        <el-select v-model="query.enabled" clearable size="small" placeholder="责任部门" class="filter-item" style="width: 120px">
          <!-- @change="crud.toQuery"> -->
          <el-option :key="1" label="生产部" :value="1" />
          <el-option :key="2" label="质检部" :value="2" />
        </el-select>
        <el-input v-model="query.name" clearable placeholder="问题分类" style="width: 200px" class="filter-item" />
        <rrOperation />
      </div>
      <crudOperation :permission="permission" />
    </div>
    <!-- 表单组件 -->
    <el-dialog append-to-body :close-on-click-modal="false" :visible.sync="dialogvisible" :title="crud.status.title" width="800px">
      <el-row style="margin-bottom:20px">
        <el-col style=" text-align:right;padding-right:5px" :span="4"><label>产品序列号:</label></el-col>
        <el-col :span="8"><label>BG08D100000</label></el-col>

        <el-col style="text-align:right;padding-right:5px":span="4"><label>质检文件编号:</label></el-col>
        <el-col :span="8"><label>23GD11A01</label></el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="4" style=" text-align:right;padding-right:5px"><label>检验内容:</label></el-col>
        <el-col :span="20">电气安全测试合格（泄露、绝缘、耐压、接地）</el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="4" style=" text-align:right;padding-right:5px"><label>问题分类:</label></el-col>
        <el-col :span="8"><label>A1生产问题</label></el-col>

        <el-col :span="4" style=" text-align:right;padding-right:5px"><label>责任部门:</label></el-col>
        <el-col :span="8"><label>生产部</label></el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="4" style=" text-align:right;padding-right:5px"><label>责任人:</label></el-col>
        <el-col :span="8"><label>张三</label></el-col>

        <el-col :span="4" style=" text-align:right;padding-right:5px"><label>不合格描述:</label></el-col>
        <el-col :span="8"><label>未接地</label></el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="4" style=" line-height:30px;text-align:right;padding-right:5px; "><label>临时措施:</label></el-col>
        <el-col :span="8">
          <el-input style="width: 200px" placeholder="" />
        </el-col>
        <el-col :span="4" style=" line-height:30px;text-align:right;padding-right:5px; "><label>根绝措施:</label></el-col>
        <el-col :span="8"> <el-input style="width:200px" placeholder="" /></el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="4" style=" text-align:right;padding-right:5px; line-height:30px"><label>计划日期:</label></el-col>
        <el-col :span="20"> <el-date-picker /></el-col>
      </el-row> <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="dialogvisible=false">取消</el-button>
        <el-button :loading="crud.status.cu === 2" type="primary" @click="dialogvisible=false">确认</el-button>
      </div>
    </el-dialog>
    <!--表格渲染-->
    <el-table ref="table" v-loading="crud.loading" :data="crud.data" highlight-current-row style="width: 100%" @selection-change="crud.selectionChangeHandler" @current-change="handleCurrentChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="mcode" width="100" label="物料" />
      <el-table-column prop="mdescription" width="110" label="物料描述" />
      <el-table-column prop="pcode" width="150" label="产品序列号" />
      <el-table-column prop="protype" label="产品类别" />
      <el-table-column prop="qccode" width="100" label="质检文件编号" />
      <el-table-column prop="qdiscription" label="检验内容">
        <template slot-scope="scope">
          <el-popover
            :content=" scope.row.qdiscription "
            placement="top-start"
            title="检验内容"
            width="200"
            trigger="hover"
          >
            <span
              slot="reference"
              style="word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color: #1890ff;font-size: 13px;"
            >
              {{ scope.row.qdiscription }}
            </span>
          </el-popover>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="qdiscription" label="整改状态"> -->

      <!-- </el-table-column> -->
      <el-table-column prop="qtype" width="100" label="问题分类" />
      <el-table-column prop="dep" label="责任部门" />
      <el-table-column prop="depman" label="问题责任人" />
      <el-table-column prop="uqdiscription" label="不合格描述" />
      <el-table-column prop="p" align="center" label="不合格照片">
        <template>

          <el-image
            style="width:60px; height: 60px"
            src="/pic.jpg"
            :preview-src-list="['/pic.jpg']"
          />

        </template>
      </el-table-column>
      <el-table-column prop="tem" label="临时措施" />
      <el-table-column prop="deal" label="根绝措施" />
      <el-table-column prop="ctime" width="100" label="计划日期" />
      <el-table-column prop="status1" width="120" label="会签状态">
        <template>
          <img width="100" src="/sign.jpeg">
        </template>
      </el-table-column>
      <el-table-column prop="status2" label="确认状态" />
      <el-table-column prop="status3" label="整改状态" />
      <el-table-column label="操作" width="150px" align="center">
        <template slot-scope="scope">
          <el-button :key="scope.row" size="mini" style=" margin-right: 2px" type="text" @click="showDialog">
            <!-- <router-link :to="'/basedata/qcinfo'"> -->
            填报
          <!-- </router-link> -->
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <pagination />
  </div>
</template>

<script>
import crudSync from '@/api/basedata/syncsap'
import CRUD, { presenter, header, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
// import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
// import DateRangePicker from '@/components/DateRangePicker'

/**
 *
 *
 *
 */
export default {
  name: 'App',
  components: { pagination, crudOperation, rrOperation },
  // udOperation, DateRangePicker },
  cruds() {
    return CRUD({ title: '不合格项', url: 'api/uqsearch', crudMethod: { ...crudSync }})
  },
  mixins: [presenter(), header(), crud()],
  data() {
    return {
      rules: {},
      form: {},
      dialogvisible: false,
      enabledTypeOptions: [{
        key: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
        display_name: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM'
      }, {
        key: 'ZQHC_VI_MATERIAL_DATA',
        display_name: 'ZQHC_VI_MATERIAL_DATA'
      }, {
        key: 'ZQHC_VI_WORK_CENTER',
        display_name: 'ZQHC_VI_WORK_CENTER'
      }],
      name: 'app',
      currentRow: null,
      permission: {
        add: ['none'],
        edit: ['none', 'app:edit'],
        del: ['none', 'app:del']
      }
    }
  },
  mounted() {
    console.log('#:::', this.$options.name)
    this.query.name = this.$route.query.name
  },
  methods: {
    showDialog() {
      this.dialogvisible = true
    },
    copy() {
      // for (const key in this.currentRow) {
      //   this.form[key] = this.currentRow[key]
      // }
      // this.form.id = null
      // this.form.createTime = null
      // this.crud.toAdd()
    },
    handleCurrentChange(row) {
      this.currentRow = JSON.parse(JSON.stringify(row))
    }
  }
}
</script>

<style scoped>
</style>
