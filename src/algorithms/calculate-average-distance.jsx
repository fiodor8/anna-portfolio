"use client"

function calculateDistance(x1, y1, x2, y2) {
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }
  
export default function calculateAverageDistance(coordinates) {
    let closestDistances = [];
  
    for (let i = 0; i < coordinates.length; i++) {
      let minDistance = Infinity;
  
      for (let j = 0; j < coordinates.length; j++) {
        if (i !== j) {
          const distance = calculateDistance(
            coordinates[i][0],
            coordinates[i][1],
            coordinates[j][0],
            coordinates[j][1]
          );
  
          if (distance < minDistance) {
            minDistance = distance;
          }
        }
      }
  
      closestDistances.push(minDistance);
    }
  
    const averageDistance =
      closestDistances.reduce((sum, distance) => sum + distance, 0) /
      closestDistances.length;
  
    return averageDistance;
  }