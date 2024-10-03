import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/myStyle.css'; // Importing global CSS
import { createRouter, createWebHistory } from 'vue-router'
import NanshanIndex from './components/NanshanIndex.vue';
import HomePage from './components/HomePage.vue';
import InsuranceProducts from './components/InsuranceProducts.vue';
import AlreadyPurchased from './components/AlreadyPurchased.vue';
import AboutNanshan from './components/AboutNanshan.vue';
import NewsNanshan from './components/NewsNanshan.vue';
import InsuranceDetail from './components/InsuranceDetail.vue';
import PurchasedSuccess from './components/PurchasedSuccess.vue';
import ApplySuccess from './components/ApplySuccess.vue';
import ContactNanshan from './components/ContactNanshan.vue';
import MemberIndex from './components/MemberIndex.vue';
import MemberData from './components/MemberData.vue';
import IndexHeader from './components/IndexHeader.vue';
import IndexSidebar from './components/IndexSidebar.vue';
import IndexContent from './components/IndexContent.vue';
import IndexFooter from './components/IndexFooter.vue';
import AlreadyPurchasedProduct from './components/AlreadyPurchasedProduct.vue';
import MemberDataPolicyholder from './components/MemberDataPolicyholder.vue';
import MemberDataPolicy from './components/MemberDataPolicy.vue';
import MemberDataPolicyExpiry from './components/MemberDataPolicyExpiry.vue';


// create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: NanshanIndex},
        { path: "/homepage", component: HomePage, meta:{breadcrumb: '首頁'}},
        { path: "/products", component: InsuranceProducts, meta:{breadcrumb: '保險商品'}},
        { path: '/alreadypurchased', component: AlreadyPurchased, meta:{breadcrumb: '已購保單'},
            // children: [
            //     {
            //         path: '/applysuccess',
            //         component: ApplySuccess, // Nested route to ApplySuccess.vue
            //         name: 'apply',
            //     },
            // ],
        },
        { path: "/news", component: NewsNanshan, meta:{breadcrumb: '最新消息'}},
        { path: "/about", component: AboutNanshan, meta:{breadcrumb: '關於南山'}},
        { path: "/detail", component: InsuranceDetail, meta:{breadcrumb: '保單詳情'}},
        { path: "/purchasedsuccess", component: PurchasedSuccess, meta:{breadcrumb: '保險商品'} },
        { path: "/applysuccess", component: ApplySuccess },
        { path: "/contact", component: ContactNanshan, meta:{breadcrumb: '聯絡我們'}},
        {  
            path: "/member", 
            component: MemberIndex,
            meta:{breadcrumb: '保戶園地'},
            children: [
                {
                    path: '/member/memberdata',
                    component: MemberData,
                    meta:{breadcrumb: '保戶資料'},
                    name: 'data'
                }
            ]
        },
    ]
})
const app = createApp(App)
app.component(
    "IndexHeader", IndexHeader,
    "IndexSidebar", IndexSidebar,
    "IndexContent", IndexContent,
    "IndexFooter", IndexFooter,
    "AlreadyPurchasedProduct", AlreadyPurchasedProduct,
    "MemberDataPolicyholder",MemberDataPolicyholder,
    "MemberDataPolicy", MemberDataPolicy,
    "MemberDataPolicyExpiry", MemberDataPolicyExpiry    
)
app.use(router)
app.mount('#app')

// 自 body 向下綁定 click 事件
document.body.addEventListener('click', (event) => {
    // 確保事件是發生在目標元素上
    const targetElement = event.target;

    // 確認點擊的元素是切換側邊欄的按鈕
    if (targetElement.id === 'toggle-sidebar') {
        const container = document.getElementById('container');
        const aside = document.querySelector('aside');

        // 切換收合狀態
        container.classList.toggle('collapsed');
        aside.classList.toggle('collapsed');

        // 更新按鈕文字
        if (container.classList.contains('collapsed')) {
            targetElement.textContent = '>>';
        } else {
            targetElement.textContent = '<<';
        }
    }
});