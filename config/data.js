module.exports = {
    data: {
        theme: 'darkgray',
        menu: [
            {
                name: '文件审核',
                icon: require('../app/img/icon/filereview.png'),
                url: 'app',
                mainPage: '/main/app/arlh.html',
                // tree: [{
                //     name: '集团状态',
                //     icon: 'heart-o',
                //     url: '/main/unify/status',
                // }, {
                //     name: '数据概览',
                //     icon: 'line-chart',
                //     menu: 'data',
                //     subMenu: [
                //         {
                //             name: 'name1',
                //             icon: 'area-chart',
                //             url: '/main/data/hb',
                //         }, {
                //             name: 'name2',
                //             icon: 'pie-chart',
                //             url: '/main/data/nm',
                //         }
                //     ]
                // }]
            },{
                name: '评估',
                icon: require('../app/img/icon/appraise.png'),
                url: 'assess',
                mainPage: '/main/assess/resource',
                tree: [{
                    name: '资源市场',
                    engname:'resource',
                    icon: require('../app/img/icon/resource.png'),
                    url: '/main/assess/resource',
                }, {
                    name: '输气工艺',
                    engname:'gasproject',
                    icon: require('../app/img/icon/gasproject.png'),
                    url: '/main/assess/gasproject',
                    
                }, {
                    name: '线路工程',
                    engname:'road',
                    icon: require('../app/img/icon/road.png'),
                    url: '/main/assess/road',
                    
                }, {
                    name: '站场工艺',
                    engname:'station',
                    icon: require('../app/img/icon/station.png'),
                    url: '/main/assess/station',
                    
                }, {
                    name: '配套工程',
                    engname:'support',
                    icon: require('../app/img/icon/support.png'),
                    url: '/main/assess/support',
                    
                }, {
                    name: '环保用地',
                    engname:'ep',
                    icon: require('../app/img/icon/ep.png'),
                    url: '/main/assess/ep',
                    
                }, {
                    name: '经济评价',
                    engname:'economy',
                    icon: require('../app/img/icon/economy.png'),
                    url: '/main/assess/economy',
                    
                }]
            },{
                name: '综合评估',
                icon: require('../app/img/icon/assessment.png'),
                url: 'general',
                mainPage: '/main/general/assessment',
                // tree: [{
                //     name: '集团状态',
                //     icon: 'heart-o',
                //     url: '/main/unify/status',
                // }, {
                //     name: '数据概览',
                //     icon: 'line-chart',
                //     menu: 'data',
                //     subMenu: [
                //         {
                //             name: '河北风场概览',
                //             icon: 'area-chart',
                //             url: '/main/data/hb',
                //         }, {
                //             name: '内蒙风场概览',
                //             icon: 'pie-chart',
                //             url: '/main/data/nm',
                //         }
                //     ]
                // }]
            },{
                name: '报告输出',
                icon: require('../app/img/icon/reportopt.png'),
                url: 'report',
                mainPage: '/main/report/reportopt',
                // tree: [{
                //     name: '集团状态',
                //     icon: 'heart-o',
                //     url: '/main/unify/status',
                // }, {
                //     name: '数据概览',
                //     icon: 'line-chart',
                //     menu: 'data',
                //     subMenu: [
                //         {
                //             name: '河北风场概览',
                //             icon: 'area-chart',
                //             url: '/main/data/hb',
                //         }, {
                //             name: '内蒙风场概览',
                //             icon: 'pie-chart',
                //             url: '/main/data/nm',
                //         }
                //     ]
                // }]
            }
        ],
    }
}