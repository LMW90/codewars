// given an array of integer pairs, where first integer represents people entering the bus and second represents people leaving, return the final number of people on the bus after the last stop (last integer pair)

var number = function(busStops){
  return busStops.reduce((acc, item)=> acc + item[0] - item[1], 0)
}