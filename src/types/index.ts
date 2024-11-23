

export type TCategory = {
  id: number
  cat_name_en: string
  cat_icon: string
  no_of_dua: number
  no_of_subcat: number
}

export type TSubCategory = {
  id: 1,
  cat_id: 1,
  subcat_name_en: string
}

export type TDua = {
  id: number
  cat_id: number
  subcat_id: number
  dua_name_en: string
  top_en: string
  dua_arabic: string
  transliteration_en: string | null
  translation_en: string | null
  bottom_en: string | null
  refference_en: string | null
  audio: string | null
}
