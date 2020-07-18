<template>
    <div class="custom-tree">
      <el-tree
          :data="treeData"
          node-key="uid"
          default-expand-all
          ref="custom-tree"
          :expand-on-click-node="false"
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag"
          :props="defaultProps"
          @node-click="handleNodeClick"
      >
          <span class="custom-tree-node" slot-scope="{ node, data }" >
              <span class="tree-label">{{ data.meta.title }}</span>
              <span>
                <i class="el-icon-circle-plus" @click.prevent.stop="() => append(data)"></i>
                <i class="el-icon-error" @click.prevent.stop="() => remove(node, data)"></i>
              </span>
          </span>
      </el-tree>

    </div>
</template>



<script>

  import { getUUID } from "@/utils/common.js"

  export default {
    data() {
      return {

        data: [],
        hoverLabel:""
      
      };
    },
    model:{

      prop:"treeData",
      emit:"change"

    },
    props:{

      treeData:{

        type:Array,
        default:[] 

      },
      defaultProps:{
        
        type:Object,
        default: () => ({

          children: 'children',
          label: 'label'

        })

      }

    },
    methods: {

      append(data) {
        
        const newChild = { 
             
          type:"router",
          uid:getUUID(),
          id:"",
          env:"development",
          meta:{ title:"新菜单1",Cache:true },

        };

        if (!data.children) {
          this.$set(data, 'children', []);
        }

        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      handleNodeClick(...args){
         console.log("node-click",...args)
        this.$emit("node-click",...args);
      },
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
      },
      queryTreeData(){

        this.$emit("change",this.treeData)
      },
      
      
    }
  };
</script>



<style lang="less" scoped>

  .custom-tree{

    .custom-tree-node{

      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
          
      /deep/.el-icon-circle-plus{

        color: rgb(57,218,90);
        margin-left: 10px;

      } 
      .el-icon-error{

        color: rgb(255,129,56); 
      
      }
      
    }
    
  } 

  .tree-label{


  }

</style>
