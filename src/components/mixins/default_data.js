const rCellDef = {
  type: 'r-cell',
  option: [
    {
      type: 'common_cell',
      title: '名称',
      value: '数值',
      arrow: true,
      arrow_direction: 'down',
      press: () => {},
    },
    {
      type: 'tags',
      title: '标签',
      list: [
        {
          text: 'plain',
          mode: 'plain',
        },
        {
          text: 'dark',
          mode: 'dark',
        },
        {
          text: 'light',
          mode: 'light',
        },
      ],
      press: () => {},
    },
    {
      type: 'radio',
      title: '单选（是，否）',
      value: '是',
      arrow: false,
      arrow_direction: 'up',
      conf: [
        {
          name: '是',
          disabled: false,
        },
        {
          name: '否',
          disabled: true,
        },
        {
          name: '不是',
          disabled: true,
        },
        {
          name: '第4个',
          disabled: true,
        },
      ],
      press: () => {},
    },
  ],
}

const rSwiperDef = {
  type: 'r-swiper',
  compStyle: {
    width: '100%',
  },
  option: {
    title: true, //	是否显示标题文字，需要配合list参数，见上方说明	Boolean	false	true
    mode: 'round', ////	指示器模式，见上方说明	String	round	rect / dot / number / none
    height: 250, ////	轮播图组件高度，单位rpx	String | Number	250	-
    indicatorPos: 'bottomCenter', ////	指示器的位置	String	bottomCenter	topLeft / topCenter / topRight / bottomLeft / bottomRight
    effect3d: true, //是否开启3D效果	Boolean	false	true
    autoplay: true, //是否自动播放	Boolean	true	false
    interval: '1000', //自动轮播时间间隔，单位ms	String | Number	2500	-
    circular: true, ////是否衔接播放，见上方说明	Boolean	true	false
    duration: 500, //切换一张轮播图所需的时间，单位ms	String | Number	500	-
    borderRadius: 8, //轮播图圆角值，单位rpx	String | Number	8	-//	自定义标题样式	Object	-	-
    effect3dPreviousMargin: 50, //	effect3d = true模式的情况下，激活项与前后项之间的距离，单位rpx	String | Number	50	-
    imgMode: 'aspectFill', //	图片的裁剪模式，详见image组件裁剪模式	String	aspectFill	-
    name: 'image', //	组件内部读取的list参数中的属性名，见上方说明	string	name	-
    bgColor: '#f3f4f6', //背景颜色	string	#f3f4f6	-
    current: 0, //1.6.2	//初始化时，默认显示第几项	String | Number	0	-,
    list: [
      {
        image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
        title: '身无彩凤双飞翼，心有灵犀一点通',
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
      },
    ],
  },
}

const rFormDef = {
  type: 'r-form',
  form: {},
  get_form_data: () => {},
  option: [
    {
      type: 'common_input',
      label: '姓名',
      name: 'login_name',
      value: '',
      placeholder: '请输入姓名',
      rules: [
        {
          required: true,
          message: '请输入姓名',
          // 可以单个或者同时写两个触发验证方式
          trigger: 'blur,change',
        },
        {
          min: 2,
          message: '姓名不能少于2个字',
          trigger: 'change,blur',
        },
      ],
    },
  ],
}

