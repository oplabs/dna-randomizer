# dna-randomizer

```typescript
import { assignTokenIds } from 'dna-randomizer'

const dnaHashes = ['hamburger', 'pizza', 'applesauce', 'cat', 'dog']

assignTokenIds(dnaHashes, 'planted')

// {
//   applesauce: '1',
//   cat: '3',
//   dog: '4',
//   hamburger: '2',
//   pizza: '5',
// }

```