import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import './verify.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const target = join(root, 'workspace');
if (existsSync(target)) throw new Error('workspace/ já existe. Nada foi sobrescrito; continue no projeto existente.');
cpSync(join(root, 'templates/workspace'), target, { recursive: true });
mkdirSync(join(target, 'src/insumos'), { recursive: true });
cpSync(join(root, 'dados/dados-ficticios.json'), join(target, 'src/insumos/dados-ficticios.json'));
cpSync(join(root, 'cliente-nba'), join(target, 'src/insumos/cliente-nba'), { recursive: true });
writeFileSync(join(target, 'PROVENANCE.md'), '# Proveniência\n\nCommit do kit: preencher com `git rev-parse HEAD` antes de implementar.\n\n## Insumos do scaffold\n- templates/workspace/\n- packages/rbbt-ui-0.5.0-rc.6.tgz (instalado por npm ci)\n- dados/dados-ficticios.json\n- cliente-nba/\n\n## Leituras durante a implementação\nRegistrar receita, contratos, histórias, fontes externas e ajuda recebida.\n');
writeFileSync(join(target, 'LACUNAS.md'), '# Lacunas\n\nPara cada lacuna: versão/commit, tarefa tentada, esperado, observado, reprodução, captura e solução improvisada (se houver).\n\nReconstrução ainda não executada.\n');
console.log('Scaffold criado em workspace/. Próximo: cd workspace && npm ci && npm run dev. Os seis módulos ainda precisam ser implementados pelo Michael.');
