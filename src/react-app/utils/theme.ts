/**
 * Centralized theme utilities for consistent color mapping across components
 * This eliminates duplicate color mapping functions and provides a single source of truth
 */

export type ThemeColor = 
  | '#f59e0b' // amber
  | '#059669' // green
  | '#8b5cf6' // purple
  | '#f59e0b' // amber
  | '#ef4444' // red
  | '#06b6d4' // cyan
  | '#f97316' // orange
  | '#eab308' // yellow
  | '#dc2626' // red-600
  | '#ec4899' // pink

/**
 * Maps hex color values to CSS class names for consistent styling
 */
export const getColorClass = (color: string, prefix: string = 'color'): string => {
  const colorMap: Record<string, string> = {
    '#059669': `${prefix}-green`,
    '#8b5cf6': `${prefix}-purple`,
    '#f59e0b': `${prefix}-amber`,
    '#ef4444': `${prefix}-red`,
    '#06b6d4': `${prefix}-cyan`,
    '#f97316': `${prefix}-orange`,
    '#eab308': `${prefix}-yellow`,
    '#dc2626': `${prefix}-red`,
    '#ec4899': `${prefix}-pink`
  }
  return colorMap[color] || `${prefix}-amber`
}

/**
 * Specific color class getters for different component contexts
 */
export const getAchievementColorClass = (color: string) => getColorClass(color, 'achievement')
export const getStatColorClass = (color: string) => getColorClass(color, 'stat')
export const getContactColorClass = (color: string) => getColorClass(color, 'contact')
export const getSkillColorClass = (color: string) => getColorClass(color, 'skill')
export const getProjectColorClass = (color: string) => getColorClass(color, 'project-color')
export const getProjectColorOpacityClass = (color: string) => getColorClass(color, 'project-color') + '-opacity'
