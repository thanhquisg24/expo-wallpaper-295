import { PIXAPAY_AUTH_KEY } from '../config';
import { authenticate } from 'pixabay-api';

const { searchImages } = authenticate(PIXAPAY_AUTH_KEY);
export { searchImages };
