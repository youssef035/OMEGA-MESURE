export function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function buildSlugWithId(id: number | string, name: string) {
  const slugPart = slugify(name);
  return `${id}-${slugPart}`;
}

export function extractIdFromSlug(slug: string): number | null {
  const [idPart] = slug.split('-');
  const id = parseInt(idPart, 10);
  return Number.isNaN(id) ? null : id;
}