const rGridDef = {
  type: 'r-grid',
  compStyle: {},
  option: {
    col: 4,
    list: [
      {
        name: 'photo',
        size: 46,
        label: '图片',
        badge: {
          visual: true,
          count: 22,
        },
        click: () => {},
      },
      {
        name: 'level',
        size: 46,
        label: '等级',
        badge: {
          visual: false,
          count: 22,
        },
        click: () => {},
      },
      {
        name: 'woman',
        size: 46,
        label: '女人',
        badge: {
          visual: false,
          count: 22,
        },
        click: () => {},
      },
      {
        name: 'man',
        size: 46,
        label: '男人',
        badge: {
          visual: false,
          count: 22,
        },
        click: () => {},
      },
      {
        name: 'photo',
        size: 46,
        label: '图片',
        badge: {
          visual: true,
          count: 21,
        },
        click: () => {},
      },
    ],
  },
}
const rMe = {
  type: 'r-me',
  option: {
    pic: require('@/static/icons/12.png'),
    username: 'r-me',
    user_id: '123456789',
    show: true,
    options: [
      [
        {
          icon: 'rmb-circle',
          type: 'common_cell',
          title: '支付',
          value: '',
          arrow: true,
          arrow_direction: 'down',
          press: () => {},
        },
      ],
      [
        {
          icon: 'star',
          type: 'common_cell',
          title: '收藏',
          value: '',
          arrow: true,
          arrow_direction: 'down',
          press: () => {},
        },
        {
          icon: 'photo',
          type: 'common_cell',
          title: '相册',
          value: '',
          arrow: true,
          arrow_direction: 'down',
          press: () => {},
        },
        {
          icon: 'coupon',
          type: 'common_cell',
          title: '卡券',
          value: '',
          arrow: true,
          arrow_direction: 'down',
          press: () => {},
        },
        {
          icon: 'heart',
          type: 'common_cell',
          title: '关注',
          value: '',
          arrow: true,
          arrow_direction: 'down',
          press: () => {},
        },
      ],
      [
        {
          icon: 'setting',
          type: 'common_cell',
          title: '设置',
          value: '',
          arrow: true,
          arrow_direction: 'down',
          press: () => {},
        },
      ],
    ],
  },
}
const rMenu = {
  type: 'r-menu',
  compStyle: {
    width: '100%',
  },
  option: {
    card_list: [
      {
        img_url: require('@/static/equip/gdfq@3x.png'),
        task_info: '工单发起',
        press: () => {},
      },
      {
        img_url: require('@/static/equip/gdfq@3x.png'),
        task_info: '工单发起',
        press: () => {},
      },
      {
        img_url: require('@/static/equip/dbgd@3x.png'),
        task_info: '待办工单',
        press: () => {},
      },
      {
        img_url: require('@/static/equip/ybgd@3x.png'),
        task_info: '已办工单',
        press: () => {},
      },
      {
        img_url: require('@/static/equip/fqjc@3x.png'),
        task_info: '发起检查',
        press: () => {},
      },
      {
        img_url: require('@/static/equip/dbjh@3x.png'),
        task_info: '待办计划',
        press: () => {},
      },
      {
        img_url: require('@/static/equip/jcls@3x.png'),
        task_info: '检查历史',
        press: () => {},
      },
      {
        img_url: require('@/static/equip/dbjh@3x.png'),
        task_info: '待办计划',
        press: () => {},
      },
    ],
  },
}
const rImage = {
  type: 'r-image',
  option: {
    src: require('@/static/icons/4.png'),
    width: '100%',
    height: '100px',
    shape: 'square',
    borderRadius: 0,
    lazyLoad: true,
    loadingIcon: 'photo',
    errorIcon: 'error-circle',
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: '500ms',
    bgColor: '#f3f4f6',
  },
  compStyle: {
    width: '100%',
  },
}
const rRatser = {
  type: 'r-raster',
  option: [
    {
      span: '6',
      style: 'font-size:15rpx;text-align:center;margin-top:30px',
      text: '忘记密码?',
      click: () => {},
    },
    {
      span: '6',
      style: 'font-size:15rpx;color:blue;text-align:center;margin-top:30px',
      text: '注册',
      click: () => {},
    },
  ],
}
const rCard = {
  type: 'r-card',
  option: [
    {
      full: true,
      title: '今日新闻',
      titleColor: '',
      titleSize: 30,
      subTitle: '2021-07-06',
      subTitleColor: '',
      subTitleSize: 26,
      border: true,
      margin: '30rpx',
      borderRadius: '16',
      headBorderBottom: true,
      footBorderTop: true,
      thumb: require('@/static/icons/11.png'),
      thumbWidth: '',
      thumbCircle: true,
      padding: '',
      show_head: true,
      show_foot: true,
      box_shadow: '',
      press: () => {},
      body: [
        {
          text:
            'APK被终结，谷歌推出AAB格式，开发者、鸿蒙、和Windows11是否影响大',
          imgUrl:
            'https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg',
          press: () => {
            console.log({
              title: this.option[0].body[0].text + '被单击',
            })
          },
        },
        {
          text:
            '中国工程院院士钟南山在沪参加上海科技大学2021届毕业典礼时表示，疫苗到第三期做不下去了，原因是没病人了。这被网友称为最骄傲的凡尔赛发言',
          imgUrl: require('@/static/icons/1.jpg'),
          press: () => {
            console.log({
              title: this.option[0].body[1].text + '被单击',
            })
          },
        },
      ],
      foot: {
        label: '5评论',
        press: () => {
          console.log({ title: '评论框被单击' })
        },
      },
    },
    {
      full: true,
      title: '今日看点',
      titleColor: '',
      titleSize: 30,
      subTitle: '2021-07-06',
      subTitleColor: '',
      subTitleSize: 26,
      border: true,
      margin: '30rpx',
      borderRadius: '16',
      headBorderBottom: true,
      footBorderTop: true,
      thumb: require('@/static/icons/12.png'),
      thumbWidth: '',
      thumbCircle: true,
      padding: '',
      show_head: true,
      show_foot: true,
      box_shadow: '',
      press: () => {},
      body: [
        {
          text:
            '中国日报北京7月6日电（记者 张陨璧）有知情人士日前接受《中国日报》独家采访时透露，近日有500多名中国理工科研究生申请赴美签证时被美方拒签，拜登政府一方面试图顺应美高校要求大量吸收中国留学生、保证学费收入的呼声，另一方面说一套做一套，仍旧延续打压理工科中国研究生和学者的错误政策，严重损害中国留学人员合法权益。',
          imgUrl: require('@/static/icons/2.jpg'),
          press: () => {
            console.log({
              title: this.option[1].body[0].text + '被单击',
            })
          },
        },
        {
          text:
            '英国政府5日公布英格兰地区最后阶段“解封”计划详情，包括一旦实施“解封”，将取消在商店、地铁等公共场所须戴口',
          imgUrl: require('@/static/icons/3.jpg'),
          press: () => {
            console.log({
              title: this.option[1].body[1].text + '被单击',
            })
          },
        },
        {
          text:
            '7月5日下午，中国排协网站公布中国女排东京奥运12人参赛名单。朱婷担任球队队长，张常宁、李盈莹和刘晓彤为球队主攻',
          imgUrl: require('@/static/icons/4.jpg'),
          press: () => {
            console.log({
              title: this.option[1].body[2].text + '被单击',
            })
          },
        },
      ],
      foot: {
        label: '13评论',
        press: () => {
          console.log({ title: '评论框被单击' })
        },
      },
    },
  ],
}

