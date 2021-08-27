<template>
  <view class="almost-lottery">
    <view class="almost-lottery__wrap" :style="{ width: outerWidth + higtCanvasMargin + 'px', height: outerWidth + higtCanvasMargin + 'px'}" v-if="lotteryImg">
      <image
        :src="lotteryBg"
        mode="widthFix"
        class="almost-lottery__bg"
        :style="{
          width: outerWidth + higtCanvasMargin + 'px',
          height: outerWidth + higtCanvasMargin + 'px'
        }"
      ></image>
      <image
        class="almost-lottery__canvas-img"
        mode="widthFix"
        :src="lotteryImg"
        :style="{
          width: canvasWidth + 'px',
          height: canvasWidth  + 'px',
          transform: `rotate(${canvasAngle + targetAngle}deg)`,
          transitionDuration: `${transitionDuration}s`
        }"
      ></image>
      <image
        :src="actionBg"
        mode="widthFix"
        class="almost-lottery__action almost-lottery__action-img"
        :style="{
          width: actionWidth + 'px',
          height: actionHeight + 'px',
          transform: `rotate(${actionAngle + targetActionAngle}deg)`,
          transitionDuration: `${transitionDuration}s`
        }"
        @click="handleActionStart"
      ></image>
    </view>
    
    <!-- 正在绘制转盘时的提示文本 -->
    <text class="almost-lottery__tip" v-else>{{ almostLotteryTip }}</text>
    
    <!-- 为了兼容 app 端 ctx.measureText 所需的标签 -->
    <text class="almost-lottery__measureText" :style="{ fontSize: higtFontSize + 'px' }">{{ measureText }}</text>
    
    <!-- #ifdef MP-ALIPAY -->
    <canvas 
      :class="className"
      :id="canvasId"
      :width="higtCanvasSize"
      :height="higtCanvasSize"
      :style="{
        width: higtCanvasSize + 'px',
        height: higtCanvasSize + 'px'
      }"
    />
    <!-- #endif -->
    <!-- #ifndef MP-ALIPAY -->
    <canvas
      :class="className"
      :canvas-id="canvasId"
      :width="higtCanvasSize"
      :height="higtCanvasSize"
      :style="{
        width: higtCanvasSize + 'px',
        height: higtCanvasSize + 'px'
      }"
    />
    <!-- #endif -->
  </view>
</template>

