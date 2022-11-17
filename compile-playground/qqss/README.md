# qqss

> 可用用于 VDOM 中提供完整的 querySelector 支持

> 可用于 VCSSOM 中提供完整的 CSSRule 匹配

> 不依赖 `new Function` 适用性更广效率更高，当前效率大概是 jsdom -> [nwsapi](https://github.com/dperini/nwsapi) 的两倍

> 当前支持如下选择器 :
> * tagName . # * 
    [attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]
    empty root not is 
    only-child only-of-type first-child last-child first-of-type last-of-type
    nth-last-child nth-child nth-last-of-typ nth-of-type
> * 可通过 configure 方法自定义扩展更多支持

> 使用方式参考 ： [test.ts](./js/test.ts)
