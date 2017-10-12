//---------------------------------------------------------------------------- Exports
const AUTH = {
  //-------------------------------------------------------------------------- dateFormat
  /**
   * 验证用户是否登录，如果未登录，跳转到login页面
   */
  check () {
    if (!sessionStorage.getItem('username')) {
      window.location.href = '/front/login/login'
    }
  }
}