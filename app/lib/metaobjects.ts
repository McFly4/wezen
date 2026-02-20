/**
 * Helper function to get a field from a metaobject by key
 */
export function getMetaobjectField(
  metaobject: any,
  key: string,
): any | undefined {
  return metaobject?.fields?.find((field: any) => field.key === key);
}

/**
 * Get a list of metaobjects from a field's references
 */
export function getMetaobjectList(field: any, type?: string): any[] {
  const nodes = field?.references?.nodes || [];
  if (type) {
    return nodes.filter((node: any) => node.type === type);
  }
  return nodes;
}

/**
 * Get images from a field's references
 */
export function getMetaobjectImages(field: any): any[] {
  return field?.references?.nodes?.filter((node: any) => node.image) || [];
}

/**
 * Get a specific field value from a metaobject in a list
 */
export function getMetaobjectFieldValue(
  metaobject: any,
  key: string,
): string | undefined {
  const field = metaobject?.fields?.find((f: any) => f.key === key);
  return field?.value;
}
