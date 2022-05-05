// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "sampleContextMenu",
//     title: "Sample Context Menu",
//     contexts: ["selection"],
//   });
// });

chrome.runtime.onInstalled.addListener(() => {
  console.log("installed");
});
