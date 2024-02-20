import { SyncHook } from "tapable"


class Tapable {

    _hooks = {
        canvasSelectHook: new SyncHook(['params']),
        canvasSelectsHook: new SyncHook(['params']),
    }

}


export const tapable = new Tapable()