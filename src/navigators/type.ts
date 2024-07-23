import { ImageHit } from 'pixabay-api/dist/PixabayResponse';

type CommonParamsType = { title: string; q: string };

export type ByCategoryType = CommonParamsType & { category: string };

export type ByColor = CommonParamsType & { color: string };

export type SearchImageParamsType = ByCategoryType | ByColor;

export type ImageDetailParamsType = (ImageHit & { title: string }) | any;
