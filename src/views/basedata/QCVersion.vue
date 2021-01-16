<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <div v-if="crud.props.searchToggle">
        <!-- 搜索 -->
        <el-input v-model="query.name" clearable placeholder="文件编号" style="width: 200px" class="filter-item" />
        <el-input v-model="query.name1" clearable placeholder="文件描述" style="width: 200px" class="filter-item" />
        <!-- @keyup.enter.native="crud.toQuery" /> -->
        <date-range-picker v-model="query.createTime" class="date-item" />
        <el-select v-model="query.enabled" clearable size="small" placeholder="接口名" class="filter-item" style="width: 120px">
          <!-- @change="crud.toQuery"> -->
          <el-option v-for="item in enabledTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <rrOperation />
      </div>
      <crudOperation :permission="permission">
        <template slot="right">
          <el-button
            class="filter-item"
            size="mini"
            type="success"
            icon="el-icon-refresh"
            :loading="syncLoading"
            @click="importversion"
          >导入</el-button>
        </template>
      </crudOperation>
    </div>
    <!--表单组件-->
    <el-dialog append-to-body :close-on-click-modal="false" :visible="showimport" title="导入" width="800px">
      <el-form ref="form" :model="form" :rules="rules" size="small" label-width="100px">
        <el-form-item label="文件编号" prop="name">
          <el-input v-model="form.name" style="width: 670px" placeholder="文件编号" />
        </el-form-item>
        <el-form-item label="文件描述" prop="port">
          <el-input v-model="form.name" style="width: 670px" placeholder="文件描述" />
        </el-form-item>
        <el-form-item label="备注" prop="uploadPath">
          <el-input v-model="form.uploadPath" style="width: 670px" placeholder="备注" />
        </el-form-item>
        <el-form-item label="" prop="uploadPath">
          <el-button type="primary">上传文件</el-button>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="showimport=false">取消</el-button>
        <el-button type="primary" @click="showimport=false">确认</el-button>
      </div>
    </el-dialog>
    <!--表格渲染-->
    <el-table ref="table" v-loading="crud.loading" :data="crud.data" highlight-current-row style="width: 100%" @selection-change="crud.selectionChangeHandler" @current-change="handleCurrentChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="code" label="文件编号" />
      <el-table-column prop="description" label="文件描述" />
      <el-table-column prop="updator" label="更改人" />
      <el-table-column prop="uptime" label="更改时间" />
      <el-table-column prop="content" label="更改内容" />
      <el-table-column prop="comm" label="备注" />
      <el-table-column prop="version" label="版本号" />
      <el-table-column prop="status" label="标记" />
      <el-table-column v-if="checkPer(['admin','app:edit','app:del'])" label="操作" width="150px" align="center">
        <template slot-scope="scope">
          <div style="display:flex;flex-direction:row">
            <el-button size="mini" style=" margin-right: 2px" type="text">
              <router-link :to="'/basedata/qcinfo'">
                详情
              </router-link>
            </el-button>
            <el-button size="mini" style=" margin-right: 2px" type="text">
              <!-- <router-link :to="'/basedata/qcinfo'"> -->
              编辑
              <!-- </router-link> -->
            </el-button>
            <el-button :key="scope.row" size="mini" style=" margin-right: 2px" type="text" @click="showDelete">
              <!-- <router-link :to="'/basedata/qcinfo'"> -->
              删除
              <!-- </router-link> -->
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
  components: { pagination, crudOperation, rrOperation, DateRangePicker },
  cruds() {
    return CRUD({ title: '质检版本', url: 'api/qcversion', crudMethod: { ...crudSync }})
  },
  mixins: [presenter(), header(), crud()],
  data() {
    return {
      form: {},
      showimport: false,
      syncLoading: false,
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
    showDelete() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    importversion() {
      this.showimport = true
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
