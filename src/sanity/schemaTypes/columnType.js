import { defineType, defineField } from "sanity";
import { toRomaji } from "wanakana"; // ← これが重要
import speechType from "./speechType";

export const columnType = defineType({
  name: "column",
  title: "コラム",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL（スラッグ）",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          toRomaji(input) // 日本語 → ローマ字
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "thumbnail",
      title: "サムネ画像",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "category",
      title: "カテゴリ",
      type: "string",
      options: {
        list: [
          { title: "園芸（こびとのにわ）", value: "garden" },
          { title: "ロボット相撲（KOBITO LAB）", value: "robot" },
          { title: "BASE 共通", value: "base" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "body",
      title: "本文",
      type: "array",
      of: [{ type: "block" },{ type: "image" },{ type: "speech" },
    ]
      }),
  ],
});
