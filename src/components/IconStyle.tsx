import { Box } from "@mui/material";

interface Props {
  src: string;
  sx: Object;
}

export default function IconStyle(props: Props) {
  const { src, sx } = props;

  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        display: "inline-block",
        bgcolor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
}
