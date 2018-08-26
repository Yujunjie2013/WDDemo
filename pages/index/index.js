//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        id: "form",
        name: "表单",
        open: false
      },
      {
        id: "widget",
        name: "基础组件",
        open: false
      },
      {
        id: "feedback",
        name: "操作反馈",
        open: false
      },
      {
        id: "nav",
        name: "导航相关",
        open: false
      },
      {
        id: "search",
        name: "搜索",
        open: false
      }
    ]
  },
  kindToggle: function(e) {
    //获取当前点击条目的id
    var currentId = e.currentTarget.id;
    //获取data中list集合
    var list = this.data.list;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id == currentId) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list,
    });
  }
})