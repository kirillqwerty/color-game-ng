export function shuffle(array: string[]): string[] {
    return array.map(i=>[Math.random(), i]).sort().map(i=>i[1].toString())
}