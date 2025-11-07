export default {
  name: "column",
  title: "コラム",
  type: "document",
  fields: [
    {
      name: "title",
      title: "タイトル",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "thumbnail",
      title: "サムネ画像",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "category",
      title: "カテゴリ",
      type: "string",
      options: {
        list: [
          { title: "園芸（こびとのにわ）", value: "garden" },
          { title: "ロボット相撲（KOBITO LAB）", value: "robot" },
          { title: "BASE 共通", value: "base" }
        ],
        layout: "radio"
      }
    },
    {
      name: "body",
      title: "本文",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
};
