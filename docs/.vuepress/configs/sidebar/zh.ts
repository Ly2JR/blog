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
                    text: '特征',
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
                        }, {
                            text: '登记',
                            link: '/dotnet/abp.zero/web/features/sign-up/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/sign-up/email-activation.md',
                            ]
                        }, {
                            text: '租户登记',
                            link: '/dotnet/abp.zero/web/features/tenant-sign-up.md'
                        }, {
                            text: '主要菜单和布局',
                            link: '/dotnet/abp.zero/web/features/main-menu-and-layout/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/main-menu-and-layout/quick-navigation.md'
                            ]
                        }, {
                            text: '版本管理',
                            link: '/dotnet/abp.zero/web/features/edition-management.md'
                        }, {
                            text: '租户管理',
                            link: '/dotnet/abp.zero/web/features/tenant-management.md'
                        }, {
                            text: '主机仪表板',
                            link: '/dotnet/abp.zero/web/features/host-dashboard.md'
                        }, {
                            text: '组织单位',
                            link: '/dotnet/abp.zero/web/features/organization-units.md'
                        }, {
                            text: '角色管理',
                            link: '/dotnet/abp.zero/web/features/role-management.md'
                        }, {
                            text: '用户管理',
                            link: '/dotnet/abp.zero/web/features/user-management.md'
                        }, {
                            text: '语言管理',
                            link: '/dotnet/abp.zero/web/features/language-management.md'
                        }, {
                            text: '审计日志',
                            link: '/dotnet/abp.zero/web/features/audit-logs.md'
                        }, {
                            text: '实体历史',
                            link: '/dotnet/abp.zero/web/features/entity-history.md'
                        }, {
                            text: '订阅',
                            link: '/dotnet/abp.zero/web/features/subscription/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/subscription/paypal-integration.md',
                                '/dotnet/abp.zero/web/features/subscription/stripe-integration.md',
                            ]
                        }, {
                            text: '视觉设置',
                            link: '/dotnet/abp.zero/web/features/visual-settings.md'
                        }, {
                            text: '主机设置',
                            link: '/dotnet/abp.zero/web/features/host-settings/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/host-settings/google-authenticator.md',
                            ]
                        }, {
                            text: '租户设置',
                            link: '/dotnet/abp.zero/web/features/tenant-settings/README.md',
                            children: [
                                '/dotnet/abp.zero/web/features/tenant-settings/active-directory.md',
                            ]
                        }, {
                            text: '维护',
                            link: '/dotnet/abp.zero/web/features/maintenance.md'
                        }, {
                            text: '租户仪表板',
                            link: '/dotnet/abp.zero/web/features/tenant-dashboard.md'
                        }, {
                            text: '通知',
                            link: '/dotnet/abp.zero/web/features/notifications.md'
                        }, {
                            text: '聊天',
                            link: '/dotnet/abp.zero/web/features/chat.md'
                        }, {
                            text: '用户菜单',
                            link: '/dotnet/abp.zero/web/features/user-menu.md'
                        }, {
                            text: '启动页',
                            link: '/dotnet/abp.zero/web/features/setup-page.md'
                        }, {
                            text: '控制台迁移应用',
                            link: '/dotnet/abp.zero/web/features/migrator-console-application.md'
                        }, {
                            text: '公共网站',
                            link: '/dotnet/abp.zero/web/features/public-web-site.md'
                        }
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
        }, {
            text: '刘铁猛 -《深入浅出WPF》',
            children: [
                '/dotnet/wpf/course1.md',
                '/dotnet/wpf/course2.md',
                '/dotnet/wpf/course3.md',
                '/dotnet/wpf/download.md'
            ]
        }, {
            text: 'IHome.UI',
            children: [
                '/dotnet/wpf/Controls/README.md',
                '/dotnet/wpf/Controls/button.md',
            ],
        }, {
            text: '自定义控件',
            children: [
                '/dotnet/wpf/controls/button.md',
            ],
        }, {
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
    '/varietystore/yonyou/': [
        {
            text: '用友U8+',
            link: '/varietystore/yonyou/README.md',
            children: [
                {
                    text: '基础档案',
                    children: [
                        '/varietystore/yonyou/archives/aa_bank.md',
                        '/varietystore/yonyou/archives/assembly.md',
                        '/varietystore/yonyou/archives/balance-type.md',
                        '/varietystore/yonyou/archives/bank-account.md',
                        '/varietystore/yonyou/archives/bank.md',
                        '/varietystore/yonyou/archives/batch-property.md',
                        '/varietystore/yonyou/archives/capital-asset-types.md',
                        '/varietystore/yonyou/archives/capital-assets.md',
                        '/varietystore/yonyou/archives/code-balance.md',
                        '/varietystore/yonyou/archives/code.md',
                        '/varietystore/yonyou/archives/currency.md',
                        '/varietystore/yonyou/archives/customer-class.md',
                        '/varietystore/yonyou/archives/customer-inventory.md',
                        '/varietystore/yonyou/archives/customer-linker.md',
                        '/varietystore/yonyou/archives/customer.md',
                        '/varietystore/yonyou/archives/department.md',
                        '/varietystore/yonyou/archives/digest.md',
                        '/varietystore/yonyou/archives/district-class.md',
                        '/varietystore/yonyou/archives/dsign.md',
                        '/varietystore/yonyou/archives/duty-level.md',
                        '/varietystore/yonyou/archives/duty-type.md',
                        '/varietystore/yonyou/archives/duty.md',
                        '/varietystore/yonyou/archives/expense-item.md',
                        '/varietystore/yonyou/archives/expitem-class.md',
                        '/varietystore/yonyou/archives/inventory-class.md',
                        '/varietystore/yonyou/archives/inventory-free.md',
                        '/varietystore/yonyou/archives/inventory-position.md',
                        '/varietystore/yonyou/archives/inventory.md',
                        '/varietystore/yonyou/archives/job-grade-set.md',
                        '/varietystore/yonyou/archives/job-type.md',
                        '/varietystore/yonyou/archives/job.md',
                        '/varietystore/yonyou/archives/pay-condition.md',
                        '/varietystore/yonyou/archives/person-type.md',
                        '/varietystore/yonyou/archives/person.md',
                        '/varietystore/yonyou/archives/position.md',
                        '/varietystore/yonyou/archives/purchase-type.md',
                        '/varietystore/yonyou/archives/reason.md',
                        '/varietystore/yonyou/archives/receive-send-type.md',
                        '/varietystore/yonyou/archives/requirement-class.md',
                        '/varietystore/yonyou/archives/sale-type.md',
                        '/varietystore/yonyou/archives/shipping-choice.md',
                        '/varietystore/yonyou/archives/unit-account.md',
                        '/varietystore/yonyou/archives/unit-class.md',
                        '/varietystore/yonyou/archives/unit-doc.md',
                        '/varietystore/yonyou/archives/unit-group.md',
                        '/varietystore/yonyou/archives/unit.md',
                        '/varietystore/yonyou/archives/vendor-class.md',
                        '/varietystore/yonyou/archives/vendor-inventory.md',
                        '/varietystore/yonyou/archives/vendor.md',
                        '/varietystore/yonyou/archives/vouch-rd.md',
                        '/varietystore/yonyou/archives/warehouse.md',
                    ]
                }, {
                    text: '财务模块',
                    children: [
                        '/varietystore/yonyou/financial/accept.md',
                        '/varietystore/yonyou/financial/capital-vouchers.md',
                        '/varietystore/yonyou/financial/ought-pay.md',
                        '/varietystore/yonyou/financial/ought-receive.md',
                        '/varietystore/yonyou/financial/voucher.md',
                    ]
                }, {
                    text: '库存模块',
                    children: [
                        {
                            text: '采购入库单',
                            children: [
                                '/varietystore/yonyou/store/purchasein/create.md',
                                '/varietystore/yonyou/store/purchasein/verify.md',
                                '/varietystore/yonyou/store/purchasein/unverify.md',
                                '/varietystore/yonyou/store/purchasein/delete.md',
                            ]
                        }, {
                            text: '材料出库单',
                            children: [
                                '/varietystore/yonyou/store/materialout/create.md',
                                '/varietystore/yonyou/store/materialout/verify.md',
                                '/varietystore/yonyou/store/materialout/unverify.md',
                                '/varietystore/yonyou/store/materialout/delete.md',
                            ]
                        }, {
                            text: '产成品入库单',
                            children: [
                                '/varietystore/yonyou/store/productin/create.md',
                                '/varietystore/yonyou/store/productin/verify.md',
                                '/varietystore/yonyou/store/productin/unverify.md',
                                '/varietystore/yonyou/store/materialout/delete.md',
                            ]
                        }, {
                            text: '调拨单',
                            children: [
                                '/varietystore/yonyou/store/transvouch/create.md',
                                '/varietystore/yonyou/store/transvouch/verify.md',
                                '/varietystore/yonyou/store/transvouch/unverify.md',
                                '/varietystore/yonyou/store/transvouch/delete.md',
                            ]
                        }, {
                            text: '销售出库单',
                            children: [
                                '/varietystore/yonyou/store/saleout/create.md',
                                '/varietystore/yonyou/store/saleout/verify.md',
                                '/varietystore/yonyou/store/saleout/unverify.md',
                                '/varietystore/yonyou/store/saleout/pulldispatch.md',
                                '/varietystore/yonyou/store/saleout/delete.md',
                            ]
                        }
                    ]
                }, {
                    text: '二次开发',
                    children: [
                        {
                            text: '门户集成',
                            link: '/varietystore/yonyou/develop/portal/README.md',
                        }, {
                            text: '按钮',
                            link: '/varietystore/yonyou/develop/buttons/README.md',
                        }, {
                            text: '业务单据',
                            link: '/varietystore/yonyou/develop/vouchers/README.md',
                        }, {
                            text: '报表',
                            link: '/varietystore/yonyou/develop/reports/README.md',
                        }, {
                            text: '定时与预警',
                            children: [
                                '/varietystore/yonyou/develop/times/README.md',
                                '/varietystore/yonyou/develop/alarms/README.md',
                            ]
                        }, {
                            text: '打包',
                            link: '/varietystore/yonyou/develop/package/README.md',
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
                '/varietystore/office/excel/macro-sample4.md',
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
                '/varietystore/ladder/summary1.md',
            ]
        },
    ],
};