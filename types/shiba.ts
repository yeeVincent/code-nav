export enum ShibaTagsEnum {}

export enum ShibaCategoriesEnum {
  select = "select",
  care = "care",
  training = "training",
  health = "health",
  food = "food",
  dailyRoutine = "dailyRoutine",
  other = "other",
}
/** 需要联合类型的原因是 contentLayer会把Enum转化成联合类型, 因此再做一次映射 */
export type ShibaCategoriesUnionEnum =
  | "select"
  | "care"
  | "training"
  | "health"
  | "food"
  | "dailyRoutine"
  | "other"

export enum ShibaCategoriesNameEnum {
  select = "💰挑选柴犬",
  care = "🐶柴犬养护",
  training = "🏋️训练柴犬",
  health = "🏥柴犬健康",
  food = "🍚柴犬食物",
  dailyRoutine = "🌞狗子日常",
  other = "其他",
}
