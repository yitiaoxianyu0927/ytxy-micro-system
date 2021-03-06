/* 获取表单显示值 */

export function queryDisplayVal(obj) {

    let displayVal = "";

    let option = {

        "input":()=>{

            displayVal = obj.value;

        },
        "select":()=>{

            displayVal = obj.option.filter(v => {   ///获取显示值


                return  typeof obj.value == "string" ? 
                    v.value == obj.value : obj.value.indexOf(v.value) >=0
                
            }).map(v => v.name).join("|");
            
        },
        "datePicker":()=>{

            displayVal = typeof obj.value == "string" ? 
                    obj.value : Array.from(obj.value || []).join("|") ;
        }    


    };

    option[obj.elem]();


    return displayVal;
    
}



/* 获取表单默认值 */

export function queryDefaultVal({elem,value}) {

    let defaultVal = "";

    let option = {

        "input":()=>{

            defaultVal = "";

        },
        "select":()=>{

            defaultVal =   typeof value == "string" ? 
                    "" : [];
                
      
            
        },
        "datePicker":()=>{

            defaultVal = typeof value == "string" ? 
                    "" : [];
        }    


    }

    option[elem]();

    return defaultVal;
}