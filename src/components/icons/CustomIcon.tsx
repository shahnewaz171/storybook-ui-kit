interface CustomIconProps {
  width?: number;
  height?: number;
}

const CustomIcon = ({ width = 100, height = 100 }: CustomIconProps) => (
  <svg width={width} height={height}>
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="var(--sn-success)"
      strokeWidth="4"
      fill="var(--sn-warning)"
    />
  </svg>
);

export default CustomIcon;
