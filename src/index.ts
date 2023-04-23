const notesPerBar = 4
const combinations = 2 ** notesPerBar - 1

const bars = Array<number[]>(combinations)

for (let i = 0; i < bars.length; i++) {
    bars[i] = Array(notesPerBar)

    // Binary representation of combination of notes in a bar
    const combination = i + 1

    for (let j = 0; j < notesPerBar; j++) {
        if (((1 << j) & combination) !== 0) {
            bars[i][j] = 1
        } else {
            bars[i][j] = 0
        }
    }
}
