<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []
    
    // console.log(context.$parent)

    const isCollapse = context.parent.$children.length == 0;

    if(!isCollapse){
    
        const parent = context.parent.$children[0].$el.children[0];
        let realWidth = parent.clientWidth - parent.style.paddingLeft.replace(/px/g,"") - 20;
        let iconW = 0;


        if (icon) {
          iconW = 24;
          realWidth = realWidth - iconW;
        }

        
        vnodes.push(
          <el-tooltip 
            class="item" 
            effect="dark" 
            content={ title } 
            placement="right"
            disabled={ title.length < Math.ceil(realWidth / 14)  } 
            popper-class="menu-tooltip"
          >
            <div>
              { icon ? 
                  <i class={icon}/> : '' 
              }
              { title ? 
                  <span class="menu-title">{(title)} </span> : ''
              }
            </div>
          </el-tooltip>
        )

    }else{
         
        vnodes.push( 
            <div>
              { icon ? 
                  <i class={icon}/> : '' 
              }
              { title ? 
                  <span class="menu-title">{(title)}</span> : ''
              }
            </div>
        )     
    }   


    return vnodes
  }
}
</script>
