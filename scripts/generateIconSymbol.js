const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

const iconDir = path.join(__dirname, '../src/app/shared/components/icon/svg');
const svgFileNames = fs.readdirSync(iconDir).filter(fileName => {
  return fileName.split('.').pop() === 'svg';
});

const symbolHtml = svgFileNames.map((svgFileName) => {
  const location = path.join(iconDir, svgFileName);
  const content = fs.readFileSync(location, 'utf-8');
  const $ = cheerio.load(content);
  const iconName = svgFileName.split('.').shift();
  $('title').remove();
  $('svg')
  .attr('id', iconName)
  // 移除 原有svg标签上的xmlns/width/height属性
  .attr('xmlns', null)
  .attr('width', null)
  .attr('height', null);
  // 移除path与g标签上的fill填充属性
  $('path').attr('fill', null);
  $('g').attr('fill', null);
  // $('body')选择整个html字符串
  return $('body').html().replace(/svg/g, 'symbol');
})
.join('\n');

// 行内引入的方式display: none，将所有svg（symbol）一次性引入
const res = `<svg style='display: none' xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >\n${symbolHtml}</svg>`;
const resFileName = path.join(iconDir, '../icon-symbol.component.html');
// 将以上svg写入icon组件库模板中
fs.writeFileSync(resFileName, res);
