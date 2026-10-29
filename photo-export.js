export async function makePhotoFile(dataUrl, filename) {
  if (!dataUrl.startsWith('data:image/jpeg;base64,')) throw new Error('导出结果不是 JPEG 图片');
  const response = await fetch(dataUrl);
  if (!response.ok) throw new Error('无法准备导出照片');
  const blob = await response.blob();
  if (!blob.size) throw new Error('导出照片为空');
  return new File([blob], filename, { type: 'image/jpeg' });
}
export function canSharePhoto(nav, file) {
  try { return typeof nav?.share === 'function' && typeof nav?.canShare === 'function' && nav.canShare({ files: [file] }); }
  catch { return false; }
}
export function sharePhoto(nav, file) {
  if (!canSharePhoto(nav, file)) throw new Error('当前浏览器不支持分享照片');
  return nav.share({ files: [file] });
}
