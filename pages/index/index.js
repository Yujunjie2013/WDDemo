//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        id: "form",
        name: "表单",
        open: false,
        pages: ["button", "list", "input", "slider", "uploader"]
      },
      {
        id: "widget",
        name: "基础组件",
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
      },
      {
        id: "feedback",
        name: "操作反馈",
        open: false,
        pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
      },
      {
        id: "nav",
        name: "导航相关",
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: "search",
        name: "搜索",
        open: false,
        pages: ['searchbar']
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