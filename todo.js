/* global angular, rangy */
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var app = this
    app.test = 'เรารักหมามิ้น I love you so much'
    app.color = 'background: #202328; color: white;'
    app.mode = 'light'

    app.changeMode = function (mode) {
      if (mode === 'dark') {
        app.color = 'background: #202328; color: white;'
        app.mode = 'light'
      } else if (mode === 'light') {
        app.color = 'background: #d6d6d6; color: black;'
        app.mode = 'dark'
      }
    }
  })
