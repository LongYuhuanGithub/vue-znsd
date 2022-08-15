<template>
  <div class="school-container">
    <ul>
      <li v-for="(item, index) in schoolList" :key="index">
        <span><img :src="require(`../assets/uploads/${item.schoolImg}`)" alt=""></span>
        <div>{{item.schoolDesc}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schoolList: [
        {
          schoolDesc: '智能时代学校',
          schoolImg: 'school1.jpg'
        },
        {
          schoolDesc: '教学楼',
          schoolImg: 'school2.jpg'
        },
        {
          schoolDesc: 'U型楼',
          schoolImg: 'school3.jpg'
        },
        {
          schoolDesc: '机器人实训',
          schoolImg: 'school4.jpg'
        },
        {
          schoolDesc: '课堂现场',
          schoolImg: 'school5.jpg'
        },
        {
          schoolDesc: '学校饭堂',
          schoolImg: 'school6.jpg'
        },
        {
          schoolDesc: '宿舍环境',
          schoolImg: 'school7.jpg'
        },
        {
          schoolDesc: '校园活动',
          schoolImg: 'school8.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.school-container {
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;

    li {
      padding: 5px;

      span {
        display: block;
        overflow: hidden;

        img {
          width: 290px;
          transition: all 0.5s;
        }
      }

      div {
        height: 44px;
        background-color: #444444;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 44px;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }

        div {
          background-color: #1c6bb6;
        }
      }
    }
  }
}
</style>
