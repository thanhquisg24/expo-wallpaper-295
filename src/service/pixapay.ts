import { ImageHit } from 'pixabay-api/dist/PixabayResponse';
import { ImageRequest } from 'pixabay-api/dist/PixabayRequest';
import { PIXAPAY_AUTH_KEY } from '../config';
import { authenticate } from 'pixabay-api';

const { searchImages } = authenticate(PIXAPAY_AUTH_KEY);

async function fetchImageFromPixaPay(q: string, params?: Partial<ImageRequest>) {
  return searchImages(q, {
    per_page: 36,
    page: 1,
    orientation: 'vertical',
    image_type: 'photo',
    min_width: 720,
    min_height: 1200,
    ...params,
  });
}

export { searchImages, fetchImageFromPixaPay };

export type PixaImageItem = ImageHit;
