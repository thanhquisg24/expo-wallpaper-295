export function getImageNameFromPixaUrl(url: string): string {
  const urlParts = url.split('/');
  const slugName = urlParts[urlParts.length - 2];
  const slugParts = slugName.split('-');
  slugParts.pop();
  return slugParts ? slugParts.join(' ') : '';
}
