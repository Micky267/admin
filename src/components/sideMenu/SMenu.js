import Menu from 'ant-design-vue/es/menu'
// import Icon from 'ant-design-vue/es/icon'

const { Item, SubMenu } = Menu
export default {
  name: 'SMenu',
  props: {
    menu: {
      required: true,
      type: Array
    },
    mode: {
      required: false,
      type: String,
      default: 'inline'
    },
    theme: {
      required: false,
      type: String,
      default: 'light'
    },
    inlineCollapsed: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedKeys: [] // 当前选中的菜单项 key 数组
    }
  },
  methods: {
    // 渲染item
    renderItem(item) {
      if (item) {
        if (item.children && item.children.length) {
          return this.renderSubMenu(item)
        } else {
          return this.renderMenuItem(item)
        }
      }
    },
    // 渲染有子节点的item
    renderSubMenu(item) {
      if (item.hidden === true) {
        return null
      }
      const treeData = item.children.map(cI => {
        if (cI.children && cI.children.length) {
          return this.renderSubMenu(cI)
        } else {
          return this.renderMenuItem(cI)
        }
      })
      return (
        <SubMenu key={item.path}>
          <span slot="title">{item.title}</span>
          {treeData}
        </SubMenu>
      )
    },
    // 渲染根节点的item
    renderMenuItem(item) {
      if (item.hidden === true) {
        return null
      }
      const att = {
        key: item && item.path
      }
      return (
        <Item {...att}>
          <router-link to={item.path}>{item.title}</router-link>
        </Item>
      )
    }
  },
  render() {
    const { mode, theme, inlineCollapsed } = this
    const vmodel = this.selectedKeys
    const props = {
      mode,
      theme,
      inlineCollapsed
    }
    const on = {
      select: obj => {
        this.selectedKeys = obj.selectedKeys
      }
      // openChange: this.onOpenChange
    }
    const menuTree = this.menu.map(item => {
      if (item.hidden === true) {
        return null
      }
      return this.renderItem(item)
    })
    return <Menu {...{ vmodel, props, on }}>{menuTree}</Menu>
  }
}
