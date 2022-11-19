/* Given the molecular mass of two molecules M1​ and M2​, their masses present m1​ and m2​ in a vessel of volume V at a specific temperature T, find the total pressure Ptotal​ exerted by the molecules. Formula to calculate the pressure is:
Ptotal=(m1M1+m2M2)RTV\LARGE P_{total} = {{({{m_1} \over {M_1}} + {{m_2} \over {M_2}}) R T} \over V}Ptotal​=V(M1​m1​​+M2​m2​​)RT​
Input

Six values :

    M1​, M2​: molar masses of both gases, in grams (g)
    m1m​ and m2​: present mass of both gases, in  g⋅mol−1\ g \cdot mol^{-1} g⋅mol−1
    V: volume of the vessel, in  dm3\ dm^3 dm3
    T: temperature, in  °C\ \degree C °C

Output

One value: PtotalP_{total}Ptotal​, in units of atmatmatm.
Notes

Remember: Temperature is given in Celsius while SI unit is Kelvin (KKK).  0°C=273.15K\ 0\degree C = 273.15K 0°C=273.15K

The gas constant  R=0.082dm3⋅atm⋅K−1⋅mol−1\ R = 0.082dm^3 \cdot atm \cdot K^{-1} \cdot mol^{-1} R=0.082dm3⋅atm⋅K−1⋅mol−1
*/
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const R = 0.082
  temp = temp + 273.15
  return ((givenMass1 / molarMass1 + givenMass2 / molarMass2) * R * temp) / volume
}