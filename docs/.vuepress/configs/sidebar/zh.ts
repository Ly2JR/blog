import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/zh/guide/': [
        '/zh/guide/README.md',
    ],
    '/zh/life/books/': [
        {
            text: '书籍',
            children: [
                '/zh/life/books/README.md',
                '/zh/life/books/must-read-books.md',
            ]
        }, {
            text: '概率论与数理统计(二)',
            children: [
                '/zh/life/books/self-study/probability-and-statistics/basic-formula.md',
                '/zh/life/books/self-study/probability-and-statistics/README.md',
                '/zh/life/books/self-study/probability-and-statistics/course1.md',
                '/zh/life/books/self-study/probability-and-statistics/course2.md',
                '/zh/life/books/self-study/probability-and-statistics/course3.md',
                '/zh/life/books/self-study/probability-and-statistics/course4.md',
                '/zh/life/books/self-study/probability-and-statistics/course5.md',
                '/zh/life/books/self-study/probability-and-statistics/course6.md',
            ]
        }
    ],
    '/zh/life/literature/':[
        {
            text:'Markdown',
            children:[
                {
                    text:'概述',
                    children:[
                        '/zh/life/literature/markdown/overview/philosophy.md',
                        '/zh/life/literature/markdown/overview/inline-html.md',
                        '/zh/life/literature/markdown/overview/automatic-escaping-for-special-characters.md',
                    ]
                    
                }, {
                    text:'块元素',
                    children:[
                        '/zh/life/literature/markdown/block elements/paragraphs-and-line-breaks.md',
                        '/zh/life/literature/markdown/block elements/headers.md',
                        '/zh/life/literature/markdown/block elements/blockquotes.md',
                        '/zh/life/literature/markdown/block elements/lists.md',
                        '/zh/life/literature/markdown/block elements/code-blocks.md',
                        '/zh/life/literature/markdown/block elements/horizontal-rules.md',
                    ]
                    
                }
                , {
                    text:'跨度元素',
                    children:[
                        '/zh/life/literature/markdown/span elements/links.md',
                        '/zh/life/literature/markdown/span elements/emphasis.md',
                        '/zh/life/literature/markdown/span elements/code.md',
                        '/zh/life/literature/markdown/span elements/images.md',
                    ]
                    
                }
                , {
                    text:'各种各样的',
                    children:[
                        '/zh/life/literature/markdown/miscellaneous/backslash-escapes.md',
                        '/zh/life/literature/markdown/miscellaneous/automatic-links.md',
                    ]
                    
                }
                , {
                    text:'扩展语法',
                    children:[
                        '/zh/life/literature/markdown/extension/table.md',
                        '/zh/life/literature/markdown/extension/task-lists.md',
                        '/zh/life/literature/markdown/extension/emoji.md',
                        '/zh/life/literature/markdown/extension/others.md'
                    ]
                    
                }
            ]
        },{
            text:'Latex',
            children:[
                '/zh/life/literature/latex/README.md',
                '/zh/life/literature/latex/latex-course1.md',
            ]
                
        }
    ],
    '/zh/life/music/': [
        {
            text: '品味生活，聆听音乐',
            children: [
                '/zh/life/music/README.md',
            ]
        }
    ],
    '/zh/dotnet/': [
        {
            text: 'Design Pattern',
            children: [
                {
                    text:'创建型',
                    children:[
                        '/zh/dotnet/design-pattern/singleton-pattern.md',
                        '/zh/dotnet/design-pattern/abstract-factory.md',
                        '/zh/dotnet/design-pattern/builder.md',
                        '/zh/dotnet/design-pattern/factory-method.md',
                        '/zh/dotnet/design-pattern/prototype.md',
                    ]
                },
                {
                    text:'结构型',
                    children:[
                        '/zh/dotnet/design-pattern/adapter-pattern.md',
                        '/zh/dotnet/design-pattern/bridge-pattern.md',
                        '/zh/dotnet/design-pattern/decorator-pattern.md',
                        '/zh/dotnet/design-pattern/composite-pattern.md',
                        '/zh/dotnet/design-pattern/facade-pattern.md',
                        '/zh/dotnet/design-pattern/flyweight-pattern.md',
                        '/zh/dotnet/design-pattern/proxy-pattern.md',
                    ]
                }, {
                    text:'行为型',
                    children:[
                        '/zh/dotnet/design-pattern/template-method.md',
                        '/zh/dotnet/design-pattern/command-pattern.md',
                        '/zh/dotnet/design-pattern/iterator-pattern.md',
                        '/zh/dotnet/design-pattern/observer-pattern.md',
                        '/zh/dotnet/design-pattern/interpreter-pattern.md',
                        '/zh/dotnet/design-pattern/mediator-pattern.md',
                        '/zh/dotnet/design-pattern/chain-of-responsibility-pattern.md',
                        '/zh/dotnet/design-pattern/memento-pattern.md',
                        '/zh/dotnet/design-pattern/strategy-pattern.md',
                        '/zh/dotnet/design-pattern/visitor-pattern.md',
                        '/zh/dotnet/design-pattern/state-pattern.md',
                    ]
                }
            ],
        },
        {
            text: 'ABP.vNext',
            children: [
                '/zh/dotnet/abp.vnext/README.md',
                '/zh/dotnet/abp.vnext/data-dictionary.md',
            ],
        },
    ],
    '/zh/dotnet/wpf/': [
        {
            text: 'WPF',
            children: [
                '/zh/dotnet/wpf/README.md',
                '/zh/dotnet/wpf/download.md'
            ],
        },
        {
            text: '自定义控件',
            children: [
                '/zh/dotnet/wpf/controls/button.md',
            ],
        },
        {
            text: 'Prism',
            children: [
                '/zh/dotnet/wpf/prism/README.md',
            ],
        },
        {
            text: 'Material Design In Xaml',
            children: [
                '/zh/dotnet/wpf/materialdesigninxaml/README.md',
            ],
        },
      
    ],
    '/zh/jquery/': [
        {
            text: 'JQuery',
            children: [
                '/zh/jquery/README.md',
                '/zh/jquery/tips.md',
                '/zh/jquery/reference.md'
            ]
        }
    ],
    '/zh/database/sqlserver/': [
        {
            text: 'SQL Server',
            children: [
                '/zh/database/sqlserver/README.md',
                '/zh/database/sqlserver/advance.md',
                '/zh/database/sqlserver/function.md',
                '/zh/database/sqlserver/sqlserver-sync-to-mysql.md',
                '/zh/database/sqlserver/sqlserver-sync-to-oracle.md',
                '/zh/database/sqlserver/tips.md',
                '/zh/database/sqlserver/reference.md',
            ]
        }
    ],
    '/zh/varietystore/erp/yonyou/': [
        {
            text: '用友U8+',
            children: [
                '/zh/varietystore/erp/yonyou/README.md',
            ]
        }, {
            text: '基础档案',
            children: [
                '/zh/varietystore/erp/yonyou/archives/aa_bank.md',
                '/zh/varietystore/erp/yonyou/archives/assembly.md',
                '/zh/varietystore/erp/yonyou/archives/balance-type.md',
                '/zh/varietystore/erp/yonyou/archives/bank-account.md',
                '/zh/varietystore/erp/yonyou/archives/bank.md',
                '/zh/varietystore/erp/yonyou/archives/batch-property.md',
                '/zh/varietystore/erp/yonyou/archives/capital-asset-types.md',
                '/zh/varietystore/erp/yonyou/archives/capital-assets.md',
                '/zh/varietystore/erp/yonyou/archives/code-balance.md',
                '/zh/varietystore/erp/yonyou/archives/code.md',
                '/zh/varietystore/erp/yonyou/archives/currency.md',
                '/zh/varietystore/erp/yonyou/archives/customer-class.md',
                '/zh/varietystore/erp/yonyou/archives/customer-inventory.md',
                '/zh/varietystore/erp/yonyou/archives/customer-linker.md',
                '/zh/varietystore/erp/yonyou/archives/customer.md',
                '/zh/varietystore/erp/yonyou/archives/department.md',
                '/zh/varietystore/erp/yonyou/archives/digest.md',
                '/zh/varietystore/erp/yonyou/archives/district-class.md',
                '/zh/varietystore/erp/yonyou/archives/dsign.md',
                '/zh/varietystore/erp/yonyou/archives/duty-level.md',
                '/zh/varietystore/erp/yonyou/archives/duty-type.md',
                '/zh/varietystore/erp/yonyou/archives/duty.md',
                '/zh/varietystore/erp/yonyou/archives/expense-item.md',
                '/zh/varietystore/erp/yonyou/archives/expitem-class.md',
                '/zh/varietystore/erp/yonyou/archives/inventory-class.md',
                '/zh/varietystore/erp/yonyou/archives/inventory-free.md',
                '/zh/varietystore/erp/yonyou/archives/inventory-position.md',
                '/zh/varietystore/erp/yonyou/archives/inventory.md',
                '/zh/varietystore/erp/yonyou/archives/job-grade-set.md',
                '/zh/varietystore/erp/yonyou/archives/job-type.md',
                '/zh/varietystore/erp/yonyou/archives/job.md',
                '/zh/varietystore/erp/yonyou/archives/pay-condition.md',
                '/zh/varietystore/erp/yonyou/archives/person-type.md',
                '/zh/varietystore/erp/yonyou/archives/person.md',
                '/zh/varietystore/erp/yonyou/archives/position.md',
                '/zh/varietystore/erp/yonyou/archives/purchase-type.md',
                '/zh/varietystore/erp/yonyou/archives/reason.md',
                '/zh/varietystore/erp/yonyou/archives/receive-send-type.md',
                '/zh/varietystore/erp/yonyou/archives/requirement-class.md',
                '/zh/varietystore/erp/yonyou/archives/sale-type.md',
                '/zh/varietystore/erp/yonyou/archives/shipping-choice.md',
                '/zh/varietystore/erp/yonyou/archives/unit-account.md',
                '/zh/varietystore/erp/yonyou/archives/unit-class.md',
                '/zh/varietystore/erp/yonyou/archives/unit-doc.md',
                '/zh/varietystore/erp/yonyou/archives/unit-group.md',
                '/zh/varietystore/erp/yonyou/archives/unit.md',
                '/zh/varietystore/erp/yonyou/archives/vendor-class.md',
                '/zh/varietystore/erp/yonyou/archives/vendor-inventory.md',
                '/zh/varietystore/erp/yonyou/archives/vendor.md',
                '/zh/varietystore/erp/yonyou/archives/vouch-rd.md',
                '/zh/varietystore/erp/yonyou/archives/warehouse.md',
            ]
        }, {
            text: '财务模块',
            children: [
                '/zh/varietystore/erp/yonyou/financial/accept.md',
                '/zh/varietystore/erp/yonyou/financial/capital-vouchers.md',
                '/zh/varietystore/erp/yonyou/financial/ought-pay.md',
                '/zh/varietystore/erp/yonyou/financial/ought-receive.md',
                '/zh/varietystore/erp/yonyou/financial/voucher.md',
            ]
        }, {
            text: '门户集成',
            children: [
                '/zh/varietystore/erp/yonyou/portal/README.md',
            ]
        }, {
            text: '按钮',
            children: [
                '/zh/varietystore/erp/yonyou/buttons/README.md',
            ]
        }, {
            text: '业务单据',
            children: [
                '/zh/varietystore/erp/yonyou/vouchers/README.md',
            ]
        }, {
            text: '报表',
            children: [
                '/zh/varietystore/erp/yonyou/reports/README.md',
            ]
        }, {
            text: '定时与预警',
            children: [
                '/zh/varietystore/erp/yonyou/times/README.md',
                '/zh/varietystore/erp/yonyou/alarms/README.md',
            ]
        }, {
            text: '打包',
            children: [
                '/zh/varietystore/erp/yonyou/package/README.md',
            ]
        }
    ],
    '/zh/varietystore/markdown/latex/': [
        {
            text: '公式指导手册',
            children: [
                   '/zh/varietystore/markdown/latex/README.md',
                   '/zh/varietystore/markdown/latex/latex-course1.md',
            ]
        }
    ],
    '/zh/varietystore/office/excel/': [
        {
            text: 'Excel',
            children: [
                '/zh/varietystore/office/excel/README.md',
                '/zh/varietystore/office/excel/macro-sample1.md',
                '/zh/varietystore/office/excel/macro-sample2.md',
                '/zh/varietystore/office/excel/macro-sample3.md',
                '/zh/varietystore/office/excel/read-from-excel.md',
                '/zh/varietystore/office/excel/write-to-excel.md',
                '/zh/varietystore/office/excel/reference.md'
            ]
        }
    ],
    '/zh/varietystore/data-exchange-format/json/': [
        {
            text: 'JSON',
            children: [
                '/zh/varietystore/data-exchange-format/json/README.md',
                '/zh/varietystore/data-exchange-format/json/read-json.md',
                '/zh/varietystore/data-exchange-format/json/write-json.md',
                '/zh/varietystore/data-exchange-format/json/reference.md'
            ]
        }
    ],
    '/zh/varietystore/data-exchange-format/xml/': [
        {
            text: 'XML',
            children: [
                '/zh/varietystore/data-exchange-format/xml/README.md',
                '/zh/varietystore/data-exchange-format/xml/read-xml.md',
                '/zh/varietystore/data-exchange-format/xml/write-xml.md',
                '/zh/varietystore/data-exchange-format/xml/reference.md'
            ]
        }
    ],
    '/zh/varietystore/cli/github/': [
        {
            text: 'Github',
            children: [
                '/zh/varietystore/cli/github/README.md',
                '/zh/varietystore/cli/github/reference.md',
            ]
        }
    ],
    '/zh/varietystore/cli/yarn/': [
        {
            text: 'Yarn',
            children: [
                '/zh/varietystore/cli/yarn/README.md',
                '/zh/varietystore/cli/yarn/reference.md',
            ]
        }
    ],
    '/zh/varietystore/ladder/': [
        {
            text: '梯云纵',
            children: [
                '/zh/varietystore/ladder/machinecode/README.md',
                '/zh/varietystore/ladder/sounds/README.md',
                '/zh/varietystore/ladder/google-recaptcha.md',
                '/zh/varietystore/ladder/encryption/README.md',
                '/zh/varietystore/ladder/transform/README.md',
            ]
        },
    ],
};