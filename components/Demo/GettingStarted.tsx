import { styled } from '@modulz/design-system';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = styled(PopoverPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: '0px 10px 38px -10px hsla(206,22%,7%,.35)',
  overflow: 'hidden',

  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px hsl(272,100%,96%)',
  },
});

// Other components in your App
const Box = styled('div', {});
const Text = styled('div', {
  fontSize: 16,
  color: 'black',
});

const Button = styled('button', {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid hsl(272,68%,70%)',
  color: 'hsl(272,62%,44%)',
  padding: '5px 15px',
  borderRadius: 4,

  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px hsl(272,100%,96%)',
  },
});

export const GettingStartedDemo = () => (
  <Popover>
    <PopoverTrigger>Trigger</PopoverTrigger>
    <PopoverContent sideOffset={3}>
      <Box css={{ width: 320 }}>
        <img
          src="https://images.unsplash.com/photo-1596420667316-cb2b4f67fc6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          style={{ width: '100%' }}
        />
        <Box css={{ padding: 20 }}>
          <Text css={{ fontWeight: 500 }}>Brian Lundquist</Text>
          <Text
            css={{
              margin: '5px 0 15px',
              color: 'slategray',
              fontSize: 14,
            }}
          >
            @bwl667
          </Text>
          <Button css={{ width: '100%' }}>Download</Button>
        </Box>
      </Box>
    </PopoverContent>
  </Popover>
);
