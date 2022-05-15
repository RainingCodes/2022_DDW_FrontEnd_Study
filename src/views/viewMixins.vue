<template>
  <div></div>
</template>

<script>
import ApiMixins from '../api.js';
export default {
  mixins: [ApiMixins], //사용할 믹스인 파일을 배열로 등록
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI("https://2500e231-e652-472e-b9fb-b1870a1db62f.mock.pstmn.io/list","get");
    console.log(this.productList);
  }
}
</script>