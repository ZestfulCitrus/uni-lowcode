const rSubsectionDef = {
  type: "r-subsection",
  compStyle: {},
  option: {
    activeColor: "#303133", //	激活时的颜色	String	#303133	-
    inactiveColor: "#606266", //	未激活时的颜色	String	#606266	-
    mode: "subsection", //	模式选择，见上方"模式选择"说明	String	button	subsection
    fontSize: 28, //字体大小，单位rpx	String | Number	28	-
    height: 70, //	组件高度，单位rpx	String | Number	70	-
    animation: true, //0是否开启动画效果，见上方说明	Boolean	true	false
    bold: true, //激活选项的字体是否加粗	Boolean	true	false
    bgColor: "#eeeeef", //组件背景颜色，mode为button时有效	String	#eeeeef	-
    buttonColor: "#ffffff", //	按钮背景颜色，mode为button时有效	String	#ffffff	-//
    current: 1,
    current_value: "待付款",
    list: [
      {
        name: "待发货",
      },
      {
        name: "待付款",
      },
      {
        name: "待评价",
      },
    ],
  },
}





const rCellDef = {
  type: 'r-cell',
  option: {
    title: '这是个测试标题',
    list: [
      {
        type: 'common_cell',
        title: '名称',
        value: '数值',
        arrow: true,
        arrow_direction: 'down',
        press: () => { },
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
        press: () => { },
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
        press: () => { },
      },
    ]
  },
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
  get_form_data: () => { },
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
        click: () => { },
      },
      {
        name: 'level',
        size: 46,
        label: '等级',
        badge: {
          visual: false,
          count: 22,
        },
        click: () => { },
      },
      {
        name: 'woman',
        size: 46,
        label: '女人',
        badge: {
          visual: false,
          count: 22,
        },
        click: () => { },
      },
      {
        name: 'man',
        size: 46,
        label: '男人',
        badge: {
          visual: false,
          count: 22,
        },
        click: () => { },
      },
      {
        name: 'photo',
        size: 46,
        label: '图片',
        badge: {
          visual: true,
          count: 21,
        },
        click: () => { },
      },
    ],
  },
}
const rMe = {
  type: 'r-me',
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
  option: {
    pic: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/12.png',
    username: 'r-me',
    user_id: '123456789',
    show: true,
    options: [
      {
        list: [
          {
            icon: 'rmb-circle',
            type: 'common_cell',
            title: '支付',
            value: '',
            arrow: true,
            arrow_direction: 'down',
            press: () => { },
          },
        ]
      },
      {
        list: [
          {
            icon: 'star',
            type: 'common_cell',
            title: '收藏',
            value: '',
            arrow: true,
            arrow_direction: 'down',
            press: () => { },
          },
          {
            icon: 'photo',
            type: 'common_cell',
            title: '相册',
            value: '',
            arrow: true,
            arrow_direction: 'down',
            press: () => { },
          },
          {
            icon: 'coupon',
            type: 'common_cell',
            title: '卡券',
            value: '',
            arrow: true,
            arrow_direction: 'down',
            press: () => { },
          },
          {
            icon: 'heart',
            type: 'common_cell',
            title: '关注',
            value: '',
            arrow: true,
            arrow_direction: 'down',
            press: () => { },
          },
        ]
      },
      {
        list: [
          {
            icon: 'setting',
            type: 'common_cell',
            title: '设置',
            value: '',
            arrow: true,
            arrow_direction: 'down',
            press: () => { },
          },
        ]
      },
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
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/gdfq@3x.png',
        task_info: '工单发起',
        press: () => { },
      },
      {
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/gdfq@3x.png',
        task_info: '工单发起',
        press: () => { },
      },
      {
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/dbgd@3x.png',
        task_info: '待办工单',
        press: () => { },
      },
      {
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/ybgd@3x.png',
        task_info: '已办工单',
        press: () => { },
      },
      {
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/fqjc@3x.png',
        task_info: '发起检查',
        press: () => { },
      },
      {
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/dbjh@3x.png',
        task_info: '待办计划',
        press: () => { },
      },
      {
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/jcls@3x.png',
        task_info: '检查历史',
        press: () => { },
      },
      {
        img_url: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/dbjh@3x.png',
        task_info: '待办计划',
        press: () => { },
      },
    ],
  },
}
const rImage = {
  type: 'r-image',
  option: {
    src: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/4.png',
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
      click: () => { },
    },
    {
      span: '6',
      style: 'font-size:15rpx;color:blue;text-align:center;margin-top:30px',
      text: '注册',
      click: () => { },
    },
  ],
}
const rCard = {
  type: 'r-card',
  option: {
    list: [
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
        thumb: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/11.png',
        thumbWidth: '',
        thumbCircle: true,
        padding: '',
        show_head: true,
        show_foot: true,
        box_shadow: '',
        press: () => { },
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
            imgUrl: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/1.jpg',
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
        thumb: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/12.png',
        thumbWidth: '',
        thumbCircle: true,
        padding: '',
        show_head: true,
        show_foot: true,
        box_shadow: '',
        press: () => { },
        body: [
          {
            text:
              '中国日报北京7月6日电（记者 张陨璧）有知情人士日前接受《中国日报》独家采访时透露，近日有500多名中国理工科研究生申请赴美签证时被美方拒签，拜登政府一方面试图顺应美高校要求大量吸收中国留学生、保证学费收入的呼声，另一方面说一套做一套，仍旧延续打压理工科中国研究生和学者的错误政策，严重损害中国留学人员合法权益。',
            imgUrl: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/2.jpg',
            press: () => {
              console.log({
                title: this.option[1].body[0].text + '被单击',
              })
            },
          },
          {
            text:
              '英国政府5日公布英格兰地区最后阶段“解封”计划详情，包括一旦实施“解封”，将取消在商店、地铁等公共场所须戴口',
            imgUrl: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/3.jpg',
            press: () => {
              console.log({
                title: this.option[1].body[1].text + '被单击',
              })
            },
          },
          {
            text:
              '7月5日下午，中国排协网站公布中国女排东京奥运12人参赛名单。朱婷担任球队队长，张常宁、李盈莹和刘晓彤为球队主攻',
            imgUrl: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/icons/4.jpg',
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
}

const rFormInput = {
  type: 'r-form-input',
  option: {
    value: '',
    label: '普通输入框',
    placeholder: '请输入内容',
    btn: {
      getCode: () => { 
        console.log("这是单击事件")
      },
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

const rFormSlider = {
  type: "r-form-slider",
  compStyle: {
    height: "90rpx",
    width: "100%",
    "font-size": "24rpx",
    "margin-top": "0px",
    "margin-right": "0px",
    "margin-bottom": "0px",
    "margin-left": "0px",
    "padding": '24rpx',
    "border-bottom": "1px solid #f4f4f5",
    "display": "flex",
  },
  option: {
    label: "滑动滑块",
    value: "10"
  }
}

const rFormInputRadio = {
  type: "r-form-radio",
  compStyle: {
    width: "100%",
    "font-size": "24rpx",
    "margin-top": "0px",
    "margin-right": "0px",
    "margin-bottom": "0px",
    "margin-left": "0px",
    "padding": '0rpx',
    "border-bottom": "1px solid #f4f4f5",
  },
  option: {
    label: "请选择水果",
    value: "",
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

const rChartLineDef = {
  type: "r-chart-line",
  compStyle: {
    width: "100%",
    "font-size": "24rpx",
    "margin-top": "0px",
    "margin-right": "0px",
    "margin-bottom": "0px",
    "margin-left": "0px",
    "padding": '0rpx',
    "border-bottom": "1px solid #f4f4f5",
  },
  option: {
    localdata: [
      { value: 35, text: "2016", group: "目标值" },
      { value: 18, text: "2016", group: "完成量" },
      { value: 36, text: "2017", group: "目标值" },
      { value: 27, text: "2017", group: "完成量" },
      { value: 31, text: "2018", group: "目标值" },
      { value: 21, text: "2018", group: "完成量" },
      { value: 33, text: "2019", group: "目标值" },
      { value: 24, text: "2019", group: "完成量" },
      { value: 13, text: "2020", group: "目标值" },
      { value: 6, text: "2020", group: "完成量" },
      { value: 34, text: "2021", group: "目标值" },
      { value: 28, text: "2021", group: "完成量" },
    ],
  },
}
const rChartPieDef = {
  type: 'r-chart-pie',
  compStyle: {
    width: "100%",
    "font-size": "24rpx",
    "margin-top": "0px",
    "margin-right": "0px",
    "margin-bottom": "0px",
    "margin-left": "0px",
    "padding": '24rpx',
    "border-bottom": "1px solid #f4f4f5",
  },
  option: {
    localdata: {
      categories: [],
      series: [{
        "name": "一班",
        "data": 50
      }, {
        "name": "二班",
        "data": 30
      }, {
        "name": "三班",
        "data": 20
      }, {
        "name": "四班",
        "data": 18
      }, {
        "name": "五班",
        "data": 8
      }],
    }
  }
}
const rFormCommonDef = {
  type: "r-form",
  compStyle: {},
  option: {
    form_ref: "rFormCommonDefref",
    button_title: "提交",
    formRef: "",
    list: [{
      type: "location",
      label: "位置选择",
      name: "my-location",
      value: "",
    },
    {
      type: "number-box",
      label: "数字",
      name: "my-number-box",
      value: 25,
    },
    {
      type: "slider",
      label: "滑块：",
      max: "100",
      min: "0",
      step: "20",
      name: "my-slider",
      value: 0,
    },
    {
      type: "common_input",
      label: "普通输入框",
      name: "number",
      value: "",
      placeholder: "请输入普通输入框",
      rules: [
        {
          required: true,
          message: "请输普通输入框",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
        {
          min: 5,
          message: "普通输入框不能少于5个字",
          trigger: "change,blur",
        },
      ],
    },
    {
      type: "time_picker",
      label: "时间选择器",
      name: "createTime",
      placeholder: "单击开始时间选择器",
      value: "",
      rules: [
        {
          required: true,
          message: "请输入时间",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
      ],
    },
    {
      type: "single_select",
      label: "单个选择框（母框）",
      name: "type",
      select_list: [
        {
          value: "0",
          label: "第一个对象",
        },
        {
          value: "1",
          label: "第二个对象",
        },
      ],
      placeholder: "单击选择设备类型",
      value: "",
      rules: [
        {
          required: true,
          message: "请选择设备类型",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
      ],
    },
    {
      type: "single_select_child",
      label: "单个选择框（子框）",
      name: "equipmentNum_name",
      parentName: "type",
      // context:子组件上下文
      // obj:母选择器值
      //单击时触发：callback :回调函数携带返回一个obj对象
      request_func: (context, obj, callback) => {
        let list = [];
        console.log(obj);
        setTimeout(() => {
          for (let i in [1, 2, 3, 4, 5]) {
            let obj2 = {
              label: obj + "的子对象",
              value: obj + "的子对象",
            };
            list.push(obj2);
          }
          callback(list);
        }, 500);
      },
      select_list: [],
      placeholder: "单击选择设备",
      value: "",
      rules: [
        {
          required: true,
          message: "请选择设备",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
      ],
    },
    {
      type: "single_button",
      label: "简单的按钮",
      name: "select_component",
      click_func: (context) => {
        context.$refs.Form_Toast.show({
          title: "这是单击事件",
        });
      },
      btn_name: "单击简单的按钮",
    },
    {
      type: "password_input",
      label: "密码",
      name: "password_input",
      value: "",
      placeholder: "请输入密码",
      rules: [
        {
          required: true,
          message: "请输入工单编号",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
        {
          min: 5,
          message: "密码不能少于5个字",
          trigger: "change,blur",
        },
      ],
      passwordIcon: true, //是否显示查看密码
    },
    {
      type: "common_input",
      label: "姓名",
      name: "login_name",
      value: "",
      placeholder: "请输入姓名",
      rules: [
        {
          required: true,
          message: "请输入姓名",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
        {
          min: 2,
          message: "姓名不能少于2个字",
          trigger: "change,blur",
        },
      ],
    },
    {
      type: "range_calendar",
      label: "范围性的日历",
      name: "rangeCalendar",
      value: "",
      placeholder: "请输入日历起始与截止时间",
      rules: [
        {
          required: true,
          message: "请输入日历起始与截止时间",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
      ],
    },
    {
      type: "single_calendar",
      label: "单选日历",
      name: "singleCalendar",
      value: "",
      placeholder: "请输入日历",
      rules: [
        {
          required: true,
          message: "请输入时间",
          // 可以单个或者同时写两个触发验证方式
          trigger: "blur,change",
        },
      ],
    },
    {
      type: "common_rate",
      label: "评分",
      name: "common_rate",
      count: 12,
      value: 6,
    },
    {
      type: "radio",
      label: "单选框",
      name: "my-radio",
      value: "apple",
      list: [
        {
          name: "apple",
          disabled: true,
        },
        {
          name: "banner",
          disabled: false,
        },
        {
          name: "orange",
          disabled: false,
        },
        {
          name: "watermelon",
          disabled: false,
        },
        {
          name: "peach",
          disabled: false,
        },
        {
          name: "admin",
          disabled: false,
        },
      ],
    },
    {
      type: "switch",
      label: "开关",
      name: "my-switch",
      value: true,
    }]
  }
}







const rLottery = {
  type: 'r-lottery',
  option: {
    // 以下是奖品配置数据
    // 奖品数据
    prizeList: [
      {
        prizeId: 1,
        name: "奖品名称1",
        stock: 2,
        weight: 6,
        prizeImage: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/logo.png',
      },
      {
        prizeId: 2,
        name: "奖品名称2",
        stock: 2,
        weight: 6,
        prizeImage: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/logo.png',
      },
      {
        prizeId: 3,
        name: "奖品名称2",
        stock: 2,
        weight: 6,
        prizeImage: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/logo.png',
      },
      {
        prizeId: 4,
        name: "奖品名称2",
        stock: 2,
        weight: 6,
        prizeImage: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/logo.png',
      },
      {
        prizeId: 5,
        name: "奖品名称2",
        stock: 2,
        weight: 6,
        prizeImage: 'https://rtvue.oss-cn-beijing.aliyuncs.com/static/logo.png',
      }
    ],
    // 奖品是否设有库存
    onStock: true,
    // 中奖下标
    prizeIndex: 2,
  },
  compStyle: {

  }
}



const rChartRadarDef = {
  type: 'r-chart-radar',
  option: {
    chartData: {
      "categories": [
        "维度1",
        "维度2",
        "维度3",
        "维度4",
        "维度5",
        "维度6"
      ],
      "series": [
        {
          "name": "成交量1",
          "data": [
            90,
            110,
            165,
            195,
            187,
            172
          ]
        },
        {
          "name": "成交量2",
          "data": [
            190,
            210,
            105,
            35,
            27,
            102
          ]
        }
      ]
    }
  },
  compStyle: {

  }
}






const rDdataListDef = {
  type: 'r-data-list',
  option: {
    dataStyle: {
      "margin-top": "5px",
      border: "1px solid #c0c4cc",
      padding: "8px",
    },
    list: [
      {
        image_url: "https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/dbgd.png",
        texts: [
          [{ value: "AAA" }, { value: "BBB" }],
          [{ value: "BBB" }, { value: "BBB" }],
        ],
        click: () => {
          console.log("aaaa")
        }
      },
      {
        image_url: "https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/dbgd.png",
        texts: [
          [
            { style: { "font-weight": "bold", "margin-bottom": "6px" }, value: "EEE" },
            { value: "fff" },
          ],
          [{ value: "ggg" }, { value: "ddd" }],
        ],
        click: () => {
          console.log("aaaa")
        }
      },
      {
        image_url: "https://rtvue.oss-cn-beijing.aliyuncs.com/static/equip/dbgd.png",
        texts: [
          [{ value: "AAA" }, { value: "BBB" }],
          [{ value: "BBB" }, { value: "BBB" }],
        ],
        click: () => {
          console.log("aaaa")
        }
      },
    ],
  },
  compStyle: {
    "margin-left": "20px",
    "background-color": "#fff",
    "margin-right": "20px",
  }
}


const rloginDef = {
  type: 'r-login',
  compStyle: {

  },
  option: {
    title: '欢迎回来！', //填写logo或者app名称，也可以用：欢迎回来，看您需求
    second: 60, //默认60秒
    showText: true, //判断短信是否发送
    phone: '', //手机号码
    yzm: '' //验证码
  }
}


const rParseDef = {
  type: 'r-parse',
  compStyle: {
    height: '',
    width: '100%',
    "background-color":"#fff",
    "margin-top": "0rpx",
		"font-size": "32rpx",
		
    "line-height": "1.8"
  },
  option: {
    content: `
    <h2>1. ZooKeeper</h2>

<p>ZooKeeper 是一个开放源码的分布式协调服务，它是集群的管理者，监视着集群
中各个节点的状态根据节点提交的反馈进行下一步合理操作。最终，将简单易用
的接口和性能高效、功能稳定的系统提供给用户。
分布式应用程序可以基于 Zookeeper 实现诸如数据发布/订阅、负载均衡、命名
服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。
Zookeeper 保证了如下分布式一致性特性：
1、顺序一致性
2、原子性
3、单一视图
4、可靠性
5、实时性（最终一致性）
</p><img src="https://cdn.uviewui.com/uview/swiper/2.jpg" /><p>
客户端的读请求可以被集群中的任意一台机器处理，如果读请求在节点上注册了
监听器，这个监听器也是由所连接的 zookeeper 机器来处理。对于写请求，这些
请求会同时发给其他 zookeeper 机器并且达成一致后，请求才会返回成功。因此，
随着 zookeeper 的集群机器增多，读请求的吞吐会提高但是写请求的吞吐会下降。
有序性是 zookeeper 中非常重要的一个特性，所有的更新都是全局有序的，每个
更新都有一个唯一的时间戳，这个时间戳称为 zxid（Zookeeper Transaction Id）。
而读请求只会相对于更新有序，也就是读请求的返回结果中会带有这个
zookeeper 最新的 zxid。</p>
				`,
    style: {
      p:"text-indent:2em;color:#606266", 
    },
    lazyload:true,
    selectable:true,
    showWithAnimation:true
  }
}






















































































































































































































































































































































































const deepClone = target => {
  // 定义一个变量
  let result;
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === 'object') {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = []; // 将result赋值为一个数组，并且执行遍历
      for (let i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]))
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值    
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (let i in target) {
        result[i] = deepClone(target[i]);
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target;
  }
  // 返回最终结果
  return result;
}

import JSONfn from "../util/jsonfn.min.js";

const getData = (params, context) => {
  let id = context.$u.guid()
  params.id = id
  return JSONfn.parse(JSONfn.stringify(params))
}
const cloneData = (params) => {

  return JSONfn.parse(JSONfn.stringify(params))
}

module.exports = {
  rloginDef,
  rCellDef,
  rSwiperDef,
  rParseDef,
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
  rFormCommonDef,
  rLottery,
  //图表
  rChartLineDef,
  rChartPieDef,
  rChartRadarDef,
  rSubsectionDef,
  rDdataListDef,
  cloneData,
  getData
}
