const axios = require("axios")

// paste calldata here
let calldata = ""

async function decode(data) {
  start = 0
  end = 8
  text64 = ""
  while (data.slice(start)) {
    let selector = data.slice(2).slice(start, end)

    try {
      if (
        !selector.includes("0000") &&
        !selector.includes("ffff") &&
        selector != ""
      ) {
        let request = await axios.get(
          `https://www.4byte.directory/api/v1/signatures/?hex_signature=${selector}`,
        )
        let signature = request.data.results[0].text_signature
        console.log(`\nselector: \n\t0x${selector} ${signature}\nparams: `)
        text64 = ""
      } else {
        text64 += selector
      }
    } catch (err) {
      text64 += selector
    }

    if (text64.length == 64) {
      console.log(`\t${text64}`)
      text64 = ""
    }
    start = end
    end += 8
  }
}

decode(calldata)

