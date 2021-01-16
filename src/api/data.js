import request from '@/utils/request'
import qs from 'qs'

export function initData(url, params) {
  switch (url) {
    case 'api/syncsap':
      return Promise.resolve({
        content: [{
          id: 1,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 2,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 3,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 4,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 5,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 6,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 7,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 8,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 9,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }, {
          id: 10,
          apiname: 'ZQHC_VI_PRODUCTION_ORD_CONFIRM',
          aparams: '{"BLDAT_HIGH":"20201203","BLDAT_LOW":"20201101"}',
          sparams: '',
          starttime: '2020-12-04 14:11:04',
          endtime: '2020-12-04 14:11:22',
          syncmessage: '同步数据5条，成功5条',
          syncstatus: '同步完成',
          syncor: '艾德民'
        }],
        totalElements: 10
      })
    case 'api/protype':
      return Promise.resolve({
        content: [
          { id: 1, mnum: 'BG1LVS00000', miintro: 'ICF150808A非冷货架', protype: 'ICF冷柜', qcnum: '23GD03A01', prokind: 'service' },
          { id: 2, mnum: 'BG1LVS00000', miintro: 'ICF150808A非冷货架', protype: 'ICF冷柜', qcnum: '23GD03A01', prokind: 'service' },
          { id: 3, mnum: 'BG1LVS00000', miintro: 'ICF150808A非冷货架', protype: 'ICF冷柜', qcnum: '23GD03A01', prokind: 'service' },
          { id: 4, mnum: 'BG1LVS00000', miintro: 'ICF150808A非冷货架', protype: 'ICF冷柜', qcnum: '23GD03A01', prokind: 'service' }
        ],
        totalElements: 4
      })
    case 'api/depmail':
      return Promise.resolve({
        content: [
          { id: 1, dep: '生产部', manager: '盛长安', mail: 'dep_prod@163.com' },
          { id: 2, dep: '物流部', manager: '吴流', mail: 'dep_comunicate@163.com' },
          { id: 3, dep: '开发部', manager: '川建国', mail: 'dep_develop@163.com' },
          { id: 4, dep: '工艺部', manager: '张刚', mail: 'dep_arts@163.com' }
        ],
        totalElements: 4
      })
    case 'api/prodnum' :
      return Promise.resolve({
        content: [
          { id: 1, code: 'lg01', description: '箱体组装', empnum: '1001', empname: '张三' },
          { id: 2, code: 'lg02', description: '安装', empnum: '1002', empname: '李四' },
          { id: 3, code: 'lg03', description: '电气接线', empnum: '1003', empname: '王五' },
          { id: 4, code: 'lg04', description: '包装', empnum: '1004', empname: '赵六' }
        ],
        totalElements: 4
      })
    case 'api/qcversion':
      return Promise.resolve({
        content: [
          { id: 1, code: '23GD03A01', description: 'ICF冷柜质量跟单', updator: '张乾', uptime: '2012-12-10', content: '箱底接地需要导通', comm: '', version: 'A01', status: '' },
          { id: 2, code: '23GD03A01', description: 'ICF冷柜质量跟单', updator: '张乾', uptime: '2012-12-10', content: '箱底接地需要导通', comm: '', version: 'A01', status: '作废' },
          { id: 3, code: '23GD03A01', description: 'ICF冷柜质量跟单', updator: '张乾', uptime: '2012-12-10', content: '箱底接地需要导通', comm: '', version: 'A01', status: '' },
          { id: 4, code: '23GD03A01', description: 'ICF冷柜质量跟单', updator: '张乾', uptime: '2012-12-10', content: '箱底接地需要导通', comm: '', version: 'A01', status: '' }
        ],
        totalElements: 4
      })
    case 'api/qtsearch':
      return Promise.resolve({
        content: [{ id: 1, mcode: 'BG08D100000', description: '柜台柜ZK0.5WF', pcode: 'BG08D10000020DB053', protype: '冷冻立柜', 'orderproject': 70, order: 'D2011363SV', customer: '广州富士冷机有限公司', qccode: '23GD11A01', qcversion: 'A01', protime: '2020-12-09', qcstatus: '已质检', qctime: '2020-12-09', qcmanager: '张三' }],
        totalElements: 1
      })
    case 'api/uqsearch':
      return Promise.resolve({
        content: [{
          id: 1,
          mcode: 'BG08D100000',
          mdescription: '柜台柜Zk0.5WF',
          pcode: 'BG)*D!0000020DB053',
          protype: '冷冻立柜',
          qccode: '23GD11A01',
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          qdiscription: '电气安全测试合格（泄露、绝缘、耐压、接地）',
          qtype: 'A1生产问题',
          num: 10,
          dep: '生产部',
          depman: '张三',
          uqdiscription: '未接地',
          ctime: '2020/12/14',
          ccontent: '修改设计',
          deal: '',
          status3: '未提出',
          tem: '',
          status1: '未会签',
          sureman: '质检员A',
          status2: '未确认'
        },
        {
          id: 2,
          mcode: 'BG08D100000',
          mdescription: '柜台柜Zk0.5WF',
          pcode: 'BG)*D!0000020DB053',
          protype: '冷冻立柜',
          qccode: '23GD11A01',
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          qdiscription: '电气安全测试合格（泄露、绝缘、耐压、接地）',
          qtype: 'A1生产问题',
          num: 10,
          dep: '生产部',
          depman: '张三',
          uqdiscription: '未接地',
          ctime: '2020/12/14',
          ccontent: '修改设计',
          deal: '',
          status3: '未提出',
          tem: '',
          status1: '未会签',
          sureman: '质检员A',
          status2: '未确认'
        },
        {
          id: 3,
          mcode: 'BG08D100000',
          mdescription: '柜台柜Zk0.5WF',
          pcode: 'BG)*D!0000020DB053',
          protype: '冷冻立柜',
          qccode: '23GD11A01',
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          qdiscription: '电气安全测试合格（泄露、绝缘、耐压、接地）',
          qtype: 'A1生产问题',
          num: 10,
          dep: '生产部',
          depman: '张三',
          uqdiscription: '未接地',
          ctime: '2020/12/14',
          ccontent: '修改设计',
          deal: '',
          status3: '未提出',
          tem: '',
          status1: '未会签',
          sureman: '质检员A',
          status2: '未确认'
        },
        {
          id: 4,
          mcode: 'BG08D100000',
          mdescription: '柜台柜Zk0.5WF',
          pcode: 'BG)*D!0000020DB053',
          protype: '冷冻立柜',
          qccode: '23GD11A01',
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          qdiscription: '电气安全测试合格（泄露、绝缘、耐压、接地）',
          qtype: 'A1生产问题',
          num: 10,
          dep: '生产部',
          depman: '张三',
          uqdiscription: '未接地',
          ctime: '2020/12/14',
          ccontent: '修改设计',
          deal: '',
          status3: '未提出',
          tem: '',
          status1: '未会签',
          sureman: '质检员A',
          status2: '未确认'
        }],
        totalElements: 4
      })
    case 'api/qcinfo':
      return Promise.resolve({
        content: [{
          id: 1,
          code: 1,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '电气安全测试合格（泄漏、绝缘、耐压、接地）',
          req: '检验工具：电检设备'
        },
        { id: 2,
          code: 2,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '风机应旋转正常无异常噪音，叶片角度、安装方向正确，无变形；数量正确',
          req: '检验工具：电检设备'
        },
        {
          code: 3,
          id: 3,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: 'LED正常无异常闪烁，且颜色、功率符合客户要求',
          req: '检验工具：电检设备'
        },
        {
          code: 4,
          id: 4,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: '检验工具：电检设备'
        }],
        totalElements: 4
      })
    case 'api/qcinfo2':
      return Promise.resolve({
        content: [{
          id: 1,
          code: 1,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '电气安全测试合格（泄漏、绝缘、耐压、接地）',
          req: ' '
        },
        { id: 2,
          code: 2,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '风机应旋转正常无异常噪音，叶片角度、安装方向正确，无变形；数量正确',
          req: ' '
        },
        {
          code: 3,
          id: 3,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: 'LED正常无异常闪烁，且颜色、功率符合客户要求',
          req: ' '
        },
        {
          code: 4,
          id: 4,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: ' '
        }, {
          code: 5,
          id: 5,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: ' '
        }, {
          code: 6,
          id: 6,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: ' '
        }, {
          code: 7,
          id: 7,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: ' '
        }, {
          code: 8,
          id: 8,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: ' '
        }, {
          code: 9,
          id: 9,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: ' '
        }, {
          code: 10,
          id: 10,
          type1: '性能测试',
          type2: '出厂检验项目',
          type3: '电气安全测试',
          content: '试验指应不能碰触到带电部件',
          req: ' '
        }],
        totalElements: 10
      })
    case 'api/sc':
      return Promise.resolve({
        content: [{
          content: '外观不应有明显缺陷，装饰性表面应平整'
        },
        {
          content: '涂层表面应平整、色泽均匀、牢固，不应有明显的流疤、划痕、麻坑、皱纹、气泡、漏涂和集合砂砾等缺陷'
        },
        {
          content: '塑料件表面应平整、色泽均匀，不应有裂痕、气泡、明显缩孔和变形等缺陷'
        }],
        totalElements: 3
      })
    case 'api/uqc':
      return Promise.resolve({
        totalElements: 2,
        content: [
          {
            content: '电气安全测试合格（泄漏、绝缘、耐压、接地）',
            type2: 'A1生产问题',
            dep: '生产部',
            depman: '责任人',
            cs: '未接地'
          },
          {
            content: '包装',
            type2: 'A2物料问题',
            dep: '物流部',
            depman: '李四',
            cs: '未接地'
          }
        ]
      })
    default:
      return request({
        url: url + '?' + qs.stringify(params, { indices: false }),
        method: 'get'
      })
  }
}

export function download(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get',
    responseType: 'blob'
  })
}
