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
    '/zh/database/sqlserver/':[
        {
            text:'Sql Server',
            children:[
                '/zh/database/sqlserver/README.md',
                '/zh/database/sqlserver/sqlserver_sync_to_mysql.md',
                '/zh/database/sqlserver/sqlserver_sync_to_oracle.md',
                '/zh/database/sqlserver/reference.md'
            ]
        }
    ],
    '/zh/varietystore/office/excel':[
        {
            text:'Excel',
            children:[
                '/zh/varietystore/office/excel/README.md',
                '/zh/varietystore/office/excel/macro_sample1.md',
                '/zh/varietystore/office/excel/reference.md'
            ]
        }
    ],
};