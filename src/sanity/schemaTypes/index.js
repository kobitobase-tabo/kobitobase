import { authorType } from "./authorType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { blockContentType } from "./blockContentType";
import { columnType } from "./columnType"; // ★ NEW
import speechType from './speechType'

export const schemaTypes = [
  authorType,
  categoryType,
  postType,
  blockContentType,
  columnType, // ★ 最後に追加
  speechType,
];
