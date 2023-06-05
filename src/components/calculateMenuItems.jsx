import lloydsAlgorithm from "../algorithms/lloyds-algorithm";
import calculateAverageDistance from "../algorithms/calculate-average-distance";

function calculateMenuItems(data, size, scale) {
  const amountOfmenuItems = Object.keys(data).length;

  const newCoords = lloydsAlgorithm(size.width / scale, size.height / scale, amountOfmenuItems, 4);
  const averageDistance = calculateAverageDistance(newCoords);

  const menuItems = Object.fromEntries(
    Object.entries(data).map(([key, value], index) => [
      key,
      {
        ...value,
        x: newCoords[index][0] * scale,
        y: newCoords[index][1] * scale,
        size: averageDistance * scale*0.9,
      },
    ])
  );

  return menuItems;
}

export default calculateMenuItems;