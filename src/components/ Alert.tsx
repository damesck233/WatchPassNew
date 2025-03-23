import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export function Alertbar() {
  return (
    <Alert icon={<IconInfoCircle />} title="提示" color="blue">
      这是一个信息提示框！
    </Alert>
  );
}