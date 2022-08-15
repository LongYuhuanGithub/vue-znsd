<template>
  <div class="about-container">
    <!-- 第一行大图片 -->
    <img src="../assets/images/download-165754.png" alt="" class="img">

    <!-- 公司简介 -->
    <div class="company-profile wrapper">
      <h2>公司简介</h2>
      <div>
        <p>
          深圳市智能时代产业园是人工智能设备研发与高技能人才引进转换和输送的基地,是软件开发和智能机器人应用系统集成，是集产，学，研，孵化于一体的高科技园区，主要从事工业自动化升级、更新和智能化改造，计算机语言开发，工业机器人工程技术人员培养，社区系统化教育，通用性职业技能训练，劳务输出与派遣，文化宣传策划等。
          <span>下属有深圳市智能时代产业园有限公司，智能时代培训学校，深圳市晶禾智能装备有限公司，深圳市理想文化传播有限公司，深圳市坪山区大万人力资源服务有限公司组成。</span>
        </p>
        <p>公司目前有两个专业作为驱动引擎，分设深圳东部坪山区教学总部（园区面积33亩，教学面积26000平米）和深圳西部宝安区实践基地（园区面积28亩，教学面积11000平米），2007年以来，先后为华为、中国平安、顺丰输送各类程序开发人员近8000人。深受学生家长和用人单位的一致好评，目前有受训学员826人。</p>
        <p>我们一直秉承智能化产业集群化，互联互通的理念，我们的智能机器人教育融合了产品设计技术、机械、电子、传感器、计算机软件、硬件和人工智能等众多先进技术，教学设计多个学科领域，教学与创新实践相结合，按照任务驱动、课题研究、实践探究、创意设计等形式开展活动，使教学贴近学习、生产和生活。</p>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="development-path wrapper">
      <h2>发展历程</h2>
      <div class="main-timeline">
        <div class="timeline clearfix" v-for="(item, index) in developmentPathList" :key="index">
          <div class="date"><div>{{item.date}}</div></div>
          <div :class="['content', item.float]">
            <div class="title" :style="{backgroundColor: item.color}">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="arrow" :style="{backgroundColor: item.color}"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 企业文化 -->
    <div class="company-culture">
      <div class="wrapper">
        <h2>企业文化</h2>
        <div>
          <b>理想教育之社会观：</b>
          <span>教育是改变社会的源动力</span>
        </div>
        <div>
          <b>理想教育之人生观：</b>
          <span>教育改变命运，知识成就未来</span>
        </div>
        <div>
          <b>理想学子之时令观：</b>
          <span>流（镏）金岁月，学习至上</span>
        </div>
      </div>
    </div>

    <!-- 园区风采 -->
    <div class="park-style wrapper">
      <h2>园区风采</h2>
      <MySchool/>
    </div>

    <!-- 学生生活 -->
    <div class="student-life">
      <div class="wrapper">
        <h2>学生生活</h2>
        <div class="content">
          <ul>
            <li v-for="(item, index) in studentList" :key="index">
              <span><img :src="require(`../assets/uploads/${item.studentImg}`)" alt=""></span>
              <div>{{item.studentDesc}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MySchool from '@/components/MySchool.vue'

export default {
  data() {
    return {
      developmentPathList: [
        {
          date: 2020,
          title: '与您携手共创辉煌',
          desc: '与您携手共创辉煌',
          color: '#9f84c4',
          float: 'left'
        },
        {
          date: 2017,
          title: '开设深圳坪山新园区',
          desc: '开设深圳坪山新园区，增设机器人专业',
          color: '#02a2dd',
          float: 'right'
        },
        {
          date: 2015,
          title: '发展',
          desc: '由于学员的不段增长园区搬迁至深圳沙井中亚硅谷',
          color: '#58b25e',
          float: 'left'
        },
        {
          date: 2013,
          title: '与中软，软通合作',
          desc: '与中软，软通等人才资源公司合作，学员定向培养',
          color: '#eab715',
          float: 'right'
        },
        {
          date: 2010,
          title: '校企合作',
          desc: '与永州综合职业中专合作，实现校企合作，专业共建',
          color: '#02a2dd',
          float: 'left'
        },
        {
          date: 2008,
          title: '搬迁',
          desc: '由于学员的增多，搬迁至深圳观澜',
          color: '#58b25e',
          float: 'right'
        },
        {
          date: 2005,
          title: '创办',
          desc: '在深圳宝安区创办深圳理想IT',
          color: '#eab715',
          float: 'left'
        }
      ],
      studentList: [
        {
          studentDesc: '1705毕业合照',
          studentImg: 'student1.jpg'
        },
        {
          studentDesc: '易立德现场招聘会',
          studentImg: 'student2.jpg'
        },
        {
          studentDesc: '学员秋晚会',
          studentImg: 'student3.jpg'
        },
        {
          studentDesc: '1602班凤凰山一日游',
          studentImg: 'student4.jpg'
        },
        {
          studentDesc: '学员军训',
          studentImg: 'student5.jpg'
        },
        {
          studentDesc: '拔河比赛',
          studentImg: 'student6.jpg'
        },
        {
          studentDesc: '学员军训',
          studentImg: 'student7.jpg'
        },
        {
          studentDesc: '16合作班项目管辩',
          studentImg: 'student8.jpg'
        },
        {
          studentDesc: '学员海边一日游',
          studentImg: 'student9.jpg'
        },
        {
          studentDesc: '机器人实训现场',
          studentImg: 'student10.jpg'
        }
      ]
    }
  },
  components: {
    MySchool
  }
}
</script>

<style lang="less" scoped>
// 第一行大图片
.img {
  width: 100%;
  height: 500px;
  transition: all .3s;
}

@media (max-width: 1750px) {
  .img {
    height: 450px;
  }
}

@media (max-width: 1500px) {
  .img {
    height: 400px;
  }
}

@media (max-width: 1250px) {
  .img {
    height: 350px;
  }
}

@media (max-width: 1000px) {
  .img {
    height: 300px;
  }
}

@media (max-width: 750px) {
  .img {
    height: 250px;
  }
}

@media (max-width: 500px) {
  .img {
    height: 200px;
  }
}

// 抽取公共 title
.title() {
  background: url('../assets/images/index_title_bottom.png') no-repeat center bottom;
  margin: 20px;
  padding-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
}

.arrow() {
  position: absolute;
  top: 30px;
  content: '';
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

// 公司简介
.company-profile {
  h2 {
    .title()
  }

  div {
    font-size: 16px;

    p {
      margin-bottom: 10px;
      line-height: 2;
      text-indent: 2em;

      &:last-child {
        text-indent: 0;
      }

      span {
        font-size: 12px;
      }
    }
  }
}

// 发展历程
.development-path {
  padding: 36px 0;

  h2 {
    .title();
  }

  .main-timeline {
    position: relative;
    margin: 20px 120px;

    &::before {
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      margin-left: -1px;
      content: '';
      width: 2px;
      height: 100%;
      background: #999;
    }

    .timeline {
      position: relative;
      margin-bottom: 20px;

      // 时间
      .date {
        position: absolute;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 85px;
        height: 85px;
        background-color: #1c6bb6;
        transform: translate(-50%);

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid rgba(255, 255, 255, .2);
          border-radius: 50%;
          width: 70px;
          height: 70px;
          color: #fff;
          font-size: 20px;
          font-weight: 900;
        }
      }

      // 内容
      .content {
        position: relative;
        width: 375px;

        &.left {
          float: left;

          .arrow {
            .arrow();
            right: -5px;
          }
        }

        &.right {
          float: right;

          .arrow {
            .arrow();
            left: -5px;
          }
        }

        .title {
          border-radius: 6px 6px 0 0;
          padding: 15px;
          color: #fff;
          font-size: 20px;
          font-weight: 500;
        }

        .desc {
          border-radius: 0 0 6px 6px;
          padding: 15px;
          font-size: 14px;
          background-color: #f0f0f0;
        }
      }
    }
  }
}

// 企业文化
.company-culture {
  padding: 36px 0;
  background-color: #f0f0f0;

  h2 {
    .title();
  }

  div {
    font-size: 18px;
    text-align: center;
  }
}

// 园区风采
.park-style {
  padding: 36px 0;

  h2 {
    .title();
  }
}

// 学生生活
.student-life {
  padding: 36px 0;
  background-color: #f0f0f0;

  h2 {
    .title();
  }

  .content {
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
            width: 230px;
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
}
</style>
