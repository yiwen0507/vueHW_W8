<template>
  <div>
    <IndexHeader></IndexHeader>
    <div id="container">
      <aside>
        <IndexSidebar></IndexSidebar>
      </aside>
      <main>
        <IndexContent></IndexContent>
      </main>
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
      details: this.details,
      member: this.member[0]
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
          pricePerYear: '810 NTD',
          coverage: '100萬',
          startDate: '2021-01-01',
          endDate: '2026-01-01',
          guaranteedRenewal: true,
        },
        {
          policyCode: 'DHI',
          policyName: '南山人壽意外傷害險',
          policyDesc: '意外日額/投保年齡0-64/最高保障至75歲',
          pricePerYear: '540 NTD',
          coverage: '200萬',
          startDate: '2018-03-08',
          endDate: '2030-05-10',
          guaranteedRenewal: false,
        },
        {
          policyCode: '1HIR',
          policyName: '南山人壽日臻幸福住院日額健康保險附約',
          policyDesc: '日額型/投保年齡0-75歲/最高保障至85歲',
          pricePerYear: '1330 NTD',
          coverage: '150萬',
          startDate: '2023-08-08',
          endDate: '2032-07-07',
          guaranteedRenewal: true,
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
        },
        {
          policyCode: '1HIR',
          policyName: '南山人壽日臻幸福住院日額健康保險附約',
          claimDetails: [
            "若病房費每日為3000元，則住院5天總共可申請 3000 x 5天 = 15000元",
            "日額型：按投保日額乘上一定比例理賠",
            "實支實付：每次限額內理賠住院前後門診產生之費用"
          ]
        }
      ],
      member:[
        {
          "policyholder_name": "令狐沖",
          "id": "A178957101",
          "gender": "male",
          "birthdate": "1985-03-14",
          "contact_number": "0987-261-657",
          "email": "abc@icloud.com",
          "address": "台北市大安區信義路八段108號88樓",
          "policies": [
            "A1234567890",
            "B0987654321",
            "C1234567892",
            "D0987654323",
            "E1234567894",
            "F0987654325"
          ],
          "existing_coverages": [
            "壽險",
            "失能/長照險",
            "意外險",
            "醫療險",
            "癌症險",
            "重大傷病險"
          ],
          "policy_expiry_dates": [
            {
              "policy_number": "A111222333",
              "expiry_date": "2025-03-05"
            },
            {
              "policy_number": "A669845795",
              "expiry_date": "2025-05-10"
            },
            {
              "policy_number": "C879170155",
              "expiry_date": "2025-07-15"
            },
            {
              "policy_number": "P957167951",
              "expiry_date": "2024-10-15"
            },
            {
              "policy_number": "E1234567894",
              "expiry_date": "2024-12-01"
            },
            {
              "policy_number": "Y0212389323",
              "expiry_date": "2025-01-20"
            }
          ],
          "premium_payment_frequency": "年繳"
        }
      ]
    };
  }
};
</script>

<style>
  aside{
    flex-shrink: 0; /* 防止縮小 */
  }
</style>