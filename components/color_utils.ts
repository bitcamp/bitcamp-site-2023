type RGB = { r: number; g: number; b: number };

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hex_to_rgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return {
    r: parseInt(result![1], 16),
    g: parseInt(result![2], 16),
    b: parseInt(result![3], 16),
  };
}

function get_color_hex(color: string): string {
  const ctx: CanvasRenderingContext2D = document
    .createElement('canvas')
    .getContext('2d')!;
  ctx.fillStyle = color;
  return ctx.fillStyle;
}

export { hex_to_rgb, get_color_hex };
