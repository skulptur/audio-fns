## Motivation

There are many javascript audio libraries, but most of them make assumptions about using Web Audio API or that audio is being manipulated in real time. I wanted to take a different approach, providing simple functions to operate on audio samples where the main focus is offline, and therefore allows favoring ease of use and elegant API. It is currently pre version 1 and the API is still experimental and might change without notice.

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
