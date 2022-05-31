import type { SidebarConfig } from '@vuepress/theme-default';

export const sidebarZh: SidebarConfig = {
    '/guide/': [
        '/guide/README.md',
    ],
    '/life/books/': [
        {
            text: '书籍',
            link: '/life/books/README.md',
            children: [
                '/life/books/must-read-books.md',
            ]
        }, {
            text: '概率论与数理统计(二)',
            link: '/life/books/self-study/probability-and-statistics/README.md',
            children: [
                '/life/books/self-study/probability-and-statistics/basic-formula.md',
                '/life/books/self-study/probability-and-statistics/course1.md',
                '/life/books/self-study/probability-and-statistics/course2.md',
                '/life/books/self-study/probability-and-statistics/course3.md',
                '/life/books/self-study/probability-and-statistics/course4.md',
                '/life/books/self-study/probability-and-statistics/course5.md',
                '/life/books/self-study/probability-and-statistics/course6.md',
            ]
        }
    ],
    '/life/literature/': [
        {
            text: 'Markdown',
            children: [
                {
                    text: '概述',
                    children: [
                        '/life/literature/markdown/overview/philosophy.md',
                        '/life/literature/markdown/overview/inline-html.md',
                        '/life/literature/markdown/overview/automatic-escaping-for-special-characters.md',
                    ]

                }, {
                    text: '块元素',
                    children: [
                        '/life/literature/markdown/block-elements/paragraphs-and-line-breaks.md',
                        '/life/literature/markdown/block-elements/headers.md',
                        '/life/literature/markdown/block-elements/blockquotes.md',
                        '/life/literature/markdown/block-elements/lists.md',
                        '/life/literature/markdown/block-elements/code-blocks.md',
                        '/life/literature/markdown/block-elements/horizontal-rules.md',
                    ]

                }
                , {
                    text: '跨度元素',
                    children: [
                        '/life/literature/markdown/span-elements/links.md',
                        '/life/literature/markdown/span-elements/emphasis.md',
                        '/life/literature/markdown/span-elements/code.md',
                        '/life/literature/markdown/span-elements/images.md',
                    ]

                }
                , {
                    text: '各种各样的',
                    children: [
                        '/life/literature/markdown/miscellaneous/backslash-escapes.md',
                        '/life/literature/markdown/miscellaneous/automatic-links.md',
                    ]

                }
                , {
                    text: '扩展语法',
                    children: [
                        '/life/literature/markdown/extension/table.md',
                        '/life/literature/markdown/extension/task-lists.md',
                        '/life/literature/markdown/extension/emoji.md',
                        '/life/literature/markdown/extension/others.md'
                    ]

                }
            ]
        }, {
            text: 'Latex',
            link: '/life/literature/latex/README.md',
            children: [
                '/life/literature/latex/latex-course1.md',
            ]

        }
    ],
    '/life/music/': [
        {
            text: '品味生活，聆听音乐',
            link: '/life/music/README.md',
        }
    ],
    '/dotnet/design-pattern/': [
        '/dotnet/design-pattern/README.md',
        {
            text: '创建型',
            children: [
                '/dotnet/design-pattern/singleton.md',
                '/dotnet/design-pattern/abstract-factory.md',
                '/dotnet/design-pattern/builder.md',
                '/dotnet/design-pattern/factory-method.md',
                '/dotnet/design-pattern/prototype.md',
            ]
        },
        {
            text: '结构型',
            children: [
                '/dotnet/design-pattern/adapter.md',
                '/dotnet/design-pattern/bridge.md',
                '/dotnet/design-pattern/decorator.md',
                '/dotnet/design-pattern/composite.md',
                '/dotnet/design-pattern/facade.md',
                '/dotnet/design-pattern/flyweight.md',
                '/dotnet/design-pattern/proxy.md',
            ]
        }, {
            text: '行为型',
            children: [
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
    '/dotnet/abp.zero/': [
        '/dotnet/abp.zero/README.md',
        '/dotnet/abp.zero/getting-started.md',
        '/dotnet/abp.zero/overview.md',
        {
            text: "Web",
            children: [
                {
                    text: '功能',
                    link: '/dotnet/abp.zero/web/features/README.md',
                    children: [
                        {
                            text: '登录',
                            link: '/dotnet/abp.zero/web/features/login/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/login/social&external-logins.md',
                                '/dotnet/abp.zero/web/features/login/two-factor-authentication.md',
                                '/dotnet/abp.zero/web/features/login/forgot-password.md',
                                '/dotnet/abp.zero/web/features/login/token-based-authentication.md',
                            ]
                        },
                        {
                            text: '登记',
                            link: '/dotnet/abp.zero/web/features/sign-up/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/sign-up/email-activation.md',
                            ]
                        },
                        {
                            text: '租户登记',
                            link: '/dotnet/abp.zero/web/features/tenant-sign-up.md'
                        },
                        {
                            text: '主要菜单和布局',
                            link: '/dotnet/abp.zero/web/features/main-menu-and-layout/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/main-menu-and-layout/quick-navigation.md'
                            ]
                        },
                        {
                            text: '版本管理',
                            link: '/dotnet/abp.zero/web/features/edition-management.md'
                        },
                        {
                            text: '租户管理',
                            link: '/dotnet/abp.zero/web/features/tenant-management.md'
                        },
                        {
                            text: '主机仪表板',
                            link: '/dotnet/abp.zero/web/features/host-dashboard.md'
                        },
                        {
                            text: '组织单位',
                            link: '/dotnet/abp.zero/web/features/organization-units.md'
                        },
                        {
                            text: '角色管理',
                            link: '/dotnet/abp.zero/web/features/role-management.md'
                        },
                        {
                            text: '用户管理',
                            link: '/dotnet/abp.zero/web/features/user-management.md'
                        },
                    ]
                }
            ]
        },
        '/dotnet/abp.zero/deploy.md'
    ],
    '/dotnet/xamarin.forms/': [
        '/dotnet/xamarin.forms/README.md',
        '/dotnet/xamarin.forms/deploy.md'
    ],
    '/dotnet/wpf/': [
        {
            text: 'WPF',
            link: '/dotnet/wpf/README.md'
        },
        {
            text: '刘铁猛 -《深入浅出WPF》',
            children: [
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
            link: '/dotnet/wpf/prism/README.md',
            children: [
                '/dotnet/wpf/prism/course1.md'
            ]
        }
    ],
    '/web/jquery': [
        {
            text: 'JQuery',
            link: '/web/jquery/README.md',
            children: [
                '/web/jquery/define-key-board.md',
            ]
        }
    ],
    '/database/sqlserver/': [
        '/database/sqlserver/select.md',
        '/database/sqlserver/where.md',
        '/database/sqlserver/order-by.md',
        '/database/sqlserver/insert-into.md',
        '/database/sqlserver/update.md',
        '/database/sqlserver/delete.md',
        '/database/sqlserver/join.md',
        '/database/sqlserver/union.md',
        {
            text: '高级语法',
            children: [
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

        }, {
            text: '函数',
            children: [
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
    ],
    '/database/oracle/': [
        '/database/oracle/installer.md',
        '/database/oracle/assistant.md',
    ],
    '/varietystore/erp/yonyou/': [
        {
            text: '用友U8+',
            link: '/varietystore/erp/yonyou/README.md',
            children: [
                {
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
                },
                {
                    text: '库存模块',
                    children: [
                        '/varietystore/erp/yonyou/store/purchasein.md',
                        '/varietystore/erp/yonyou/store/materialout.md',
                    ]
                }, {
                    text: '二次开发',
                    children: [
                        {
                            text: '门户集成',
                            link: '/varietystore/erp/yonyou/develop/portal/README.md',
                        }, {
                            text: '按钮',
                            link: '/varietystore/erp/yonyou/develop/buttons/README.md',
                        }, {
                            text: '业务单据',
                            link: '/varietystore/erp/yonyou/develop/vouchers/README.md',
                        }, {
                            text: '报表',
                            link: '/varietystore/erp/yonyou/develop/reports/README.md',
                        }, {
                            text: '定时与预警',
                            children: [
                                '/varietystore/erp/yonyou/develop/times/README.md',
                                '/varietystore/erp/yonyou/develop/alarms/README.md',
                            ]
                        }, {
                            text: '打包',
                            link: '/varietystore/erp/yonyou/develop/package/README.md',
                        }
                    ]
                }
            ]
        },
    ],
    '/varietystore/markdown/latex/': [
        {
            text: '公式指导手册',
            link: '/varietystore/markdown/latex/README.md',
            children: [
                '/varietystore/markdown/latex/latex-course1.md',
            ]
        }
    ],
    '/varietystore/office/excel/': [
        {
            text: 'Excel',
            link: '/varietystore/office/excel/README.md',
            children: [
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
            link: '/varietystore/data-exchange-format/json/README.md',
            children: [
                '/varietystore/data-exchange-format/json/read-json.md',
                '/varietystore/data-exchange-format/json/write-json.md',
                '/varietystore/data-exchange-format/json/reference.md'
            ]
        }
    ],
    '/varietystore/data-exchange-format/xml/': [
        {
            text: 'XML',
            link: '/varietystore/data-exchange-format/xml/README.md',
            children: [
                '/varietystore/data-exchange-format/xml/read-xml.md',
                '/varietystore/data-exchange-format/xml/write-xml.md',
                '/varietystore/data-exchange-format/xml/reference.md'
            ]
        }
    ],
    '/varietystore/cli/': [
        {
            text: 'Github cli',
            link: '/varietystore/cli/github/README.md',
        },
        {
            text: 'Yarn cli',
            link: '/varietystore/cli/yarn/README.md',
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