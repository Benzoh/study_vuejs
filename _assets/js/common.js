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

// Vue インスタンス — Vue.js
// https://jp.vuejs.org/v2/guide/instance.html

// → コンポーネントツリーの詳細はVueのデブツールを見るとよくわかる

// データとメソッド

var data = {a: 1}

var vm = new Vue({
  data: data
})

// これらは同じオブジェクトを参照します
vm.a === data.a
console.log(vm.a === data.a)

// プロパティへの代入は、元のデータにも反映
vm.a = 2
data.a
console.log(data.a)

// その逆も
data.a = 3
vm.a
console.log(vm.a)


// 新しいプロパティを追加する場合

vm.b = 'hi'
// b への変更はビューの更新を引き起こさない
// 後でプロパティが必要になることがわかっているならば、空でも存在しない場合でも初期値を設定する

// data: {
//   newTodoText: '',
//   visitCount: 0,
//   hideCompletedTodos: false,
//   todos: [],
//   error: null
// }

// data プロパティに加えて、Vue インスタンスは、いくつかの便利なプロパティとメソッドを持っています。これらはユーザ定義のプロパティと区別するために、頭に $ が付けられています。

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data
console.log(vm.$data === data);
vm.$el === document.getElementById('example')

//  $watch はインスタンスメソッド
vm.$watch('a', function(newValue, oldValue) {
  // このコールバックは `vm.a` の値が変わる時に呼ばれます
})


// インスタンスライフサイクルフック

new Vue({
  data: {
    a: 1
  },
  created: function() {
    console.log('a is:' + this.a)
  }
})


// 引数
var app10 = new Vue({
  el: '#app10',
  methods: {
    doSomething: function() {
      console.log('start [doSomething]')
    }
  }
})

// 省略記法
var app11 = new Vue({
  el: '#app11',
  data: {
    url: 'https://www.benzoh.com/',
  },
  methods: {
    doSomething: function() {
      console.log('start [doSomething]')
    }
  }
})

// 算出プロパティ
var vm = new Vue({
  el: '#example2',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出getter関数
    reversedMessage: function() {
      // thisはvmインスタンス
      return this.message.split('').reverse().join('')
    }
  }
})

// var vm = new Vue({
//   el: '#demo',
//   data: {
//     firstName: 'Foo',
//     lastName: 'Bar',
//     fullName: 'Foo Bar'
//   },
//   watch: {
//     firstName: function(val) {
//       this.fullName = val + ' ' + this.lastName
//     },
//     lastName: function(val) {
//       this.fullName = this.firstName + ' ' + val
//     }
//   }
// })

// ↑と比べて、それぞれの入力値をいちいち監視する命令が必要ない
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },

  // computed: {
  //   fullName: function() {
  //     return this.firstName + ' ' + this.lastName
  //   }
  // }

  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
  // consoleで
  // vm.fullName = 'John Doe' を呼ぶと、setter 関数が呼び出され、vm.firstName と vm.lastName が適切に更新されます。
})

// var class_example = new Vue({
//   el: '#class_example',
//   data: {
//     isActive: true,
//     hasError: false
//   }
// })
// consoleにて
// class_example.isActive = false
// false
// class_example.isActive = true
// true
// class_example.hasError = true
// true → "static active text-danger"になる

// 同じ結果
// オブジェクトを返す算出プロパティを束縛することもできる
var class_example = new Vue({
  el: '#class_example',
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  },
  computed: {
    classObject: function() {
      return {
        active: this.active && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

