module.exports = {
  stories: [],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  refs: (config, { configType }) => {
    return {
      react: { title: "React", url: "http://localhost:6006" }
    }
  },
  framework: '@storybook/react-webpack5',
  docs: {
    autodocs: true,
  },
};
