import lunr from "C:\\Users\\Nanachilil_zyy\\Desktop\\web\\v1\\node_modules\\lunr\\lunr.js";
require("C:\\Users\\Nanachilil_zyy\\Desktop\\web\\v1\\node_modules\\lunr-languages\\lunr.stemmer.support.js")(lunr);
require("C:\\Users\\Nanachilil_zyy\\Desktop\\web\\v1\\node_modules\\@easyops-cn\\docusaurus-search-local\\dist\\client\\shared\\lunrLanguageZh.js").lunrLanguageZh(lunr);
require("C:\\Users\\Nanachilil_zyy\\Desktop\\web\\v1\\node_modules\\lunr-languages\\lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["en","zh"];
export const searchIndexUrl = "search-index{dir}.json?_=4b1aaadf";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;