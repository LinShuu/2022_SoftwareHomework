Page({
  data: {
    //课程名
    Course:"",
    //任务名
    taskName:"",
    //任务备注
    taskRemark:"",
    //日期
    date: '',
    //日历弹出层，默认隐藏
    show: false,
    //是否设置提醒
    isChecked_warn: true,
    //是否同步
    isChecked_syn:true,
    //任务类型，默认为课程作业
    radio: '1',
  },
  // 获取课程名称
  getCourse(e){
    this.setData({
       Course:e.detail.value
    })
  },
  //获取任务名称
  getTaskname(e){
    this.setData({
      taskName:e.detail.value
   })
  },
  //获取任务备注
  getTaskremark(e){
    this.setData({
      taskRemark:e.detail.value
   })
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },
  onChange1(event) {
    this.setData({
      radio: event.detail,
    });
  },
  submit(){
    if(this.data.Course=="" || this.data.taskName=="" || this.data.date==""){
      wx.showToast({
        icon:'error',
        title: '请输入完整数据'
      })
    }

    //需要同步的情况
    if(this.data.isChecked_syn){
       wx.request({
         url: '接口地址',
         header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
         data: {
          Course: this.data.Course,
          taskName: this.data.taskName,
          taskRemark: this.data.taskRemark,
          date:this.data.date,
          type:this.data.radio //1为课程作业，2为实验，3为实践作业
       },
       method:'POST',
       success:res =>{
         if(res.data=='sucess'){
           wx.showToast({
             title: '新增成功',
           })
         }else{
           wx.showToast({
             title: '新增失败',
             icon:'error'
           })
         }
       }
       })
    }else{//不需要同步的情况
         
    }
  }
});


