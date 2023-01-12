export default function getNextLunchtime(hours: any, minutes: any) {
  var lunchtime = new Date()

  lunchtime.setHours(hours)
  lunchtime.setMinutes(minutes)
  lunchtime.setSeconds(0)
  lunchtime.setMilliseconds(0)

  // if we've already had lunch today, start planning
  // tomorrow's lunch
  if ((lunchtime as unknown as number) < Date.now())
    lunchtime.setDate(lunchtime.getDate() + 1)

  return lunchtime
}
