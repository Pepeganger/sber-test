
export const sleep = async (ms: number) => ( // Иммитация таймаута
  new Promise(res => {
    setTimeout(() => {
      res(true)
    }, ms)
  })
)