/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} binary
* @param {number} width
* @param {number} height
* @returns {Uint8Array}
*/
export function resize_image(binary: Uint8Array, width: number, height: number): Uint8Array;
/**
* @returns {string}
*/
export function hello(): string;
/**
* Chroma subsampling format
*/
export enum ChromaSampling {
/**
* Both vertically and horizontally subsampled.
*/
  Cs420 = 0,
/**
* Horizontally subsampled.
*/
  Cs422 = 1,
/**
* Not subsampled.
*/
  Cs444 = 2,
/**
* Monochrome.
*/
  Cs400 = 3,
}
