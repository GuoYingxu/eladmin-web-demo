<template>
  <div class="app-container">
    <div style="margin-bottom:30px">
      <el-card class="box-card">
        <div>
          <el-row style="color: #666;font-size: 13px;display:flex;flex-direction:row;justify-content:space-between; margin-bottom:20px">
            <el-col>
              文件编号:23GD03A01
            </el-col>
            <el-col>
              文件描述: ICF冷柜质量跟单
            </el-col>
            <el-col>
              产品序列号: A01
            </el-col>
            <el-col>
              合同号: A01
            </el-col>
          </el-row>
          <el-row style="color: #666;font-size: 13px;display:flex;flex-direction:row;justify-content:space-between; margin-bottom:20px">
            <el-col>
              物料号: A01
            </el-col>
            <el-col>
              物料描述: xxx
            </el-col>
            <el-col>检验员：质检员A </el-col>
            <el-col>
              检验日期:  2020/12/19
            </el-col>
          </el-row>
          <el-row
            style="color: #666;font-size: 13px;display:flex;flex-direction:row;justify-content:space-between; "
          >
            <el-col :span="12">
              <div style="display:flex;flex-direction:row">
                <span style="width:100px">合格照片:</span>
                <el-image
                  style="width: 100px; height: 100px"
                  src="/pic.jpg"
                  :preview-src-list="['/pic.jpg']"
                />
              </div>
            </el-col>
            <el-col :span="12">
              备注:  无
            </el-col>
          </el-row>  </div></el-card>
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
      <el-table-column prop="type2" width="100" label="类别2" />
      <el-table-column prop="type3" width="100" label="类别3" />
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
      <el-table-column prop="req" label="检验结果" />
      <el-table-column prop="req" label="是否欠件" />
      <el-table-column prop="req" label="自检人" />
      <el-table-column prop="req" label="自检日期" />
      <el-table-column prop="req" label="问题分类" />
      <el-table-column prop="req" label="数量" />
      <el-table-column prop="req" label="责任部门" />
      <el-table-column prop="req" label="问题责任人" />
      <el-table-column prop="req" label="不合格描述" />
      <el-table-column prop="req" label="照片" />
      <el-table-column prop="req" label="会签状态" />
      <el-table-column prop="req" label="确认人" />

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
// import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
// import DateRangePicker from '@/components/DateRangePicker'
export default {
  name: 'App',
  components: { pagination
  // udOperation
  // rrOperation, DateRangePicker
  },
  cruds() {
    return CRUD({ title: '质检版本', url: 'api/qcinfo2', crudMethod: { ...crudSync }})
  },

  mixins: [presenter(), header(), crud()],
  data() {
    return {
      imgsVisible: false,
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
