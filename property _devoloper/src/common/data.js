class inputAreaData {
  constructor(name, type, floor, size, available, desc) {
    this.name = name;
    this.type = type; //  1==office, 2 == warehouse,
    this.floor = floor;
    this.size = size;
    this.available = available;
    this.desc = desc;
  }
}
export let areaData = [
  { address: "kalna iela 20" },
  new inputAreaData("1", 2, 2, 100, false, null),
  new inputAreaData("2", 2, 2, 200, true, null),
  new inputAreaData("3", 1, 2, 200, true, null),
  new inputAreaData("4", 1, 2, 200, true, null),
  new inputAreaData("5", 1, 2, 200, true, null),
  new inputAreaData("6", 2, 2, 200, true, null),
  new inputAreaData("7", 2, 2, 200, true, null),
  new inputAreaData("8", 1, 2, 600, false, null),
  new inputAreaData("9", 2, 2, 200, true, null),
  new inputAreaData("10", 1, 2, 400, true, null),
  new inputAreaData("11", 1, 2, 1000, false, null),
  new inputAreaData("12", 2, 2, 200, true, null),
  new inputAreaData("13", 2, 2, 200, true, null),
  new inputAreaData("14", 3, 2, 200, true, null),
];
