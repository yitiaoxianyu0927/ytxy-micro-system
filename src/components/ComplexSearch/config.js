export const ListForm = {

    option:{

        labelWidth:100,
        labelPosition:"left"

    },
    row:[
        
        [
            {
                id:"search",
                elem:"input",
                name:"搜索框",
                value:"",
                col:6,
                labelWidth:60,
                width:180
            },
            {
                id:"select",
                elem:"select",
                name:"单选下拉框",
                value:"",
                col:8,
                filterable:true,
                option:[{
                    name:"全部",value:""
                },{
                    name:"下拉框1",value:"select-1"
                },{
                    name:"下拉框2",value:"select-2"
                }]
            },
            {
                id:"multSelect",
                elem:"select",
                name:"多选下拉框",
                multiple:true,
                value:[],
                col:8,
                filterable:true,
                option:[{
                    name:"多选下拉框1",value:"multSelect-1"
                },{
                    name:"多选下拉框2",value:"multSelect-2"
                },{
                    name:"多选下拉框3",value:"multSelect-3"
                }]
            }   

        ],[

            {

                id:"date",
                elem:"datePicker",
                name:"日期",
                type:"date",
                col:6,
                labelWidth:80,
                value:[],
                labelWidth:60,
                width:180

            },
            {

                id:"daterange",
                elem:"datePicker",
                name:"日期段",
                type:"daterange",
                col:12,
                value:[]

            }


        ]

    ]



}