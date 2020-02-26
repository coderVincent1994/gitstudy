/**
 * 获取系统滚动条向左滚动出去的距离
 *
 */
function getScrollLeft() {
  //都不兼容就返回0，当然这种情况几乎没有
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

/**
 * 获取系统滚动条向上滚动出去的距离
 * @returns {number}
 */
function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
