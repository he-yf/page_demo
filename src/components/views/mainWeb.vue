<template>
  <div class="main_web_page auto-width">
    <div class="first-part" id="start">
      <div class="title-bar">
        <div class="userinfo flex-center">
          <img :src="require('@/assets/images/mainWeb/user-photo.svg')" class="user-photo" />
          <span class="text">龚圆</span>
          <span class="text">（UX）</span>
        </div>
        <div class="show-bar flex-center">
          <div v-for="(item, index) in barList" :key="index" class="bar-item" @click="switchBar(index)">
            <div class="bar-text" :class="{
              'bar-text-active': barActive === index
            }">{{item}}</div>
            <div class="active-bar" v-if="barActive === index"></div>
          </div>
        </div>
      </div>
      <div class="content" v-if="barActive === 0">
        <div class="content-main" id="content-main">
          <mainBackground class="first-background" @hoverStart="hoverStart($event)" @hoverEnd="hoverEnd($event)"></mainBackground>
          <div v-for="(item, index) in textList" :key="index" class="bubble-box" :style="{opacity: activeList[index] ? 1 : 0}">
            <img :src="require(`@/assets/images/mainWeb/bubble${item}.svg`)" class="bubble-img" />
          </div>
          <div v-for="(item, index) in catalogue"
              :key="index + 'catalogue'"
              class="catalogue"
              @click="goCatalogue(index)">
            <img :src="require(`@/assets/images/mainWeb/part${item}.svg`)" class="catalogue-img" />
          </div>
        </div>
        <div class="content-navigation">
            <img :src="require(`@/assets/images/mainWeb/content-navigation.png`)" class="navigation-img" />
            <div class="navigation-list" v-if="showNavigation">
              <div v-for="(item, index) in navigation"
                   :key="index + 'nav'"
                   class="navigation-item"
                   :class="{
                     'navigation-one': item.type === 1,
                     'navigation-two': item.type === 2,
                     'navigation-active': item.active
                     }"
                     @click="switchContent(index)">
                     {{ item.value }}
              </div>
              <div class="back-area">
                <img @click="switchContent('back')" :src="require(`@/assets/images/mainWeb/back.svg`)" class="back-img" />
              </div>
            </div>
        </div>
        <div class="content-details">
          <img v-for="(item, index) in 7"
            :key="index + 'details'"
            :id="`content${item}`"
            :src="require(`@/assets/images/mainWeb/content${item}.png`)"
            class="details-img" />
          <div style="width: 65%;text-align: left;display: inline-block;">
            <img :id="`content8`" :src="require(`@/assets/images/mainWeb/myPlay1.png`)" class="myPlay-img" />
            <div class="video-area">
              <video id="video1" class="video-js">
                <source :src="require(`@/assets/video/menu.mp4`)"
                  type="video/mp4">
              </video>
            </div>
          </div>
          <div style="width: 65%;text-align: left;display: inline-block;">
            <img :id="`content8`" :src="require(`@/assets/images/mainWeb/myPlay2.png`)" class="myPlay-img" />
            <div class="video-area">
              <video id="video2" class="video-js">
                <source :src="require(`@/assets/video/plan.mp4`)"
                  type="video/mp4">
              </video>
            </div>
          </div>
          <div style="width: 65%;text-align: left;display: inline-block;">
            <img :id="`content8`" :src="require(`@/assets/images/mainWeb/myPlay3.png`)" class="myPlay-img" />
            <div class="video-area">
              <video id="video3" class="video-js">
                <source :src="require(`@/assets/video/watch.mp4`)"
                  type="video/mp4">
              </video>
            </div>
          </div>
          <img :id="`content11`"
            :src="require(`@/assets/images/mainWeb/content11.png`)"
            class="details-img" />
          <img :id="`content12`"
            :src="require(`@/assets/images/mainWeb/content12.png`)"
            class="details-img" />
        </div>
        <div style="width: 65%;text-align: left;display: inline-block; margin-bottom: 7.1vh;">
          <img :id="`content13`" :src="require(`@/assets/images/mainWeb/myWorks.png`)" class="myWorks-img" />
        </div>
        <div class="works-item"
          v-for="(item, index) in 5"
          :key="index + 'works'">
          <img :src="require(`@/assets/images/mainWeb/works${item}.png`)" class="works-item-img" />
        </div>
        <div class="end-box">
          <img :id="`content14`" :src="require(`@/assets/images/mainWeb/end.svg`)" class="end-img" />
          <span v-for="(item, index) in userInfo" :key="index" class="info-item">{{item}}</span>
        </div>
      </div>
      <iframe v-else :src="`${$staticPath}/gy_resume.html`" style="width:100%;min-height: calc(100vh - 63px);"></iframe>
    </div>
  </div>
