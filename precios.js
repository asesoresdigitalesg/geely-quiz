// ══════════════════════════════════════════════════════════════
// PRECIOS Y TASAS DEL MES — el único lugar que se actualiza cada mes con el boletín de Geely.
// Lo usan: el quiz, Arma tu plan, la calculadora EM-i, ¿Cuánto vale tu auto? y las alertas del CRM.
// MES: el mes del boletín (se muestra en las páginas).
// models: precio de cada versión, promoción ("bono") y tasa ("tasa desde X%").
// ══════════════════════════════════════════════════════════════
const MES = 'Octubre 2026';
const models = {
  emgrand: { name: "EMGRAND", full: "Geely Emgrand 2026 · Sedan", bono: "Precio especial con bono de hasta $60,000 o Seguro Gratis", tasa: "Tasa desde 10.99%",
    versions: [ { ver: "GC", price: 264990, m: [4100, 5100] }, { ver: "GL", price: 297990, m: [4700, 5700] }, { ver: "GF", price: 313990, m: [4900, 6100] } ] },
  gx3pro: { name: "GX3 PRO", full: "Geely GX3 Pro 2026 · SUV Compacto", bono: "Precio especial (bono de $35,000) o Seguro Gratis", tasa: "Tasa desde 10.99% o 0% CxA",
    versions: [ { ver: "GC", price: 294990, m: [4700, 5700] }, { ver: "GF", price: 324990, m: [5200, 6300] } ] },
  coolray_l: { name: "COOLRAY LITE", full: "Geely Coolray Lite 2026 · SUV", bono: "Tasa desde 10.99% o 0% comisión por apertura", tasa: "Tasa desde 10.99% o 0% CxA",
    versions: [ { ver: "GS MT", price: 339990, m: [5400, 6600] }, { ver: "GS CVT", price: 359990, m: [5700, 6900] } ] },
  ex2: { name: "EX2", full: "Geely EX2 2026 · SUV Electrico", bono: "Desde 12 MSI o Bono de $23,000 + 0% CxA · Incluye Wallbox", tasa: "12 MSI o tasa desde 10.49% (Plan Sostenible)",
    versions: [ { ver: "GL", price: 366900, m: [5800, 7100] }, { ver: "GF", price: 396900, m: [6300, 7700] } ] },
  new_coolray: { name: "NEW COOLRAY", full: "Geely New Coolray 2026 · SUV", bono: "Tasa desde 10.99% o 0% comisión por apertura", tasa: "Tasa desde 10.99% o 0% CxA",
    versions: [ { ver: "GC PLUS", price: 399990, m: [6400, 7700] }, { ver: "GL PLUS", price: 419990, m: [6700, 8100] }, { ver: "GF PLUS", price: 469990, m: [7500, 9100] } ] },
  cityray: { name: "CITYRAY", full: "Geely Cityray 2026 · SUV Compacto", bono: "Enganche desde $48,899 + 0% CxA", tasa: "Tasa desde 10.99% o 0% CxA (Plan CAMP)",
    versions: [ { ver: "GF Bitono", price: 528990, m: [8400, 10200] } ] },
  starray26: { name: "STARRAY 2026", full: "Geely Starray 2026 · SUV Premium", bono: "Tasa desde 6.73% + 1 año de seguro gratis o 24 meses sin intereses", tasa: "Tasa desde 6.73%",
    versions: [ { ver: "GL 2.0", price: 599990, m: [9600, 11500] }, { ver: "GF 2.0", price: 655990, m: [10500, 12600] } ] },
  ex5emi: { name: "EX5 EM-I", full: "Geely EX5 EM-i 2026 · SUV Hibrido enchufable", bono: "Versión GL: Bono de hasta $40,000 o $23,200 + Seguro Gratis · Incluye Wallbox", tasa: "Tasa desde 10.49% + 0% CxA",
    versions: [ { ver: "GL (c/bono)", price: 529990, m: [8500, 10200] }, { ver: "GF", price: 599990, m: [9600, 11500] } ] },
  ex5: { name: "EX5", full: "Geely EX5 2026 · SUV Electrico", bono: "Tasa desde 6.25% + 2 mantenimientos gratis o Bono de $50,000 + 0% CxA · Incluye Wallbox", tasa: "Tasa desde 6.25%",
    versions: [ { ver: "GF", price: 699900, m: [11100, 13500] } ] },
  okavango: { name: "OKAVANGO", full: "Geely Okavango 2026 · SUV Familiar 7 pasajeros", bono: "0% comisión por apertura o tasa desde 10.99%", tasa: "Tasa desde 10.99% + 0% CxA",
    versions: [ { ver: "GF Suite", price: 729888, m: [11700, 14000] } ] },
  monjaro: { name: "MONJARO", full: "Geely Monjaro 2026 · SUV Premium", bono: "Tasa desde 6.47% (subsidio a tasa) o 8.05% + Seguro Gratis", tasa: "Tasa desde 6.47%",
    versions: [ { ver: "GF", price: 699900, m: [11100, 13500] } ] },
  // Monjaro EM-i: precios oficiales del lanzamiento (16 oct 2026). La tasa es de referencia: cámbiala cuando salga en el boletín.
  monjaroemi: { name: "MONJARO EM-I", full: "Geely Monjaro EM-i · SUV Híbrida enchufable", bono: "Lanzamiento: $20,000 de descuento en las primeras 500 unidades", tasa: "Tasa desde 10.49% (referencia)",
    versions: [ { ver: "GL", price: 747900, m: [12000, 15000] }, { ver: "GF", price: 819900, m: [13200, 16400] } ] }
};