const rFormInput = {
  type: 'r-form-input',
  option: {
    value: '',
    label: '普通输入框',
    placeholder: '请输入内容',
    btn: {
      getCode: () => {},
      codeText: '单击',
    },
    password: false,
  },
  compStyle: {
    height: 'auto',
    width: '100%',
    'font-size': '24rpx',
    'background-color': '#fff',
    'margin-top': '0',
    'margin-right': '0',
    'margin-down': '0',
    'margin-left': '0',
  },
}

const rFormPasswordInput = {
  type: 'r-form-input',
  option: {
    value: '',
    label: '密码输入框',
    placeholder: '请输入密码',
    password: true,
  },
  compStyle: {
    height: 'auto',
    width: '100%',
    'font-size': '24rpx',
    'background-color': '#fff',
    'margin-top': '0',
    'margin-right': '0',
    'margin-down': '0',
    'margin-left': '0',
  },
}

const rFormTextAreaInput = {
  type: 'r-form-input',
  option: {
    value: '',
    label: '多行输入',
    type: 'textarea',
  },
  compStyle: {
    height: 'auto',
    width: '100%',
    'font-size': '24rpx',
    'background-color': '#fff',
    'margin-top': '0',
    'margin-right': '0',
    'margin-down': '0',
    'margin-left': '0',
  },
}

const rFormInput2 = {
  type: 'r-form-input',
  option: {
    value: '张三',
    label: '姓名',
    placeholder: '请输入姓名',
  },
  compStyle: {
    height: 'auto',
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0',
    'margin-right': '0',
    'margin-down': '0',
    'margin-left': '0',
  },
}

const rFormInputTime = {
  type: 'r-form-input-time',
  compStyle: {
    height: 'auto',
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
    'margin-left': '0px',
  },
  option: {
    label: '时间选择',
    value: '',
    placeholder: '请选择时间',
    show: false,
    params: {
      year: true,
      month: true,
      day: true,
      hour: true,
      minute: true,
      second: true,
    },
  },
}

