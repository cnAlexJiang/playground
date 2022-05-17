<script>

export default {
    name: 'demo1',
    inheritAttrs: false,
    render() {
        console.log(this)
        // return this.$createElement('div',{},[this.$slots.default && this.$slots.default[0]])
        return this.$slots.default && this.$slots.default[0]
    }
};
</script>
