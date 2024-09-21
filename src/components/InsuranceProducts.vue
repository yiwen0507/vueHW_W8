<template>
    <div>
        <main>
        <table class="table table-striped">
            <thead>
                <tr>
                <th>#</th>
                <th>險種號碼</th>
                <th>險種名稱</th>
                <th>保單描述</th>
                <th>年繳保費</th>
                <th>保障金額</th>
                <th>售賣起日</th>
                <th>售賣訖日</th>
                <th>保證續保</th>
                <th>動作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>111</td>
                <td>test</td>
                <td>for test</td>
                <td>111</td>
                <td>123</td>
                <td>2024/10/10</td>
                <td>2025/10/10</td>
                <td>Y</td>
                <td>
                    <button type="button" class="btn btn-primary" @click="goToDetail">查看</button>
                    <button type="button" class="btn btn-primary" @click="goToSuccess">購買</button>
                </td>
                </tr>
            </tbody>
        </table>
        </main>
    </div>
</template>

<script>
import '@/assets/myStyle.css';
    export default {
        methods:{
            goToDetail(){
                this.$router.push({ path: `/detail` });
            },
            goToSuccess(){
                this.$router.push({ path: `/purchasedsuccess` });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>