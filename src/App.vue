<template>
  <div>
    <IndexHeader></IndexHeader>
    <div id="container">
      <IndexSidebar></IndexSidebar>
      <IndexContent></IndexContent>
    </div>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script>
//CSS
import '@/assets/myStyle.css';
import IndexHeader from './components/IndexHeader.vue';
import IndexSidebar from './components/IndexSidebar.vue';
import IndexContent from './components/IndexContent.vue';
import IndexFooter from './components/IndexFooter.vue';
export default {
  components:{
    IndexHeader,
    IndexSidebar,
    IndexContent,
    IndexFooter,
  },
  provide() {
    return {
      products: this.products,
      details: this.details
    };
  },
  data() {
    return {
      logo: require('@/assets/images/NanShan-Logo.jpeg'), // Image path
      products: [
        {
          policyCode: '20NNPL',
          policyName: '南山人壽新健康終身保險',
          policyDesc: '一般壽險/投保年齡0-60/保障終身',
          pricePerYear: '1200 元',
          coverage: '1230000 元',
          startDate: '2020-10-10',
          endDate: '2030-10-10',
          guaranteedRenewal: true,
        },
        {
          policyCode: 'DHI',
          policyName: '南山人壽意外傷害險',
          policyDesc: '意外日額/投保年齡0-64/最高保障至75歲',
          pricePerYear: '1400 元',
          coverage: '2000000 元',
          startDate: '2022-10-10',
          endDate: '2025-10-10',
          guaranteedRenewal: false,
        }
      ],
      details: [
        {
          policyCode: '20NNPL',
          policyName: '南山人壽新健康終身保險',
          claimDetails: [
            "身故給付，保障金額100萬",
            "意外身故給付，保障金額為200萬",
            "全殘給付，保障金額為220萬"
          ]
        },
        {
          policyCode: 'DHI',
          policyName: '南山人壽意外傷害險',
          claimDetails: [
            "意外身故保險金或喪葬費用保險金，保障金額200萬",
            "意外重大燒燙傷保險金，保障金額50萬",
            "天然災害意外身故保險金或喪葬費用保險金，保障金額200萬",
            "特定交通事故重大創傷保險金，保障金額20萬"
          ]
        }
      ]
    };
  }
};
</script>

