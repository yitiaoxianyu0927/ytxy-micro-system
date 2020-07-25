///拖拽布局

const dragLayout = {

    state:{

        displayDragLeftList:[
            { name: "巡检任务情况" ,id :"OpmTask" ,class:"opm-wapper" },
            { name: "全省故障情况", id: "BdmCondition" ,class:"bdm-wapper" },
            { name: "流量越限情况", id: "FlowOver" ,class:"flow-wapper" },
        ],
        displayDragRightList:[
            { name: "我的收藏", id: "HistoryRecord" ,class:"collect-wapper" },
            { name: "公告", id: "HistoryNotice" ,class:"notice-wapper" },
            { name: "割接状态占比", id: "NcoStatus" ,class:"nco-wapper" },
        ],
        displayDragOtherList:[]
    },
    mutations:{
       
        SET_LEFT_LIST:(state,list) => {

            state.displayDragLeftList = list;
        },

        SET_RIGHT_LIST:(state,list) => {

            state.displayDragRightList = list;
        },

        SET_OTHER_LIST:(state,list) => {

            state.displayDragOtherList = list;
        }

    },
    actions:{
         
        changeLeftList:({commit},list) => {

           commit("SET_LEFT_LIST",list);  

        },
        changeRightList:({commit},list)  =>  {

           commit("SET_RIGHT_LIST",list);  

        },
        changeOtherList:({commit},list)  =>  {

           commit("SET_OTHER_LIST",list);  

        }    


    }


}



export default dragLayout;