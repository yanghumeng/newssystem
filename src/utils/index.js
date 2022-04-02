const formatTime=  function(date,format) {
  // 将输入的日期格式化成json格式 “2021-07-19T11:11:55.000Z”
  var date = new Date(date).toJSON();
  //console.log(ate);//可打印查看
  // 将输入的日期格式化成中国标准时间 “Mon Jul 19 2021 11:11:55 GMT+0800 (中国标准时间)”
  var date = new Date(date);
  //console.log(ate);//可打印查看
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  let second = date.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  let Time = format=="yyyy-MM-dd"?y + '-' + m + '-' + d:y + '-' + m + '-' + d+' '+h+':'+minute+ ':' + second;
  return Time;
}

export default {
  formatTime:formatTime
}