import ducati_monster_803 from "../assets/Ducati_monster_797.png";

class motorConstruct {
  constructor(
    Brand,
    model,
    year,
    cc,
    hp,
    nm,
    weight,
    setHeight,
    brake,
    color,
    desc,
    photo
  ) {
    this.Brand = Brand;
    this.model = model;
    this.year = year;
    this.cc = cc;
    this.hp = hp;
    this.nm = nm;
    this.weight = weight;
    this.setHeight = setHeight;
    this.brake = brake;
    this.color = color;
    this.desc = desc;
    this.photo = photo;
  }
}

export const motorSpec = [
  new motorConstruct(
    "Ducati",
    "Monster",
    2019,
    803,
    73,
    67,
    175,
    805,
    "ABS",
    ["#DF1F26", "#141414", "#FFFFFF"],
    "Fresh vibes. Sporty soul.",
    ducati_monster_803
  ),
];

export const languages = [
  {
    Displacement: "Kubatūra",
    Horse_Power: "Zirgspēki",
    Torque: "Griezes moments",
    Dry_Weight: "Pamat svars",
    set_heigh: "Sēd pozīcijas augstumns",
    safety: "Drošiba",
  },
];
