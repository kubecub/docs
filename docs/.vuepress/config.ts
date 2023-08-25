import { defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { searchPlugin } from "@vuepress/plugin-search";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { tocPlugin } from "@vuepress/plugin-toc";
import Vue from "vue";
import GithubV3 from "@vssue/api-github-v3";
export default {
    markdown: { plugins: ["task-lists"] },
    base: "/",
    dest: "./dist",
    lang: "zh-CN",
    port: 8888,
    title: "你好",
    description: "链学社致力于打造出区块链去中心化的学习平台",
    sidebarDepth: 0,
    head: [["link", { rel: "icon", href: "/img/1.jpg" }]],
    plugins: [
        [
            "vuepress-plugin-baidu-tongji",
            { hm: "bf1bd5693b39d433338099c3aa905d50" },
        ],
        "@vuepress/nprogress",
        [
            "vuepress-plugin-zooming",
            {
                selector: ".theme-vdoing-content img:not(.no-zoom)",
                options: { bgColor: "rgba(0,0,0,0.6)" },
            },
        ],
        [
            "one-click-copy",
            {
                copySelector: [
                    'div[class*="language-"] pre',
                    'div[class*="aside-code"] aside',
                ],
                copyMessage: "复制成功噢⚡",
                duration: 1000,
                showInMobile: false,
            },
        ],
        [
            "vuepress-plugin-comment",
            {
                choosen: "gitalk",
                options: {
                    clientID: "4479c25f1d6cdcd8187f",
                    clientSecret: "ddba2162d94a643e601313646380e48904ded8ee",
                    repo: "my-blog-comment",
                    owner: "cubxxw",
                    admin: ["cubxxw"],
                    pagerDirection: "last",
                    id: '<%- (frontmatter.permalink || frontmatter.to.path || "123456789012345").slice(-16) %>',
                    title: "「评论」<%- frontmatter.title %>",
                    labels: ["Gitalk", "Comment"],
                    body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname || "123456789012345") %>',
                },
            },
        ],
        backToTopPlugin(),
        externalLinkIconPlugin({
            locales: {
                "/": { openInNewWindow: "open in new window" },
                "/zh/": { openInNewWindow: "在新窗口打开" },
            },
        }),
        mediumZoomPlugin({}),
        searchPlugin({}),
        docsearchPlugin({
            apiKey: "e0bc57bb5910bb4cbaff54471af173d4",
            appId: "LIPIDXUN7V",
            indexName: "go.nsddd.top",
            searchParameters: {
                attributesToSnippet: ["lvl1:30", "content:25"],
            },
            locales: {
                "/": {
                    placeholder: "搜索文档",
                    translations: {
                        button: {
                            buttonText: "搜索文档",
                            buttonAriaLabel: "搜索文档",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "清除查询条件",
                                resetButtonAriaLabel: "清除查询条件",
                                cancelButtonText: "取消",
                                cancelButtonAriaLabel: "取消",
                            },
                            startScreen: {
                                recentSearchesTitle: "搜索历史",
                                noRecentSearchesText: "没有搜索历史",
                                saveRecentSearchButtonTitle: "保存至搜索历史",
                                removeRecentSearchButtonTitle:
                                    "从搜索历史中移除",
                                favoriteSearchesTitle: "收藏",
                                removeFavoriteSearchButtonTitle: "从收藏中移除",
                            },
                            errorScreen: {
                                titleText: "无法获取结果",
                                helpText: "你可能需要检查你的网络连接",
                            },
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: "关闭",
                                searchByText: "搜索提供者",
                            },
                            noResultsScreen: {
                                noResultsText: "无法找到相关结果",
                                suggestedQueryText: "你可以尝试查询",
                                reportMissingResultsText:
                                    "你认为该查询应该有结果？",
                                reportMissingResultsLinkText: "点击反馈",
                            },
                        },
                    },
                },
            },
        }),
        prismjsPlugin({}),
        tocPlugin({}),
    ],
    theme: defaultTheme({
        sidebarDepth: 1,
        logoDark: "https://sm.nsddd.top//typora/1.jpg?mail:3293172751@qq.com",
        logo: "https://sm.nsddd.top//typora/4.png?mail:3293172751@qq.com",
        editLinkText: "在GitHub上贡献此页面",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        repoLabel: "查看源码",
        docsDir: "docs",
        docsBranch: "main",
        repo: "kubecub/docs",
        tip: "提示",
        warning: "注意",
        danger: "警告",
        notFound: [
            "这里什么都没有",
            "我们怎么到这来了？",
            "这是一个 404 页面",
            "看起来我们进入了错误的链接",
            '你可以返回首页<href="https//k8s-iam.nsddd.top">首页</a>',
        ],
        backToHome: "返回首页",
        openInNewWindow: "在新窗口打开",
        toggleColorMode: "切换颜色模式",
        toggleSidebar: "切换侧边栏",
        navbar: [
            {
                text: "🤵关于我",
                children: [
                    {
                        text: "Github仓库",
                        link: "https://github.com/cubxxw/awesome-cs-cloudnative-blockchain",
                        target: "_blank",
                        activeMatch: "/",
                    },
                    {
                        text: "我的博客",
                        target: "_blank",
                        link: "http://nsddd.top",
                        activeMatch: "/",
                    },
                    {
                        text: "知乎",
                        target: "_blank",
                        link: "https://www.zhihu.com/people/3293172751",
                        activeMatch: "/",
                    },
                    {
                        text: "⛓️链学社组织",
                        link: "https://github.com/kubecub/",
                        target: "_blank",
                    },
                ],
            },
            { text: "🏠首页", link: "/" },
            {
                text: "🐋docker文档",
                link: "https://docker.nsddd.top/",
                target: "_blank",
            },
            {
                text: "📚go文档",
                children: [
                    { text: "🔥 K8s-Iam 项目", link: "/projec/" },
                    { text: "🔥 k8s 教程", link: "/k8s/" },
                    { text: "🔥 iam 教程", link: "/k8s-iam/" },
                ],
            },
        ],
        sidebar: {
            "/iam/": [
                { text: "🏠回到主页", link: "/" },
                {
                    text: "🔥 Go语言基础篇",
                    children: [
                        "/iam/projects/1.md",
                        "/iam/projects/2.md",
                        "/iam/projects/3.md",
                        "/iam/projects/4.md",
                        "/iam/projects/5.md",
                        "/iam/projects/6.md",
                        "/iam/projects/7.md",
                        "/iam/projects/8.md",
                        "/iam/projects/9.md",
                        "/iam/projects/10.md",
                        "/iam/projects/11.md",
                        "/iam/projects/12.md",
                        "/iam/projects/13.md",
                        "/iam/projects/14.md",
                        "/iam/projects/15.md",
                        "/iam/projects/16.md",
                        "/iam/projects/17.md",
                        "/iam/projects/18.md",
                        "/iam/projects/19.md",
                        "/iam/projects/20.md",
                        "/iam/projects/21.md",
                        "/iam/projects/22.md",
                        "/iam/projects/23.md",
                        "/iam/projects/24.md",
                        "/iam/projects/25.md",
                        "/iam/projects/26.md",
                        "/iam/projects/27.md",
                        "/iam/projects/28.md",
                        "/iam/projects/29.md",
                        "/iam/projects/30.md",
                        "/iam/projects/31.md",
                        "/iam/projects/32.md",
                        "/iam/projects/33.md",
                        "/iam/projects/34.md",
                        "/iam/projects/35.md",
                        "/iam/projects/36.md",
                        "/iam/projects/37.md",
                        "/iam/projects/38.md",
                        "/iam/projects/39.md",
                        "/iam/projects/40.md",
                        "/iam/projects/41.md",
                        "/iam/projects/42.md",
                        "/iam/projects/43.md",
                        "/iam/projects/44.md",
                        "/iam/projects/45.md",
                        "/iam/projects/46.md",
                        "/iam/projects/47.md",
                        "/iam/projects/48.md",
                        "/iam/projects/49.md",
                        '/iam/projects/50.md',
                        {
                            text: "💝如何参与贡献？",
                            link: "https://nsddd.top/archives/contributors",
                        },
                    ],
                },
            ],
        },
    }),
};
