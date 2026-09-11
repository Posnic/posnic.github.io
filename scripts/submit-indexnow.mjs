import { readFile } from 'node:fs/promises';

const host = 'posnic.github.io';
const key = 'ab42b9d0bda743b8bfc7be14277b4986';
const endpoint = 'https://api.indexnow.org/indexnow';
const keyLocation = `https://${host}/${key}.txt`;

const sitemap = await readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urls.length === 0) {
  throw new Error('The sitemap contains no URLs to submit.');
}

for (const value of urls) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.hostname !== host) {
    throw new Error(`Refusing to submit URL outside https://${host}: ${value}`);
  }
}

const payload = { host, key, keyLocation, urlList: urls };

if (process.argv.includes('--dry-run')) {
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
  process.exit(0);
}

const keyResponse = await fetch(keyLocation);
const publishedKey = (await keyResponse.text()).trim();
if (!keyResponse.ok || publishedKey !== key) {
  throw new Error(`IndexNow key verification failed with HTTP ${keyResponse.status}.`);
}

const response = await fetch(endpoint, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

if (response.status !== 200 && response.status !== 202) {
  throw new Error(`IndexNow rejected the sitemap URLs with HTTP ${response.status}.`);
}

process.stdout.write(`IndexNow accepted ${urls.length} URLs with HTTP ${response.status}.\n`);
