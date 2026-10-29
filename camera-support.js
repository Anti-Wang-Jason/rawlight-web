export function validateRawMetadata(meta){
 if(meta?.camera_make?.toLowerCase().includes('nikon') && [13,14].includes(meta?.nikon?.NEFCompression))
  throw Error('尼康高效率 HE / HE★ NEF 暂不支持；请选择无损压缩 NEF 或 JPEG。');
}