const rFormRate = {
  type: 'r-form-rate',
  compStyle: {
    height: '90rpx',
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
    'margin-left': '0px',
    padding: '24rpx',
    'border-bottom': '1px solid #f4f4f5',
  },
  option: {
    label: '评分选择',
    value: '',
    count: 5,
  },
}

const rFormSwitch = {
  type: 'r-form-switch',
  compStyle: {
    height: '90rpx',
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
    'margin-left': '0px',
    padding: '24rpx',
    'border-bottom': '1px solid #f4f4f5',
  },
  option: {
    label: '选择开关',
    value: true,
  },
}
const rButton = {
  type: 'r-button',
  compStyle: {
    height: '90rpx',
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
    'margin-left': '0px',
    padding: '24rpx',
    'border-bottom': '1px solid #f4f4f5',
  },
  option: {
    label: '确定',
  },
}

const rFormNumberBox = {
  type: 'r-form-numberbox',
  compStyle: {
    height: '90rpx',
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
    'margin-left': '0px',
    padding: '24rpx',
    'border-bottom': '1px solid #f4f4f5',
    display: 'flex',
  },
  option: {
    label: '确定',
    value: 6,
  },
}

const rFormInputMap = {
  type: 'r-form-input-map',
  compStyle: {
    height: '90rpx',
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
    'margin-left': '0px',
    padding: '24rpx',
    'border-bottom': '1px solid #f4f4f5',
  },
  option: {
    label: '请选择位置',
    placeholder: '请单击选择位置',
    value: '',
  },
}

const rFormCheckboxes = {
  type: 'r-form-checkboxes',
  compStyle: {
    width: '100%',
    'font-size': '24rpx',
    'margin-top': '0px',
    'margin-right': '0px',
    'margin-bottom': '0px',
    'margin-left': '0px',
    padding: '24rpx',
    'border-bottom': '1px solid #f4f4f5',
  },
  option: {
    label: '请选择水果',
    list: [
      {
        name: 'apple',
        checked: false,
        disabled: false,
      },
      {
        name: 'banner',
        checked: false,
        disabled: false,
      },
      {
        name: 'orange',
        checked: false,
        disabled: false,
      },
    ],
  },
}

const rFormSlider ={
  type:"r-form-slider",
  compStyle:{
    height: "90rpx",
    width: "100%",
    "font-size": "24rpx",
    "margin-top": "0px",
    "margin-right": "0px",
    "margin-bottom": "0px",
    "margin-left": "0px",
    "padding":'24rpx',
    "border-bottom":"1px solid #f4f4f5",
    "display":"flex",
  },
  option:{
    label:"滑动滑块",
    value:"10"
  }
}

const rFormInputRadio ={
  type:"r-form-radio",
  compStyle:{
    width: "100%",
    "font-size": "24rpx",
    "margin-top": "0px",
    "margin-right": "0px",
    "margin-bottom": "0px",
    "margin-left": "0px",
    "padding":'24rpx',
    "border-bottom":"1px solid #f4f4f5",
  },
  option:{
    label:"请选择水果",
    value:"",
    list: [
      {
        name: 'apple',
        disabled: false,
      },
      {
        name: 'banner',
        disabled: false,
      },
      {
        name: 'orange',
        disabled: false,
      },
    ],
  },
}

const getData = (params, context) => {
  let id = context.$u.guid()
  params.id = id
  return JSON.parse(JSON.stringify(params))
}

const cloneData = (params)=>{
  return JSON.parse(JSON.stringify(params))
}

module.exports = {
  rCellDef,
  rSwiperDef,
  rFormDef,
  rGridDef,
  rMe,
  rMenu,
  rImage,
  rRatser,
  rCard,
  rFormInput,
  rFormInput2,
  rFormInputTime,
  rFormRate,
  rFormSwitch,
  rButton,
  rFormPasswordInput,
  rFormNumberBox,
  rFormTextAreaInput,
  rFormInputMap,
  rFormInputRadio,
  rFormCheckboxes,
  rFormSlider,
  cloneData,
  getData
}
