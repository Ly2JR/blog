import type {SidebarConfig} from '@vuepress/theme-default'

export const zh:SidebarConfig={
    '/zh/guide/':[
        {
            text:'指南',
            children:[
                '/zh/guide/README.md',
            ]
        }
    ],
    '/zh/varietystore/':[
        {
            text:'杂货铺',
            children:[
                '/zh/varietystore/excel/README.md',
                '/zh/varietystore/excel/sample1.md',
                '/zh/varietystore/excel/macro.md',
            ]
        }
    ]
};