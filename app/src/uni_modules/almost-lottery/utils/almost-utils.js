/**
 * 存储 localStorage 数据
 * @param {String} name - 缓存数据的标识
 * @param {any} content - 缓存的数据内容
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
	uni.setStorageSync(name, content)
}

/**
 * 获取 localStorage 数据
 * @param {String} name - 缓存数据的标识
 */
export const getStore = (name) => {
  if (!name) return
  return uni.getStorageSync(name)
}

/**
 * 清除 localStorage 数据
 * @param {String} name - 缓存数据的标识
 */
export const clearStore = (name) => {
  if (name) {
    uni.removeStorageSync(name)
  } else {
    console.log('清理本地全部缓存')
    uni.clearStorageSync()
  }
}

/**
 * 计算文本的长度
 * @param {String} text - 文本内容
 */
export const clacTextLen = (text) => {
  if (!text) return { byteLen: 0, realLen: 0 }
  text += ''
  let clacLen = 0
  for (let i = 0; i < text.length; i++) {
    if ((text.charCodeAt(i) < 0) || (text.charCodeAt(i) > 255)) {
      clacLen += 2
    } else {
      clacLen += 1
    }
  }
  // console.log(`当前文本 ${text} 的长度为 ${clacLen / 2}`)
  return {
    byteLen: clacLen,
    realLen: clacLen / 2
  }
}

/**
 * 下载文件，并返回临时路径
 * @return {String}  临时路径
 * @param {String} fileUrl - 网络地址
*/
export const downloadFile = (fileUrl) => {
  return new Promise((resolve) => {
    uni.downloadFile({
      url: fileUrl,
      success: (res) => {
        // #ifdef MP-ALIPAY
        if (res.errMsg === 'downloadFile:ok') {
          resolve({
            ok: true,
            data: res.errMsg,
            tempFilePath: res.tempFilePath
          })
        } else {
          resolve({
            ok: false,
            data: res.errMsg,
            msg: '图片下载失败'
          })
        }
        // #endif
				// #ifndef MP-ALIPAY
				if (res.statusCode === 200) {
				  resolve({
				    ok: true,
            data: res.errMsg,
				    tempFilePath: res.tempFilePath
				  })
				} else {
				  resolve({
				    ok: false,
            data: res.errMsg,
				    msg: '图片下载失败'
				  })
				}
				// #endif
      },
      fail: (err) => {
        resolve({
          ok: false,
          data: err.errMsg,
          msg: '图片下载失败'
        })
      }
    })
  })
}

/**
 * 清理应用已缓存的文件
*/
export const clearCacheFile = () => {
	// #ifndef H5
	uni.getSavedFileList({
		success: (res) => {
			let fileList = res.fileList
			if (fileList.length) {
				for (let i = 0; i < fileList.length; i++) {
					uni.removeSavedFile({
						filePath: fileList[i].filePath,
						complete: () => {
							console.log('清除缓存已完成')
						}
					})
				}
			}
		},
		fail: (err) => {
			console.log('getSavedFileList Fail')
		}
	})
	// #endif
	// #ifdef H5
	clearStore()
	// #endif
}



// 图像转换工具，可用于图像和base64的转换
// https://ext.dcloud.net.cn/plugin?id=123
const getLocalFilePath = (path) => {
  if (
    path.indexOf('_www') === 0 ||
    path.indexOf('_doc') === 0 ||
    path.indexOf('_documents') === 0 ||
    path.indexOf('_downloads') === 0
  ) return path

  if (path.indexOf('/storage/emulated/0/') === 0) return path
	
  if (path.indexOf('/storage/sdcard0/') === 0) return path

  if (path.indexOf('/var/mobile/') === 0) return path

  if (path.indexOf('file://') === 0) return path

  if (path.indexOf('/') === 0) {
		// ios 无法获取本地路径
    let localFilePath = plus.os.name === 'iOS' ? path : plus.io.convertLocalFileSystemURL(path)
    if (localFilePath !== path) {
      return localFilePath
    } else {
      path = path.substring(1)
    }
  }
	
  return '_www/' + path
}

export const pathToBase64 = (path) => {
	return new Promise((resolve, reject) => {
		if (typeof window === 'object' && 'document' in window) {
			if (typeof FileReader === 'function') {
				let xhr = new XMLHttpRequest()
				xhr.open('GET', path, true)
				xhr.responseType = 'blob'
				xhr.onload = function() {
					if (this.status === 200) {
						let fileReader = new FileReader()
						fileReader.onload = function(e) {
							resolve(e.target.result)
						}
						fileReader.onerror = reject
						fileReader.readAsDataURL(this.response)
					}
				}
				xhr.onerror = reject
				xhr.send()
				return
			}
			let canvas = document.createElement('canvas')
			let c2x = canvas.getContext('2d')
			let img = new Image
			img.onload = function() {
				canvas.width = img.width
				canvas.height = img.height
				c2x.drawImage(img, 0, 0)
				resolve(canvas.toDataURL())
				canvas.height = canvas.width = 0
			}
			img.onerror = reject
			img.src = path
			return
		}
		
		if (typeof plus === 'object') {
			let tempPath = getLocalFilePath(path)
			plus.io.resolveLocalFileSystemURL(tempPath, (entry) => {
				entry.file((file) => {
					let fileReader = new plus.io.FileReader()
					fileReader.onload = function(data) {
						resolve(data.target.result)
					}
					fileReader.onerror = function(error) {
						console.log(error)
						reject(error)
					}
					fileReader.readAsDataURL(file)
				}, (error) => {
					reject(error)
				})
			}, (error) => {
				reject(error)
			})
			return
		}
		
		if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
			wx.getFileSystemManager().readFile({
				filePath: path,
				encoding: 'base64',
				success: (res) => {
					resolve('data:image/png;base64,' + res.data)
				},
				fail: (error) => {
					reject(error)
				}
			})
			return
		}
		reject(new Error('not support'))
	})
}

export const base64ToPath = (base64) => {
	return new Promise((resolve, reject) => {
		if (typeof window === 'object' && 'document' in window) {
			base64 = base64.split(',')
			let type = base64[0].match(/:(.*?);/)[1]
			let str = atob(base64[1])
			let n = str.length
			let array = new Uint8Array(n)
			while (n--) {
				array[n] = str.charCodeAt(n)
			}
			return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
				type: type
			})))
		}
		let extName = base64.match(/data\:\S+\/(\S+);/)
		if (extName) {
			extName = extName[1]
		} else {
			reject(new Error('base64 error'))
		}
		let fileName = Date.now() + '.' + extName
		if (typeof plus === 'object') {
			let bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
			bitmap.loadBase64Data(base64, () => {
				let filePath = '_doc/uniapp_temp/' + fileName
				bitmap.save(filePath, {}, () => {
					bitmap.clear()
					resolve(filePath)
				}, (error) => {
					bitmap.clear()
					reject(error)
				})
			}, (error) => {
				bitmap.clear()
				reject(error)
			})
			return
		}
		if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
			let filePath = wx.env.USER_DATA_PATH + '/' + fileName
			wx.getFileSystemManager().writeFile({
				filePath: filePath,
				data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
				encoding: 'base64',
				success: () => {
					resolve(filePath)
				},
				fail: (error) => {
					reject(error)
				}
			})
			return
		}
		reject(new Error('not support'))
	})
}
