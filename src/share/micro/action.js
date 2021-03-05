import { initGlobalState } from "qiankun"; 
import store from "@/store";

///父应用发送信息--样例

// actions.sendMessageToChild({   
//     ...obj
// })
                


///子应用获取信息---样例

// actions.receiveMessageForParent((state) => { //监听全局状态
//     console.log("子应用",state)
// }, true);

// actions.onGlobalStateChange((state) => { //监听全局状态
//     console.log("子应用",state)
//     this.parentMsg = state.parentInputMsg;
// }, true);


function emptyAction() {  //设置一个actions实例
    // 提示当前使用的是空 Action
    console.warn("Current execute action is empty!");
}


class Actions {

  constructor(){


    ///父应用初始化

    const initialState = {
      //这里写初始化数据
    };

    this.parentAction = initGlobalState(initialState);

    this.parentAction.onGlobalStateChange((state, prev) => {//监听公共状态的变化
      console.log("主应用: 变更前",prev);
      console.log("主应用: 变更后",state);
      //store.commit('setProject',state);//这里我把公共状态存到主应用的vuex里了
    });


    //子应用初始化

    this.childActions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction,
    };
        
  }
  sendMessageToChild(obj = {}){  ///传入数据为对象

    this.parentAction.setGlobalState({
        ...obj
    })

  }

  // receiveMessageForParent(){  //接收父应用信息

  //   return new Promise((resolve,reject) => {

  //     this.onGlobalStateChange((state) => { //监听全局状态
  //         console.log("子应用",state)
  //         resolve(state)
  //     }, true);

  //   })

     
  // }


  /**
    * 设置 actions
    */
  setActions(actions) {
      this.childActions = actions;
  }

  /**
    * 映射
    */
  onGlobalStateChange(...args) {
      return this.childActions.onGlobalStateChange(...args);
  }

  /**
    * 映射
    */
  setGlobalState(...args) {
      return this.childActions.setGlobalState(...args);
  }


}
 

const actions = new Actions();

export default actions;
