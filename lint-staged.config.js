module.exports = {
    '*.{js,ts,vue}': ['eslint . --max-warnings=0 --fix', 'prettier --write'],
    '*.json': 'eslint . --max-warnings=0 --fix',
    '*.{json,html,yml,md,css,php}': 'prettier . --write',
};
