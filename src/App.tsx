// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { Alert, Button, Group, MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import { IconBrandWechat, IconInfoCircle } from '@tabler/icons-react';


export default function App() {
  return (
    <MantineProvider>
      <Header />
      <Button component="a" href="skm.html" leftSection={<IconBrandWechat size={16} />}>课程表</Button><br /><br />
      <Button component="a" href="skm.html" leftSection={<IconBrandWechat size={16} />}>倒计时</Button><br /><br />
      <Button component="a" href="skm.html" leftSection={<IconBrandWechat size={16} />}>收款码</Button>
    </MantineProvider>
  );
}