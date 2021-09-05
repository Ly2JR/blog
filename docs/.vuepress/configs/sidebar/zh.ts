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
                '/zh/database/sqlserver/sqlserver-sync-to-mysql.md',
                '/zh/database/sqlserver/sqlserver-sync-to-oracle.md',
                '/zh/database/sqlserver/reference.md'
            ]
        }
    ],
    '/zh/varietystore/erp/yonyou':[
        {
            text:'用友U8+',
            children:[
                '/zh/varietystore/erp/yonyou/README.md',
                '/zh/varietystore/erp/yonyou/apis/README.md',
                '/zh/varietystore/erp/yonyou/portal/README.md',
                '/zh/varietystore/erp/yonyou/buttons/README.md',
                '/zh/varietystore/erp/yonyou/archives/README.md',
                '/zh/varietystore/erp/yonyou/vouchers/README.md',
                '/zh/varietystore/erp/yonyou/reports/README.md',
                '/zh/varietystore/erp/yonyou/times/README.md',
                '/zh/varietystore/erp/yonyou/alarms/README.md',
                '/zh/varietystore/erp/yonyou/package/README.md',
            ]
        }
    ],
    '/zh/varietystore/office/excel':[
        {
            text:'Excel',
            children:[
                '/zh/varietystore/office/excel/README.md',
                '/zh/varietystore/office/excel/macro-sample1.md',
                '/zh/varietystore/office/excel/reference.md'
            ]
        }
    ],
    '/zh/varietystore/data-exchange-format/json':[
        {
            text:'JSON',
            children:[
                '/zh/varietystore/data-exchange-format/json/README.md',
                '/zh/varietystore/data-exchange-format/json/read-json.md',
                '/zh/varietystore/data-exchange-format/json/write-json.md',
                '/zh/varietystore/data-exchange-format/json/reference.md'
            ]
        }
    ],
    '/zh/varietystore/data-exchange-format/xml':[
        {
            text:'XML',
            children:[
                '/zh/varietystore/data-exchange-format/xml/README.md',
                '/zh/varietystore/data-exchange-format/xml/read-xml.md',
                '/zh/varietystore/data-exchange-format/xml/write-xml.md',
                '/zh/varietystore/data-exchange-format/xml/reference.md'
            ]
        }
    ],
};