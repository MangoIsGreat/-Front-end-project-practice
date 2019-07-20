var sum = function(a , b) {
    return parseInt(a) + parseInt(b);
}
// 导出模块成员
// exports.sum = sum;

// 导出成员的另一种方式
module.exports = sum;