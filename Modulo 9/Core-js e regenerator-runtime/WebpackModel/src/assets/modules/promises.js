function promessa () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Eu sou a promise')
      resolve()
    }, 2000)
  })
}

export default async function () {
  await promessa()
  console.log('Terminou')
} 