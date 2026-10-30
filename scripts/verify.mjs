import { createHash } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const [major, minor] = process.versions.node.split('.').map(Number);
if (major < 22 || (major === 22 && minor < 12)) throw new Error('Use Node >=22.12.0; versão de referência em .nvmrc.');
let count = 0;
for (const line of readFileSync(resolve(root, 'MANIFEST.sha256'), 'utf8').trim().split('\n')) {
  const match = /^([a-f0-9]{64}) {2}(.+)$/.exec(line);
  if (!match) throw new Error('Linha inválida no manifesto');
  const [, expected, name] = match;
  const path = resolve(root, name);
  if (!path.startsWith(resolve(root) + sep)) throw new Error('Caminho inválido no manifesto');
  if (!existsSync(path)) throw new Error(`Arquivo ausente: ${name}`);
  const actual = createHash('sha256').update(readFileSync(path)).digest('hex');
  if (actual !== expected) throw new Error(`Hash divergente: ${name}`);
  count++;
}
console.log(`OK: ${count} arquivos íntegros. Versão 0.5.0-rc.6. O manifesto confere integridade; o commit identifica a entrega.`);
