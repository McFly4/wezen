import {MENU_FRAGMENT} from './MenuFragment';

/**
 * Query to fetch a menu by handle
 * @param handle - The handle of the menu to fetch (e.g., "menu", "main-menu", "footer")
 */
export const MENU_QUERY = `#graphql
  query Menu(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(language: $language, country: $country) {
    menu(handle: $handle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
` as const;
