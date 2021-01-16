<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <div v-if="crud.props.searchToggle">
        <!-- 搜索 -->
        <el-input v-model="query.name" clearable placeholder="产品序列号" style="width: 200px" class="filter-item" />
        <el-select v-model="query.enabled" clearable size="small" placeholder="产品类别" class="filter-item" style="width: 120px">
          <!-- @change="crud.toQuery"> -->
          <el-option v-for="item in enabledTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <el-input v-model="query.name" clearable placeholder="销售订单" style="width: 200px" class="filter-item" />
        <el-input v-model="query.name" clearable placeholder="行项目" style="width: 200px" class="filter-item" />
        <!-- @keyup.enter.native="crud.toQuery" /> -->
        <el-select v-model="query.enabled" clearable size="small" placeholder="质检文件编号" class="filter-item" style="width: 120px">
          <!-- @change="crud.toQuery"> -->
          <el-option v-for="item in enabledTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <el-select v-model="query.enabled" clearable size="small" placeholder="质检状态" class="filter-item" style="width: 120px">
          <!-- @change="crud.toQuery"> -->
          <el-option v-for="item in enabledTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <date-range-picker v-model="query.createTime" class="date-item" />
        <rrOperation />
      </div>
      <crudOperation :permission="permission" />
    </div>
    <!--表单组件-->
    <!-- <el-dialog append-to-body :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="800px">
      <el-form ref="form" :model="form" :rules="rules" size="small" label-width="100px">
        <el-form-item label="应用名称" prop="name">
          <el-input v-model="form.name" style="width: 670px" placeholder="部署后的文件或者目录名称，用于备份" />
        </el-form-item>
        <el-form-item label="应用端口" prop="port">
          <el-input-number v-model.number="form.port" placeholder="例如：8080" />
        </el-form-item>
        <el-form-item label="上传目录" prop="uploadPath">
          <el-input v-model="form.uploadPath" style="width: 670px" placeholder="例如: /opt/upload" />
        </el-form-item>
        <el-form-item label="部署目录" prop="deployPath">
          <el-input v-model="form.deployPath" style="width: 670px" placeholder="例如: /opt/app" />
        </el-form-item>
        <el-form-item label="备份目录" prop="backupPath">
          <el-input v-model="form.backupPath" style="width: 670px" placeholder="例如: /opt/backup" />
        </el-form-item>
        <el-form-item label="部署脚本" prop="deployScript">
          <el-input v-model="form.deployScript" :rows="3" type="textarea" autosize style="width: 670px" placeholder="" />
        </el-form-item>
        <el-form-item label="启动脚本" prop="startScript">
          <el-input v-model="form.startScript" :rows="3" type="textarea" autosize style="width: 670px" placeholder="" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="crud.cancelCU">取消</el-button>
        <el-button :loading="crud.status.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
      </div>
    </el-dialog> -->
    <!--表格渲染-->
    <el-table ref="table" v-loading="crud.loading" :data="crud.data" highlight-current-row style="width: 100%" @selection-change="crud.selectionChangeHandler" @current-change="handleCurrentChange">
      <el-table-column prop="mcode" :width="100" label="物料" />
      <el-table-column prop="description" :width="110" label="描述" />
      <el-table-column prop="pcode" :width="150" label="产品序列号" />
      <el-table-column prop="protype" label="产品类别" />
      <el-table-column prop="orderproject" :width="100" label="销售订单项目" />
      <el-table-column prop="order" :width="100" label="销售订单" />
      <el-table-column prop="customer" :width="150" label="客户名称" />
      <el-table-column prop="qccode" :width="100" label="质检文件编号" />
      <el-table-column prop="qcversion" :width="100" label="质检文件版本" />
      <el-table-column prop="protime" :width="100" label="生产日前" />
      <el-table-column prop="qcstatus" :width="100" label="质检状态" />
      <el-table-column prop="qctime" :width="100" label="质检日期" />
      <el-table-column prop="qcmanager" label="质检人" />
      <el-table-column v-if="checkPer(['admin','app:edit','app:del'])" label="操作" width="150px" align="center">
        <template slot-scope="scope">
          <div :key="scope.row.index" style="display:flex;flex-direction:row">
            <el-button size="mini" style=" margin-right: 2px" type="text">
              <router-link :to="'/sheet/qcinfo?name=BG08D100000'">
                查看明细
              </router-link>
            </el-button>
            <el-button size="mini" style=" margin-right: 2px" type="text">
              <router-link :to="'/sheet/uqsearch?name=BG08D100000'">
                查看不合格项
              </router-link>
            </el-button>

            <!-- <udOperation
              :data="scope.row"
              :permission="permission"
            /> -->
          </div>
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
import DateRangePicker from '@/components/DateRangePicker'

/**
 *
 *
 *
 */
export default {
  name: 'App',
  components: { pagination, crudOperation, rrOperation,
  //  udOperation,
    DateRangePicker },
  cruds() {
    return CRUD({ title: '质检版本', url: 'api/qtsearch', crudMethod: { ...crudSync }})
  },
  mixins: [presenter(), header(), crud()],
  data() {
    return {
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
        add: ['super'],
        edit: ['super', 'app:edit'],
        del: ['super', 'app:del']
      }
    }
  },
  mounted() {
    console.log('#:::', this.$options.name)
  },
  methods: {
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
