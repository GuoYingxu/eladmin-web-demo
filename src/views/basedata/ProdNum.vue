<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <div v-if="crud.props.searchToggle">
        <!-- 搜索 -->
        <el-input v-model="query.name" clearable placeholder="销售订单" style="width: 200px" class="filter-item" />
        <el-input v-model="query.name" clearable placeholder="销售订单行项目" style="width: 200px" class="filter-item" />
        <!-- @keyup.enter.native="crud.toQuery" /> -->
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
      <el-table-column type="selection" width="55" />
      <el-table-column prop="code" label="工序代码" />
      <el-table-column prop="description" label="工序描述" />
      <el-table-column prop="empnum" label="员工编号" />
      <el-table-column prop="empname" label="员工姓名" />
      <el-table-column v-if="checkPer(['admin','app:edit','app:del'])" label="操作" width="150px" align="center">
        <template slot-scope="scope">
          <udOperation
            :data="scope.row"
            :permission="permission"
          />
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
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
import DateRangePicker from '@/components/DateRangePicker'

/**
 *
 *
 *
 */
export default {
  name: 'App',
  components: { pagination, crudOperation, rrOperation, udOperation, DateRangePicker },
  cruds() {
    return CRUD({ title: 'SAP同步', url: 'api/prodnum', crudMethod: { ...crudSync }})
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
        add: [],
        edit: ['admin', 'app:edit'],
        del: ['super']
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
