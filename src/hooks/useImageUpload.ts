import { ChangeEvent, useState } from 'react'

export function useImageUpload(defaultImage: string) {
  const [image, setImage] = useState<string>(defaultImage)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file instanceof File) {
      const reader = new FileReader()

      reader.onload = () => {
        const imageData = reader.result as string

        setImage(imageData)
      }
      reader.readAsDataURL(file)
    }
  }

  return { handleImageChange, image }
}
