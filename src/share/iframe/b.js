// 可视化配置菜单 配置时间：2020/11/23 下午11:34:07
layui.define(function (exports) {
  exports("provinceMenu", [
    {
      right_name: "我的关注(待建)",
      right_id: "myconcern",
      menuIcon: "layui-icon-star-fill",
      url: "500.html",
    },
    // right_name: "管理者视图",
    // right_id: "dashboardview",
    // menuIcon: "layui-icon-home",
    // moduleUrl: "DASHBOARD_WEB_URL",
    {
      right_name: "管理者视图",
      right_id: "dashboardview",
      menuIcon: "layui-icon-home",
      moduleUrl: "DASHBOARD_WEB_URL",
      url: "TransOpsIntegrationDashboard",
      //   children: [
      //     {
      //       right_name: "传输资源概览",
      //       right_id: "transResourceDashboard",
      //       moduleUrl: "DASHBOARD_WEB_URL",
      //       url: "transResourceDashboard",
      //     },
      //     {
      //       right_name: "传输指标概览",
      //       right_id: "transIndexDashboard",
      //       moduleUrl: "DASHBOARD_WEB_URL",
      //       url: "transIndexDashboard",
      //     },
      //     {
      //       right_name: "传输运维概览",
      //       right_id: "transOpsDashboard",
      //       moduleUrl: "DASHBOARD_WEB_URL",
      //       url: "transOpsDashboard",
      //     },
      //     {
      //       right_name: "管理者视图",
      //       right_id: "TransOpsIntegrationDashboard",
      //       moduleUrl: "DASHBOARD_WEB_URL",
      //       url: "TransOpsIntegrationDashboard",
      //     },
      //   ],
    },
    {
      right_name: "网络规划",
      right_id: "networkplanning",
      menuIcon: "layui-icon-website",
      children: [ {
          right_name: "管线系统(链接)",
          right_id: "pipelinesystem",
          url: "500.html",
        },
        {
          right_name: "设备入网",
          right_id: "ca_spn",
          moduleUrl: "CA_WEB_URL",
          children: [
            {
              right_name: "设备入网工作台",
              right_id: "workbench",
              moduleUrl: "CA_WEB_URL",
              url: "workbench",
            },
            {
              right_name: "设备入网统计分析",
              right_id: "statisticalAnalysis",
              moduleUrl: "CA_WEB_URL",
              url: "statisticalAnalysis",
            },
            {
              right_name: "归档工单数据监控",
              right_id: "archiveOrderMonitoring",
              moduleUrl: "CA_WEB_URL",
              url: "archiveOrderMonitoring",
            },
            {
              right_name: "入网资源勘误",
              right_id: "resourcesErrata",
              moduleUrl: "CA_WEB_URL",
              url: "resourcesErrata",
            },
          ],
        },
        {
          right_name: "设备退网",
          right_id: "ca_logout_network",
          moduleUrl: "CA_WEB_URL",
          children: [
            {
              right_name: "设备退网工作台",
              right_id: "logout",
              moduleUrl: "CA_WEB_URL",
              url: "logout",
            },
          ],
        },
        {
          right_name: "告警反向勘误",
          right_id: "alarmErrataResource",
          moduleUrl: "HDM_WEB_URL",
          children: [
            {
              right_name: "告警勘误资源工作台",
              right_id: "alarmErrataResourceWorkbench",
              moduleUrl: "HDM_WEB_URL",
              url: "alarmErrataResourceWorkbench",
            },
          ],
        },
      ],
    },
    {
      right_name: "网络分析",
      right_id: "networkanalysis",
      menuIcon: "layui-icon-menu-fill",
      children: [
        {
          right_name: "网络健康度分析",
          right_id: "networkhealthanalysis",
          moduleUrl: "NQA_WEB_URL",
          children: [
            {
              right_name: "PTN网络质量分析",
              right_id: "nqa",
              moduleUrl: "NQA_WEB_URL",
              children: [
                {
                  right_name: "PTN长单链",
                  right_id: "nqaptnLongLinkHiddenQuery",
                  moduleUrl: "NQA_WEB_URL",
                  url:
                    "/pages/network/analysis/ptn_long_link_hidden_query/ptnLongLinkHiddenQuery.html",
                },
                {
                  right_name: "PTN超大环",
                  right_id: "nqaptnGrandRingIndexratioQuery",
                  moduleUrl: "NQA_WEB_URL",
                  url:
                    "/pages/network/statistics/ptn_grand_ring_indexratio_query/ptnGrandRingIndexratioQuery.html",
                },
                {
                  right_name: "PTN大汇聚点",
                  right_id: "nqaptnGrandConverIndexratioQuery",
                  moduleUrl: "NQA_WEB_URL",
                  url:
                    "/pages/network/analysis/ptn_grand_spot_converge_query/ptnGrandSpotConvergQuery.html",
                },
                {
                  right_name: "PTN接入层成环率",
                  right_id: "nqaSDHPTNCirclePer",
                  moduleUrl: "NQA_WEB_URL",
                  url: "/pages/network/kpi/SDHPTNCirclePer/circle_per.html",
                },
                {
                  right_name: "PTN汇聚层物理双上联",
                  right_id: "nqaPTNConvergenceCoupletPer",
                  moduleUrl: "NQA_WEB_URL",
                  url:
                    "/pages/network/kpi/PTNConvergenceCoupletPer/PTN_convergence_couplet_per.html",
                },
                {
                  right_name: "PTN接入层网元双归比",
                  right_id: "nqaPTNAccessMeReturn",
                  moduleUrl: "NQA_WEB_URL",
                  url:
                    "/pages/network/kpi/PTNAccessMeReturn/PTN_access_me_return.html",
                },
              ],
            },
          ],
        },
        {
          right_name: "运维资源分析",
          right_id: "operationresources",
          children: [
            {
              right_name: "纤芯管理",
              right_id: "topoFibercoreQuery",
              children: [
                {
                  right_name: "纤芯可用率",
                  right_id: "topoStatesQuery",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/cable/fibercore_query/states_query/states_query.jsp",
                },
                {
                  right_name: "纤芯使用率",
                  right_id: "topoUnuseAnalysis",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/cable/fibercore_query/unuse_analysis/unuse_analysis.jsp",
                },
              ],
            },
          ],
        },
        {
          right_name: "集中性能管理",
          right_id: "pm",
          children: [
            {
              right_name: "网络流量运营视图",
              right_id: "pmDashboard",
              url: "http://10.209.14.72:8090/tccpap-extend-vue/index.html",
            },
            {
              right_name: "规则管理",
              right_id: "pmRule",
              children: [
                {
                  right_name: "流量越限规则",
                  right_id: "hang_pick_rule",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/device/query/pm_hang_pick_statics_hb/pm_hang_pick_rule_statics/pm_hang_pick_rule.jsp",
                },
                {
                  right_name: "性能越限规则",
                  right_id: "pm_limit_threshold",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/device/rule/pm_limit_threshold/pm_limit_threshold.jsp",
                },
              ],
            },
            {
              right_name: "传输性能综合查询",
              right_id: "pmQuery",
              moduleUrl: "PM_WEB_URL",
              children: [
                {
                  right_name: "传输流量综合查询",
                  right_id: "trans_flow_composite_query",
                  children: [
                    {
                      right_name: "PTN环网查询",
                      right_id: "ptnringQuery",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/device/query/ptn_ringnetwork_flow_query/ptn_ringnetwork_flow_query.jsp",
                    },
                    {
                      right_name: "PTN链路查询",
                      right_id: "ptnlinkQuery",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/device/query/ptn_link_flow_query_ln/ptn_link_flow_query_ln.jsp",
                    },
                    {
                      right_name: "PTN业务查询",
                      right_id: "ptnbussinesQuery",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/device/query/ptn_business_flow_query/ptn_business_flow_query.jsp",
                    },
                    {
                      right_name: "PTN端口查询",
                      right_id: "ptnportQuery",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/device/query/ptn_port_flow_query/ptn_port_flow_query.jsp",
                    },
                  ],
                },
                {
                  right_name: "传输性能综合查询",
                  right_id: "trans_pm_composite_query",
                  children: [
                    {
                      right_name: "PTN性能查询",
                      right_id: "ptn_pm_index_query",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/device/query/pm_index_query_ptn/pm_index_query.jsp",
                    },
                    {
                      right_name: "OTN性能查询",
                      right_id: "otn_pm_index_query",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/device/query/pm_index_query_otn/pm_index_query.jsp",
                    },
                  ],
                },
              ],
            },
            {
              right_name: "隐患数据查询",
              right_id: "hidden_data_query",
              children: [
                {
                  right_name: "流量越限预警",
                  right_id: "pm_hang_pick_statistics",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "pages/device/query/pm_hang_pick_statics_hb/pm_hang_pick_statics/pm_hang_pick_statistics.jsp",
                },
                {
                  right_name: "性能越限隐患",
                  right_id: "pm_alarm_query",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url: "/pages/device/query/alarm_query/alarm_query.jsp",
                },
              ],
            },
          ],
        },
        {
          right_name: "性能巡检应用",
          right_id: "pmOpm",
          children: [
            {
              right_name: "性能越限管理",
              right_id: "pmOver",
              children: [
                {
                  right_name: "PTN光功率门限规则",
                  right_id: "ptn_optical_threshold",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/device/rule/ptn_optical_threshold/ptn_optical_threshold.jsp",
                },
                {
                  right_name: "OTN光功率门限规则",
                  right_id: "otn_optical_threshold",
                  moduleUrl: "TCCPAP_BASE_URL",
                  children: [
                    {
                      right_name: "波分单板性能门限规则",
                      right_id: "wave_board_threshold",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/static-pages/rule/otn_optical_threshold/wave_board_threshold/wave_board_threshold.jsp",
                    },
                    {
                      right_name: "客户单板性能门限规则",
                      right_id: "customer_board_threshold",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/static-pages/rule/otn_optical_threshold/customer_board_threshold/customer_board_threshold.jsp",
                    },
                    {
                      right_name: "放大单板性能门限规则",
                      right_id: "large_board_threshold",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/static-pages/rule/otn_optical_threshold/large_board_threshold/large_board_threshold.jsp",
                    },
                    {
                      right_name: "放大板承载波道信息管理",
                      right_id: "large_board_equipment_information",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/static-pages/rule/otn_optical_threshold/large_board_equipment_information/otn_otn_equipment.jsp",
                    },
                  ],
                },
                {
                  right_name: "SDH光功率门限规则",
                  right_id: "sdh_board_optical_threshold",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/fujian/query/sdh_board_optical_threshold/sdh_optical_threshold.jsp",
                },
                {
                  right_name: "综合性能门限规则",
                  right_id: "comprehensive_performance_optical_threshold",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/static-pages/rule/comprehensive_performance_optical_threshold/comprehensive_performance_optical_threshold.jsp",
                },
              ],
            },
            {
              right_name: "集中性能管理",
              right_id: "concentratePm",
              moduleUrl: "TCCPAP_BASE_URL",
              children: [
                {
                  right_name: "基础性能查询",
                  right_id: "basic_query_pm",
                  moduleUrl: "TCCPAP_BASE_URL",
                  children: [
                    {
                      right_name: "传输端口性能查询(天)",
                      right_id: "pm_index_query",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/fujian/query/pm_index_query_day/pm_index_query.jsp",
                    },
                    {
                      right_name: "传输板卡性能查询(天）",
                      right_id: "board_index_query",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/fujian/query/board_index_query_day/board_index_query.jsp",
                    },
                    {
                      right_name: "传输端口性能查询(刻)",
                      right_id: "pm_index_query_hour",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/fujian/query/pm_index_query_moment/pm_index_query.jsp",
                    },
                    {
                      right_name: "传输板卡性能查询(刻)",
                      right_id: "board_index_query_hour",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/fujian/query/board_index_query_moment/board_index_query.jsp",
                    },
                  ],
                },
                {
                  right_name: "基础流量查询",
                  right_id: "basic_flow_query",
                  moduleUrl: "TCCPAP_BASE_URL",
                  children: [
                    {
                      right_name: "PTN环网流量查询",
                      right_id: "ptn_ringnetwork_flow_query",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/fujian/query/ptn_ringnetwork_flow_query/ptn_ringnetwork_flow_query.jsp",
                    },
                    {
                      right_name: "PTN链路流量查询",
                      right_id: "ptn_link_flow_query",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/fujian/query/ptn_link_flow_query/ptn_link_flow_query.jsp",
                    },
                    {
                      right_name: "PTN端口流量查询",
                      right_id: "ptn_port_flow_query",
                      moduleUrl: "TCCPAP_BASE_URL",
                      url:
                        "/pages/fujian/query/ptn_port_flow_query/ptn_port_flow_query.jsp",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      right_name: "网络运维",
      right_id: "networkoperation",
      menuIcon: "layui-icon-engine",
      children: [
        {
          right_name: "隐患库管理",
          right_id: "hdm",
          children: [
            {
              right_name: "隐患库视图",
              right_id: "hdmDashboard",
              moduleUrl: "HDM_WEB_URL",
              url: "hdmDashboard",
            },
            {
              right_name: "隐患库流程信息管理",
              right_id: "hdZJProInfoManagement",
              moduleUrl: "HDM_WEB_URL",
              children: [
                {
                  right_name: "工单查询",
                  right_id: "hdZJWorkListSearch",
                  moduleUrl: "HDM_WEB_URL",
                  url: "hdZJWorkListSearch",
                },
                {
                  right_name: "已办任务",
                  right_id: "hdZJDoneTaskList",
                  moduleUrl: "HDM_WEB_URL",
                  url: "hdZJDoneTaskList",
                },
                {
                  right_name: "待办任务",
                  right_id: "hdZJTodoTaskList",
                  moduleUrl: "HDM_WEB_URL",
                  url: "hdZJTodoTaskList",
                },
              ],
            },
            {
              right_name: "隐患统计",
              right_id: "hdZJProcedureInfoQuery",
              moduleUrl: "HDM_WEB_URL",
              url: "hdZJProcedureInfoQuery",
            },
          ],
        },
        {
          right_name: "作业计划",
          right_id: "opm",
          children: [
            {
              right_name: "作业计划首页",
              right_id: "opmDashboard",
              moduleUrl: "OPM_WEB_URL",
              url: "opmDashboard",
            },
            {
              right_name: "网管巡检",
              right_id: "netManInspection",
              moduleUrl: "OPM_WEB_URL",
              children: [
                {
                  right_name: "规则设定",
                  right_id: "netManSetting",
                  moduleUrl: "OPM_WEB_URL",
                  url: "netManSetting",
                },
                {
                  right_name: "任务制定",
                  right_id: "netManDesign",
                  moduleUrl: "OPM_WEB_URL",
                  url: "netManDesign",
                },
                {
                  right_name: "任务执行",
                  right_id: "netManRun",
                  moduleUrl: "OPM_WEB_URL",
                  url: "netManRun",
                },
                {
                  right_name: "执行结果",
                  right_id: "netManResult",
                  moduleUrl: "OPM_WEB_URL",
                  url: "netManResult",
                },
                {
                  right_name: "人工派单",
                  right_id: "artificialorder",
                  moduleUrl: "OPM_WEB_URL",
                  url: "artificialorder",
                },
                {
                  right_name: "系统派单",
                  right_id: "overlineorder",
                  moduleUrl: "OPM_WEB_URL",
                  url: "overlineorder",
                },
                {
                  right_name: "工单统计",
                  right_id: "opmOrderStatistics",
                  moduleUrl: "OPM_WEB_URL",
                  url: "opmOrderStatistics",
                },
              ],
            },
            {
              right_name: "现场巡检",
              right_id: "siteInspection",
              moduleUrl: "OPM_WEB_URL",
              children: [
                {
                  right_name: "规则设定",
                  right_id: "siteSetting",
                  moduleUrl: "OPM_WEB_URL",
                  url: "siteSetting",
                },
                {
                  right_name: "任务制定",
                  right_id: "siteDesign",
                  moduleUrl: "OPM_WEB_URL",
                  url: "siteDesign",
                },
                {
                  right_name: "任务执行",
                  right_id: "siteRun",
                  moduleUrl: "OPM_WEB_URL",
                  url: "siteRun",
                },
                {
                  right_name: "执行结果",
                  right_id: "siteResult",
                  moduleUrl: "OPM_WEB_URL",
                  url: "siteResult",
                },
              ],
            },
            {
              right_name: "倒换测试",
              right_id: "swithInspection",
              children: [
                {
                  right_name: "规则设定",
                  right_id: "swithSetting",
                  moduleUrl: "OPM_WEB_URL",
                  url: "swithSetting",
                },
                {
                  right_name: "任务制定",
                  right_id: "swithDesign",
                  moduleUrl: "OPM_WEB_URL",
                  url: "swithDesign",
                },
                {
                  right_name: "任务执行",
                  right_id: "swithRun",
                  moduleUrl: "OPM_WEB_URL",
                  url: "swithRun",
                },
              ],
            },
            {
              right_name: "巡检统计",
              right_id: "inspectionStatistics",
              moduleUrl: "OPM_WEB_URL",
              url: "inspectionStatistics",
            },
          ],
        },
        {
          right_name: "集中故障管理",
          right_id: "bdm",
          children: [
            {
              right_name: "告警查询(集成)",
              right_id: "alarmquery",
              moduleUrl: "TNMS_WEB_URL",
              url: "alarmquery",
            },
            {
              right_name: "告警标准化映射规则",
              right_id: "alarmsMappingrules",
              moduleUrl: "TNMS_WEB_UI_FM_URL",
              children: [
                {
                  right_name: "华为标准化映射规则",
                  right_id: "hwMapingrules",
                  moduleUrl: "TNMS_WEB_UI_FM_URL",
                  children: [
                    {
                      right_name: "华为SDH标准化映射规则",
                      right_id: "hwSDHrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "hwsdhstan",
                    },
                    {
                      right_name: "华为WDM标准化映射规则",
                      right_id: "hwWDMrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "hwwdmstan",
                    },
                    {
                      right_name: "华为网管标准化映射规则",
                      right_id: "hwSTANrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "hwnmtstan",
                    },
                    {
                      right_name: "华为PON标准化映射规则",
                      right_id: "hwPONrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "hwponstan",
                    },
                    {
                      right_name: "华为PTN标准化映射规则",
                      right_id: "hwPTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "hwptnstan",
                    },
                    {
                      right_name: "华为OTN标准化映射规则",
                      right_id: "hwOTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "hwotnstan",
                    },
                  ],
                },
                {
                  right_name: "中兴标准化映射规则",
                  right_id: "zxMapingrules",
                  moduleUrl: "TNMS_WEB_UI_FM_URL",
                  children: [
                    {
                      right_name: "中兴SDH标准化映射规则",
                      right_id: "zxSDHrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "zxsdhstan",
                    },
                    {
                      right_name: "中兴WDM标准化映射规则",
                      right_id: "zxWDMrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "zxwdmstan",
                    },
                    {
                      right_name: "中兴PON标准化映射规则",
                      right_id: "zxPONrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "zxponstan",
                    },
                    {
                      right_name: "中兴PTN标准化映射规则",
                      right_id: "zxPTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "zxptnstan",
                    },
                    {
                      right_name: "中兴OTN标准化映射规则",
                      right_id: "zxOTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "zxotnstan",
                    },
                    {
                      right_name: "中兴网管标准化映射规则",
                      right_id: "zxSTANrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "zxnmtstan",
                    },
                  ],
                },
                {
                  right_name: "烽火标准化映射规则",
                  right_id: "fhMapingrules",
                  moduleUrl: "TNMS_WEB_UI_FM_URL",
                  children: [
                    {
                      right_name: "烽火SDH标准化映射规则",
                      right_id: "fhSDHrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "fhsdhstan",
                    },
                    {
                      right_name: "烽火WDM标准化映射规则",
                      right_id: "fhWDMrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "fhwdmstan",
                    },
                    {
                      right_name: "烽火PON标准化映射规则",
                      right_id: "fhPONrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "fhponstan",
                    },
                    {
                      right_name: "烽火PTN标准化映射规则",
                      right_id: "fhPTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "fhptnstan",
                    },
                    {
                      right_name: "烽火网管标准化映射规则",
                      right_id: "fhSTANrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "fhnmtstan",
                    },
                    {
                      right_name: "烽火OTN标准化映射规则",
                      right_id: "fhOTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "fhotnstan",
                    },
                  ],
                },
                {
                  right_name: "阿卡尔特标准化映射规则",
                  right_id: "akMapingrules",
                  moduleUrl: "TNMS_WEB_UI_FM_URL",
                  children: [
                    {
                      right_name: "阿尔卡特SDH标准化映射规则",
                      right_id: "akSDHrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "alcatelsdh",
                    },
                    {
                      right_name: "阿尔卡特WDM标准化映射规则",
                      right_id: "akWDMrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "alcatelwdm",
                    },
                    {
                      right_name: "阿尔卡特网管标准化映射规则",
                      right_id: "akSTANrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "alcatelnmt",
                    },
                    {
                      right_name: "阿尔卡特PTN标准化映射规则",
                      right_id: "akPTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "alcatelptn",
                    },
                    {
                      right_name: "阿尔卡特PON标准化映射规则",
                      right_id: "akPONrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "alcatelpon",
                    },
                    {
                      right_name: "阿尔卡特OTN标准化映射规则",
                      right_id: "akOTNrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "alcatelotn",
                    },
                  ],
                },
                {
                  right_name: "光迅标准化映射规则",
                  right_id: "gxMapingrules",
                  moduleUrl: "TNMS_WEB_UI_FM_URL",
                  children: [
                    {
                      right_name: "光迅OLP标准化映射规则",
                      right_id: "gxOLPrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "gxolpstan",
                    },
                  ],
                },
                {
                  right_name: "爱立信标准化映射规则",
                  right_id: "alxMapingrules",
                  moduleUrl: "TNMS_WEB_UI_FM_URL",
                  children: [
                    {
                      right_name: "爱立信PON标准化映射规则",
                      right_id: "alxPONrules",
                      moduleUrl: "TNMS_WEB_UI_FM_URL",
                      url: "alxponstan",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          right_name: "代维管理",
          right_id: "dimensionmanagement",
          children: [
            {
              right_name: "线路红黑榜填报管理",
              right_id: "redblacklist",
              moduleUrl: "TCCPAP_BASE_URL",
              url: "/pages/nwtl/sd/bbgl/redAblackList/index.jsp",
            },
          ],
        },
        {
          right_name: "应急保障",
          right_id: "emergencysupport",
          children: [
            {
              right_name: "备品备件",
              right_id: "emergencyresources  ",
              moduleUrl: "TCCPAP_BASE_URL",
              children: [
                {
                  right_name: "备件信息基础管理",
                  right_id: "spare_parts_information_basis_management",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/device/asset_management/spare_parts_management/spare_parts_information_basis_management/spare_parts_information_basis_management.jsp",
                },
                {
                  right_name: "备件信息明细管理",
                  right_id: "spare_parts_information_detail_management",
                  moduleUrl: "TCCPAP_BASE_URL",
                  url:
                    "/pages/device/asset_management/spare_parts_management/spare_parts_information_detail_management/spare_parts_information_detail_management.jsp",
                },
              ],
            },
            {
              right_name: "应急调度系统(链接)",
              right_id: "emergencydispatching",
              url: "500.html",
            },
          ],
        },
        {
          right_name: "电路管理",
          right_id: "circuitmanagement",
          children: [
            {
              right_name: "电路调度",
              right_id: "circuitdispatch",
              moduleUrl: "TNMS_WEB_UI_RA_URL",
              children: [
                {
                  right_name: "待办任务",
                  right_id: "dispathBacklog",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "dispathBacklog",
                },
                {
                  right_name: "已办任务",
                  right_id: "dispatchHaveDone",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "dispatchHaveDone",
                },
                {
                  right_name: "已归档",
                  right_id: "dispatchFileDone",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "dispatchFileDone",
                },
                {
                  right_name: "施工代办",
                  right_id: "roadworkBacklog",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "roadworkBacklog",
                },
                {
                  right_name: "施工已办",
                  right_id: "roadworkFileDone",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "roadworkFileDone",
                },
              ],
            },
            {
              right_name: "电路查询（集成）",
              right_id: "circuitquery",
              moduleUrl: "TNMS_WEB_URL",
              url: "circuitquery",
            },
            {
              right_name: "安全性分析（集成）",
              right_id: "circuitsecurity",
              moduleUrl: "TNMS_WEB_URL",
              url: "circuitsecurity",
            },
            {
              right_name: "电路查询",
              right_id: "circuitSearch",
              moduleUrl: "TNMS_WEB_UI_RA_URL",
              url: "circuitSearch",
            },
            {
              right_name: "网元归属",
              right_id: "mebelong",
              moduleUrl: "TNMS_WEB_UI_RA_URL",
              children: [
                {
                  right_name: "归属录入",
                  right_id: "attributionEntry",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "attributionEntry",
                },
                {
                  right_name: "olt网元归属录入",
                  right_id: "oltElementAttributionEntry",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "oltElementAttributionEntry",
                },
                {
                  right_name: "归属审核",
                  right_id: "attributionAudit",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "attributionAudit",
                },
                {
                  right_name: "归属重新录入",
                  right_id: "reEntryOfOwnership",
                  moduleUrl: "TNMS_WEB_UI_RA_URL",
                  url: "reEntryOfOwnership",
                },
              ],
            },
          ],
        },
        {
          right_name: "智能割接",
          right_id: "nco",
          children: [
            {
              right_name: "割接管理首页",
              right_id: "ncoDashboard",
              moduleUrl: "NCO_WEB_URL",
              url: "ncoDashboard",
            },
            {
              right_name: "割接任务列表 ",
              right_id: "ncoTaskList",
              moduleUrl: "NCO_WEB_URL",
              url: "ncoTaskList",
            },
            {
              right_name: "割接申请(链接)",
              right_id: "ncoApply",
              children: [
                {
                  right_name: "本地管线割接申请",
                  right_id: "ncoLocalcop",
                  url: "500.html",
                },
                {
                  right_name: "本地设备割接申请",
                  right_id: "ncoLocaldevice",
                  url: "ncoLocaldevice",
                },
                {
                  right_name: "省干管线割接申请",
                  right_id: "ncoProvincecop",
                  url: "ncoProvincecop",
                },
                {
                  right_name: "省干设备割接申请",
                  right_id: "ncoProvincedevice",
                  url: "ncoProvincedevice",
                },
              ],
            },
            {
              right_name: "传输网工程预约(链接)",
              right_id: "ncoSubscribe",
              url: "500.html",
            },
          ],
        },
        {
          right_name: "智能验收",
          right_id: "ca",
          moduleUrl: "CA_WEB_URL",
          children: [
            {
              right_name: "网元入网首页",
              right_id: "caDashboard",
              moduleUrl: "CA_WEB_URL",
              url: "caDashboard",
            },
            {
              right_name: "网元入网统计",
              right_id: "caNetworkStatistics",
              moduleUrl: "CA_WEB_URL",
              children: [
                {
                  right_name: "传输入网网元信息统计",
                  right_id: "caTransNetworkMeStatistics",
                  moduleUrl: "CA_WEB_URL",
                  url: "caTransNetworkMeStatistics",
                },
              ],
            },
            {
              right_name: "网元入网审核",
              right_id: "caNetworkManagent",
              moduleUrl: "CA_WEB_URL",
              children: [
                {
                  right_name: "网管验收",
                  right_id: "caNetworkCompletionAudit",
                  moduleUrl: "CA_WEB_URL",
                  url: "caNetworkCompletionAudit",
                },
              ],
            },
            {
              right_name: "方案制作",
              right_id: "caSolution",
              moduleUrl: "CA_WEB_URL",
              children: [
                {
                  right_name: "方案制作",
                  right_id: "caSchemeMaking",
                  moduleUrl: "CA_WEB_URL",
                  url: "caSchemeMaking",
                },
              ],
            },
          ],
        },
        {
          right_name: "配置管理",
          right_id: "configure",
          moduleUrl: "TNMS_WEB_UI_CM_URL",
          children: [
            {
              right_name: "配置信息查询",
              right_id: "queryinformation",
              moduleUrl: "TNMS_WEB_UI_CM_URL",
              children: [
                {
                  right_name: "EMS配置信息",
                  right_id: "emsnformation",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "EMSInformation",
                },
                {
                  right_name: "网元配置信息",
                  right_id: "meinformation",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "WangYuanInformation",
                },
                {
                  right_name: "单元盘配置信息",
                  right_id: "udiscinformation",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "DanYuanPanInformation",
                },
                {
                  right_name: "端口配置信息",
                  right_id: "portinformation",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "DuanKouInformation",
                },
              ],
            },
            {
              right_name: "配置信息统计",
              right_id: "informationstatistics",
              moduleUrl: "TNMS_WEB_UI_CM_URL",
              children: [
                {
                  right_name: "EMS数量统计",
                  right_id: "emsacount",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "EMSAcount",
                },
                {
                  right_name: "网元数量统计",
                  right_id: "meacount",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "WYAcount",
                },
                {
                  right_name: "单元盘数量统计",
                  right_id: "udisccount",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "DYPAcount",
                },
                {
                  right_name: "端口数量统计",
                  right_id: "portacount",
                  moduleUrl: "TNMS_WEB_UI_CM_URL",
                  url: "DKAcount",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      right_name: "门户管理",
      right_id: "portalmanagement",
      menuIcon: "layui-icon-layouts",
      moduleUrl: "SAFETY_WEB_URL",
      children: [
        {
          right_name: "使用风云榜",
          right_id: "systemState",
          moduleUrl: "SAFETY_WEB_URL",
          url: "systemState",
        },
        {
          right_name: "安全管理",
          right_id: "safety",
          moduleUrl: "SAFETY_WEB_URL",
          children: [
            {
              right_name: "用户管理",
              right_id: "safetyuser",
              moduleUrl: "SAFETY_WEB_URL",
              url: "safetyuser",
            },
            {
              right_name: "角色管理",
              right_id: "safetyRole",
              moduleUrl: "SAFETY_WEB_URL",
              url: "safetyRole",
            },
            {
              right_name: "部门管理",
              right_id: "safetyDepartment",
              moduleUrl: "SAFETY_WEB_URL",
              url: "safetyDepartment",
            },
            {
              right_name: "权限管理",
              right_id: "safetyCompetence",
              moduleUrl: "SAFETY_WEB_URL",
              children: [
                {
                  right_name: "菜单权限管理",
                  right_id: "safetymenu",
                  moduleUrl: "SAFETY_WEB_URL",
                  url: "safetymenu",
                },
              ],
            },
            {
              right_name: "安全策略",
              right_id: "safetySafePloy",
              moduleUrl: "SAFETY_WEB_URL",
              url: "safetySafePloy",
            },
            {
              right_name: "日志管理",
              right_id: "safetyLog",
              moduleUrl: "SAFETY_WEB_URL",
              children: [
                {
                  right_name: "登入日志管理",
                  right_id: "safetyLogin",
                  moduleUrl: "SAFETY_WEB_URL",
                  url: "safetyLogin",
                },
                {
                  right_name: "操作日志管理",
                  right_id: "safetyOperate",
                  moduleUrl: "SAFETY_WEB_URL",
                  url: "safetyOperate",
                },
              ],
            },
            {
              right_name: "用户组管理",
              right_id: "safetyUsergroup",
              moduleUrl: "SAFETY_WEB_URL",
              url: "safetyUsergroup",
            },
          ],
        },
        {
          right_name: "公告管理(待建)",
          right_id: "announcement",
          moduleUrl: "main",
          url: "500.html",
        },
      ],
    },
    {
      right_name: "SDN业务管理",
      right_id: "sdn",
      menuIcon: "layui-icon-star-fill",
      url: "500.html",
    },
  ]);
});
