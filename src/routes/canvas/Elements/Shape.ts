
export const BaseELeList:ModeShape[]=[
    {mode:'select' , iconSrc:'assets/images/mouse.png'},
    {mode:'fhpath' , iconSrc:'assets/images/draw.png'},
    {mode:'line' , iconSrc:'assets/images/line.png'},
]

export const DragList:ModeShape[]=[
    {mode:'text' , iconSrc:'assets/images/text.png'},
    {mode:'rect' , iconSrc:'assets/images/rect.png'},
]

export const operateList:any[]=[
    {mode:'next' , iconSrc:'assets/images/next.png'},
    {mode:'last' , iconSrc:'assets/images/last.png'},
]


export interface ModeShape{
    mode:Mode,
    iconSrc?:string
}

export type Mode = 'select' | 'fhpath' | 'line' | 'text' | 'rect'

