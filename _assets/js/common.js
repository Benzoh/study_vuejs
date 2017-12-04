// はじめに — Vue.js
// https://jp.vuejs.org/v2/guide/

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
// app4.todos.push({ text: 'New item' }) で追加できる

// イベントリスナを加え、Vue インスタンスのメソッドを呼び出す
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js'
  },
  methods: { // "s"
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// 「双方向バインディング」が簡単に行える v-model ディレクティブ
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// コンポーネントを定義
// 繰り返されるコンポーネントそれぞれに v-bind を使って todo を渡す
Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取る。
  // このプロパティは todo と呼ぶ。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else ...' },
    ]
  }
})