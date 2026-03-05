export type DrivingEvent = {
  type: string
  severity: string
  message: string
}

export function analyzeDrivingData(data:{
  speed:number
  brakeForce:number
  laneOffset:number
  eyeClosure:number
}){

const events:DrivingEvent[] = []

if(data.brakeForce > 8){
events.push({
type:"collision",
severity:"high",
message:"Possible collision detected"
})
}

if(data.speed > 120){
events.push({
type:"speed_violation",
severity:"medium",
message:"Speed exceeds safe limit"
})
}

if(Math.abs(data.laneOffset) > 0.8){
events.push({
type:"lane_departure",
severity:"medium",
message:"Vehicle leaving lane"
})
}

if(data.eyeClosure > 0.7){
events.push({
type:"driver_fatigue",
severity:"high",
message:"Driver fatigue detected"
})
}

return events

}