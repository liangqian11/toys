//---------------------------------------------------------------------------- Exports
const TIME = {
  //-------------------------------------------------------------------------- dateFormat
  /**
   * 根据时间戳返回日期格式
   */
  dateFormat (format, time) {
    // // 如果time未传入，则直接赋值为当前时间
    // if (_.isNil(time)) {
    //   time = this.time13()
    // }
    // 如果传入的是10位时间戳，则变为13位时间戳
    time = time || new Date().getTime()
    if (time.toString().length <= 10) {
      time *= 1000
    }
    // 初始化时间对象d，并使用d转化一个date object
    let d = new Date(time)
    let date = {
      'M+': d.getMonth() + 1,
      'd+': d.getDate(),
      'h+': d.getHours(),
      'm+': d.getMinutes(),
      's+': d.getSeconds(),
      'q+': Math.floor((d.getMonth() + 3) / 3),
      'S+': d.getMilliseconds()
    }

    // 正则替换文本
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
      }
    }
    // 返回
    return format
  }
}