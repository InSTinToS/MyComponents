type TFormatDate = (date?: string) => string | undefined

export const formatDate: TFormatDate = date => {
  const us = date?.split('T')[0].split('-')

  return us ? `${us[2]}/${us[1]}/${us[0]}` : date
}
