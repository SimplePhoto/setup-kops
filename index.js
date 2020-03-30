"use strict";

const path = require("path");
const fs = require("fs");
const toolCache = require("@actions/tool-cache");
const core = require("@actions/core");
const kopsToolName = 'kops';

async function downloadKops(version) {
  let downloadURL = `https://github.com/kubernetes/kops/releases/download/v${version}/kops-linux-amd64`;
  let cachedToolpath = toolCache.find(kopsToolName, version);
  if (!cachedToolpath) {
    let kopsDownloadPath = await toolCache.downloadTool(downloadURL);
    cachedToolpath = await toolCache.cacheFile(kopsDownloadPath, kopsToolName, kopsToolName, version);
  }
  let kopsPath = path.join(cachedToolpath, kopsToolName);
  fs.chmodSync(kopsPath, '777');
  return kopsPath;
}

async function run() {
  let version = core.getInput('version', { 'required': true });
  let cachedPath = await downloadKops(version);
  console.log(`Kops tool version: '${version}' has been cached at ${cachedPath}`);
  core.setOutput('kops-path', cachedPath);
}

run().catch(core.setFailed);
