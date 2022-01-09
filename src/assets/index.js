const r = require;

const assets = {
  verticalDivider: () => r('./vertical-divider.svg'),

  logo: {
    twitter: () => r('./logo-twitter.svg'),
    discord: () => r('./logo-discord.svg'),
    ig: () => r('./logo-ig.svg'),
    logo: () => r('./logo.svg'),
  },
};

export default assets;
