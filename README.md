## Motivation

There are many javascript audio libraries, but most of them make assumptions about using Web Audio API or that audio is being manipulated in real time. Audio-fns takes a different approach, providing simple functions to generate and operate on audio samples where the main focus is offline rendering, which allows favoring simplicity and elegance over performance constraints. It is currently pre version 1, the API is experimental and might change without notice.

## Get started

Install

```bash
npm install --save audio-fns
# or
yarn add audio-fns
```

Use

```typescript
import { bpmToSamples } from 'audio-fns'

console.log(bpmToSamples(44100, 120))
```
