const Mock = require('mockjs') 
// import Mock from 'mockjs'

let permission = {
    
    login:{"success":true,"message":"登入成功！","userdata":"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQzNzM5MDYsInN1YiI6IntcImF2YWlsX2JlZ2luX2RhdGVcIjpcIjIwMTctMDYtMDEgMDA6MDA6MDAuMFwiLFwiYXZhaWxfZW5kX2RhdGVcIjpcIjIwMjAtMTItMDEgMDA6MDA6MDAuMFwiLFwiY3JlYXRlX2RhdGVcIjpcIjIwMTktMDMtMjAgMjA6MjE6NTMuMFwiLFwiZGVsX2ZsYWdcIjpcIjBcIixcImRlcHRfaWRcIjpcIjFcIixcImRpc3RyaWN0X2xpc3RcIjpbXSxcImllcnJvcnRpbWVcIjpcIjExXCIsXCJtYW5hZ2VfZG9tYWluX2xpc3RcIjpbXSxcIm1vYmlsZVwiOlwiMTUyMDA2ODE5OTZcIixcIm9wZXJhdGVfbGlzdFwiOltdLFwicGFzc3dvcmRcIjpcImQ0ZWMzODhkMDBlOWU2MDZiN2I2ZjI3MjYzYzA4NzU5XCIsXCJyaWdodF9saXN0XCI6W10sXCJyb2xlX2xpc3RcIjpbXSxcInNhbHRcIjpcIk9SSkFVUXFBV2NcIixcInNleFwiOlwiMFwiLFwic3B3ZGFuc3dlclwiOlwiMlwiLFwic3B3ZHF1ZXN0aW9uXCI6XCIyKzE9P1wiLFwic3RhZmZfYWNjb3VudFwiOlwiYWRtaW5pc3RyYXRvclwiLFwic3RhZmZfaWRcIjpcIjEwMDBcIixcInN0YWZmX25hbWVcIjpcIui2hee6p-euoeeQhuWRmFwiLFwic3RhZmZfbm9cIjpcIjEwMDBcIixcInRlbHBob25lXCI6XCIxMjM0NTY3ODk2NjY2XCIsXCJ1cGRhdGVfcGFzc190aW1lXCI6XCIyMDE5LTAzLTIwIDIwOjIxOjUzLjBcIn0iLCJleHAiOjE2MDQzNzM5MDZ9.LXpIlF9LDnDDiI4Bzo2YZh4kw4Pzvhq5n-PX-rkLxTE"},
    getUserInfoByToken: {"success":true,"message":null,"userdata":{"staff_id":"1000","staff_account":"administrator","staff_name":"超级管理员","staff_no":"1000","sex":"0","telphone":"15911111111","mobile":"15990050745","avail_begin_date":"2017-06-01 00:00:00.0","avail_end_date":"2020-12-01 00:00:00.0","region_id":null,"data_domain_id":null,"create_date":"2019-03-20 20:21:53.0","create_staff_id":null,"ierrortime":"12","spwdquestion":"2+1=?","spwdanswer":"2","derrordate":null,"dept_id":"1000","del_flag":"0","logintime":null,"update_pass_time":"2019-03-20 20:21:53.0","department":{"dept_id":"1000","dept_name":"浙江移动管理员","disp_name":"","short_name":null,"dept_code":null,"parent_id":null,"path_id":null,"del_flag":null,"create_date":null,"create_staff_id":null,"last_modify_date":null,"last_modify_staff_id":null,"dept_type":null,"data_src":null,"is_duty_dept":null,"sort_index":null,"city_code":null,"region_id":null,"data_domain_id":null,"company_name":"","company_id":"","belong_cityname":"","organize_typename":""},"role_list":[{"role_id":"1000","role_name":"超级管理员角色","create_date":"2020-04-15 17:37:35.0","create_staff_id":"1000","parent_id":"","role_type":0,"order_type":0,"emergency_type":0,"manage_domain_list":[],"right_list":[],"district_list":[]}],"manage_domain_list":[],"right_list":[{"right_id":"opmDashboard","right_name":"作业计划首页","parent_id":"/opm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":1,"menu_order":0},{"right_id":"siteInspection","right_name":"现场巡检","parent_id":"/opm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":3,"menu_order":0},{"right_id":"netManInspection","right_name":"网管巡检","parent_id":"/opm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":4,"menu_order":0},{"right_id":"/opmOverlimit","right_name":"OTN设备性能门限规则","parent_id":"pmRule","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"TemperatureCPUtilization","right_name":"温度CPU利用率隐患查询","parent_id":"pmhiddenanalyze","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"temperature","right_name":"温度","parent_id":"threshold","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"threshold","right_name":"门限管理","parent_id":"/pm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"siteResult","right_name":"执行结果","parent_id":"siteInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/topo","right_name":"拓扑管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnbm","right_name":"业务管理","parent_id":"sptnPtnDm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnbmserviceissued","right_name":"城域业务","parent_id":"sptnbm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pm_flow_limit_query","right_name":"流量越限隐患","parent_id":"pmhiddenanalyze","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyRole","right_name":"角色管理","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyLogin","right_name":"登入日志管理","parent_id":"safetyLog","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"otnContextManger","right_name":"OTN设备放大板侧波道承载关系管理","parent_id":"otn_opticalpower","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"smsGroup","right_name":"组管理","parent_id":"smsManage","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"netManResult","right_name":"执行结果","parent_id":"netManInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/bdm","right_name":"故障管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnserviceissued","right_name":"域间链路","parent_id":"sptnPtnDm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnEndtoEndView","right_name":"端到端业务视图","parent_id":"/sptn","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptninterdomain","right_name":"域间链路创建","parent_id":"sptnserviceissued","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnrm","right_name":"资源管理","parent_id":"sptnPtnDm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"trans_pm_composite_query","right_name":"传输性能综合查询","parent_id":"pmQuery","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"trans_flow_composite_query","right_name":"传输流量综合查询","parent_id":"pmQuery","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hdZJProInfoManagement","right_name":"隐患库流程信息管理","parent_id":"/hdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hdZJProcedureInfoQuery","right_name":"隐患统计","parent_id":"/hdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/opm","right_name":"传输作业计划","parent_id":"/pm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"PtnIndexQuery","right_name":"PTN指标查询","parent_id":"/flow","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyCompetence","right_name":"权限管理","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"faultStatistics","right_name":"告警统计","parent_id":"bdmquery","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/res","right_name":"资源管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hidden_Statistics_of_rate","right_name":"隐患处理及时率统计","parent_id":"/hdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hidden_danger_report","right_name":"隐患报表","parent_id":"/hdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"netManRun","right_name":"任务执行","parent_id":"netManInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"siteRun","right_name":"任务执行","parent_id":"siteInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"flowlimitdanger","right_name":"流量越限隐患","parent_id":"/flow","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"bdmDashboard","right_name":"故障管理首页","parent_id":"/bdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hidden_data_query","right_name":"隐患数据查询","parent_id":"/pm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pm_inferior_threshold","right_name":"性能劣化规则","parent_id":"threshold","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pmQuery","right_name":"基础性能数据管理","parent_id":"/pm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hdZJTodoTaskList","right_name":"待办任务","parent_id":"hdZJProInfoManagement","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pmhiddenanalyze","right_name":"性能隐患分析","parent_id":"/pm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hiddenDanger","right_name":"性能突变隐患查询","parent_id":"pmhiddenanalyze","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"smsSuperviceManage","right_name":"督办策略","parent_id":"smsManage","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnPtnDm","right_name":"传输PTN业务开通管理","parent_id":"/sptn","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"faultStatistics","right_name":"告警统计","parent_id":"bdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/sptn","right_name":"sptn管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyUsergroup","right_name":"用户组管理","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/flow","right_name":"传输流量管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"threshold_rule_otn","right_name":"OTN放大单板性能门限规则","parent_id":"/opmOverlimit","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"designDashboard","right_name":"设备模型管理","parent_id":"/res","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"PTNlightPower","right_name":"PTN光功率","parent_id":"threshold","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"netManSetting","right_name":"规则设定","parent_id":"netManInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pmDashboard","right_name":"集中性能管理","parent_id":"/pm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"systemState","right_name":"系统使用统计","parent_id":"safetySystem","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"topoCircuitQuery","right_name":"电路信息查询","parent_id":"/topo","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"bdmGis","right_name":"可视化分析","parent_id":"/bdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pm_limit_threshold","right_name":"性能越限规则","parent_id":"pmRule","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"flowrulesmanagerrules","right_name":"流量越限规则","parent_id":"flowRules","url":"","lcon":"","remark":"","status":1,"type":1,"menu_level":0,"menu_order":0},{"right_id":"hdmDashboard","right_name":"隐患库首页","parent_id":"/hdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/hdm","right_name":"隐患库管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"ptnlinkQuery","right_name":"PTN链路查询","parent_id":"trans_flow_composite_query","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/safety","right_name":"安全管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyLog","right_name":"日志管理","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetySafePloy","right_name":"安全策略","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"faultOriginReason","right_name":"跨专业故障场景分析","parent_id":"/bdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"opticalPower","right_name":"光功率误码隐患查询","parent_id":"pmhiddenanalyze","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"OTNlightPower","right_name":"OTN线路侧支路侧单板光功率门限","parent_id":"otn_opticalpower","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"smsManage","right_name":"短信通知与督办","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"siteDesign","right_name":"任务制定","parent_id":"siteInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"inspectionStatistics","right_name":"巡检统计","parent_id":"/opm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"flowRules","right_name":"流量越限规则管理","parent_id":"/flow","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"bdmquery","right_name":"故障综合查询","parent_id":"/bdm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/dashboard","right_name":"省运维概览视图","parent_id":"","url":"dashboard","lcon":"","remark":"DASHBOARD_WEB_URL","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"bdmqueryalarmquery","right_name":"告警查询","parent_id":"bdmquery","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/pm","right_name":"集中性能管理","parent_id":"","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"ptnportQuery","right_name":"PTN端口查询","parent_id":"trans_flow_composite_query","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"ptnbussinesQuery","right_name":"PTN业务查询","parent_id":"trans_flow_composite_query","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyUser","right_name":"用户管理","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"bdmquerycircuitquery","right_name":"电路查询","parent_id":"bdmquery","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnDashboardUI","right_name":"业务编排管理概览视图-UI","parent_id":"/sptn","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"CPUUtilizationRate","right_name":"CPU利用率","parent_id":"threshold","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"siteSetting","right_name":"规则设定","parent_id":"siteInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"netManDesign","right_name":"任务制定","parent_id":"netManInspection","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetySystem","right_name":"系统管理","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"recordQuery","right_name":"使用记录查询","parent_id":"safetySystem","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptninterdomainquery","right_name":"域间链路查询","parent_id":"sptnserviceissued","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"/sptnDashboard","right_name":"业务开通管理概览","parent_id":"/sptn","url":"sptnDashboard","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnbmbusinessquery","right_name":"业务查询","parent_id":"sptnbm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"bdmqueryfaultquery","right_name":"故障查询","parent_id":"bdmquery","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pm_ln_power_trend_alarm_query","right_name":"性能劣化隐患","parent_id":"pmhiddenanalyze","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hdZJDoneTaskList","right_name":"已办任务","parent_id":"hdZJProInfoManagement","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyDepartment","right_name":"部门管理","parent_id":"/safety","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pm_hang_pick","right_name":"摘挂牌管理","parent_id":"/pm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pm_hang_pick_statistics","right_name":"摘挂牌查询","parent_id":"pm_hang_pick","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"pm_hang_pick_rule","right_name":"摘挂牌规则","parent_id":"pm_hang_pick","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"subnetTopo","right_name":"系统子网拓扑","parent_id":"/res","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"OTNMagnifyingBoardlightPower","right_name":"OTN放大板光功率门限","parent_id":"otn_opticalpower","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"smsNoticeManage","right_name":"通知策略","parent_id":"smsManage","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"flow_limit_threshold","right_name":"流量越限规则","parent_id":"threshold","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"sptnrmmanualsynresources","right_name":"资源同步","parent_id":"sptnrm","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"trans_pm_index_query","right_name":"传输性能指标查询","parent_id":"trans_pm_composite_query","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"hdZJWorkListSearch","right_name":"工单查询","parent_id":"hdZJProInfoManagement","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"ptnringQuery","right_name":"PTN环网查询","parent_id":"trans_flow_composite_query","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetymenu","right_name":"菜单权限管理","parent_id":"safetyCompetence","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"safetyOperate","right_name":"操作日志管理","parent_id":"safetyLog","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0},{"right_id":"otn_opticalpower","right_name":"OTN光功率","parent_id":"threshold","url":"","lcon":"","remark":"","status":1,"type":0,"menu_level":0,"menu_order":0}],"district_list":[{"objectid":"1926","city":"省内二干","country":"","type":"干线"},{"objectid":"2","city":"杭州","country":"","type":"地市"},{"objectid":"5","city":"宁波","country":"","type":"地市"},{"objectid":"12","city":"温州","country":"","type":"地市"},{"objectid":"4","city":"绍兴","country":"","type":"地市"},{"objectid":"3","city":"湖州","country":"","type":"地市"},{"objectid":"7","city":"嘉兴","country":"","type":"地市"},{"objectid":"6","city":"金华","country":"","type":"地市"},{"objectid":"9","city":"衢州","country":"","type":"地市"},{"objectid":"10","city":"台州","country":"","type":"地市"},{"objectid":"11","city":"丽水","country":"","type":"地市"},{"objectid":"8","city":"舟山","country":"","type":"地市"}],"operate_list":[],"group_list":[],"email":null,"isopmadd":null,"operUser":null,"accType":null,"userType":null,"orgCode":null,"notes":null,"woNumber":null,"area":null,"supervisorId":null,"employeeNumber":null,"actualResponsible":null}},
    logout:{"success":true,"message":"登出成功！","userdata":true}
}

module.exports = {
  ...permission
}