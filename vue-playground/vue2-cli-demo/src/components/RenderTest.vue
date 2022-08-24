<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  render(h) {
    const root = {
      width: '100%',
      height: '100%',
      display: 'flex',
      'flex-shrink': 0,
      'flex-direction': 'column',
      'overflow-x': 'hidden',
      'overflow-y': 'hidden',
    }
    const style1 = {
      width: '100%',
      height: '56px',
      padding: '0px 24px 0px 24px',
      display: 'flex',
      flex: 'unset',

      'flex-shrink': 0,
      'flex-direction': 'row',
      'overflow-x': 'unset',
      'overflow-y': 'unset',
      'flex-grow': 0,
      'justify-content': 'space-between',
      'align-items': 'center',
      border: ' 1px solid blue',
    }
    const style2 = {
      width: '100%',
      height: 'full',
      display: 'flex',
      'flex-shrink': 1,
      'flex-direction': 'row',
      'overflow-x': 'auto',
      'overflow-y': 'auto',
      border: ' 1px solid green',
      'flex-grow': 1,
    }
    return h('div', { style: root }, [
      h('div', { style: style1 }, 'top'),
      h('div', { style: style2 }, 'bottom'),
    ])
  },
}
</script>
