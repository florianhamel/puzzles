export function constructDistancedSequence(n: number): number[] {
  const sequence = Array.from({ length: (n - 1) * 2 + 1 }, () => NaN);
  const values = Array.from({ length: n }, (_, i) => i + 1)
    .sort((a, b) => b - a);

  console.log(sequence.length);
  return buildSequence(sequence, values, 0);
}

function buildSequence(sequence: number[], values: number[], index: number): number[] {
  if (!values.length) {
    return sequence;
  }

  for (let val of values) {
    const sequenceCopy = Array.from(sequence);
    if (val === 1) {
      sequenceCopy[index] = val;
    } else if (index + val < sequenceCopy.length && isNaN(sequenceCopy[index + val])) {
      sequenceCopy[index] = val;
      sequenceCopy[index + val] = val;
    } else {
      continue;
    }
    let indexNext = index;
    while (!isNaN(sequenceCopy[indexNext])) {
      ++indexNext;
    }
    const valuesCopy = values.filter(v => v !== val);
    const sequenceAttempt = buildSequence(sequenceCopy, valuesCopy, indexNext);
    if (sequenceAttempt.length) {
      return sequenceAttempt
    }
  }

  return [];
}
