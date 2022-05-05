import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/guide/': [
        '/guide/README.md',
    ],
    '/life/books/': [
        {
            text: '书籍',
            children: [
                '/life/books/README.md',
                '/life/books/must-read-books.md',
            ]
        }, {
            text: '概率论与数理统计(二)',
            children: [
                '/life/books/self-study/probability-and-statistics/basic-formula.md',
                '/life/books/self-study/probability-and-statistics/README.md',
                '/life/books/self-study/probability-and-statistics/course1.md',
                '/life/books/self-study/probability-and-statistics/course2.md',
                '/life/books/self-study/probability-and-statistics/course3.md',
                '/life/books/self-study/probability-and-statistics/course4.md',
                '/life/books/self-study/probability-and-statistics/course5.md',
                '/life/books/self-study/probability-and-statistics/course6.md',
            ]
        }
    ],
    '/life/literature/':[
        {
            text:'Markdown',
            children:[
                {
                    text:'概述',
                    children:[
                        '/life/literature/markdown/overview/philosophy.md',
                        '/life/literature/markdown/overview/inline-html.md',
                        '/life/literature/markdown/overview/automatic-escaping-for-special-characters.md',
                    ]
                    
                }, {
                    text:'块元素',
                    children:[
                        '/life/literature/markdown/block elements/paragraphs-and-line-breaks.md',
                        '/life/literature/markdown/block elements/headers.md',
                        '/life/literature/markdown/block elements/blockquotes.md',
                        '/life/literature/markdown/block elements/lists.md',
                        '/life/literature/markdown/block elements/code-blocks.md',
                        '/life/literature/markdown/block elements/horizontal-rules.md',
                    ]
                    
                }
                , {
                    text:'跨度元素',
                    children:[
                        '/life/literature/markdown/span elements/links.md',
                        '/life/literature/markdown/span elements/emphasis.md',
                        '/life/literature/markdown/span elements/code.md',
                        '/life/literature/markdown/span elements/images.md',
                    ]
                    
                }
                , {
                    text:'各种各样的',
                    children:[
                        '/life/literature/markdown/miscellaneous/backslash-escapes.md',
                        '/life/literature/markdown/miscellaneous/automatic-links.md',
                    ]
                    
                }
                , {
                    text:'扩展语法',
                    children:[
                        '/life/literature/markdown/extension/table.md',
                        '/life/literature/markdown/extension/task-lists.md',
                        '/life/literature/markdown/extension/emoji.md',
                        '/life/literature/markdown/extension/others.md'
                    ]
                    
                }
            ]
        },{
            text:'Latex',
            children:[
                '/life/literature/latex/README.md',
                '/life/literature/latex/latex-course1.md',
            ]
                
        }
    ],
    '/life/music/': [
        {
            text: '品味生活，聆听音乐',
            children: [
                '/life/music/README.md',
            ]
        }
    ],
    '/dotnet/': [
        {
            text: 'Design Pattern',
            children: [
                {
                    text:'创建型',
                    children:[
                        '/dotnet/design-pattern/singleton.md',
                        '/dotnet/design-pattern/abstract-factory.md',
                        '/dotnet/design-pattern/builder.md',
                        '/dotnet/design-pattern/factory-method.md',
                        '/dotnet/design-pattern/prototype.md',
                    ]
                },
                {
                    text:'结构型',
                    children:[
                        '/dotnet/design-pattern/adapter.md',
                        '/dotnet/design-pattern/bridge.md',
                        '/dotnet/design-pattern/decorator.md',
                        '/dotnet/design-pattern/composite.md',
                        '/dotnet/design-pattern/facade.md',
                        '/dotnet/design-pattern/flyweight.md',
                        '/dotnet/design-pattern/proxy.md',
                    ]
                }, {
                    text:'行为型',
                    children:[
                        '/dotnet/design-pattern/template-method.md',
                        '/dotnet/design-pattern/command.md',
                        '/dotnet/design-pattern/iterator.md',
                        '/dotnet/design-pattern/observer.md',
                        '/dotnet/design-pattern/interpreter.md',
                        '/dotnet/design-pattern/mediator.md',
                        '/dotnet/design-pattern/chain-of-responsibility.md',
                        '/dotnet/design-pattern/memento.md',
                        '/dotnet/design-pattern/strategy.md',
                        '/dotnet/design-pattern/visitor.md',
                        '/dotnet/design-pattern/state.md',
                    ]
                }
            ],
        },
        {
            text: 'ABP.vNext',
            children: [
                '/dotnet/abp.vnext/README.md',
                '/dotnet/abp.vnext/data-dictionary.md',
            ],
        },
    ],
    '/dotnet/wpf/': [
        {
            text: 'WPF',
            children: [
                '/dotnet/wpf/README.md'
            ],
        },
        {
            text:'刘铁猛 -《深入浅出WPF》',
            children:[
                '/dotnet/wpf/course1.md',
                '/dotnet/wpf/course2.md',
                '/dotnet/wpf/course3.md',
                '/dotnet/wpf/download.md'
            ]
        },
        {
            text: 'IHome.UI',
            children: [
                '/dotnet/wpf/Controls/README.md',
                '/dotnet/wpf/Controls/button.md',
            ],
        },
        {
            text: '自定义控件',
            children: [
                '/dotnet/wpf/controls/button.md',
            ],
        },
        {
            text: 'Prism',
            children: [
                '/dotnet/wpf/prism/README.md',
                '/dotnet/wpf/prism/course1.md'
            ]
        }
    ],
    '/web/jquery':[
        {
            text: 'JQuery',
            children: [
                '/web/jquery/README.md',
                '/web/jquery/define-key-board.md',
            ]
        }
    ],
    '/database/sqlserver/': [
        {
            text: 'SQL Server',
            children: [
                '/database/sqlserver/select.md',
                '/database/sqlserver/where.md',
                '/database/sqlserver/order-by.md',
                '/database/sqlserver/insert-into.md',
                '/database/sqlserver/update.md',
                '/database/sqlserver/delete.md',
                '/database/sqlserver/join.md',
                '/database/sqlserver/union.md',
                {
                    text:'高级语法',
                    children:[
                        '/database/sqlserver/create-database.md',
                        '/database/sqlserver/create-table.md',
                        '/database/sqlserver/constranints.md',
                        '/database/sqlserver/create-index.md',
                        '/database/sqlserver/drop.md',
                        '/database/sqlserver/alter-table.md',
                        '/database/sqlserver/auto-increment.md',
                        '/database/sqlserver/view.md',
                        '/database/sqlserver/date.md',
                        '/database/sqlserver/null.md',
                    ]
                    
                },{
                    text:'函数',
                    children:[
                        '/database/sqlserver/aggregate.md',
                        '/database/sqlserver/scalar.md',
                        '/database/sqlserver/group-by.md',
                        '/database/sqlserver/having.md',
                        '/database/sqlserver/exists.md',
                        '/database/sqlserver/format.md',
                    ]
                },
                '/database/sqlserver/sqlserver-sync-to-mysql.md',
                '/database/sqlserver/sqlserver-sync-to-oracle.md',
                '/database/sqlserver/tips.md',
                '/database/sqlserver/reference.md',
            ]
        }
    ],
    '/varietystore/erp/yonyou/': [
        {
            text: '用友U8+',
            children: [
                '/varietystore/erp/yonyou/README.md',
            ]
        }, {
            text: '基础档案',
            children: [
                '/varietystore/erp/yonyou/archives/aa_bank.md',
                '/varietystore/erp/yonyou/archives/assembly.md',
                '/varietystore/erp/yonyou/archives/balance-type.md',
                '/varietystore/erp/yonyou/archives/bank-account.md',
                '/varietystore/erp/yonyou/archives/bank.md',
                '/varietystore/erp/yonyou/archives/batch-property.md',
                '/varietystore/erp/yonyou/archives/capital-asset-types.md',
                '/varietystore/erp/yonyou/archives/capital-assets.md',
                '/varietystore/erp/yonyou/archives/code-balance.md',
                '/varietystore/erp/yonyou/archives/code.md',
                '/varietystore/erp/yonyou/archives/currency.md',
                '/varietystore/erp/yonyou/archives/customer-class.md',
                '/varietystore/erp/yonyou/archives/customer-inventory.md',
                '/varietystore/erp/yonyou/archives/customer-linker.md',
                '/varietystore/erp/yonyou/archives/customer.md',
                '/varietystore/erp/yonyou/archives/department.md',
                '/varietystore/erp/yonyou/archives/digest.md',
                '/varietystore/erp/yonyou/archives/district-class.md',
                '/varietystore/erp/yonyou/archives/dsign.md',
                '/varietystore/erp/yonyou/archives/duty-level.md',
                '/varietystore/erp/yonyou/archives/duty-type.md',
                '/varietystore/erp/yonyou/archives/duty.md',
                '/varietystore/erp/yonyou/archives/expense-item.md',
                '/varietystore/erp/yonyou/archives/expitem-class.md',
                '/varietystore/erp/yonyou/archives/inventory-class.md',
                '/varietystore/erp/yonyou/archives/inventory-free.md',
                '/varietystore/erp/yonyou/archives/inventory-position.md',
                '/varietystore/erp/yonyou/archives/inventory.md',
                '/varietystore/erp/yonyou/archives/job-grade-set.md',
                '/varietystore/erp/yonyou/archives/job-type.md',
                '/varietystore/erp/yonyou/archives/job.md',
                '/varietystore/erp/yonyou/archives/pay-condition.md',
                '/varietystore/erp/yonyou/archives/person-type.md',
                '/varietystore/erp/yonyou/archives/person.md',
                '/varietystore/erp/yonyou/archives/position.md',
                '/varietystore/erp/yonyou/archives/purchase-type.md',
                '/varietystore/erp/yonyou/archives/reason.md',
                '/varietystore/erp/yonyou/archives/receive-send-type.md',
                '/varietystore/erp/yonyou/archives/requirement-class.md',
                '/varietystore/erp/yonyou/archives/sale-type.md',
                '/varietystore/erp/yonyou/archives/shipping-choice.md',
                '/varietystore/erp/yonyou/archives/unit-account.md',
                '/varietystore/erp/yonyou/archives/unit-class.md',
                '/varietystore/erp/yonyou/archives/unit-doc.md',
                '/varietystore/erp/yonyou/archives/unit-group.md',
                '/varietystore/erp/yonyou/archives/unit.md',
                '/varietystore/erp/yonyou/archives/vendor-class.md',
                '/varietystore/erp/yonyou/archives/vendor-inventory.md',
                '/varietystore/erp/yonyou/archives/vendor.md',
                '/varietystore/erp/yonyou/archives/vouch-rd.md',
                '/varietystore/erp/yonyou/archives/warehouse.md',
            ]
        }, {
            text: '财务模块',
            children: [
                '/varietystore/erp/yonyou/financial/accept.md',
                '/varietystore/erp/yonyou/financial/capital-vouchers.md',
                '/varietystore/erp/yonyou/financial/ought-pay.md',
                '/varietystore/erp/yonyou/financial/ought-receive.md',
                '/varietystore/erp/yonyou/financial/voucher.md',
            ]
        }, {
            text: '门户集成',
            children: [
                '/varietystore/erp/yonyou/portal/README.md',
            ]
        }, {
            text: '按钮',
            children: [
                '/varietystore/erp/yonyou/buttons/README.md',
            ]
        }, {
            text: '业务单据',
            children: [
                '/varietystore/erp/yonyou/vouchers/README.md',
            ]
        }, {
            text: '报表',
            children: [
                '/varietystore/erp/yonyou/reports/README.md',
            ]
        }, {
            text: '定时与预警',
            children: [
                '/varietystore/erp/yonyou/times/README.md',
                '/varietystore/erp/yonyou/alarms/README.md',
            ]
        }, {
            text: '打包',
            children: [
                '/varietystore/erp/yonyou/package/README.md',
            ]
        }
    ],
    '/varietystore/markdown/latex/': [
        {
            text: '公式指导手册',
            children: [
                   '/varietystore/markdown/latex/README.md',
                   '/varietystore/markdown/latex/latex-course1.md',
            ]
        }
    ],
    '/varietystore/office/excel/': [
        {
            text: 'Excel',
            children: [
                '/varietystore/office/excel/README.md',
                '/varietystore/office/excel/macro-sample1.md',
                '/varietystore/office/excel/macro-sample2.md',
                '/varietystore/office/excel/macro-sample3.md',
                '/varietystore/office/excel/read-from-excel.md',
                '/varietystore/office/excel/write-to-excel.md',
            ]
        }
    ],
    '/varietystore/data-exchange-format/json/': [
        {
            text: 'JSON',
            children: [
                '/varietystore/data-exchange-format/json/README.md',
                '/varietystore/data-exchange-format/json/read-json.md',
                '/varietystore/data-exchange-format/json/write-json.md',
                '/varietystore/data-exchange-format/json/reference.md'
            ]
        }
    ],
    '/varietystore/data-exchange-format/xml/': [
        {
            text: 'XML',
            children: [
                '/varietystore/data-exchange-format/xml/README.md',
                '/varietystore/data-exchange-format/xml/read-xml.md',
                '/varietystore/data-exchange-format/xml/write-xml.md',
                '/varietystore/data-exchange-format/xml/reference.md'
            ]
        }
    ],
    '/varietystore/cli/github/': [
        {
            text: 'Github',
            children: [
                '/varietystore/cli/github/README.md',
                '/varietystore/cli/github/reference.md',
            ]
        }
    ],
    '/varietystore/cli/yarn/': [
        {
            text: 'Yarn',
            children: [
                '/varietystore/cli/yarn/README.md',
                '/varietystore/cli/yarn/reference.md',
            ]
        }
    ],
    '/varietystore/ladder/': [
        {
            text: '梯云纵',
            children: [
                '/varietystore/ladder/machinecode/README.md',
                '/varietystore/ladder/sounds/README.md',
                '/varietystore/ladder/google-recaptcha.md',
                '/varietystore/ladder/encryption/README.md',
                '/varietystore/ladder/transform/README.md',
            ]
        },
    ],
};