/* You are given a list of cogs in a gear train

Each element represents the number of teeth of that cog

e.g. [100, 75] means

    1st cog has 100 teeth
    2nd cog has 75 teeth

If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?

(use negative numbers for anti-clockwise rotation)
Notes

    no two cogs share the same shaft
*/
function cogRpm(cogs) {
  // pass through cogs modifing RPM in the go
  return cogs.reduce((rpm, teeth, index) => index === 0 ? 1 : -rpm*(cogs[index-1])/teeth, 0);
}