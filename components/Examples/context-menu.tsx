import { styled } from '@modulz/design-system';
import * as ContextMenuPrimitive from '@interop-ui/react-context-menu';

export const Root = styled(ContextMenuPrimitive.Root, {
  minWidth: 130,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow: 'hsla(206,22%,7%,.15) 0px 5px 15px -5px, hsla(206,22%,7%,.1) 0px 5px 10px -15px',
});

export const MenuPopper = styled(ContextMenuPrimitive.Popper, {
  minWidth: 130,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow: 'hsla(206,22%,7%,.15) 0px 5px 15px -5px, hsla(206,22%,7%,.1) 0px 5px 10px -15px',
});

export const MenuItem = styled(ContextMenuPrimitive.MenuItem, {
  fontSize: 13,
  padding: '5px 10px',
  borderRadius: 3,
  cursor: 'default',

  '&[data-disabled]': { color: 'slategray' },

  ':focus': {
    outline: 'none',
    backgroundColor: 'dodgerblue',
    color: 'white',
  },
});

export const MenuSeparator = styled(ContextMenuPrimitive.MenuSeparator, {
  height: 1,
  backgroundColor: 'gainsboro',
  margin: '5px 10px',
});

export const TriggerArea = styled(ContextMenuPrimitive.Trigger, {
  display: 'block',
  textAlign: 'center',
  padding: 100,
  backgroundColor: 'slategray',
});
