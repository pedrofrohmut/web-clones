#! /usr/bin/env node

const main = () => {
  const inputColor = process.argv[2]

  if (!inputColor) {
    console.log("Please provide the color to be processed")
    process.exit(1)
  }

  // #123456 -> r 12, g: 34, b: 56
  const inputRed = inputColor.substring(1, 3)
  const inputGreen = inputColor.substring(3, 5)
  const inputBlue = inputColor.substring(5, 7)

  console.log(`Input -> r: ${inputRed}, g: ${inputGreen}, b: ${inputBlue}`)

  // Convert to decimal
  const decimalRed = parseInt(inputRed, 16)
  const decimalGreen = parseInt(inputGreen, 16)
  const decimalBlue = parseInt(inputBlue, 16)

  console.log(`Decimal -> r: ${decimalRed}, g: ${decimalGreen}, b: ${decimalBlue}`)

  // How to get the factors
  // Percentage Increase = [(New Value - Old Value) / Old Value]
  // For this project we are based in #242424 to #28242d
  // oldRed = 36, newRed = 40 -> 11% higher
  // oldGreen = 36, newGreen = 36 -> 0% higher
  // oldBlue = 36, newBlue = 45 -> 25% higher
  const redGrowth = 1.11
  const greenGrowth = 1
  const blueGrowth = 1.25

  // multiply by the factors
  const newRed = Math.round(decimalRed * redGrowth)
  const newGreen = Math.round(decimalGreen * greenGrowth)
  const newBlue = Math.round(decimalBlue * blueGrowth)

  console.log(`New -> r: ${newRed}, g: ${newGreen}, b: ${newBlue}`)

  const newRedHex = newRed.toString(16)
  const newGreenHex = newGreen.toString(16)
  const newBlueHex = newBlue.toString(16)

  console.log(`NewHex -> r: ${newRedHex}, g: ${newGreenHex}, b: ${newBlueHex}`)

  console.log(`Final result: #${newRedHex}${newGreenHex}${newBlueHex}`)
}

main()
