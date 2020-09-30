<template>
  <div class="about">
    <h1>This is an about page 2020-06-09 11:28</h1>
  </div>
</template>
<script>
// @ is an alias to /src
// import router from '@/router'
import getDateDiff from '@/api/public'
export default {
  name: "login",
  data() {
    return {
      tel: "",
      sms: "",
      num_01: "",
      num_02: ""
    };
  },
  components: {},
  methods: {
    // getDateDiff(dateStr) {
    //   var publishTime = this.getDateTimeStamp(dateStr) / 1000,
    //     d_seconds,
    //     d_minutes,
    //     d_hours,
    //     d_days,
    //     timeNow = parseInt(new Date().getTime() / 1000),
    //     d,
    //     date = new Date(publishTime * 1000),
    //     Y = date.getFullYear(),
    //     M = date.getMonth() + 1,
    //     D = date.getDate(),
    //     H = date.getHours(),
    //     m = date.getMinutes(),
    //     s = date.getSeconds();
    //   //小于10的在前面补0
    //   if (M < 10) {
    //     M = "0" + M;
    //   }
    //   if (D < 10) {
    //     D = "0" + D;
    //   }
    //   if (H < 10) {
    //     H = "0" + H;
    //   }
    //   if (m < 10) {
    //     m = "0" + m;
    //   }
    //   if (s < 10) {
    //     s = "0" + s;
    //   }
    //   d = timeNow - publishTime;
    //   d_days = parseInt(d / 86400);
    //   d_hours = parseInt(d / 3600);
    //   d_minutes = parseInt(d / 60);
    //   d_seconds = parseInt(d);
    //   if (d_days > 0 && d_days < 3) {
    //     return d_days + "天前";
    //   } else if (d_days <= 0 && d_hours > 0) {
    //     return d_hours + "小时前";
    //   } else if (d_hours <= 0 && d_minutes > 0) {
    //     return d_minutes + "分钟前";
    //   } else if (d_seconds < 60) {
    //     if (d_seconds <= 0) {
    //       return "刚刚";
    //     } else {
    //       return d_seconds + "秒前";
    //     }
    //   } else if (d_days >= 3 && d_days < 30) {
    //     return M + "-" + D + " " + H + ":" + m;
    //   } else if (d_days >= 30) {
    //     return Y.toString().substring(2) + "-" + M + "-" + D + " " + H + ":" + m;
    //   }
    // },
    // getDateTimeStamp(dateStr) {
    //   return Date.parse(dateStr.replace(/-/gi, "/"));
    // }
  },
  created() {
    this.$http
      // .get("https://mall.dc.sdtzcd.com/api/home/GetAgreement?app_key=SDMALLKEY&agreementTypes=3&userkey=ZUh4NmlMb2JrdzZkTm9OQ0M0QWZBUWg2V1dxRDNQZmJ3bVN1aFlVTm8rc0t2ZktJVWNhSDI0TGFyd2RXUStlZg%3D%3D&timestamp=1590464364&sign=3AFB88C7BFF1174F71AC52CA8AE175C1")
      .get(
        "https://mall.dc.sdtzcd.com/api/home/GetAgreement?app_key=SDMALLKEY&agreementTypes=3&userkey=ZUh4NmlMb2JrdzZkTm9OQ0M0QWZBUWg2V1dxRDNQZmJ3bVN1aFlVTm8rc0t2ZktJVWNhSDI0TGFyd2RXUStlZg%3D%3D&timestamp=1590464364&sign=3AFB88C7BFF1174F71AC52CA8AE175C1"
      )
      .then(res => {
        if (res) {
          console.log("999- ", res.data);
          this.content = res.msg;

          // alert(res.data.InfoMsg);
        }
      });
    console.log(getDateDiff.getDateDiff("2020-03-03 10:03:19.000"));
    console.log(getDateDiff.getDateDiff("2020-07-01 10:03:19.000"));
    console.log(getDateDiff.getDateDiff("2020-06-23 10:03:19.000"));
    this.$base.ljlog('about')
  }
};
</script>
