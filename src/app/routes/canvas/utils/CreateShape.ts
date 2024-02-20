import { fabric } from 'fabric';


export class CreateShape {

    canvas: any;

    constructor(config: any) {
        this.canvas = config.canvas
    }


    /** 创建方形 */
    createRect(top: any, left: any) {
        const rect = new fabric.Rect({
            top,
            left,
            width: 40,
            height: 40,
            fill: '',
            stroke: 'black',
            strokeWidth: 1
        })
        this.canvas.add(rect)
        return rect
    }

    /** 创建文本 */
    createText(top: any, left: any) {
        const text = new fabric.IText('文本', {
            left: left,
            top: top,
            fontFamily: 'Arial',
            fontSize: 12,
            fill: 'black'
        });
        this.canvas.add(text)
        return text
    }

    /**创建线条 */
    createLine(top: any, left: any, config: any) {
        const props = {
            left: left,
            top: top,
            stroke: 'black',
            strokeWidth: 1,
        }
        if (config.noNeedTop) {
            delete props.left
            delete props.top
        }
        const line = new fabric.Line(config.points, props);
        this.canvas.add(line)
        return line
    }


    /** 创建图像 */
    createImg(top: any, left: any) {
        const props: any = {
            left: left,
            top: top,
        }
        fabric.Image.fromURL('assets/images/station.png', (img: any) => {
            img.set(props);
            this.canvas.add(img);
        });
    }


    /** 移除元素 */
    removeEle(ele: any): void {
        this.canvas.remove(ele)
        this.canvas.renderAll()
    }




}