</template>

<script>
import mainBackground from './imgComponents/mainBackground'
export default {
  name: 'mainWeb',
  components: { mainBackground },
  data () {
    return {
      barList: ['作品展示', '我的简历'],
      barActive: 0,
      textList: [1, 2, 3, 2],
      activeList: [false, false, false, false],
      catalogue: [1, 2, 3],
      showNavigation: false,
      userInfo: ['微信：gy262626', '邮箱：gy262626@163.com', '电话：18539285250'],
      navigation: [
        {
          type: 1,
          value: '一，用户与需求分析',
          active: false,
          id: 1 // 跳转的内容id标志
        },
        {
          type: 2,
          value: '1.1用户调研',
          active: false,
          id: 1
        },
        {
          type: 2,
          value: '1.2结果和总结',
          active: false,
          id: 2
        },
        {
          type: 2,
          value: '1.3用户画像',
          active: false,
          id: 3
        },
        {
          type: 2,
          value: '1.4用户体验地图',
          active: false,
          id: 4
        },
        {
          type: 2,
          value: '1.5需求点',
          active: false,
          id: 5
        },
        {
          type: 1,
          value: '二，功能与交互动效',
          active: false,
          id: 6
        },
        {
          type: 2,
          value: '2.1功能设计',
          active: false,
          id: 6
        },
        {
          type: 2,
          value: '2.2原型交互设计',
          active: false,
          id: 7
        },
        {
          type: 2,
          value: '2.3菜谱动效演示',
          active: false,
          id: 8
        },
        {
          type: 2,
          value: '2.4计划动效演示',
          active: false,
          id: 9
        },
        {
          type: 2,
          value: '2.5穿戴动效演示',
          active: false,
          id: 10
        },
        {
          type: 1,
          value: '三，视觉与组件设计',
          active: false,
          id: 11
        },
        {
          type: 2,
          value: '3.1建立视觉规范',
          active: false,
          id: 11
        },
        {
          type: 2,
          value: '3.2复用组件库',
          active: false,
          id: 12
        },
        {
          type: 1,
          value: '原创视觉作品',
          active: false,
          id: 13
        },
        {
          type: 1,
          value: '尾页：联系方式',
          active: false,
          id: 14
        }
      ]
    }
  },
  mounted () {
    for (let i = 0; i < 3; i++) {
      this.initVideo(i + 1)
    }
    window.addEventListener('scroll', this.btn_pos)
  },
  destroyed () {
    // 离开这个界面之后，删除，不然会有问题
    window.removeEventListener('scroll', this.btn_pos)
  },
  methods: {
    btn_pos: function () {
      // 滚动条的高度
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // 侧边栏可显示范围
      var contentTop = document.getElementById('content-main').offsetTop
      if (scrollTop > contentTop + 420) {
        this.showNavigation = true
      } else {
        this.showNavigation = false
      }
    },
    initVideo (index) {
      // 初始化视频方法
      this.$video(`video${index}`, {
        // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        // 自动播放属性,muted:静音播放
        autoplay: false,
        // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: 'auto',
        // 设置视频播放器的显示宽度（以像素为单位）
        width: '248px',
        // 设置视频播放器的显示高度（以像素为单位）
        height: 'auto'
      })
    },
    // 右上角信息栏点击切换
    switchBar (index) {
      this.barActive = index
    },
    // 鼠标移入控制气泡
    hoverStart (index) {
      this.$set(this.activeList, index, true)
    },
    // 鼠标移出控制气泡
    hoverEnd (index) {
      this.$set(this.activeList, index, false)
    },
    goCatalogue (index) {
      let id = 0
      switch (index) {
        case 0:
          id = 1
          break
        case 1:
          id = 6
          break
        case 2:
          id = 10
          break
      }
      document.getElementById(`content${id}`).scrollIntoView()
    },
    switchContent (index) {
      this.navigation.map((item) => {
        item.active = false
      })
      if (index === 'back') {
        document.getElementById('start').scrollIntoView()
        return
      }
      this.navigation[index].active = true
      document.getElementById(`content${this.navigation[index].id}`).scrollIntoView()
    }
  }
}
</script>

