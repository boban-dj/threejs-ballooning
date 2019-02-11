// Copyright (c) 2019 Alexander Perrin contact@alexperrin.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import SeedRandom from 'seedrandom';

let rnd = new SeedRandom( 'gh3jf023ja84' );
let rnd2 = new SeedRandom( 'aowjdiao8q2u' );
let count = 0;

class Mathf {
  static clamp( num, min, max ) {
    return num < min ? min : num > max ? max : num;
  }

  static getCount() {
    return count;
  }

  static lerp( from, to, t ) {
    return from + t * ( to - from );
  }

  static inverseLerp( from, to, t ) {
    let v = from;
    if ( t <= from ) {
      v = from;
    } else if ( t >= to ) {
      v = to;
    }
    v = ( t - from ) / ( to - from );
    return v;
  }

  static randRange( min, max ) {
    return rnd.quick() * ( max - min ) + min;
  }

  static randRange2( min, max ) {
    return rnd2.quick() * ( max - min ) + min;
  }

  static moveTowards( current, target, maxDelta ) {
    let delta = target - current;
    if ( Math.abs( delta ) > maxDelta ) {
      delta = maxDelta * Math.sign( delta );
    }
    return current + delta;
  }
}

export default Mathf;
