import { PropsWithChildren } from 'react';

import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge, Box, Container, Unstable_Grid2 as Grid, IconButton, Stack } from '@mui/material';

import Sidebar from '../../components/sidebar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Grid container={true} disableEqualOverflow={true} height={'100vh'} width={'100%'}>
      <Sidebar />
      <Grid container direction="column" sx={{ height: '100%' }} xs={true}>
        <Grid sx={{ width: '100%' }}>
          <Box padding={3}>
            <Stack direction={'row'} justifyContent={'flex-end'}>
              <Stack alignItems={'center'} direction={'row'} spacing={1}>
                <IconButton>
                  <Badge badgeContent={200} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton>
                  <SettingsIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid container={true} sx={{ overflowY: 'auto' }} xs={true}>
          <Grid xs={true}>
            <Container maxWidth={'2xl'}>{children}</Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
