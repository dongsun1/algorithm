const [input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const set = new Set()

const recursive = (level) => {
  if (level === input.length) return

  for (let i = 0; i < input.length - level; i++) {
    set.add(input.slice(i, i + level + 1))
  }

  recursive(level + 1)
}

recursive(0)

console.info(set.size);
