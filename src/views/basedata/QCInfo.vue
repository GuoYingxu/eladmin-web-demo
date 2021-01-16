<template>
  <div class="app-container">
    <div style="margin-bottom:30px">
      <el-card class="box-card">
        <div style="color: #666;font-size: 13px;display:flex;flex-direction:row;justify-content:space-between;padding-right:30px;">
          <div>
            文件编号:23GD03A01
          </div>
          <div>
            文件描述: A01
          </div>
          <div>
            编制日期:  2020/12/19
          </div>
          <div>
            编制人:  质检员A
          </div>
        </div>
      </el-card>
    </div>
    <!-- <el-form ref="form" :model="form" style="margin-top: 6px;" size="small" label-width="100px">
      <el-form-item label="文件编号:" prop="subject">
        <label style="width: 646px"> 23GD03A01</label>
      </el-form-item>
      <el-form-item label="文件描述:" prop="subject">
        <label style="width: 646px"> ICF冷柜质量跟踪单</label>
      </el-form-item>
      <el-form-item label="文件版本:" prop="subject">
        <label style="width: 646px"> A01</label>
      </el-form-item>
      <el-form-item label="编制日期:" prop="subject">
        <label style="width: 646px"> 2020/12/19</label>
      </el-form-item>
      <el-form-item label="编制人:" prop="subject">
        <label style="width: 646px"> 质检员A</label>
      </el-form-item>
    </el-form> -->
    <el-table ref="table" v-loading="crud.loading" :data="crud.data" highlight-current-row style="width: 100%" @selection-change="crud.selectionChangeHandler" @current-change="handleCurrentChange">
      <el-table-column prop="type1" label="类别1" />
      <el-table-column prop="type2" label="类别2" />
      <el-table-column prop="type3" label="类别3" />
      <el-table-column prop="code" width="80" label="序号" />
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
      <el-table-column prop="req" label="检验要求" />
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
// import rrOperation from '@crud/RR.operation'
// import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
// import DateRangePicker from '@/components/DateRangePicker'
export default {
  name: 'App',
  components: { pagination, udOperation
  // rrOperation, DateRangePicker
  },
  cruds() {
    return CRUD({ title: '质检版本', url: 'api/qcinfo', crudMethod: { ...crudSync }})
  },

  mixins: [presenter(), header(), crud()],
  data() {
    return {
      form: {},
      permission: {
        add: [],
        edit: ['admin', 'app:edit'],
        del: ['admin', 'app:del']
      }
    }
  }
}
</script>
