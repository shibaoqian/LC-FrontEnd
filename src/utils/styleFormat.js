import {cloneDeep} from "lodash";

export const styleFormat = [
    {
        style: 'width',
        name: '宽度',
        value: 'auto'
    },
    {
        style: 'height',
        name: '高度',
        value: 'auto'
    },
    {
        style: 'background-color',
        name: '背景颜色',
        value: ''
    }
]

export function styleRewrite(styles) {
    const ary = cloneDeep(styleFormat)
    ary.forEach((res,index) => {
        Object.keys(styles).forEach(resStyle => {
            // debugger
            if (res.style === resStyle){
                ary[index].value = styles[resStyle]
            }
        })

    })
    return ary
}
