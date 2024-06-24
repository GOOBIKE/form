
let today = new Date()
let dy = today.getDate()
let mt = today.getMonth() + 1
let yr = today.getFullYear()

let minYear = yr - 18
let minDate = `${String(minYear)}-${String(mt).padStart(2, "0")}-${String(dy).padStart(2, "0")}`

export default minDate