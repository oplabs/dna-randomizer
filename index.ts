import { MersenneTwister19937, Random } from 'random-js'

export const assignTokenIds = (dnaHashes: string[], seed: string) => {
  const { length } = dnaHashes
  const random = new Random(MersenneTwister19937.seedWithArray(new TextEncoder().encode(seed))) // `random-js`
  const tokens = Array.from({ length }).map((_, index) => `${index + 1}`)
  const getRandomToken = () => {
    const index = random.integer(0, tokens.length - 1)
    return tokens.splice(index, 1)[0]
  }
  const dnaTokenMap: Record<string, string> = {}
  for (const dna of dnaHashes) {
    dnaTokenMap[dna] = getRandomToken()
  }
  return dnaTokenMap
}
