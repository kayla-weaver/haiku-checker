import Haiku from './../src/haiku.js';

describe(`Haiku`, () => {

  test(`should correctly create a haiku object`, () => {
    const newHaiku = new Haiku();
    expect(newHaiku.line1).toEqual("");
    expect(newHaiku.line2).toEqual("");
    expect(newHaiku.line3).toEqual("");
  });
});