
function Icon({ iconPath, width, height }) {
  return (
    <svg width={width} height={height}>
      <use href={iconPath} />
    </svg>
  );
}
export default Icon;
