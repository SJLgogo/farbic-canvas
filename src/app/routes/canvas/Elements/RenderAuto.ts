import { BaseDataService } from "../Base/base.data.service";
import { Line } from "../enum/Base.enum";
import { CreateShape } from "../utils/CreateShape";
import { fabric } from 'fabric';

export class RenderAuto extends CreateShape {

    baseData: any;

    baseDataService: BaseDataService

    config: any;

    constructor(config: any) {
        super({ canvas: config.canvas })
        this.baseDataService = config.baseDataService
        this.baseData = this.baseDataService.get()
    }

    render(data: any) {
        for (let i = 0; i < data.length; i++) {
            const type = data[i].type
            switch (type) {
                case 'allFronts':
                    this.drawAllFronts(data[i])
                    break;
                default:
                    break;
            }
        }
    }


    /** 绘制全线 */
    drawAllFronts(fronts: any): void {
        let lineWidth = fronts.lineWidth, drawWidth = 0, lineYIdx = 0
        let lineY = this.baseDataService.getFrontY(fronts.lineWidth)  // 线路高度Y

        while (lineWidth > 0) {

            if (lineWidth > this.baseData.realCanvasWidth) {
                lineWidth = lineWidth - this.baseData.realCanvasWidth
                drawWidth = this.getCanvasDrawEndX(this.baseData.realCanvasWidth)
                lineYIdx++
                this.drawLine({
                    left: 0,
                    top: lineY * lineYIdx,
                    points: [0, 0, drawWidth, 0]
                })
                continue;
            }

            if (lineWidth < this.baseData.realCanvasWidth) {
                drawWidth = this.getCanvasDrawEndX(lineWidth)
                lineWidth = 0
                lineYIdx++
                this.drawLine({
                    left: 0,
                    top: lineY * lineYIdx,
                    points: [0, 0, drawWidth, 0]
                })
                continue;
            }

        }

    }

    drawLine(config: any): void {
        const props = {
            left: config.left,
            top: config.top,
            stroke: 'black',
            strokeWidth: 1
        }

        const upLine = new fabric.Line(config.points, { ...props, top: config.top + Line.UpDownSpacing });
        const downLine = new fabric.Line(config.points, { ...props, top: config.top - Line.UpDownSpacing });

        this.canvas.add(upLine)
        this.canvas.add(downLine)
    }


    /** 返回画布绘制的距离 */
    getCanvasDrawEndX(realWidth: number): number {
        return Math.floor(realWidth * this.baseData.horizontalProportion)
    }



    override createLine(top: any, left: any, config: any) {
        const props = {
            left: left,
            top: top,
            stroke: 'black',
            strokeWidth: 1
        }
        if (config.noNeedTop) {
            delete props.left
            delete props.top
        }
        const line = new fabric.Line(config.points, props);
        this.canvas.add(line)
        return line
    }




}