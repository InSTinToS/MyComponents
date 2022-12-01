type TToBase64 = (file: Blob) => Promise<FileReader['result']>

export const fileToBase64: TToBase64 = async file =>
  await new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    }
  })
