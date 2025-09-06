type Point = { x: number, y: number };

export function numberOfPairs(points: number[][]): number {
  let nbrOfPairs = 0;
  points.sort((p1, p2) => {
    const xDelta = p1[0] - p2[0];
    if (xDelta === 0) {
      return p2[1] - p1[1];
    }

    return xDelta;
  });

  for (let i = 0; i < points.length - 1; ++i) {
    const pointA: Point = { x: points[i][0], y: points[i][1] };
    let floor = -Infinity;

    for (let j = i + 1; j < points.length; ++j) {
      const pointB: Point = { x: points[j][0], y: points[j][1] };
      if (pointA.y >= pointB.y && pointB.y > floor) {
        ++nbrOfPairs;
        if (pointA.y === pointB.y) {
          break;
        } else {
          floor = pointB.y;
        }
      }
    }
  }

  return nbrOfPairs;
}
