import { Container, Group, Text, Box } from '@mantine/core';
import { IconQrcode } from '@tabler/icons-react';

export function Header() {
  return (
    <Box
      component="nav"
      pos="fixed"
      top={0}
      left={0}
      right={0}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}
    >
      <Container size="lg" py="md">
        <Group justify="flex-start" align="center">
          <Group gap="sm">
            <IconQrcode size={28} style={{ color: 'var(--mantine-color-blue-filled)' }} />
            <Text size="lg" fw={500}>
              快捷小工具
            </Text>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}