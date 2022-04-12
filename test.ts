import { expect } from 'chai'
import { assignTokenIds } from './index'

describe('dna-randomizer', function () {
  it('assignTokenIds', function () {
    const dnaHashes = ['hamburger', 'pizza', 'applesauce', 'cat', 'dog']
    expect(assignTokenIds(dnaHashes, 'planted')).to.deep.equal({
      applesauce: '1',
      cat: '3',
      dog: '4',
      hamburger: '2',
      pizza: '5',
    })
    expect(assignTokenIds(dnaHashes, 'super planted')).to.deep.equal({
      applesauce: '3',
      cat: '5',
      dog: '2',
      hamburger: '1',
      pizza: '4',
    })
  })
})
