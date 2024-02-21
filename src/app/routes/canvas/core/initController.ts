import { fabric } from 'fabric';

const initControls = (canvas: any) => {

    // 选中样式
    fabric.Object.prototype.set({
        transparentCorners: false,
        borderColor: '#51B9F9',
        cornerColor: '#FFF',
        borderScaleFactor: 2.5,
        cornerStyle: 'circle',
        cornerStrokeColor: '#0E98FC',
        borderOpacityWhenMoving: 1,
    });
}


export {
    initControls
}