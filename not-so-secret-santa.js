const days = ['Alan', 'Heidi', 'Daniel', 'Leah', 'Evan']
const stevens = ['Kurt', 'Nicole']
const waughs = ['Terry', 'Christiana', 'Zach', 'Elizabeth']
const dixons = ['Christina']
const hornes = ['Keisha']
const harfsts = ['Colin']
const fam = days.concat(stevens).concat(waughs).concat(dixons).concat(hornes).concat(harfsts)

function FindSecretSanta() {
  let result = '' 
  let family = fam
  let size = family.length
  let prevPerson = ''
  while (size > 0) {
    let random, person
    let shouldRetry = true
    let infiniteLoopCounter = 0
    while (shouldRetry) {
      random = Math.floor(Math.random() * Math.floor(size))
      person = family[random]
      if (person !== prevPerson) {
        const isDirectFamily = (days.includes(person) && days.includes(prevPerson))
          || (stevens.includes(person) && stevens.includes(prevPerson))
          || (waughs.includes(person) && waughs.includes(prevPerson))
          || (person === 'Leah' && prevPerson === 'Colin')
          || (person === 'Colin' && prevPerson === 'Leah')
          || (person === 'Kurt' && prevPerson === 'Keisha')
          || (person === 'Keisha' && prevPerson === 'Kurt')
        if (!isDirectFamily) shouldRetry = false
      }
      infiniteLoopCounter++
      if (infiniteLoopCounter > 100) return null
    }
    result += person + ' -> '
    family = family.filter(p => p !== person)
    prevPerson = person
    size = size - 1
  }
  return result
}


let results
let shouldRetry = true
while (shouldRetry) {
  results = FindSecretSanta()
  if (results === null) continue
  const people = results.split(' -> ')
  const prevPerson = people[fam.length - 1]
  const person = people[0]
  if (person !== prevPerson) {
    const isDirectFamily = (days.includes(person) && days.includes(prevPerson))
      || (stevens.includes(person) && stevens.includes(prevPerson))
      || (waughs.includes(person) && waughs.includes(prevPerson))
      || (person === 'Leah' && prevPerson === 'Colin')
      || (person === 'Colin' && prevPerson === 'Leah')
      || (person === 'Kurt' && prevPerson === 'Keisha')
      || (person === 'Keisha' && prevPerson === 'Kurt')
    if (!isDirectFamily) shouldRetry = false
  }
}

console.log(results)
