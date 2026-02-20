import {MENU_FRAGMENT} from './MenuFragment';

export const SHOP_FRAGMENT = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
` as const;

/**
 * Query to fetch header data including shop info and menu
 */
export const HEADER_QUERY = `#graphql
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) { 
      ...Menu
    }
  }
  ${SHOP_FRAGMENT}
  ${MENU_FRAGMENT}
` as const;
