function nbYear(p0, percent, aug, p, years=0) {
    if (p0 >= p){
      return years;
    }
    years++;
    // console.log(years)
    return nbYear(p0 * (1 + 0.01 * percent) + aug, percent, aug, p, years);
}