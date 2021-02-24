export function getUrl(name = "x_token",complex = false) {
    var reg = new RegExp("[^\?&]?" + encodeURI(name) + "=[^&]+");
    var arr = window.location.href.match(reg);
    if (arr != null) {
      return  complex ?
		decodeURIComponent(arr[0].substring(arr[0].search("=") + 1)) :		
		decodeURI(arr[0].substring(arr[0].search("=") + 1));
    }


    return "";
}

export function getUUID() {

  var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;

}


/**
 * 改变树节点方法
 * @param complex 是否复杂加密

*/

export function contractUrl(url,params,complex = false){

	let paramUrl = "";

	for (let k in params) {
        if (params.hasOwnProperty(k)) {
            let value = params[k] || ''
            paramUrl = paramUrl + '&' + k + '=' +  (complex ?  encodeURIComponent(value) : encodeURI(value))
        }
    }
	
    return url + (url.indexOf('?') < 0 ? '?' : '&') + ( paramUrl ? paramUrl.substring(1) : '' )

}

/**
 * 改变树节点方法
 * @param treeData 树形数据
 * @param updateOption 修改的配置
 * @param findkey 查找的key
 * @param findval 查找的值
*/

export function updateTreeChild(treeData,updateOption,findkey,findval){  


	let fn = (data) => {

			let tree = [];
	
			for(let [i,v] of data.entries()){


					if(v.children){

							v.children =  fn(v.children);

							
					}

					
					if(v[findkey] == findval){

							v = updateOption; 
								
					}

					tree.push(v)
			} 

			return tree;

	}

	

	return fn(treeData);

}



export function addTreeOptionForAll(treeData,option){   ///所有树添加属性


	let fn = (data) => {

			let tree = [];
	
			for(let [i,v] of data.entries()){


					if(v.children){

							v.children =  fn(v.children);

							
					}

					option.uid ? option.uid = getUUID() : null;
     
					v = Object.assign(v,option);

					tree.push(v)
			} 

			return tree;

	}

	

	return fn(treeData);

}



/**
 * 树降维
 * @param treeData 树形数据
 * @param key 遍历的key
 * @param parentKey 父级key名称
*/


export function TreeToFlat(treeData,key = "id",parentKey = "parentId"){   

    let treeList = [];

	let fn = (data,parentVal = "") => {

			let tree = [];
	
			for(let [i,v] of data.entries()){

				
				if(v.children){

					fn(v.children,v[key]);
                    
						
				}

                v[parentKey] = parentVal;

				treeList.push(v);

					
			} 

			return tree;

	}

	fn(treeData)

	return treeList;

}