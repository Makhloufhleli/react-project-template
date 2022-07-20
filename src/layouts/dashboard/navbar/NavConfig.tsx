import { PATH_DASHBOARD } from "@Routes/paths";

import IconStyle from "@Src/components/IconStyle";

function getIcon(name: string) {
  return <IconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;
}

const ICONS = {
  integration: getIcon("ic_profile_public"),
};

const navConfig = [
  //INTEGRATION
  //----------------------------------------------------------------
  {
    subheader: "dashboard",
    items: [
      {
        title: "integration",
        path: PATH_DASHBOARD.integration.root,
        icon: ICONS.integration,
      },
    ],
  },
];
