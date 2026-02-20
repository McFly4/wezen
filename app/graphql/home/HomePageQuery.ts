/**
 * Query to fetch home page metaobject data
 */
export const HOME_PAGE_QUERY = `#graphql
  query HomePage(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    metaobject(handle: {handle: "home-page", type: "home_page"}) {
      id
      type
      handle
      fields {
        key
        value
        type
        reference {
          ... on MediaImage {
            id
            image {
              url
              altText
              width
              height
            }
          }
          ... on Video {
            id
            sources {
              url
              mimeType
              format
              height
              width
            }
          }
        }
        references(first: 20) {
          nodes {
            ... on MediaImage {
              id
              image {
                url
                altText
                width
                height
              }
            }
            ... on Metaobject {
              id
              type
              fields {
                key
                value
              }
            }
          }
        }
      }
    }
  }
` as const;
