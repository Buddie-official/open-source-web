import React from "react";
import Layout from "@theme/Layout";

export default function AboutUs() {
  return (
    <Layout title="关于我们" description="Buddie AI 团队介绍与项目背景">
      <main style={{ padding: "2rem" }}>
        <h1>关于我们</h1>
        <p>
          Buddie AI
          是一个致力于将人工智能引入智能音频设备的开源项目。我们的核心产品是一款搭载
          AI 模型的智能耳机，具备语音助手、噪声抑制、智能配对等特性。
        </p>

        <h2>团队愿景</h2>
        <p>
          我们相信开放的技术可以让更多开发者参与硬件创新。通过开放硬件设计、固件和
          APP 代码，我们希望构建一个共同进步的社区。
        </p>

        <h2>团队成员</h2>
        <ul>
          <li>张三 - 硬件工程师</li>
          <li>李四 - 嵌入式开发</li>
          <li>王五 - 移动端开发</li>
        </ul>

        <h2>联系我们</h2>
        <p>
          📫 邮箱：buddie-support@example.com <br />
          💬 GitHub:{" "}
          <a href="https://github.com/你的项目" target="_blank">
            项目主页
          </a>
        </p>
      </main>
    </Layout>
  );
}
