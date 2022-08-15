<template>
  <div class="index-container">
    <!-- 右侧固定导航 -->
    <div class="right_nav">
      <a href="">
        <div>
          <span class="fa fa-chevron-up"></span>
          <i>TOP</i>
        </div>
      </a>
      <a href="">
        <div>
          <span class="fa fa-qq"></span>
          <i>9159881</i>
        </div>
      </a>
      <a href="">
        <div>
          <span class="fa fa-phone"></span>
          <i>13823265866</i>
        </div>
      </a>
    </div>

    <!-- 走马灯 -->
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <a href=""><img :src="require(`../assets/uploads/carousel${item}.jpg`)" alt="" class="carousel_img"></a>
      </el-carousel-item>
    </el-carousel>

    <!-- 架构1 -->
    <div class="wrapper frame1">
      <div class="top">
        <h2>智能时代</h2>
        <p>人工智能高端人才服务提供商</p>
      </div>
      <div class="right">
        <a href="">
          <img src="../assets/images/产品管理1.png" alt="">
          <h4>软件开发</h4>
          <p>
            Java语言是由Sun Microsystems公司于1995年5月推出的Java程序设计语言（以下简称Java语言）和Java平台的总称。
          </p>
        </a>
        <a href="">
          <img src="../assets/images/产品管理2.png" alt="">
          <h4>前端课程</h4>
          <p>
            课程与一线企业对接研发，确保每一堂都是高质精品课，你的时间，我们在乎 7大课程阶段全项目制教学 20个项目实战全程
          </p>
        </a>
        <a href="">
          <img src="../assets/images/产品管理3.png" alt="">
          <h4>大数据</h4>
          <p>
            学习对象适合大学生职前充电、0基础小白入门、有一定编程基础但想谋求更高层次发展以及想通过低成本转型到IT领域的人员。
          </p>
        </a>
        <a href="">
          <img src="../assets/images/产品管理4.png" alt="">
          <h4>人工智能</h4>
          <p>
            机器人的软硬件、机器人手动操作与坐标系、机器人的IO定典型产品搬运应用义、机器人的程序数据、典型产品搬运应用、典型产品码垛分拣应用、典型产品跟踪应用
          </p>
        </a>
      </div>
    </div>

    <!-- 架构2 -->
    <div class="frame2">
      <div class="wrapper">
        <div class="top clearfix">
          <div class="left"><img src="../assets/images/10_03.png" alt=""></div>
          <div class="right left">
            <h4>深圳市智能时代学校</h4>
            <p>
              深圳市智能时代产业园是人工智能设备研发与高技能人才引进转换和输送的基地,是软件开发和智能机器人应用系统集成，是集产，学，研，孵化于一体的高科技园区，主要从事工业自动化升级、更新和智能化改造，计算机语言开发，工业机器人工程技术人员培养，社区系统化教育，通用性职业技能训练，劳务输出与派遣，文化宣传策划等。下属有深圳市智能时代产业园有限公司，智能时代培训学校，深圳市晶禾智能装备有限公司，深圳市理想文化传播有限公司，深圳市坪山区大万人力资源服务有限公司组成。
            </p>
            <a href="" class="btn btn-default pull-right aos-init aos-animate">查看更多</a>
          </div>
        </div>
        <div class="bottom">
          <div>
            <a href=""><span class="fa fa-book"></span></a>
            <font>
              <a href=""><h4>课程中心</h4></a>
              <p>Java基础课程、数据库、前端技术、框架技术、分布式与集群、项目实战</p>
            </font>
          </div>
          <div>
            <a href=""><span class="fa fa-users"></span></a>
            <font>
              <a href=""><h4>师资力量</h4></a>
              <p>以人为本、以质为魂、诚信至上、服务永恒</p>
            </font>
          </div>
          <div>
            <a href=""><span class="fa fa-bookmark"></span></a>
            <font>
              <a href=""><h4>就业前景</h4></a>
              <p>科学、工业、国防和教育事业需要一大批高素质的计算机专门人才</p>
            </font>
          </div>
          <div>
            <a href=""><span class="fa fa-graduation-cap"></span></a>
            <font>
              <a href=""><h4>就业明星</h4></a>
              <p>培训一个、合格一个、就业一个,我们的目标让你成为软件工程师</p>
            </font>
          </div>
        </div>
      </div>
    </div>

    <!-- 就业薪资表 -->
    <div class="pay_table">
      <div class="wrapper">
        <h2>学员就业薪资表 高薪榜单期待下一个有你</h2>
        <el-table :data="tableData" class="table" size="medium">
          <el-table-column prop="name" label="姓名" align="center"></el-table-column>
          <el-table-column prop="educationBackground" label="学历" align="center"></el-table-column>
          <el-table-column prop="status" label="目前状态" align="center"></el-table-column>
          <el-table-column prop="specialty" label="专业" align="center"></el-table-column>
          <el-table-column prop="enterprise" label="入职企业" align="center"></el-table-column>
          <el-table-column prop="monthlyPay" label="月薪" align="center"></el-table-column>
          <el-table-column prop="address" label="地点" align="center"></el-table-column>
          <el-table-column prop="date" label="就业时间" align="center"></el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 学员实战项目 -->
    <div class="practical_project">
      <div class="wrapper">
        <div class="top">
          <h2>学员实战项目</h2>
          <p>系统、专业、前瞻、实用</p>
        </div>
        <div class="bottom">
          <div class="left">
            <el-carousel trigger="click" height="25.72916666666667vw" indicator-position="none" arrow="always">
              <el-carousel-item v-for="item in 4" :key="item">
                <img :src="require(`../assets/uploads/in3_${item}.jpg`)" alt="" class="carousel_img">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="shadow"></div>
          <div class="right">
            <ul>
              <li class="clearfix">
                <div class="current"><span class="fa fa-shopping-bag"></span></div>
                <div>
                  <h4>个人网上银行</h4>
                  <i>本网站实现了用户存款，取款，汇款以及用户的各种操作入添加，修改，删除...</i>
                </div>
              </li>
              <li class="clearfix">
                <div><span class="fa fa-gears"></span></div>
                <div>
                  <h4>企业宣传项目</h4>
                  <i>本网站用于公司形象宣传和介绍，实现了以下功能：1.公司新动态的展示，动...</i>
                </div>
              </li>
              <li class="clearfix">
                <div><span class="fa fa-car"></span></div>
                <div>
                  <h4>汽车租赁系统</h4>
                  <i>本汽车租赁系统实现了对汽车信息进行入库录入、租赁登记、租赁状态查询、...</i>
                </div>
              </li>
              <li class="clearfix">
                <div><span class="fa fa-book"></span></div>
                <div>
                  <h4>网上书城</h4>
                  <i>“网上书城”实现了以下功能：普通用户可以通过系统浏览商品信息、进行查询...</i>
                </div>
              </li>
              <li class="clearfix">
                <div><span class="fa fa-address-book"></span></div>
                <div>
                  <h4>在线通讯录</h4>
                  <i>在线通讯录：由于纸制或电子形式的通讯录，携带不方便，或容易忘记等方面...</i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 教师展示 -->
    <div class="wrapper teacher">
      <div class="top">
        <div class="left">
          <img :src="require(`../assets/uploads/${teacherImg}`)" alt="">
        </div>
        <div class="right">
          <div class="round1"><div>{{teacherName}}</div></div>
          <div class="round2"><div>{{teacherDesc}}</div></div>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="(item, index) in teacherList" :key="item.id" @click="changeTeacher(index)">
            <img :src="require(`../assets/uploads/${item.teacherImg}`)" alt="">
          </li>
        </ul>
      </div>
    </div>

    <!-- 学校展示 -->
    <div class="school">
      <div class="wrapper">
        <div class="top">
          <h4>学院环境</h4>
          <div>
            <i>现有两个园区，一个宝安园区，一个坪山园区，现有学员1000余人</i>
            <a href="">了解更多学院环境 <span class="fa fa-caret-right"></span></a>
          </div>
        </div>
        <!-- 学校环境展示 -->
        <MySchool/>
      </div>
    </div>

    <!-- 最新动态 -->
    <div class="recent_news">
      <div class="wrapper">
        <div class="top">
          <h4>最新动态</h4>
          <div>
            <i>了解更多智能时代实时新鲜资讯</i>
            <a href="">了解更多动态 <span class="fa fa-caret-right"></span></a>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li v-for="(item, index) in recentNewsList" :key="index">
              <a href="">
                <h4>{{item.title}}</h4>
                <i></i>
                <span class="ellipsis-2">{{item.desc}}</span>
                <div>{{item.date}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MySchool from '@/components/MySchool.vue'

export default defineComponent({
  data() {
    const item = {
      name: 'zhangsan',
      educationBackground: '本科',
      status: '在职',
      specialty: '软件工程',
      enterprise: '深圳**限公司',
      monthlyPay: 12000,
      address: '上海',
      date: '2017.02.03'
    }
    return {
      tableData: Array(12).fill(item),
      teacherName: '苏和平',
      teacherDesc: '资深J2EE软件工程师，计算机高级程序员，计算机网络工程师，基础教学学科资深课程开发者。现任我院计算机专业高级讲师。 专业领域： J2EE、Sping、Hibernate、MySQL、SpringBoot、Docker、架构设计、Linux操作系统等。 精通JAVA、C#、C++、Python等多种开发语言； 精通Spring、Struts、Spring-MVC、Hibernate、MyBatis等JAVA主流框架及常用软件设计模式； 精通WinForm、WPF、WCF、ASP.NET、ASP.NET MVC等.NET框架； 精通Oracle、MySql、SqlServe等主流数据库技术； 熟练使用Jquery、EasyUI、ExtJs等主流前端框架。',
      teacherImg: 'teacher1.jpg',
      teacherList: [
        {
          id: 1,
          teacherName: '苏和平',
          teacherDesc: '资深J2EE软件工程师，计算机高级程序员，计算机网络工程师，基础教学学科资深课程开发者。现任我院计算机专业高级讲师。 专业领域： J2EE、Sping、Hibernate、MySQL、SpringBoot、Docker、架构设计、Linux操作系统等。 精通JAVA、C#、C++、Python等多种开发语言； 精通Spring、Struts、Spring-MVC、Hibernate、MyBatis等JAVA主流框架及常用软件设计模式； 精通WinForm、WPF、WCF、ASP.NET、ASP.NET MVC等.NET框架； 精通Oracle、MySql、SqlServe等主流数据库技术； 熟练使用Jquery、EasyUI、ExtJs等主流前端框架。',
          teacherImg: 'teacher1.jpg'
        },
        {
          id: 2,
          teacherName: '李天奇',
          teacherDesc: '计算机高级程序员，计算机网络工程师，全国计算机高新技术高级工程师，基础教学学科资深课程开发者。现任我院计算机专业高级讲师、JAVA高级讲师，C#高级讲师，基础教育系部主任。 专业领域： 精通J2EE； 熟练运用Oracle、db2、MySQL数据库； 精通J2SE、J2EE、JSP、JavaScript、HTML、HTML5、C#等多种开发语言； 熟练使用Spring、Struts、SpringMVC、Hibernate、MyBatis 等 JAVA主流框架及常用的软件设计模式；对电子商务产品相关技术有深入研究。',
          teacherImg: 'teacher2.jpg'
        },
        {
          id: 3,
          teacherName: '周杰',
          teacherDesc: 'Java高级工程师，Java高级讲师，现任我院JAVA高级讲师。 毕业于湖南农业大学计算机科学与技术专业。 专业领域： 前段：H5，CSS3，JS，JQuery，Bootstrap，VUE等； 主流：Spring，SpringMVC，SpringBoot，SpringCloud，Dubbo，Hibernate，SpringData， RabbitMQ等； 大数据：ElasticSearch、Hadoop 、Spark、Kafka等； 关系型/非关系型数据库：MySQL，Oracle，Redis，MongoDB等。',
          teacherImg: 'teacher3.jpg'
        },
        {
          id: 4,
          teacherName: '王杰',
          teacherDesc: '现任职务： 高级软件讲师。 专业领域： 广泛采用的软件开发框架Sping、Hibernate、Junit、Struts、设计模式等。 数据库方面有oracle、db2等大型数据库。',
          teacherImg: 'teacher4.jpg'
        },
        {
          id: 5,
          teacherName: '陈志文',
          teacherDesc: 'Java领域高级工程师。现任我院JAVA软件高级技术讲师、高级技术专家、学院认证名师、推动学院软件技术板块带头人。 专业领域：精通C++、Java、Objective-C等语言。精通dubbo 、spring cloud等分布式架构技术。JVM、JAVA主流开源框架。精通手机及PC平台软件开发。',
          teacherImg: 'teacher5.jpg'
        },
        {
          id: 6,
          teacherName: '周柏青',
          teacherDesc: '现任我院计算机专业高级讲师、JAVA高级讲师，C#高级讲师。 毕业于湖南农业大学，专业计算机科学与技术。 专业领域： 精通JAVA、C#等多种开发语言； 精通Spring、Struts、SpringMVC、Hibernate、MyBatis等JAVA主流框架及常用软件设计模式； 精通WinForm、WPF、WCF、ASP.NET、ASP.NET MVC等.NET框架； 精通Oracle、MySql等主流数据库技术。',
          teacherImg: 'teacher6.jpg'
        }
      ],
      recentNewsList: [
        {
          title: '智能时代校园篮球杯',
          desc: '本次篮球比赛完美落幕',
          date: '2019-09-01'
        },
        {
          title: '篮球争霸赛',
          desc: '第19届校园篮球争霸赛',
          date: '2019-07-27'
        },
        {
          title: '粽情端午，欢聚一堂',
          desc: '端午到粽子香，又是一年一次的端午节，因学习的枯燥和端午节日到来欢乐的气氛，端午晚上决定办一个端午节联欢晚会',
          date: '2019-06-17'
        }
      ]
    }
  },
  methods: {
    changeTeacher(index) {
      this.teacherName = this.teacherList[index].teacherName
      this.teacherDesc = this.teacherList[index].teacherDesc
      this.teacherImg = this.teacherList[index].teacherImg
    }
  },
  components: {
    MySchool
  }
})
</script>

<style lang="less" scoped>
// 右侧固定导航
.right_nav {
  position: fixed;
  right: -141px;
  bottom: 100px;
  z-index: 999;
  transition: all 0.3s;

  &:hover {
    transform: translateX(-141px);
  }

  a {
    div {
      margin-bottom: 1px;
      padding: 10px;
      width: 190px;
      height: 50px;
      background-color: #1c6bb6;
      color: #fff;
      font-size: 16px;

      span {
        display: inline-block;
        border-right: solid 1px #fff;
        width: 40px;
        height: 100%;
        font-size: 30px;
        line-height: 30px;
      }

      i {
        display: inline-block;
        padding-left: 10px;
        line-height: 30px;
      }

      &:hover {
        background-color: #3fbf24;
      }
    }
  }
}

// 走马灯图片
.carousel_img {
  width: 100%;
  height: 500px;
}

// 架构1
.frame1 {
  padding: 40px 0 0;
  height: 630px;

  .top {
    margin-bottom: 20px;
    text-align: center;

    h2 {
      font-size: 24px;
      font-weight: 500;
    }

    p {
      padding-top: 10px;
      font-size: 13px;
    }
  }

  .right {
    display: flex;
    justify-content: space-evenly;

    a {
      width: 270px;

      img {
        width: 100%;
      }

      h4 {
        margin-bottom: 6px;
        height: 45px;
        background-color: #f0f0f0;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        line-height: 45px;
      }

      p {
        text-align: center;
        font-size: 12px;
        line-height: 24px;
      }

      &:hover {
        text-decoration: none;
        box-shadow: 0 0 20px rgb(85, 85, 85);
      }
    }
  }
}

// 架构2
.frame2 {
  padding: 50px 0;
  height: 630px;
  background: url(../assets/images/section1_bg.jpg) no-repeat center;

  .wrapper {
    .top {
      .left {
        float: left;
        width: 570px;

        img {
          width: 100%;
        }
      }

      .right {
        float: right;
        margin-top: 40px;
        padding: 0 15px;
        width: 600px;

        h4 {
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: 500;
          color: #fff;
        }

        p {
          font-size: 12px;
          line-height: 30px;
          color: #fff;
        }

        .btn {
          border: none;
          border-radius: 0;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding: 10px;
        width: 290px;
        height: 110px;
        background-color: #fff;

        a {
          span {
            padding-right: 10px;
            font-size: 50px;
            color: #337ab7;
          }
        }

        font {
          a {
            h4 {
              font-size: 16px;
              font-weight: bold;
            }

            &:hover {
              text-decoration: none;
            }
          }

          p {
            font-size: 12px;
            line-height: 24px;
          }
        }

        &:hover {
          background-color: #ffdf00;
        }
      }
    }
  }
}

// 就业薪资表
.pay_table {
  height: 721px;
  background: url(../assets/images/xz_bg.jpg) no-repeat center;

  .wrapper {
    padding: 20px 0 10px;
    text-align: center;

    .table {
      width: 100%;

      thead {
        th {
          background-color: #79c8f5;
          color: #000;
        }
      }

      tbody {
        td {
          border-top: solid 1px #fff;
          border-bottom: solid 1px #fff;
          background-color: #f4f4f4;

          &:nth-child(6) {
            background-color: #79c8f5;
            color: #000;
          }
        }
      }
    }
  }
}

// 学员实战项目
.practical_project {
  height: 740px;
  background: url(../assets/images/col10_bg.jpg) no-repeat center;

  .wrapper {
    padding: 20px 0 10px;

    .top {
      margin-bottom: 50px;
      color: #fff;
      text-align: center;
    }

    .bottom {
      position: relative;
      height: 494px;

      .left {
        position: absolute;
        top: 0;
        left: 0;
        border: solid 1px #fff;
        width: 564px;
        height: 100%;

        .el-carousel__arrow {
          z-index: 20;
        }
      }

      .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 564px;
        height: 100%;
        z-index: 10;
        box-shadow: 0 0 50px #000 inset;
      }

      .right {
        position: absolute;
        top: 0;
        left: 610px;

        ul {
          .clearfix {
            padding: 10px 0;
            width: 590px;

            div:first-child {
              float: left;
              margin-right: 20px;
              border-radius: 50%;
              width: 80px;
              height: 80px;
              background-color: #fff;
              text-align: center;
              line-height: 80px;
              font-size: 30px;
              color: #1c6bb6;

              &.current {
                background-color: #ffe100;
              }

              &:hover {
                background-color: #ffe100;
              }
            }

            div:last-child {
              color: #fff;

              h4 {
                font-size: 20px;
              }

              i {
                font-style: italic;
              }
            }
          }
        }
      }
    }
  }
}

// 教师展示
.teacher {
  height: 710px;

  .top {
    display: flex;
    padding: 50px 100px;

    .left {
      margin-right: 20px;

      img {
        width: 330px;
      }
    }

    .right {
      position: relative;

      .round1 {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 50px;
        padding: 15px 8px;
        border: solid 2px #1c6bb6;
        border-radius: 50%;
        width: 162px;
        height: 162px;

        div {
          border-radius: 50%;
          width: 128px;
          height: 128px;
          background-color: #1c6bb6;
          font-size: 32px;
          font-weight: bold;
          line-height: 128px;
          text-align: center;
          color: #fff;
        }
      }

      .round2 {
        position: absolute;
        top: 0;
        left: 130px;
        padding: 15px 8px;
        border: solid 2px #cacaca;
        border-radius: 50%;
        width: 395px;
        height: 395px;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          padding: 40px;
          width: 395px;
          height: 395px;
          background-color: #f5f5f5;
          font-size: 12px;
          line-height: 28px;
          color: #000;
        }
      }
    }
  }

  .bottom {
    ul {
      display: flex;
      justify-content: center;

      li {
        margin-right: 25px;

        img {
          width: 116px;
        }

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

// 学校展示
.school {
  background: url('../assets/images/con6_bg.jpg') no-repeat center;
  height: 740px;

  .wrapper {
    padding: 30px 0;
    height: 100%;

    .top {
      text-align: center;

      h4 {
        font-size: 24px;
        font-weight: 500;
      }

      div {
        a {
          float: right;
          transition: all 0.5s;

          &:hover {
            transform: translateY(-8px);
          }
        }
      }
    }
  }
}

// 最新动态
.recent_news {
  height: 430px;

  .wrapper {
    padding: 30px 0;
    height: 100%;

    .top {
      text-align: center;

      h4 {
        font-size: 24px;
        font-weight: 500;
      }

      div {
        a {
          float: right;
          transition: all 0.5s;

          &:hover {
            transform: translateY(-8px);
          }
        }
      }
    }

    .bottom {
      ul {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;

        li {
          float: left;

          a {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 30px;
            width: 375px;
            height: 202px;
            background-color: #f0f0f0;

            i {
              display: block;
              border: solid 1px;
            }

            &:hover {
              text-decoration: none;
              background-color: #1c6bb6;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

</style>
