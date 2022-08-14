<template>
  <div class="home-container">
    <!-- 公共头部 -->
    <header>
      <div class="wrapper">
        <el-menu class="el-menu-demo"
                 mode="horizontal"
                 background-color="#f5f6f6"
                 router
                 :default-active="activeIndex"
                 @select="handleSelect"
        >
          <el-menu-item><img src="../assets/images/logo.jpg" alt=""></el-menu-item>
          <div class="flex"/>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/home/about">关于我们</el-menu-item>
          <el-menu-item index="/home/3">课程中心</el-menu-item>
          <el-menu-item index="/home/4">师资力量</el-menu-item>
          <el-menu-item index="/home/5">就业前景</el-menu-item>
          <el-menu-item index="/home/6">就业明星</el-menu-item>
          <el-menu-item index="/home/7">新闻中心</el-menu-item>
          <el-menu-item index="/home/8">联系我们</el-menu-item>
        </el-menu>
      </div>
    </header>
    <div class="placeholder"/>

    <!-- 主体内容 -->
    <router-view/>

    <!-- 公共底部 -->
    <footer>
      <div class="top">
        <div class="wrapper">
          <div class="left">
            <ul>
              <li>
                <a href="">
                  学费是多少
                  <span>点击咨询</span>
                </a>
              </li>
              <li>
                <a href="">
                  我能不能学
                  <span>点击咨询</span>
                </a>
              </li>
              <li>
                <a href="">
                  两周免费试听
                  <span>申请试听</span>
                </a>
              </li>
              <li>
                <a href="">
                  获取学习资料
                  <span>点击咨询</span>
                </a>
              </li>
              <li>
                <a href="">
                  实训班座位告急
                  <span>马上抢座</span>
                </a>
              </li>
            </ul>
            <p>培训一个、合格一个、就业一个！</p>
          </div>
          <div class="right">
            <h4>在线报名</h4>
            <p>
              新生来校免费试读一个月后， 经考核合格，<br>
              正式办理就读手续，不合格者退回原校
            </p>
            <div class="form">
              <form action="">
                <table>
                  <tr>
                    <td>
                      <label for="name">姓名</label>
                    </td>
                    <td>
                      <input type="text" id="name" name="name" placeholder="请输入姓名">
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="phone">手机</label>
                    </td>
                    <td>
                      <input type="text" id="phone" name="phone" placeholder="请输入手机">
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="qq">QQ</label>
                    </td>
                    <td>
                      <input type="text" id="qq" name="qq" placeholder="请输入QQ">
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="checkCode">验证码</label>
                    </td>
                    <td>
                      <input type="text" id="checkCode" name="checkCode" placeholder="填写右侧的验证码">
                      <div class="checkCode">
                        <span :style="{color: '#707F02'}">4</span>
                        <span :style="{color: '#73C841'}">z</span>
                        <span :style="{color: '#BC3087'}">v</span>
                        <span :style="{color: '#6B486E'}">e</span>
                      </div>
                    </td>
                  </tr>
                </table>
                <input type="submit" value="立即申请" class="submit">
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="wrapper">
          <div class="left">
            <ul>
              <li><a href="">首页</a></li>
              <li><a href="">关于我们</a></li>
              <li><a href="">课程中心</a></li>
              <li><a href="">师资力量</a></li>
              <li><a href="">就业前景</a></li>
              <li><a href="">就业明星</a></li>
              <li><a href="">新闻中心</a></li>
              <li><a href="">联系我们</a></li>
            </ul>
            <br><br>
            <p>
              学校地址：深圳市坪山区龙田街道慧田路智能时代产业园<br>
              咨询电话：13823265866 周老师 13724202290 李老师（微信同号）<br>
              官方网址：http://www.ai-znsd.com<br>
              官方微信：智能时代学院
            </p>
            <br>
            <span>
              &copy; 2018 深圳市智能时代学校 版权所有 | RRS | XML | 网站地图 | 粤ICP备17136125号
            </span>
          </div>
          <div class="right">
            <img src="../assets/images/erweima.jpg" alt="">
            <img src="../assets/images/erweima.jpg" alt="">
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    handleSelect(key: string) {
      this.activeIndex = key
    }
  }
})
</script>

<style lang="less" scoped>
// 版心
.wrapper {
  margin: 0 auto;
  width: 1200px;
}

// 公共头部
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 95px;
  background-color: #f5f6f6;
  z-index: 999;

  .el-menu-demo {
    display: flex;
    align-items: center;
    border-bottom: none;

    .el-menu-item {
      padding: 0 15px;
      border-bottom: none;

      &:first-child {
        padding: 0;
      }
    }

    .flex {
      width: 70px;
    }

    img {
      width: 400px;
    }
  }
}

.placeholder {
  height: 95px;
}

// 公共底部
footer {
  .top {
    height: 500px;
    background: url(../assets/images/con8_bg.jpg) no-repeat center;

    .wrapper {
      padding: 50px 0;

      .left {
        float: left;

        ul {
          li {
            border: solid 1px;
            margin-bottom: 12px;
            padding: 0 10px;
            width: 500px;
            height: 40px;

            a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 100%;
              font-size: 16px;

              span {
                display: inline-block;
                border-radius: 10px;
                padding: 0 10px;
                background-color: #79c8f5;
                font-size: 12px;
                font-weight: 70;
                color: #fff;

                &:hover {
                  cursor: pointer;
                }
              }

              &:hover {
                cursor: default;
              }
            }

            &:hover {
              border: solid 1px #79c8f5;
            }
          }
        }

        p {
          font-size: 18px;
        }
      }

      .right {
        float: right;
        width: 370px;

        h4 {
          margin: 10px 0;
          font-size: 34px;
        }

        p {
          margin-bottom: 10px;
          font-size: 16px;
        }

        .form {
          form {
            table {
              width: 100%;

              tr {
                td {
                  text-align: right;

                  &:first-child {
                    width: 70px;
                    font-size: 16px;
                    font-weight: 700;
                  }

                  &:last-child {
                    display: flex;
                    align-items: center;
                  }

                  input {
                    flex: 1;
                    margin: 5px 5px 5px 20px;
                    padding: 10px;
                    border: 1px solid #cccccc;
                    border-radius: 5px;
                    height: 34px;
                    background-color: transparent;
                  }

                  .checkCode {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 5px;
                    width: 80px;
                    height: 34px;
                    background-color: #eaeaea;
                    font-size: 20px;
                    cursor: pointer;
                  }
                }
              }
            }

            .submit {
              margin-top: 10px;
              border-radius: 5px;
              width: 100%;
              height: 50px;
              background-color: #79c8f5;
              font-size: 25px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .bottom {
    padding: 50px 0;
    height: 280px;
    background: linear-gradient(to bottom,
    rgba(132, 222, 255, 0.5),
    #ffffff,
    #ffffff);

    .wrapper {
      .left {
        float: left;
        font-size: 14px;

        ul {
          li {
            float: left;
            margin-right: 10px;
          }
        }
      }

      .right {
        float: right;

        img {
          margin: 10px;
        }
      }
    }
  }
}
</style>
