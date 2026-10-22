import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { AppContent } from "./App";

export function renderRoute(url: string) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();

  return {
    appHtml,
    head: [title.replace(/<title[^>]*>\s*<\/title>/i, ""), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()]
      .filter(Boolean)
      .join("\n"),
  };
}
