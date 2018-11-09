module.exports = {
  // 成功返回结果
  suc(result) {
    return {
      code: 200,
      message: result
    }
  },
//   失败返回结果
  err(err) {
    return {
      code: 500,
      message: err
    }
  }
}
