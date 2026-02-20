/**
 * Query pour récupérer un metaobject par type et handle
 */
export const METAOBJECT_QUERY = `#graphql
  query Metaobject(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $type: String!
  ) @inContext(country: $country, language: $language) {
    metaobject(handle: {handle: $handle, type: $type}) {
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
        }
      }
    }
  }
` as const;

/**
 * Query pour récupérer tous les metaobjects d'un type donné
 */
export const METAOBJECTS_QUERY = `#graphql
  query Metaobjects(
    $country: CountryCode
    $language: LanguageCode
    $type: String!
    $first: Int = 10
  ) @inContext(country: $country, language: $language) {
    metaobjects(type: $type, first: $first) {
      nodes {
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
          }
        }
      }
    }
  }
` as const;
