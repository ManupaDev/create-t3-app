import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/consts.js";
import { type AvailableDependencies } from "~/installers/dependencyVersionMap.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const clerkInstaller: Installer = ({ projectDir }) => {
  const deps: AvailableDependencies[] = ["@clerk/nextjs"];

  addPackageDependency({
    projectDir,
    dependencies: deps,
    devMode: false,
  });

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  // Copy Clerk proxy for route protection (Next.js 16 convention)
  const proxySrc = path.join(extrasDir, "src/proxy-clerk.ts");
  const proxyDest = path.join(projectDir, "src/proxy.ts");
  fs.copySync(proxySrc, proxyDest);
};
