import { queryDisplayVal , queryDefaultVal } from "./utils";

export default {

    data(){

        return {

            tagList:[]
        }


    },
    methods:{

        addTagItem(){   ///添加tab

            //console.log("editOption",this.editOption)

            const { id , name , value , displayVal } = this.editOption;

            this.tagList.push({
                id,name,value,displayVal
            })
            
            this.editOption = {};
            

            this.searchType.option = this.searchType.option.map(item => {

                item.id == id ? item.selected = true : null;

                return item;
            });


            this.HandleClickSearchBar();

            this.updatePanelItem();

        },
        removeTagItem(obj){


            let selectedList = this.tagList;

            let id = obj.id ? obj.id : selectedList[selectedList.length - 1].id;  //选择|删除键最后一个
            
            this.searchType.option = this.searchType.option.map(item => {

                item.id == id ? item.selected = false : null;

                return item;
            });

            this.tagList = this.tagList.filter(item => item.id != id);

            this.searchType.value = "";

            this.updatePanelItem();  ///修改下边显示区内容

        },
        updateTagItem(id,value,option){

            let tagList = this.tagList;

            let tagItem = tagList.filter(item => item.id == id);

            let displayVal = queryDisplayVal(option);

            if(tagItem.length > 0){


                this.tagList = tagList.map(item => {

                    if(item.id == id) 

                        item = Object.assign({...item},{
                            value,displayVal
                        })

                    return item;
                })

            }else{

                let { name } = option;

                this.tagList.push({
                    id,value,name,displayVal
                })
            }


        },
        updatePanelItem(){   ///修改下边详细列表的

            let tagList = this.tagList;

            let { row } = this.ListForm;

            this.ListForm.row = row.map(item => {

                let _item = Array.from([...item]);

                item = _item.map(v => {   ////更新下边表单数据

                    let checkItem = tagList.filter(ev => ev.id == v.id);  ///如果有

                    let obj = { ...v };

                    if(checkItem.length > 0) {

                        let { value } = checkItem[0];

                        obj = Object.assign({...v},{ value });
                    
                    }else{ ///如果没有value变为默认值

                        let defaultVal = queryDefaultVal(obj);

                        obj.value = defaultVal;

                    }

                    return obj;

                })

                return item;
            })



        },

    },
    mounted(){


    }



}