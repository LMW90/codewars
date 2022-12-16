/* Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
input

Two arrays are given :

    arr_val (value array), consists of 3 elements
        1st element : mass of obj 1
        2nd element : mass of obj 2
        3rd element : distance between their centers
    arr_unit (unit array), consists of 3 elements
        1st element : unit for mass of obj 1
        2nd element : unit for mass of obj 2
        3rd element : unit for distance between their centers

mass units are :

    kilogram (kg)
    gram (g)
    milligram (mg)
    microgram (μg)
    pound (lb)

distance units are :

    meter (m)
    centimeter (cm)
    millimeter (mm)
    micrometer (μm)
    feet (ft)

Note

value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)
*/
solution = (v, u) => {
  // object for unit conversion
  const units = {"g": .001, "kg": 1, "mg": .000001, "μg": .000000001, "lb": .453592,
                "m": 1, "cm" : .01, "mm": .001, "μm": .000001, "ft": .3048}
  // grav constant
  const g = 6.67 * 10 ** -11
  return g * (v[0]*units[u[0]]) * (v[1]*units[u[1]]) /(v[2]*units[u[2]]) ** 2
};