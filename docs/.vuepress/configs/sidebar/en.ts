import type {SidebarConfig} from '@vuepress/theme-default'

export const en:SidebarConfig={
    '/guide/':[
        {
            text:'Guide',
            children:[
                '/guide/README.md',
            ]
        }
    ],
    '/varietystore/':[
        {
            text:'Variety Store',
            children:[
                '/varietystore/excel/README.md',
                '/varietystore/excel/sample1.md',
                '/varietystore/excel/macro.md',
            ]
        }
    ]
};