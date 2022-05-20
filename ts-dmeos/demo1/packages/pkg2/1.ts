import { nanoid } from 'nanoid';

type callBackNameTypes = `_bridge_appStorage_${string}`
const callBackName = `_bridge_appStorage_${nanoid(5)}`

interface TbridgeResponse{}

declare global{
  interface Window{
    // [callBackName: callBackNameTypes]:(obj:TbridgeResponse)=>void
    [xx: string]:(obj:TbridgeResponse)=>void
  }
}

window[callBackName] =  (payload:any) => {
  console.log(payload)
}
