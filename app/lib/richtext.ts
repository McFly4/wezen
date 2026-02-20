/**
 * Parse Shopify rich text field to plain text
 */
export function parseRichText(richText: string | undefined): string {
  if (!richText) return '';

  try {
    const parsed = JSON.parse(richText);
    return parsed.children
      ?.map((child: any) =>
        child.children?.map((c: any) => c.value).join(''),
      )
      .join('\n');
  } catch {
    // If parsing fails, return the original text
    return richText;
  }
}

/**
 * Parse rich text and return as HTML
 */
export function parseRichTextToHTML(richText: string | undefined): string {
  if (!richText) return '';

  try {
    const parsed = JSON.parse(richText);
    return parsed.children
      ?.map((child: any) => {
        const text = child.children?.map((c: any) => c.value).join('') || '';
        const type = child.type || 'paragraph';

        switch (type) {
          case 'heading':
            const level = child.level || 1;
            return `<h${level}>${text}</h${level}>`;
          case 'paragraph':
            return `<p>${text}</p>`;
          case 'list-item':
            return `<li>${text}</li>`;
          default:
            return text;
        }
      })
      .join('');
  } catch {
    return richText;
  }
}
