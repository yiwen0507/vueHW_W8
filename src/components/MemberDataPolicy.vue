<template>
   <form class="policy-card">
        <h5>保單資訊</h5>
        <hr>
        <strong><p>保單號碼</p></strong>
        <li v-for="(policie , index) in member.policies " :key="index">
            {{ policie }}
        </li>
        <strong><p>已有保固</p></strong>
        <li v-for="(existing_coverage , index) in member.existing_coverages " :key="index">
            {{ existing_coverage }}
        </li>
    </form>
</template>

<script>
    export default {
        inject:['member']
    }
</script>

<style lang="scss" scoped>

</style>