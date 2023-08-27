const envList = {
  // QYWX_KEY: 'f4b84705-060d-464d-9b6d-3a34d5db1b9a',
  PUSH_PLUS_TOKEN: '88fa80d4d8f548f19268fcc3f2be24b3',
  // BARK_PUSH: 'https://sctapi.ftqq.com?act=SCT54825TAiLyjdHMSdZPQwf0hTmgaOMY',
  // 京喜财富岛控制是否运行脚本后通知
  CFD_NOTIFY_CONTROL:true,
  HELP_JOYPARK: false,
  lsjdh: 'jdAward2',
  JXGC_NOTIFY_LEVEL: 1,
  FS_LEVEL: 'car',
  JD_JOIN_ZLC: false,
  BEANCHANGE_ENABLEMONTH: true,
  BEANCHANGE_PERSENT: 30,
  exjxbeans: true,
  InviterPin: '26SeXThtMCG6aP+jxigijw==',
  zdtx: true,
  yqm: '26SeXThtMCG6aP+jxigijw==',
  CFD_LOOP_LIMIT: 1,
  CFD_LOOP_SLEEPTIME: 1000*30,
  dlbtz: true,
  joyTask: [],
  joyNotRun: [],
  ZJD_OPEN: 20,
  tytpacketId: '',
  WindfggToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NDQyMTg4NiwianRpIjoiMWExZGYxYTYtMWIxOS00MGI5LWE1YWItZjBlZjk1NTk4MzE5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjE4MTAxNTYzNDAiLCJuYmYiOjE2NTQ0MjE4ODYsImV4cCI6MTY4NTk1Nzg4Nn0.EUVHSeOmhO4VTvf1Y-Gy-IDT_aOtNZPAokgBsl5q2A8',
  JD_Lottery: '01062e0ceb7048189248fd51b4dfa26e',
  JD_JOYOPEN: '16773ce1f0714a0a8b80f7a81537c8fb',
  VENDER_ID: '1000411104',
  jd_drawCenter_activityId: '9606059f01494afcb6f695691a9b30ed',
  SEVENDAY_LIST: 'b78817d3730b48188380914df178c30c',
  DPLHTY: '385cf53a2efd467e8a2ac_220626',
  jd_wxCartKoi_activityId: '9e4076afb0d84716a4d2bb9b5843d532',
  M_WX_ADD_CART_URL: 'https://lzkj-isv.isvjcloud.com/wxCollectionActivity/activity2/b252840a3f9a426480f0e0d7df9b3942?activityId=b252840a3f9a426480f0e0d7df9b3942',
  WXGAME_ACT_ID: 'fcaa228f86ab4c40a0285b48f9b552ec',
  fcwbhelpnum:41,
  DYJSHAREID: '531e228aac999d77c881668f95f0a945&c57f09afac8ed25d1d00833e3741599b&3a4a6aad1938d08d440e120eeebecb13&9b687200f725586560b2368341a94c17&dcb9780334edb5377defdb9441d73f67',
  isCashOut: true,
  SYJ_HELP_PIN: 'qin%E7%90%B40823&jd_fMOTUvgIPZGX&121388038&%E5%89%81%E8%BE%A3%E6%A4%92%E5%A5%BD%E8%BE%A3&jd_7c203c2698664&1831711408_m',
  krjxcode: 'f618c7fc4488dfcc1ce8d6939ae05f74@a9e97c56f30220603f584c491af37258@ad95a417131afff60cfd54a16d713955',
  DO_TEN_WATER_AGAIN: 'true'
}

function setEnv() {
  Object.keys(envList).forEach((item) => {
    let value = envList[item]
    if(['jdPetNotNotifyList', 'jdFruitNotNotifyList'].includes(item)) {
      value = value.map((item) => decodeURIComponent(item))
    }
    process.env[item] = value
  })
}
module.exports = { setEnv, envList }
