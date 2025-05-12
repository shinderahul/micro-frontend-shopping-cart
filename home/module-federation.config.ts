export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx"
  },
  shared: ["react", "react-dom"],
};
