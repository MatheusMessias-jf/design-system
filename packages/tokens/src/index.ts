export * from './colors'

export * from './space'
export * from './radii'

export * from './fonts'
export * from './font-sizes'
export * from './font-weights'
export * from './line-heights'

// Arquivo index re-exporta os tokens para facilitar a importação posteriormente
// Importação SEM esse arquivo -> import { colors } from '@ignite-ui/tokens/colors'
// Importação COM esse arquivo -> import { colors } from '@ignite-ui/tokens'
