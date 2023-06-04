"use client";

/* [size x, size y, numDots, amount of passes] */
export default function lloydsAlgorithm(x, y, N, M) {
  // Step 1: Initialize N points randomly
  let points = []
  for (let i = 0; i < N; i++) {
    points.push([Math.random() * x, Math.random() * y])
  }

  // Repeat M iterations
  for (let i = 0; i < M; i++) {
    // Step 2a: Assign each point to the closest centroid
    let clusters = []
    for (let j = 0; j < N; j++) {
      clusters[j] = []
    }
    for (let j = 0; j < x; j++) {
      for (let k = 0; k < y; k++) {
        let point = [j, k]
        let minDist = Infinity
        let minIdx = -1
        for (let l = 0; l < N; l++) {
          let centroid = points[l]
          let dist = Math.sqrt((point[0] - centroid[0])**2 + (point[1] - centroid[1])**2)
          if (dist < minDist) {
            minDist = dist
            minIdx = l
          }
        }
        clusters[minIdx].push(point)
      }
    }

    // Step 2b: Compute new centroids
    let newPoints = []
    for (let j = 0; j < N; j++) {
      let cluster = clusters[j]
      let sumX = 0
      let sumY = 0
      for (let k = 0; k < cluster.length; k++) {
        sumX += cluster[k][0]
        sumY += cluster[k][1]
      }
      let meanX = sumX / cluster.length
      let meanY = sumY / cluster.length
      newPoints.push([meanX, meanY])
    }

    // Step 2c: Check if centroids have moved
    let hasMoved = false
    for (let j = 0; j < N; j++) {
      let oldPoint = points[j]
      let newPoint = newPoints[j]
      let dist = Math.sqrt((oldPoint[0] - newPoint[0])**2 + (oldPoint[1] - newPoint[1])**2)
      if (dist > Math.sqrt(x**2 + y**2) / 100) {
        hasMoved = true
        break
      }
    }
    if (!hasMoved) {
      break
    }
    // Update centroids
    points = newPoints
  }
  return points
}