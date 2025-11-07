import { defineType, defineField } from "sanity";

export default defineType({
  name: "speech",
  title: "吹き出し",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "アイコン画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "text",
      title: "コメント",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "text",
      media: "icon",
    },
  },
});