<script>
  const systemInfo = uni.getSystemInfoSync()
	import { getStore, setStore, clearStore, clacTextLen, downloadFile, pathToBase64 } from '@/uni_modules/almost-lottery/utils/almost-utils.js'
  export default {
    name: 'AlmostLottery',
    props: {
      // canvas 宽度
      canvasId: {
        type: String,
        default: 'almostLotteryCanvas'
      },
      // canvas 宽度
      canvasWidth: {
        type: Number,
        default: 280
      },
      // canvas 高度
      canvasHeight: {
        type: Number,
        default: 280
      },
      // 转盘外圈的宽度
      outerWidth: {
        type: Number,
        default: 320
      },
      // 转盘外圈的高度
      outerHeight: {
        type: Number,
        default: 320
      },
			// 内圈与外圈的间距
			canvasMargin: {
        type: Number,
        default: 5
      },
      // 抽奖按钮的宽度
      actionWidth: {
        type: Number,
        default: 120
      },
      // 抽奖按钮的高度
      actionHeight: {
        type: Number,
        default: 120
      },
      // 奖品列表
      prizeList: {
        type: Array,
        required: true,
        validator: (value) => {
          return value.length > 1
        }
      },
      // 中奖奖品在列表中的下标
      prizeIndex: {
        type: Number,
        required: true
      },
      // 奖品区块对应背景颜色
      colors: {
        type: Array,
        default: () => [
          '#FFFFFF',
          '#FFE9AA'
        ]
      },
      // 转盘外环背景图
      lotteryBg: {
        type: String,
        default: '/uni_modules/almost-lottery/static/almost-lottery/almost-lottery__bg2x.png'
      },
      // 抽奖按钮背景图
      actionBg: {
        type: String,
        default: '/uni_modules/almost-lottery/static/almost-lottery/almost-lottery__action2x.png'
      },
      // 是否绘制奖品名称
      prizeNameDrawed: {
				type: Boolean,
				default: true
      },
      // 是否开启奖品区块描边
      stroked: {
				type: Boolean,
				default: false
			},
      // 描边颜色
      strokeColor: {
        type: String,
        default: '#FFE9AA'
      },
      // 旋转的类型
      rotateType: {
        type: String,
        default: 'roulette'
      },
      // 旋转动画时间 单位s
      duration: {
        type: Number,
        default: 8
      },
      // 旋转的圈数
      ringCount: {
        type: Number,
        default: 8
      },
      // 指针位置
      pointerPosition: {
        type: String,
        default: 'edge',
        validator: (value) => {
          return value === 'edge' || value === 'middle'
        }
      },
      // 文字方向
      strDirection: {
        type: String,
        default: 'horizontal'
      },
      // 字体颜色
      strFontColor: {
        type: String,
        default: '#C30B29'
      },
      // 文字的大小
      strFontSize: {
        type: Number,
        default: 12
      },
      // 奖品文字距离边缘的距离
      strMarginOutside: {
        type: Number,
        default: 0
      },
      // 奖品图片距离奖品文字的距离
      imgMarginStr: {
        type: Number,
        default: 25
      },
      // 奖品文字多行情况下的行高
      strLineHeight: {
        type: Number,
        default: 1.2
      },
      // 奖品名称所对应的 key 值
      strKey: {
        type: String,
        default: 'name'
      },
      // 奖品文字总长度限制
      strMaxLen: {
        type: Number,
        default: 12
      },
      // 奖品文字多行情况下第一行文字长度
      strLineLen: {
        type: Number,
        default: 6
      },
      // 奖品图片的宽
      imgWidth: {
        type: Number,
        default: 30
      },
      // 奖品图片的高
      imgHeight: {
        type: Number,
        default: 30
      },
			// 转盘绘制成功的提示
			successMsg: {
				type: String,
				default: '奖品准备就绪，快来参与抽奖吧'
			},
			// 转盘绘制失败的提示
			failMsg: {
				type: String,
				default: '奖品仍在准备中，请稍后再来...'
			},
			// 是否开启画板的缓存
			canvasCached: {
				type: Boolean,
				default: false
			}
    },
    data() {
      return {
        // 画板className
        className: 'almost-lottery__canvas',
        // 画板导出的图片
        lotteryImg: '',
        // 旋转到奖品目标需要的角度
        targetAngle: 0,
        targetActionAngle: 0,
        // 旋转动画时间 单位 s
        transitionDuration: 0,
        // 是否正在旋转
        isRotate: false,
        // 当前停留在那个奖品的序号
        stayIndex: 0,
        // 当前中奖奖品的序号
        targetIndex: 0,
				// 是否存在可用的缓存转盘图
				isCacheImg: false,
				oldLotteryImg: '',
        // 转盘绘制时的提示
        almostLotteryTip: '奖品准备中...',
        // 解决 app 不支持 measureText 的问题
				// app 已在 2.9.3 的版本中提供了对 measureText 的支持，将在后续版本逐渐稳定后移除相关兼容代码
        measureText: ''
      }
    },
    computed: {
      // 高清尺寸
      higtCanvasSize() {
        return this.canvasWidth * systemInfo.pixelRatio
      },
      // 高清字体
      higtFontSize() {
        return this.strFontSize * systemInfo.pixelRatio
      },
      // 高清行高
      higtHeightMultiple() {
        return this.strFontSize * this.strLineHeight * systemInfo.pixelRatio
      },
      // 高清内外圈间距
      higtCanvasMargin() {
        return this.canvasMargin * systemInfo.pixelRatio
      },
      // 根据奖品列表计算 canvas 旋转角度
      canvasAngle() {
        let result = 0
        
        let prizeCount = this.prizeList.length
        let prizeClip = 360 / prizeCount
        let diffNum = 90 / prizeClip
        if (this.pointerPosition === 'edge' || this.rotateType === 'pointer') {
          result = -(prizeClip * diffNum)
        } else {
          result = -(prizeClip * diffNum + prizeClip / 2)
        }
        return result
      },
      actionAngle() {
        return 0
      },
      // 外圆的半径
      outsideRadius() {
        return this.higtCanvasSize / 2
      },
      // 内圆的半径
      insideRadius() {
        return 20 * systemInfo.pixelRatio
      },
      // 文字距离边缘的距离
      textRadius() {
        return this.strMarginOutside * systemInfo.pixelRatio || (this.higtFontSize / 2)
      },
      // 根据画板的宽度计算奖品文字与中心点的距离
      textDistance() {
        const textZeroY = Math.round(this.outsideRadius - (this.insideRadius / 2))
        return textZeroY - this.textRadius
      }
    },
    watch: {
      // 监听获奖序号的变动
      prizeIndex(newVal, oldVal) {
        if (newVal > -1) {
          this.targetIndex = newVal
          this.onRotateStart()
        } else {
          console.info('旋转结束，prizeIndex 已重置')
        }
      }
    },
    methods: {
      // 开始旋转
      onRotateStart() {
        if (this.isRotate) return
        this.isRotate = true
        // 奖品总数
        let prizeCount = this.prizeList.length
        let baseAngle = 360 / prizeCount
        let angles = 0
        
        if (this.rotateType === 'pointer') {
          if (this.targetActionAngle === 0) {
            // 第一次旋转
            angles = (this.targetIndex - this.stayIndex) * baseAngle + baseAngle / 2 - this.actionAngle
          } else {
            // 后续旋转
            // 后续继续旋转 就只需要计算停留的位置与目标位置的角度
            angles = (this.targetIndex - this.stayIndex) * baseAngle
          }
          
          // 更新目前序号
          this.stayIndex = this.targetIndex
          // 转 8 圈，圈数越多，转的越快
          this.targetActionAngle += angles + 360 * this.ringCount
          console.log('targetActionAngle', this.targetActionAngle)
        } else {
          if (this.targetAngle === 0) {
            // 第一次旋转
            // 因为第一个奖品是从0°开始的，即水平向右方向
            // 第一次旋转角度 = 270度 - (停留的序号-目标序号) * 每个奖品区间角度 - 每个奖品区间角度的一半 - canvas自身旋转的度数
            angles = (270 - (this.targetIndex - this.stayIndex) * baseAngle - baseAngle / 2) - this.canvasAngle
          } else {
            // 后续旋转
            // 后续继续旋转 就只需要计算停留的位置与目标位置的角度
            angles = -(this.targetIndex - this.stayIndex) * baseAngle
          }
          
          // 更新目前序号
          this.stayIndex = this.targetIndex
          // 转 8 圈，圈数越多，转的越快
          this.targetAngle += angles + 360 * this.ringCount
        }

        // 计算转盘结束的时间，预加一些延迟确保转盘停止后触发结束事件
        let endTime = this.transitionDuration * 1000 + 100
        let endTimer = setTimeout(() => {
          clearTimeout(endTimer)
          endTimer = null

          this.isRotate = false
          this.$emit('draw-end')
        }, endTime)

        let resetPrizeTimer = setTimeout(() => {
          clearTimeout(resetPrizeTimer)
          resetPrizeTimer = null

          // 每次抽奖结束后都要重置父级组件的 prizeIndex
          this.$emit('reset-index')
        }, endTime + 50)
      },
      // 点击 开始抽奖 按钮
      handleActionStart() {
        if (!this.lotteryImg) return
        if (this.isRotate) return
        this.$emit('draw-start')
      },
      // 渲染转盘
      async onCreateCanvas() {
        // 获取 canvas 画布
        const canvasId = this.canvasId
        const ctx = uni.createCanvasContext(canvasId, this)

        // canvas 的宽高
        let canvasW = this.higtCanvasSize
        let canvasH = this.higtCanvasSize

        // 根据奖品个数计算 角度
        let prizeCount = this.prizeList.length
        let baseAngle = Math.PI * 2 / prizeCount

        // 设置字体
        ctx.setFontSize(this.higtFontSize)

        // 注意，开始画的位置是从0°角的位置开始画的。也就是水平向右的方向。
        // 画具体内容
        for (let i = 0; i < prizeCount; i++) {
					let prizeItem = this.prizeList[i]
          // 当前角度
          let angle = i * baseAngle

          // 保存当前画布的状态
          ctx.save()
          
          // x => 圆弧对应的圆心横坐标 x
          // y => 圆弧对应的圆心横坐标 y
          // radius => 圆弧的半径大小
          // startAngle => 圆弧开始的角度，单位是弧度
          // endAngle => 圆弧结束的角度，单位是弧度
          // anticlockwise(可选) => 绘制方向，true 为逆时针，false 为顺时针
          
          ctx.beginPath()
          // 外圆
          ctx.arc(canvasW * 0.5, canvasH * 0.5, this.outsideRadius, angle, angle + baseAngle, false)
          // 内圆
          ctx.arc(canvasW * 0.5, canvasH * 0.5, this.insideRadius, angle + baseAngle, angle, true)
          
          // 每个奖品区块背景填充颜色
          if (this.colors.length === 2) {
            ctx.setFillStyle(this.colors[i % 2])
          } else {
            ctx.setFillStyle(this.colors[i])
          }
          // 填充颜色
          ctx.fill()
          
          // 开启描边
          if (this.stroked) {
            // 设置描边颜色
            ctx.setStrokeStyle(`${this.strokeColor}`)
            // 描边
            ctx.stroke()
          }

          // 开始绘制奖品内容
          // 重新映射画布上的 (0,0) 位置
          let translateX = canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * this.textDistance
          let translateY = canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * this.textDistance
          ctx.translate(translateX, translateY)

          // 绘制奖品名称
          ctx.setFillStyle(this.strFontColor)
          let rewardName = this.strLimit(prizeItem[this.strKey])
          
          // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
          ctx.rotate(angle + (baseAngle / 2) + (Math.PI / 2))

          // 设置文本位置并处理换行
          if (this.strDirection === 'horizontal') {
            // 是否需要换行
            if (rewardName && this.prizeNameDrawed) {
              let realLen = clacTextLen(rewardName).realLen
              let isLineBreak = realLen > this.strLineLen
              if (isLineBreak) {
                // 获得多行文本数组
                let firstText = ''
                let lastText = ''
                let firstCount = 0
                for (let j = 0; j < rewardName.length; j++) {
                  firstCount += clacTextLen(rewardName[j]).byteLen
                  if (firstCount <= (this.strLineLen * 2)) {
                    firstText += rewardName[j]
                  } else {
                    lastText += rewardName[j]
                  }
                }
                rewardName = firstText + ',' + lastText
                let rewardNames = rewardName.split(',')
                // 循环文本数组，计算每一行的文本宽度
                for (let j = 0; j < rewardNames.length; j++) {
                  if (ctx.measureText && ctx.measureText(rewardNames[j]).width > 0) {
                    // 文本的宽度信息
                    let tempStrSize = ctx.measureText(rewardNames[j])
                    let tempStrWidth = -(tempStrSize.width / 2).toFixed(2)
                    ctx.fillText(rewardNames[j], tempStrWidth, j * this.higtHeightMultiple)
                  } else {
                    this.measureText = rewardNames[j]
                    
                    // 等待页面重新渲染
                    await this.$nextTick()
                    
                    let textWidth = await this.getTextWidth()
                    let tempStrWidth = -(textWidth / 2).toFixed(2)
                    ctx.fillText(rewardNames[j], tempStrWidth, j * this.higtHeightMultiple)
                    // console.log(rewardNames[j], textWidth, i)
                  }
                }
              } else {
                if (ctx.measureText && ctx.measureText(rewardName).width > 0) {
                  // 文本的宽度信息
                  let tempStrSize = ctx.measureText(rewardName)
                  let tempStrWidth = -(tempStrSize.width / 2).toFixed(2)
                  ctx.fillText(rewardName, tempStrWidth, 0)
                } else {
                  this.measureText = rewardName
                  
                  // 等待页面重新渲染
                  await this.$nextTick()
                  
                  let textWidth = await this.getTextWidth()
                  let tempStrWidth = -(textWidth / 2).toFixed(2)
                  ctx.fillText(rewardName, tempStrWidth, 0)
                }
              }
            }
          } else {
            let rewardNames = rewardName.split('')
            for (let j = 0; j < rewardNames.length; j++) {
              if (ctx.measureText && ctx.measureText(rewardNames[j]).width > 0) {
                // 文本的宽度信息
                let tempStrSize = ctx.measureText(rewardNames[j])
                let tempStrWidth = -(tempStrSize.width / 2).toFixed(2)
                ctx.fillText(rewardNames[j], tempStrWidth, j * this.higtHeightMultiple)
              } else {
                this.measureText = rewardNames[j]
                
                // 等待页面重新渲染
                await this.$nextTick()
                
                let textWidth = await this.getTextWidth()
                let tempStrWidth = -(textWidth / 2).toFixed(2)
                ctx.fillText(rewardNames[j], tempStrWidth, j * this.higtHeightMultiple)
                // console.log(rewardNames[j], textWidth, i)
              }
            }
          }
          

          // 绘制奖品图片，文字竖向展示时，不支持图片展示
          if (prizeItem.prizeImage && this.strDirection !== 'vertical') {
						// App-Android平台 系统 webview 更新到 Chrome84+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 会报错
						// 统一将图片处理成 base64
						// https://ask.dcloud.net.cn/question/103303
						let reg = /^(https|http)/g
						// 处理远程图片
						if (reg.test(prizeItem.prizeImage)) {
              let platformTips = ''
              // #ifdef APP-PLUS
							platformTips = ''
              // #endif
              // #ifdef MP
							platformTips = '需要处理好下载域名的白名单问题，'
              // #endif
              // #ifdef H5
							platformTips = '需要处理好跨域问题，'
              // #endif
							console.warn(`###当前数据列表中的奖品图片为网络图片，${platformTips}开始尝试下载图片...###`)
							let res = await downloadFile(prizeItem.prizeImage)
							console.log('处理远程图片', res)
							if (res.ok) {
								let tempFilePath = res.tempFilePath
								// #ifndef MP
								prizeItem.prizeImage = await pathToBase64(tempFilePath)
								// #endif
								// #ifdef MP
								prizeItem.prizeImage = tempFilePath
								// #endif
							} else {
                this.handlePrizeImgSuc({
                  ok: false,
                  data: res.data,
                  msg: res.msg
                })
              }
						} else {
              console.log('处理非远程图片', prizeItem.prizeImage)
							// #ifndef MP
              if (prizeItem.prizeImage.indexOf(';base64,') === -1) {
                prizeItem.prizeImage = await pathToBase64(prizeItem.prizeImage)
              }
							// #endif
						}
            
            let prizeImageX = -(this.imgWidth * systemInfo.pixelRatio / 2)
            let prizeImageY = this.imgMarginStr * systemInfo.pixelRatio
            let prizeImageW = this.imgWidth * systemInfo.pixelRatio
            let prizeImageH = this.imgHeight * systemInfo.pixelRatio
            ctx.drawImage(prizeItem.prizeImage, prizeImageX, prizeImageY, prizeImageW, prizeImageH)
          }

          ctx.restore()
        }

        // 保存绘图并导出图片
        ctx.draw(true, () => {
          let drawTimer = setTimeout(() => {
            clearTimeout(drawTimer)
            drawTimer = null

            // #ifdef MP-ALIPAY
            ctx.toTempFilePath({
              destWidth: this.canvasWidth * systemInfo.pixelRatio,
              destHeight: this.canvasHeight * systemInfo.pixelRatio,
              success: (res) => {
                // console.log(res.apFilePath)
                this.handlePrizeImg({
									ok: true,
									data: res.apFilePath,
									msg: '画布导出生成图片成功'
								})
              },
							fail: (err) => {
                this.handlePrizeImg({
									ok: false,
									data: err,
									msg: '画布导出生成图片失败'
								})
							}
            })
            // #endif
            
            // #ifndef MP-ALIPAY
            uni.canvasToTempFilePath({
              canvasId: this.canvasId,
              success: (res) => {
                // 在 H5 平台下，tempFilePath 为 base64
                // console.log(res.tempFilePath)
                this.handlePrizeImg({
									ok: true,
									data: res.tempFilePath,
									msg: '画布导出生成图片成功'
								})
              },
							fail: (err) => {
                this.handlePrizeImg({
									ok: false,
									data: err,
									msg: '画布导出生成图片失败'
								})
							}
            }, this)
            // #endif
          }, 500)
        })
      },
      // 处理导出的图片
      handlePrizeImg(res) {
				if (res.ok) {
					let data = res.data
					
					if (!this.canvasCached) {
						this.lotteryImg = data
						this.handlePrizeImgSuc(res)
						return
					}
					
					// #ifndef H5
					if (this.isCacheImg) {
						uni.getSavedFileList({
							success: (sucRes) => {
								let fileList = sucRes.fileList
								// console.log('getSavedFileList Cached', fileList)
								
								let cached = false
                
                if (fileList.length) {
                  for (let i = 0; i < fileList.length; i++) {
                  	let item = fileList[i]
                  	if (item.filePath === data) {
                  		cached = true
                  		this.lotteryImg = data
                  		
                  		console.info('经查，本地缓存中存在的转盘图可用，本次将不再绘制转盘')
                  		this.handlePrizeImgSuc(res)
                  		break
                  	}
                  }
                }
								
								if (!cached) {
									console.info('经查，本地缓存中存在的转盘图不可用，需要重新初始化转盘绘制')
									this.initCanvasDraw()
								}
							},
							fail: (err) => {
								this.initCanvasDraw()
							}
						})
					} else {
						uni.saveFile({
							tempFilePath: data,
							success: (sucRes) => {
								let filePath = sucRes.savedFilePath
								// console.log('saveFile', filePath)
								setStore(`${this.canvasId}LotteryImg`, filePath)
								this.lotteryImg = filePath
								this.handlePrizeImgSuc({
									ok: true,
									data: filePath,
									msg: '画布导出生成图片成功'
								})
							},
							fail: (err) => {
								this.handlePrizeImg({
									ok: false,
									data: err,
									msg: '画布导出生成图片失败'
								})
							}
						})
					}
					// #endif
					// #ifdef H5
					setStore(`${this.canvasId}LotteryImg`, data)
					this.lotteryImg = data
					this.handlePrizeImgSuc(res)
          
          // console info
          let consoleText = this.isCacheImg ? '缓存' : '导出'
          console.info(`当前为 H5 端，使用${consoleText}中的 base64 图`)
					// #endif
				} else {
					console.error('处理导出的图片失败', res)
					uni.hideLoading()
					// #ifdef H5
					console.error('###当前为 H5 端，下载网络图片需要后端配置允许跨域###')
					// #endif
					// #ifdef MP
					console.error('###当前为小程序端，下载网络图片需要配置域名白名单###')
					// #endif
				}
      },
			// 处理图片完成
			handlePrizeImgSuc (res) {
				uni.hideLoading()
				this.$emit('finish', {
					ok: res.ok,
					data: res.data,
					msg: res.ok ? this.successMsg : this.failMsg
				})
        this.almostLotteryTip = res.ok ? this.successMsg : this.failMsg
			},
      // 兼容 app 端不支持 ctx.measureText
      // 已知问题：初始绘制时，低端安卓机 平均耗时 2s
      // hbx 2.8.12+ 已在 app 端支持
      getTextWidth() {
        console.warn('正在采用兼容方式获取文本的 size 信息，虽然没有任何问题，如果可以，请将此 systemInfo 及 hbx 版本号 反馈给作者', systemInfo)
        let query = uni.createSelectorQuery().in(this)
        let nodesRef = query.select('.almost-lottery__measureText')
        return new Promise((resolve, reject) => {
          nodesRef.fields({
            size: true,
          }, (res) => {
            resolve(res.width)
          }).exec()
        })
      },
      // 处理文字溢出
      strLimit(value) {
        let maxLength = this.strMaxLen
        if (!value || !maxLength) return value
        return clacTextLen(value).realLen > maxLength ? value.slice(0, maxLength - 1) + '..' : value
      },
			// 检查本地缓存中是否存在转盘图
			checkCacheImg () {
				console.log('检查本地缓存中是否存在转盘图')
				// 检查是否已有缓存的转盘图
				// 检查是否与本次奖品数据相同
				this.oldLotteryImg = getStore(`${this.canvasId}LotteryImg`)
				let oldPrizeList = getStore(`${this.canvasId}PrizeList`)
				let newPrizeList = JSON.stringify(this.prizeList)
				if (this.oldLotteryImg) {
					if (oldPrizeList === newPrizeList) {
						console.log(`经查，本地缓存中存在转盘图 => ${this.oldLotteryImg}`)
						this.isCacheImg = true
						
						console.log('需要继续判断这张缓存图是否可用')
						this.handlePrizeImg({
							ok: true,
							data: this.oldLotteryImg,
							msg: '画布导出生成图片成功'
						})
						return
					}
				}
				
				console.log('经查，本地缓存中不存在转盘图')
				this.initCanvasDraw()
			},
      // 初始化绘制
      initCanvasDraw () {
				console.log('开始初始化转盘绘制')
				this.isCacheImg = false
				this.lotteryImg = ''
				clearStore(`${this.canvasId}LotteryImg`)
        setStore(`${this.canvasId}PrizeList`, this.prizeList)
        this.onCreateCanvas()
      }
    },
    mounted() {
      this.$nextTick(() => {
        let stoTimer = setTimeout(() => {
          clearTimeout(stoTimer)
          stoTimer = null
					
					if (this.canvasCached) {
						this.checkCacheImg()
					} else {
						this.onCreateCanvas()
					}
          this.transitionDuration = this.duration
        }, 50)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .almost-lottery {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  
	.almost-lottery__wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
	}

  .almost-lottery__action,
  .almost-lottery__bg,
  .almost-lottery__canvas {
    position: absolute;
  }

  .almost-lottery__canvas {
    left: -9999px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .almost-lottery__canvas-img,
  .almost-lottery__action-bg {
		display: block;
    transition: transform cubic-bezier(.34, .12, .05, .95);
  }

  .almost-lottery__tip {
    color: #FFFFFF;
    font-size: 24rpx;
    text-align: center;
  }
  
  .almost-lottery__measureText {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    font-size: 12px;
    opacity: 0;
  }
</style>
