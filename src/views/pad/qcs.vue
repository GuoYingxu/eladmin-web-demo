<template>
  <div class="app-container">
    <el-card>
      <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:15px;width:100%">
        <label> 生产自检 </label>

      </div>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form>
            <el-form-item label="产品序列号">
              <div style="display:flex;flex-direction:row">
                <el-input value="" />
                <span @click="showv"> <i class="icon iconfont iconscan" style="font-size:26px" /></span>
              </div>
            </el-form-item>
            <el-form-item label="跟单名称">
              <div style="display:flex;flex-direction:row">
                <el-input value="冷冻立柜质量跟单" />  </div>
            </el-form-item>
            <el-form-item label="合同编号">
              <div style="display:flex;flex-direction:row">
                <el-input value="D2011363SV" />  </div>
            </el-form-item>
            <el-form-item label="合同名称">
              <div style="display:flex;flex-direction:row">
                <el-input value="广州富士冷机有限公司" />  </div>
            </el-form-item>
            <el-form-item label="产品型号 ">
              <div style="display:flex;flex-direction:row">
                <el-input value="冷冻立柜" />  </div>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-form>
            <el-form-item label="状态">
              <el-select />
              <el-button style="margin-left:20px;" @click="cv=true">开始质检</el-button>
            </el-form-item>
            <el-form-item label="柜型">
              <el-select />
              <el-button style="margin-left:20px;">生成跟单 </el-button>
            </el-form-item>
            <el-form-item label="编号">
              <div style="display:flex;flex-direction:row">
                <el-input value="23GD11A01" /> </div>
            </el-form-item>
            <el-form-item label="跟单版本">
              <div style="display:flex;flex-direction:row">
                <el-input value="A01" /> </div>
            </el-form-item>
            <el-form-item label="生产日期 ">
              <el-date-picker />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>

    <el-card v-if="cv" style="margin-top:20px;">
      <el-table :expand-row-keys="kes" :data="data1" style="margin-bottom:5px;" row-key="id">
        <el-table-column prop="c1" label="可变检查项目" />
        <el-table-column prop="c2" label="" />
        <el-table-column prop="c3" label="欠料状态" width="100" />
        <el-table-column label="检验结果" width="200">
          <template slot-scope="scope">
            <el-radio v-model="scope.row.c4" label="1" @change="removekey($event,scope.row.id)">合格</el-radio>
            <el-radio v-model="scope.row.c4" label="2" @change="setkey($event,scope.row.id)">不合格</el-radio>
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <template>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form>
                  <el-form-item label="问题分类">
                    <el-select />
                  </el-form-item>
                  <el-form-item label="责任部门">
                    <el-select />
                  </el-form-item>
                  <el-form-item label="不合格描述">
                    <div style="display:flex;flex-direction:row">
                      <el-input value="D2011363SV" />  </div>
                  </el-form-item>
                  <el-form-item label="照片">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                    >
                      <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
                      <i class="icon iconfont iconzhaoxiangji" />
                    </el-upload>
                  </el-form-item>

                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form>
                  <el-form-item label="数量">
                    <div style="display:flex;flex-direction:row">
                      <el-input value="23GD11A01" />

                    </div>
                  </el-form-item>
                  <el-form-item label="问题责任人">
                    <div style="display:flex;flex-direction:row">
                      <el-input value="23GD11A01" />

                    </div>
                  </el-form-item>

                </el-form>

              </el-col>

            </el-row>
            <div style="display:flex;flex-direction:row;justify-content:flex-end;align-items:center">
              <label style="margin-left:10px;word-break:keep-all">已会签</label>
              <el-button style="margin-left:10px">确认</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

    </el-card>
    <el-card v-if="cv" style="margin-top:20px;">
      <el-table :data="data2">
        <el-table-column prop="c1" label="B2C内容" />
        <el-table-column prop="c2" label="" />
        <el-table-column prop="c3" width="100" label="欠料状态" />
        <el-table-column width="200" label="检验结果">
          <template>
            <el-button>跟单外信息填报</el-button>
          </template>
        </el-table-column>
        <el-table-column label="" width="48" />
      </el-table>
    </el-card>
    <el-card v-if="cv" style="margin-top:20px;">
      <el-table
        :data="data3"
        row-key="c1"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="c1" label="出厂检验" />
        <el-table-column label="欠料状态" width="100">
          <template slot-scope="scope">
            <template v-if="scope.row.type!==1">
              欠料<el-checkbox />
            </template>
          </template>
        </el-table-column>
        <el-table-column width="200" label="检验结果">
          <template slot-scope="scope">
            <el-button v-if="scope.row.type==1">跟单外信息填报</el-button>
            <template v-else>
              <el-radio :value="scope.row.c4" label="1">合格</el-radio>
              <el-radio v-model="scope.row.c4" label="2">不合格</el-radio>
            </template>
          </template>
        </el-table-column>
        <el-table-column label="" width="48" />
      </el-table>
    </el-card>

    <el-card v-if="cv" style="margin-top:20px;">
      <el-table
        :data="data4"
        row-key="c1"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="c1" label="检验工具" />
        <el-table-column label="欠料状态" width="100">
          <template slot-scope="scope">
            <template v-if="scope.row.type!==1">
              欠料<el-checkbox />
            </template>
          </template>
        </el-table-column>
        <el-table-column label="检验结果" width="200">
          <template slot-scope="scope">
            <el-button v-if="scope.row.type==1">跟单外信息填报</el-button>
            <template v-else>
              <el-radio :value="scope.row.c4" label="1">合格</el-radio>
              <el-radio v-model="scope.row.c4" label="2">不合格</el-radio>
            </template>
          </template>
        </el-table-column>
        <el-table-column label="" width="48" />
      </el-table>
    </el-card>
    <el-card v-if="cv" style="margin-top:20px;">
      <el-table
        :data="data5"
        row-key="c1"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="c1" label="生产自检" />
        <el-table-column label="自检人">
          <template v-if="scope.row.type!==1" slot-scope="scope">xxx</template>
        </el-table-column>
        <el-table-column label="欠料状态" width="100">
          <template slot-scope="scope">
            <template v-if="scope.row.type!==1">
              欠料<el-checkbox />
            </template>
          </template>
        </el-table-column>
        <el-table-column label="检验结果" width="200">
          <template slot-scope="scope">
            <el-button v-if="scope.row.type==1">跟单外信息填报</el-button>
            <template v-else>
              <el-radio :value="scope.row.c4" label="1">合格</el-radio>
              <el-radio v-model="scope.row.c4" label="2">不合格</el-radio>
            </template>
          </template>
        </el-table-column>
        <el-table-column label="" width="48" />
      </el-table>
    </el-card>
    <el-card v-if="cv" style="margin-top:20px;margin-bottom:40px">
      <label style="margin-bottom :10px;">检验完成</label>
      <el-form style="margin-top:10px;">
        <el-form inline>
          <el-form-item label="检验员">
            <label>张三</label>
          </el-form-item>
          <el-form-item label="检验日期">
            <label>2021/01/14</label>
          </el-form-item>
        </el-form>
        <el-form-item label="照片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
          >
            <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
            <i class="icon iconfont iconzhaoxiangji" />
          </el-upload>
          <!-- <span @click="showv"><i style="font-size:26px;" class="icon iconfont iconzhaoxiangji" /></span> -->
          <!-- <input type="file" name="cover" accept="image/*" capture="camera" multiple > -->
        </el-form-item>

        <el-form-item label="备注">
          <div style="display:flex;flex-direction:row">
            <el-input value="" />
          </div>
        </el-form-item>
      </el-form>
    </el-card>
    <!--分页组件-->
    <div v-if="cv" style=" background:white;position:fixed;bottom:0;display:flex;flex-direction;row;justify-content:center;padding:10px;width:100%;z-index:2000">
      <el-button type="primary" @click="$router.go(-1)"> 返回 </el-button>
      <el-button type="primary" style="margin-left:30px"> 保存 </el-button>
      <el-button type="primary" style="margin-left:30px">提交</el-button></div>

    <el-dialog :visible.sync="vv">
      <div style="margin:auto;text-align:center">
        <video id="video" ref="vvv" width="500px" height="500px" autoplay="autoplay" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cv: false,
      kes: [],
      vv: false,
      m: false,
      data1: [
        { id: 1, c1: '侧板类型', c2: '无侧版', c3: '', c4: '1' },
        { id: 2, c1: '前装饰板颜色', c2: '白', c3: '', c4: '1' },
        { id: 3, c1: '底饰板颜色', c2: '灰', c3: '', c4: '1' }
      ],
      data2: [
        { c1: '', c2: '', c3: '' }
      ],
      data3: [
        { c1: '电气安全测试', type: 1,
          children: [
            { c1: '电气安全测试合格（泄漏、绝缘、耐压、接地）', type: 2 },
            { c1: '风机应旋转正常无异常噪音，叶片角度、安装方向正确，无变形；数量正确', type: 2 },
            { c1: '试验指应不能碰触到带电部件', type: 2 },
            { c1: '温控器显示正常，无报警，压机运行符号正常闪烁，未闪烁不合格（未闪烁即为温控器参数未拷贝）', type: 2 }
          ] }
      ],
      data4: [
        { c1: '外观', type: 1,
          children: [
            { c1: '外观不应有明显缺陷，装饰性表面应平整', type: 2 },
            { c1: '涂层表面应平整、色泽均匀牢固，不应有明显的流疤、划痕、麻坑、皱纹、气泡漏涂和集合砂砾等缺陷', type: 2 },
            { c1: '塑料件表面应平整、色泽均匀，不应有裂痕、气泡、明显缩孔变形等缺陷', type: 2 },
            { c1: '保护杠与拐角间隙小于1mm，保护杠与箱体间间隙均匀且小于2mm', type: 2 }
          ] },
        {
          c1: '标志与说明', type: 1,
          children: [
            { c1: '商标，铭牌，警告粘贴平整无气泡，A4纸，五联单及铭牌与柜体订单核对正确达到一致', type: 2 },
            { c1: '文件及附件', type: 2 },
            { c1: '文字资料内容正确，无遗漏，附件种类，数量正确。', type: 2 },
            { c1: '柜体及附件箱的五联单，实物与订单一致', type: 2 }
          ]
        }
      ],
      data5: [
        { c1: '箱体组装', c2: 'xxx', type: 1,
          children: [{ c1: '发泡箱体装配之前首先检验箱体内外表面无明显划伤、碰伤，无残留发泡溢料及污物，箱体是否有预留孔', type: 2 },
            { c1: '检查木底座是否符合标准要求，木底座无断裂，无超过1/3的疤节及树皮', type: 2 },
            { c1: '确认支腿支撑、支腿外观是否合格，支腿底脚是否安装及安装到位', type: 2 },
            { c1: '根据用户需求粘贴高密度海绵，确认海绵的具体厚度，正常使用5mm厚度（大润发客户一般需求15mm厚度，需检验高密度海绵是否与支腿间空间贴严密，电控盒内5mm高密度海绵粘贴严密无闪缝', type: 2 }] },
        { c1: '安装内外部件', c2: 'xxx', type: 1,
          children: [{ c1: '检查蒸发器翅片无倒伏，使用针阀测试蒸发器内部是否存在气压（蒸发器无泄漏）', type: 2 },
            { c1: '检查蒸发器膨胀阀及阀芯是否正确，并将蒸发器固定到蒸发器支撑上/3的疤节及树皮', type: 2 },
            { c1: '检查加热管两侧散热位置不允许与导线接触，避免将导线烫伤', type: 2 },
            { c1: '顶饰板、顶风板、顶部灯支撑、内支撑、背风板、柜口、回风格栅等两侧与箱体端面平齐', type: 2 }] },
        { c1: '包装', c2: 'xxx', type: 1,
          children: [{ c1: '外观不应有明显缺陷，装饰性表面应平整', type: 2 },
            { c1: '涂层表面应平整、色泽均匀、牢固，不应有明显的流疤、划痕、麻坑、皱纹、气泡、漏涂和集合砂砾等缺陷 ', type: 2 },
            { c1: '塑料件表面应平整、色泽均匀，不应有裂痕、气泡、明显缩孔和变形等缺陷', type: 2 }
          ] }

      ]
    }
  },
  methods: {
    removekey(value, id) {
      this.kes = this.kes.filter(v => v != id)
    },
    setkey(value, id) {
      this.kes.push(id)
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
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
</style>
