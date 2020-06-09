<template>
  <div class="about">
    <h1>This is an about page 2020-06-09 11:28</h1>
  </div>
</template>
<script>
// @ is an alias to /src
// import router from '@/router'
export default {
  name: "login",
  data() {
    return {
      tel: "",
      sms: "",
      num_01: "",
      num_02: "",
    };
  },
  components: {},
  methods: {

  },
  created() {
    this.$http
        // .get("https://mall.dc.sdtzcd.com/api/home/GetAgreement?app_key=SDMALLKEY&agreementTypes=3&userkey=ZUh4NmlMb2JrdzZkTm9OQ0M0QWZBUWg2V1dxRDNQZmJ3bVN1aFlVTm8rc0t2ZktJVWNhSDI0TGFyd2RXUStlZg%3D%3D&timestamp=1590464364&sign=3AFB88C7BFF1174F71AC52CA8AE175C1")
        .get("https://mall.dc.sdtzcd.com/api/home/GetAgreement?app_key=SDMALLKEY&agreementTypes=3&userkey=ZUh4NmlMb2JrdzZkTm9OQ0M0QWZBUWg2V1dxRDNQZmJ3bVN1aFlVTm8rc0t2ZktJVWNhSDI0TGFyd2RXUStlZg%3D%3D&timestamp=1590464364&sign=3AFB88C7BFF1174F71AC52CA8AE175C1")
        .then(res => {
          if (res) {
            console.log('999- ',res.data)
             this.content = res.msg
             
            // alert(res.data.InfoMsg);
          }
        });
  },
};
</script>
