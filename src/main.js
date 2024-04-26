const vm = new Vue({
  el: "#root",
  data: {
    containerStatus: false,
    containerStatus2: false,
    containerStatus3: false,
    rotatePhoto: false,
    nextJD: false,
    containerStatus4: false,
    jList: [
      { type: "scrollTop", fir: "publicToTop", data: [1, 4, 7, 10, 13, 16, 19] },
      { type: "scrollBottom", fir: "", data: [2, 5, 8, 11, 14, 17, 20] },
      { type: "scrollTop", fir: "publicToTop", data: [3, 6, 9, 12, 15, 18, 21] }
    ],
    cont5: false,
    cont6: false,
    lastText: ""
  },
  created() {
    setTimeout(() => {
      this.containerStatus = true
    }, 500)
  },
  methods: {
    showCont2() {
      this.containerStatus2 = true
      setTimeout(() => {
        this.containerStatus3 = true
      }, 1000)
    },

    showCont3() {
      this.rotatePhoto = true
      setTimeout(() => {
        this.nextJD = true
      }, 2300)
    },

    openContainer4() {
      this.containerStatus4 = true
    },

    publicOpenNext(e) {
      const attr = e.target.getAttribute("data-attr")
      const that = this
      this[attr] = true

      if (attr === "cont5") {
        setTimeout(() => {
          that.containerStatus4 = false
        }, 1000)
      }
      if (attr === "cont6") {
        setTimeout(() => {
          that.cont5 = false
          that.lastStringConcat()
        }, 1000)
      }
    },

    lastStringConcat() {
      const string = "短吻鳄 & 信息技术学院软件222"
      let index = 0

      const timer = setInterval(() => {
        this.lastText += string[index]
        index++
        if (index === string.length) {
          clearInterval(timer)
        }
      }, 100)
    }
  }
})