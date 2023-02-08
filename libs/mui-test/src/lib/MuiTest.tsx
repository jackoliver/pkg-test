import { Box } from '@mui/material';
/* eslint-disable-next-line */
export interface MuiTestProps {
  children?: React.ReactNode;
}

export function MuiTest(props: MuiTestProps) {
  return (
    <Box
      sx={{
        background: 'orange',
        p: 2,
        fontFamily: 'monospace',
        fontSize: 22,
        fontWeight: 'bold',
      }}
    >
      {props.children}
    </Box>
  );
}

export default MuiTest;
