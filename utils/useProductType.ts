import { useRouter } from 'next/router';

type ProductType = 'primitives' | 'designSystem';
const productTypes: Record<string, ProductType> = {
  primitives: 'primitives',
  'design-system': 'designSystem',
};

export function useProductType() {
  const router = useRouter();
  const [_, productType] = router.pathname.split('/');
  return productTypes[productType];
}
