let data =
  "0xaae2eb8b0000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000000000000000000000000000008ac7230489e800000000000000000000000000000000000000000000000000000000000000000000"

const length = data.slice(10).length / 64

let start = 0
let end = 64

console.log(`Func selector: \n\t${data.slice(0, 10)} \n\nParams(${length}): `)

for (i = 0; i < length; i++) {
  if (!data.slice(10).slice(start, end).slice(0, 8).includes(0)) {
    data = `Ox${data.slice(10).slice(start)}`
    console.log(
      `Func selector: \n\t${data.slice(0, 10)} \n\nParams(${length}): `,
    )
    start = 0
    end = 64
  } else {
    console.log(`\t${i + 1}. ${data.slice(10).slice(start, end)}`)
    start = end
    end += 64
  }
}
