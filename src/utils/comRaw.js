import getImageRaw from "@/utils/getImageRaw.js";
import FEBtn from "@/components/FEBtn.vue";
import FEInput from "@/components/FEInput.vue";
import FERadio from "@/components/FERadio.vue";
import {shallowRef} from "vue";
import {styleFormat} from "@/utils/styleFormat.js";
export const comRawLoad = [
    {
        name: '按钮',
        style: styleFormat,
        component: shallowRef(FEBtn),
        key: 'FEButton',
        icon: getImageRaw('icon','vue','svg'),
        position: {
            X: 0,
            Y: 0
        }
    },
    {
        name: '输入',
        style: styleFormat,
        component: shallowRef(FEInput),
        key: 'FEInput',
        icon: getImageRaw('icon','vue','svg'),
        position: {
            X: 0,
            Y: 0
        }
    },
    {
        name: '单选',
        style: styleFormat,
        component: shallowRef(FERadio),
        key: 'FERadio',
        icon: getImageRaw('icon','vue','svg'),
        position: {
            X: 0,
            Y: 0
        }
    }
]