<style scoped lang="less">
.main_web_page {
  .first-part {
    .title-bar {
      width: 100%;
      height: 54px;
      background: #2D3968;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .userinfo {
        margin-left: 16%;
        .user-photo {
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
        .text {
          color: #FFFFFF;
          font-size: 16px;
        }
        .text:nth-child(2) {
          margin-left: 5px;
        }
        .text:nth-child(3) {
          margin-left: 2px;
        }
      }
      .show-bar {
        margin-right: 17%;
        .bar-item {
          display: inline-block;
          width: 80px;
          height: 100%;
          .bar-text {
            font-size: 16px;
            color: #818DBD;
          }
          .bar-text-active {
            font-size: 20px;
            color: #FFFFFF
          }
          .active-bar {
            margin-top: 6px;
            display: inline-block;
            width: 37px;
            height: 4px;
            background: #FFFFFF;
            border-radius: 18px;
          }
        }
        .bar-item:not(:last-child) {
          margin-right: 55px;
        }
        .bar-item:hover {
          cursor: pointer;
        }
      }
    }
    .content {
      width: 100%;
      position: relative;
      display: inline-block;
      .content-main {
        position: relative;
        .first-background {
          width: 100%;
          height: auto;
        }
        .bubble-box {
          position: absolute;
          display: inline-block;
          width: 7.3%;
          transform: translate(0, 50%);
          border-radius: 44px;
          .bubble-img {
            width: 100%;
            border-radius: 44px;
          }
        }
        .bubble-box:nth-child(2) {
          left: 13.7%;
          top: 57.5%;
        }
        .bubble-box:nth-child(3) {
          left: 44.8%;
          top: 16.6%;
        }
        .bubble-box:nth-child(4) {
          left: 58.4%;
          top: 16.6%;
        }
        .bubble-box:nth-child(5) {
          left: 75.6%;
          top: 11.8%;
        }
        .catalogue {
          position: absolute;
          width: 13.6%;
          display: inline-block;
          cursor: pointer;
          .catalogue-img {
            width: 100%;
          }
        }
        .catalogue:nth-child(6) {
          top: 34.8%;
          right: 18.6%;
        }
        .catalogue:nth-child(7) {
          top: 46%;
          right: 18.6%;
        }
        .catalogue:nth-child(8) {
          top: 56.2%;
          right: 18.6%;
        }
      }
      .content-navigation {
        width: 100%;
        text-align: center;
        .navigation-img {
          width: 68.2%;
          margin: 6.7vh 0;
        }
        .navigation-list {
          display: inline-block;
          position: fixed;
          top: 6vh;
          right: 5vw;
          text-align: left;
          width: 6.8vw;
          min-width: 125px;
          z-index: 99;
          .navigation-item {
            height: 3.9vh;
            min-height: 25px;
            background: #FFFFFF;
            box-shadow: 0px 1px 8px rgba(46, 45, 44, 0.15);
            border-radius: 4px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 9.1%;
            cursor: pointer;
          }
          .navigation-item:not(:last-child) {
            margin-bottom: 0.7vh;
          }
          .navigation-one {
            width: 100%;
            font-weight: bold;
          }
          .navigation-two {
            width: 82%;
          }
          .navigation-active {
            color: #438CFA;
          }
          .back-area {
            margin-top: 4.2vh;
            width: 100%;
            text-align: center;
            position: relative;
            .back-img {
              width: 45%;
            }
          }
        }
      }
      .content-details {
        width: 100%;
        text-align: center;
        .details-img {
          width: 67.2%;
          height: auto;
          margin-bottom: 66px;
        }
        .details-img:nth-child(1),
        .details-img:nth-child(2),
        .details-img:nth-child(6),
        .details-img:nth-child(11),
        .details-img:nth-child(12) {
          width: 100%;
        }
        .details-img:nth-child(11),
        .details-img:nth-child(1) {
          margin-bottom: 0;
        }
        .myPlay-img {
          height: 4.2vh;
          width: auto;
          margin-bottom: 4.5vh;
        }
        .video-area {
          width: 100%;
          height: 593px;
          text-align: center;
          .video-js {
            margin-top: 20px;
            background: transparent;
            display: inline-block;
          }
        }
      }
      .myWorks-img {
        height: 4.8vh;
        width: auto;
      }
      .works-item {
        width: 100%;
        margin-bottom: 10vh;
        .works-item-img {
          width: 50%;
        }
      }
      .works-item:nth-last-child(3) {
        .works-item-img {
          width: 55%;
        }
      }
      .end-box {
        width: 100%;
        display: inline-block;
        position: relative;
        .end-img {
          width: 100%;
        }
        .info-item {
          position: absolute;
          bottom: 16%;
          color: #FFFFFF;
          font-size: 1.6rem;
          transform: translate(-50%, 0);
          white-space: nowrap;
        }
        .info-item:nth-child(2) {
          left: 20%;
        }
        .info-item:nth-child(3) {
          left: 50%;
        }
        .info-item:nth-child(4) {
          left: 80%;
        }
      }
    }
  }
}
</style>

<style>
.video-js .vjs-big-play-button {
  height: 593px;
  width: 65vw;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-30%, -20px);
}
.vjs-modal-dialog
.vjs-modal-dialog-content,
.video-js .vjs-modal-dialog, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  display: inline-block;
  width: unset;
  height: unset;
}
</style>
