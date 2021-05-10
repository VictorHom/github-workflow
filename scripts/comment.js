
const { Octokit } = require('@octokit/action')
const { context } = require('@actions/github')
const core = require('@actions/core')

console.log(process.env.COMMENT_ISSUE_NUMBER)
console.log(process.env.PR_BODY, "comment body")
console.log(process.env.ISSUE_URL, "issue url")

getPRInfo()

async function getPRInfo() {
  const octokit = new Octokit()

  const { data } = await octokit.request(process.env.ISSUE_URL.replace("issues", "pulls");
  console.log(data)
}
