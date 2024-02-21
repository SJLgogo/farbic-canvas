import { tapable } from "../utils/Tapable";


export class Tips {

    constructor() {
        this.initTipHook()
    }

    initTipHook(): void {
        tapable._hooks.tipsHook.tap('接收位置信息', (e: any) => this.operateTip(e))
    }

    operateTip(e: any): void {

        let timer = setTimeout(() => {
            const tipElement: any = document.querySelector('.tip');
            tipElement.style.left = e.x + 'px';
            tipElement.style.top = e.y + 'px';
            timer && clearTimeout(timer)
        })


    }

}