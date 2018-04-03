let success = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaxJREFUeNrsme1twyAQhpMq/5sRukEygkfoCO4GGaEjpBOUbuAN6m5AN/AIbEAPiUot4uMgGB/RnfRKcWRiP4GXO5/3WuvdvcTD7o6CYRiGYRiGYcjFocN7PoLO9rMCyV5hnkAT6GSPv0BDj8tssLNw6t0zI+gT9Oh8f/13ZApN4hLaH6N7LmWII2jGglCGOYNkAOQSGkcRZACpAIiIjaUGMupwiNT4HoyOAqECEzM6GoQCTMzoWSBbw8SMng2yJcxFx0OU/C41oxeDGB08xZypTBe3vK5Uus+xQhHiw9ZhZeHQLc6/JK1Jaxh9WWtGQsvMFypWQiD0nDB6FRAfzBS54GRzQk2jVwPxwQyJCyt7Tg2jVwUJ7WYj4iZeExldtgaJbc0YoNmz7DBGXwUklWcwQOrPbocx+mogmKSJBcL443c2V0vIe8TLJpPE3iskzW+blNWWHU0BeqEOktNqugWoCUhu36wEqBlISRMwB6gpSGlH0wC9UQO5taMZ2o5lQQ3XJM/kAm0GUutJU1AA8T1plnboF9uRb+sRJzAVAL/TZBiGYRiGYZjS+BFgAKT0Ks2zaV55AAAAAElFTkSuQmCC`
let error = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNrs3f1t1EAQBXDfiP9JCekAd5CjAkIHoQKgA9IBJVwJ0MHRQaiA0IFTgdmVNiIfOoLt8fq92fekUaT4Ep/v57XX8q5vN45jp2DF9BEIRRGKUBShCEURilAUoShCEYoiFKEoQhGKIhTln3m10v/dl59DqpuAn9t5qZzbUn7Jdx4d60uqYXycY6reeT1b1Vmqw/g8h7LMZT07x9vBX1N9PLHsrrQe5lZzluqY6s2J5T9T9R4r8kLJTfnXC69hhnkJ5D6fy84JcaK/+o/XvC4b1gcFyblk7H2xwUwB6by2a4suMQvMVJDO69DshXIMBjMHZM7nsOqJPudbqncT/wbx5D8X5K50eAakw9dV6RYyt5glIHsPEG+UobwxVpilIG6t3ftEzwoDA7JW74sNBgpkzS4xCwwcyNrXKegwkCA1Lh5RYWBBal3Ro8FAg9RCQYKBB6mJggBDAVIbZUsYGpAtULaAoQLZCqUmDB3Ilig1YChBtkZZE4YWBAFlDRhqEBQUTxh6ECQUD5h9BJCcHeCzWebu7XMCORYNcYD33BYTAgQVpQYM9GhN5KkQa8HAD59Fn5/iDUMxnplh0pAXDM0Ac5aZXEthqEb8a3qdUDa7dqEa7W8NgNDBWCMgVDDWEAgNjDUGQgFjDYLAw1gQkHwd8rbjnx8Dh7L0BtWx454fA4fidcdwiABjgUC6KDAWDCQEjAUEoYexoCDUMBYYhBbGgoNQwlgDIHQw1ggIFYw1BEIDY42BUMBYgyDwMNYoCDSMNQwCC2ONg0DCmEDwYDznp+Q3dkEK4rVzZZhblJZyGQRkaYv5hHT46oOALIWhfS4xy2DrOTCUKGzPu58KA/Ww6ENAkDkwBySU3OP4EBBkCswPNJT7veR9qt9Pfv+9HGvZv3FoKNtxXXayhzvcdff325WgrlMe5rzUTef0VGvA9J7nkRooClmXWBGKUBShCEURilAUoShCEYoiFKEoQhGKIhTlZP4IMADZKJrvag4ipwAAAABJRU5ErkJggg==`
let info = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATRJREFUeNrs3cENgjAYgNFiGIRRHIVNXK1ugBvgBjgBcvCkCaFESNu8L+lNE8KL/CAGm3meg/LqYhdAERQoggJFUKAIiqBAERQoggJFULRaW9j2dp+V2rSsAcox9cu67XjffVlXhy9BgSIoXwMbSmbtPYMaoeQXFEGBIihFzwYox5y1QXF9Y6ZAERQoJ/eAUsfQjlAEBYqgQCmj1KH9gpJfAxRBgSIof7yih5LZ4B6h5BcUQYEiKNXMCCi/RSiCAkVQoJRVys+MJijnlLKj3eQSFCiCAqWw4sbXPaHk11jiRjf+1MYnRVCgCAoUQYGizGoL3e4ubH8+cYRyTn3Y/nzixuFLUKAIChRBERQoglJdpd4O7kLFX7O4R+/wJShQBAWKoEARFEGBIihQBAWKoGi9twADAO8AK4ejPNAtAAAAAElFTkSuQmCC`
export default {
  success,
  error,
  info
}
