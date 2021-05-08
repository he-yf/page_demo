<template>
  <div class="main_web_page auto-width">
    <div class="first-part">
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
        <img :src="require('@/assets/images/mainWeb/first-background.svg')" class="first-background" />
      </div>
      <iframe v-else :src="$isDev ? '/static/gy_resume.html' : './static/gy_resume.html'" style="height:100%;width:100%;min-height: 960px;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainWeb',
  data () {
    return {
      barList: ['作品展示', '我的简历'],
      barActive: 0
    }
  },
  mounted () {},
  methods: {
    // 右上角信息栏点击切换
    switchBar (index) {
      this.barActive = index
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
      .first-background {
        width: 100%;
      }
    }
  }
}
</style>
