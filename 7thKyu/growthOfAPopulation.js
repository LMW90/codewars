function nbYear(p0, percent, aug, p, years=0) {
    if (p0 >= p){
      return years;
    }
    years++;
    p0 = Math.floor(p0 * (1 + percent / 100) + aug);
    return nbYear(p0, percent, aug, p, years);
  }