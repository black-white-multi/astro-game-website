export type Lang = "en" | "zh-cn";

export interface Step {
  n: string;
  title: string;
  desc: string;
}

export interface Content {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  switchHref: string;
  switchLabel: string;
  brand: string;
  brandSub: string;
  nav: { games: string; play: string; about: string; contact: string };
  navCta: string;
  menuLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    stroke: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    scroll: string;
  };
  games: {
    label: string;
    heading: string;
    tag: string;
    badge: string;
    name: string;
    desc: string;
    playlist: string[];
    more: string;
  };
  how: { label: string; heading: string; lead: string; steps: Step[] };
  about: { label: string; heading: string; body: string; quote: string };
  contact: { label: string; heading: string; body: string };
  footer: { note: string; rights: string; contact: string };
}

export const site = {
  nameZh: "黑白多工作室",
  nameEn: "Black White Studio",
  domain: "blackwhite.fun",
  email: "richman@blackwhite.fun",
  steam: "https://store.steampowered.com/app/1455130",
  appStore: "https://apps.apple.com/app/id1458195523",
};

export const content: Record<Lang, Content> = {
  "zh-cn": {
    htmlLang: "zh-CN",
    metaTitle: "刺激大富翁 · 黑白多工作室",
    metaDescription:
      "黑白多工作室是一家独立游戏工作室。代表作《刺激大富翁》是一款 8 名玩家同场竞技的即时制桌面游戏。",
    switchHref: "/en/",
    switchLabel: "EN",
    brand: "黑白多工作室",
    brandSub: "Black White Studio",
    nav: { games: "游戏", play: "玩法", about: "关于", contact: "联系" },
    navCta: "开始游戏",
    menuLabel: "菜单",
    hero: {
      eyebrow: "独立游戏工作室 · 专做多人游戏",
      title: "刺激大富翁",
      stroke: "Number One Rich",
      lead: "8 名玩家的即时制桌面游戏。掷骰前进、买地建楼、收取租金，让对手一个个破产——最后站着的人赢下一切。",
      ctaPrimary: "Steam 上游玩",
      ctaSecondary: "App Store 下载",
      stats: [
        { value: "8", label: "名玩家同场" },
        { value: "实时", label: "对战节奏" },
        { value: "双端", label: "Steam 与 iOS" },
      ],
      scroll: "向下滚动",
    },
    games: {
      label: "01 / 精选游戏",
      heading: "我们在做的游戏",
      tag: "桌面 · 即时制 · 多人",
      badge: "精选游戏",
      name: "刺激大富翁",
      desc: "八个人，一张地图，同时开跑。买下经过的每一块土地，把它盖成豪宅，再定一个让对手肉疼的租金。有人一夜暴富，也有人刚买完地就破产离场——胜负从来不到最后一刻不会揭晓。",
      playlist: [
        "掷骰决定步数，实时与 8 名玩家同场竞技",
        "购买土地、升级建筑，把地盘连成一片",
        "对手路过你的产业时必须缴纳租金",
        "让所有对手破产，成为最后的大富翁",
      ],
      more: "还有更多新作品正在打磨中，敬请期待。",
    },
    how: {
      label: "02 / 玩法",
      heading: "规则简单，心机无限",
      lead: "没有冗长的教程，也没有复杂的系统。看懂这四步，你就可以坐上牌桌。",
      steps: [
        {
          n: "01",
          title: "掷骰前进",
          desc: "掷出骰子决定步数。每一步都可能踩中机会，也可能直接送钱给对手。",
        },
        {
          n: "02",
          title: "买地建楼",
          desc: "买下经过的土地，把平房一步步升级成豪宅，构筑属于你的黄金地段。",
        },
        {
          n: "03",
          title: "收取租金",
          desc: "对手踏进你的地盘就要交租，建筑等级越高，他们要掏的钱就越多。",
        },
        {
          n: "04",
          title: "赢下一切",
          desc: "耗尽对手的资产，让所有人出局，你就是这张地图上最后的大富翁。",
        },
      ],
    },
    about: {
      label: "03 / 关于我们",
      heading: "只做好玩的游戏。",
      body: "黑白多工作室是一家独立游戏工作室，专注轻量、易上手、却让人一局接一局的多人游戏。我们相信好游戏不需要复杂教程——规则一眼看懂，胜负全看你怎么玩。",
      quote: "规则一眼看懂，胜负全看你怎么玩。",
    },
    contact: {
      label: "04 / 联系我们",
      heading: "合作、建议，或者只是想打个招呼？",
      body: "无论是游戏反馈、bug 报告还是商务合作，都欢迎给我们写信。",
    },
    footer: {
      note: "用心做好玩的游戏。",
      rights: "版权所有",
      contact: "联系我们",
    },
  },
  en: {
    htmlLang: "en",
    metaTitle: "Number One Rich · Black White Studio",
    metaDescription:
      "Black White Studio is an independent game studio behind Number One Rich, a real-time board game for eight players.",
    switchHref: "/zh-cn/",
    switchLabel: "中文",
    brand: "Black White Studio",
    brandSub: "黑白多工作室",
    nav: { games: "Games", play: "How to play", about: "About", contact: "Contact" },
    navCta: "Play now",
    menuLabel: "Menu",
    hero: {
      eyebrow: "Independent game studio · Multiplayer only",
      title: "Number One Rich",
      stroke: "Eight players. One board.",
      lead: "A real-time board game for eight players. Roll the dice, buy land, build mansions and charge rent until every rival goes bankrupt — last one standing takes it all.",
      ctaPrimary: "Play on Steam",
      ctaSecondary: "Get on App Store",
      stats: [
        { value: "8", label: "Players per match" },
        { value: "Real-time", label: "Gameplay" },
        { value: "2", label: "Platforms" },
      ],
      scroll: "Scroll",
    },
    games: {
      label: "01 / Featured game",
      heading: "What we're building",
      tag: "Board game · Real-time · Multiplayer",
      badge: "Featured",
      name: "Number One Rich",
      desc: "Eight players, one map, no waiting. Buy up every plot you land on, stack it with buildings, and set rents high enough to hurt. Some get rich overnight; others go broke right after buying their first block — nothing is decided until the final roll.",
      playlist: [
        "Roll the dice and race seven other players in real time",
        "Buy land, upgrade buildings and connect your territory",
        "Charge rent from everyone who walks through your estate",
        "Bankrupt every rival and take the whole board",
      ],
      more: "More games are in the works. Stay tuned.",
    },
    how: {
      label: "02 / How to play",
      heading: "Simple rules. Ruthless strategy.",
      lead: "No long tutorial, no complicated systems. Learn these four steps and you're ready for the table.",
      steps: [
        {
          n: "01",
          title: "Roll and move",
          desc: "The dice decide your steps. Every move can be a lucky break — or a direct donation to a rival.",
        },
        {
          n: "02",
          title: "Buy and build",
          desc: "Snap up the plots you land on and upgrade them from shacks into mansions. Own the best streets.",
        },
        {
          n: "03",
          title: "Collect rent",
          desc: "Anyone who steps onto your land pays up. The taller your buildings, the deeper they dig.",
        },
        {
          n: "04",
          title: "Take it all",
          desc: "Drain your rivals until they're out of the game. The last tycoon standing wins the map.",
        },
      ],
    },
    about: {
      label: "03 / About us",
      heading: "Between black and white,\nwe make games worth playing.",
      body: "Black White Studio is an independent studio focused on multiplayer games that are light, easy to pick up and hard to put down. We believe a great game doesn't need a long tutorial — the rules read at a glance, and the outcome comes down to how you play.",
      quote: "The rules read at a glance. The outcome comes down to how you play.",
    },
    contact: {
      label: "04 / Contact",
      heading: "Partnership, feedback, or just to say hi?",
      body: "Whether it's a game suggestion, a bug report or a business inquiry, we'd love to hear from you.",
    },
    footer: {
      note: "Games made with care.",
      rights: "All rights reserved",
      contact: "Contact",
    },
  },
};
