import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Select,
  Separator,
  Strong,
  Text,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes';
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  CalendarIcon,
  CrumpledPaperIcon,
  FontBoldIcon,
  FontItalicIcon,
  ImageIcon,
  InstagramLogoIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
  RulerHorizontalIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';
import * as React from 'react';

export const ExampleThemesEcommerce = (props: React.ComponentPropsWithoutRef<typeof Flex>) => {
  const [container, setContainer] = React.useState<HTMLDivElement>(null);

  const [state, setState] = React.useState({
    sneakersBookmarked: false,
    jeansBookmarked: false,
    delivery: '',
    sizes: ['9'],
    materials: [],
    colors: [],
    productMaterial: '',
    productColor: '',
    productSizes: [],
  });

  const onToggleButtonClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, key: keyof typeof state) => {
      setState((currentState) => {
        const currentValue = currentState[key];
        const buttonValue = event.currentTarget.textContent;

        let newValue = currentValue;

        if (Array.isArray(newValue)) {
          if (newValue.includes(buttonValue)) {
            newValue = newValue.filter((value) => value !== buttonValue);
          } else {
            newValue.push(buttonValue);
          }
        } else {
          newValue = currentValue === buttonValue ? '' : buttonValue;
        }

        return {
          ...currentState,
          [key]: newValue,
        };
      });
    },
    [setState]
  );

  return (
    <Flex align="center" gap="6" ref={setContainer} {...props}>
      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          width: 304,
          // Space to align the vertically centered content with the dot grid
          // marginTop: -16,
        }}
      >
        <Card size="1">
          <Flex mb="2">
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80"
              width="280"
              height="212"
              style={{ borderRadius: 'var(--radius-1)' }}
            />
          </Flex>

          <Flex align="center" justify="between" gap="3">
            <Box>
              <Link color="gray" size="2" weight="bold" highContrast>
                Back to basics
              </Link>

              <Text size="2" color="gray" as="p">
                Simple and versatile
              </Text>
            </Box>
            <Box shrink="0">
              <Button tabIndex={-1} size="2" variant="soft" color="gray" highContrast>
                Shop now
              </Button>
            </Box>
          </Flex>
        </Card>

        <Card size="1">
          <Flex mb="2" position="relative">
            <img
              width="280"
              height="270"
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80"
              style={{ borderRadius: 'var(--radius-1)' }}
            />

            <Theme appearance="light" asChild>
              <Flex
                align="center"
                justify="center"
                position="absolute"
                bottom="0"
                right="0"
                width="6"
                height="6"
                style={{ borderRadius: 'var(--radius-3)' }}
                m="2"
              >
                <IconButton
                  size="2"
                  tabIndex={-1}
                  color="gray"
                  variant="ghost"
                  highContrast={state.sneakersBookmarked}
                  onClick={() =>
                    setState((currentState) => ({
                      ...currentState,
                      sneakersBookmarked: !currentState.sneakersBookmarked,
                    }))
                  }
                >
                  {state.sneakersBookmarked ? (
                    <BookmarkFilledIcon width="16" height="16" />
                  ) : (
                    <BookmarkIcon width="16" height="16" />
                  )}
                </IconButton>
              </Flex>
            </Theme>
          </Flex>

          <Flex align="end" justify="between" mb="2">
            <Box>
              <Flex mb="1">
                <Link size="2" color="gray" highContrast>
                  Footwear
                </Link>
              </Flex>

              <Heading as="h3" size="3">
                Sneakers #12
              </Heading>
            </Box>

            <Text size="6" weight="bold">
              $149
            </Text>
          </Flex>

          <Text as="p" size="2" color="gray" mb="4">
            Love at the first sight for enthusiasts seeking a fresh and whimsical style.
          </Text>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" my="4" />
          </Box>

          <Flex gap="2" align="end">
            <Flex direction="column" grow="1">
              <Label asChild>
                <Text size="1" color="gray" mb="1">
                  Color
                </Text>
              </Label>

              <Select.Root defaultValue="Pastel" size="2">
                <Select.Trigger tabIndex={-1} variant="soft" highContrast />
                <Select.Content variant="soft" container={container} position="popper">
                  <Select.Item value="Pastel">Pastel</Select.Item>
                  <Select.Item value="Bright">Bright</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction="column" style={{ minWidth: 80 }}>
              <Label asChild>
                <Text size="1" color="gray" mb="1">
                  Size
                </Text>
              </Label>

              <Select.Root defaultValue="8" size="2">
                <Select.Trigger tabIndex={-1} variant="soft" highContrast />
                <Select.Content variant="soft" container={container} position="popper">
                  {Array.from({ length: 12 }, (_, i) => (
                    <Select.Item key={i} value={String(i * 0.5 + 5)}>
                      {i * 0.5 + 5}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>

            <Button tabIndex={-1} size="2" variant="solid" color="gray" highContrast>
              Buy
            </Button>
          </Flex>
        </Card>

        <Card size="1">
          <Flex direction="column" style={{ gap: 20 }}>
            <Box>
              <Text as="div" size="2" weight="bold" mb="2">
                Delivery
              </Text>

              <Grid gap="1" columns="2">
                <Button
                  highContrast
                  tabIndex={-1}
                  variant={state.delivery === 'Tomorrow' ? 'solid' : 'soft'}
                  onClick={(event) => onToggleButtonClick(event, 'delivery')}
                  style={{ fontWeight: 400 }}
                >
                  Tomorrow
                </Button>
                <Button
                  highContrast
                  tabIndex={-1}
                  variant={state.delivery === 'Within 3 days' ? 'solid' : 'soft'}
                  onClick={(event) => onToggleButtonClick(event, 'delivery')}
                  style={{ fontWeight: 400 }}
                >
                  Within 3 days
                </Button>
              </Grid>
            </Box>

            <Box>
              <Text as="div" size="2" weight="bold" mb="2">
                Size
              </Text>

              <Grid gap="1" columns="5">
                {['5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'].map((size) => (
                  <Button
                    key={size}
                    highContrast
                    tabIndex={-1}
                    disabled={size === '9.5'}
                    onClick={(event) => onToggleButtonClick(event, 'sizes')}
                    variant={state.sizes.includes(size) ? 'solid' : 'soft'}
                    style={{ fontWeight: 400 }}
                  >
                    {size}
                  </Button>
                ))}
              </Grid>
            </Box>

            <Box>
              <Text as="div" size="2" weight="bold" mb="2">
                Material
              </Text>

              <Grid gap="1" columns="4">
                {['Leather', 'Suede', 'Mesh', 'Canvas'].map((material) => (
                  <Button
                    key={material}
                    highContrast
                    tabIndex={-1}
                    disabled={material === '9.5'}
                    onClick={(event) => onToggleButtonClick(event, 'materials')}
                    variant={state.materials.includes(material) ? 'solid' : 'soft'}
                    style={{ fontWeight: 400 }}
                  >
                    {material}
                  </Button>
                ))}
              </Grid>
            </Box>

            <Box>
              <Text as="div" size="2" weight="bold" mb="2">
                Color
              </Text>

              <Grid gap="1" columns="3">
                {[
                  { name: 'White', value: 'white' },
                  { name: 'Gray', value: 'var(--gray-9)' },
                  { name: 'Black', value: '#1B1B18' },
                  { name: 'Red', value: 'var(--red-9)' },
                  { name: 'Pink', value: 'var(--pink-8)' },
                  { name: 'Violet', value: 'var(--violet-9)' },
                  { name: 'Blue', value: 'var(--blue-9)' },
                  { name: 'Green', value: 'var(--teal-9)' },
                  { name: 'Beige', value: '#E5DFCF' },
                ].map((color) => (
                  <Button
                    tabIndex={-1}
                    key={color.name}
                    highContrast
                    style={{ fontWeight: 400, justifyContent: 'start' }}
                    variant={state.colors.includes(color.name) ? 'solid' : 'soft'}
                    onClick={(event) => onToggleButtonClick(event, 'colors')}
                  >
                    <Box
                      shrink="0"
                      width="4"
                      height="4"
                      style={{
                        background: color.value,
                        borderRadius: 'var(--radius-1)',
                        boxShadow: 'inset 0 0 0 1px rgba(160, 160, 160, 0.4)',
                      }}
                    />
                    {color.name}
                  </Button>
                ))}
              </Grid>
            </Box>
          </Flex>
        </Card>

        <Card size="1">
          <Box height="4" mb="4">
            <Heading as="h3" size="3">
              Shopping cart
            </Heading>
          </Box>

          <Flex direction="column" gap="3">
            {[
              {
                name: 'Poncho #4',
                url:
                  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy',
                caption: 'Size M',
                count: '1',
                price: '$79',
              },
              {
                name: 'Jeans #8',
                url:
                  'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=entropy',
                caption: 'Size 30',
                count: '2',
                price: '$118',
              },
              {
                name: 'Sneakers #14',
                url:
                  'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80&crop=center',
                caption: 'Size 8',
                count: '1',
                price: '$116',
              },
            ].map((item) => (
              <Flex gap="4" align="center" justify="between" key={item.url}>
                <Flex grow="1" align="center" gap="2" height="6">
                  <img
                    src={item.url}
                    style={{ borderRadius: 'var(--radius-1)' }}
                    width="32"
                    height="32"
                  />
                  <Box>
                    <Text as="div" color="gray" trim="start">
                      <Link size="2" weight="bold">
                        {item.name}
                      </Link>
                    </Text>
                    <Text as="div" color="gray" size="1" trim="end">
                      {item.caption}
                    </Text>
                  </Box>
                </Flex>

                <Flex direction="column" width="8">
                  <Select.Root defaultValue={item.count} size="1">
                    <Select.Trigger tabIndex={-1} />
                    <Select.Content variant="soft" container={container} position="popper">
                      {Array.from({ length: 9 }, (_, i) => (
                        <Select.Item key={i} value={String(i + 1)}>
                          {i + 1}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </Flex>

                <Flex direction="column" width="7">
                  <Text size="2" weight="bold" align="right">
                    {item.price}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" my="4" />
          </Box>

          <Flex align="center" justify="between" mt="4">
            <Text size="2">
              Total <Strong>$313</Strong>
            </Text>

            <Button tabIndex={-1} size="2" variant="solid" color="gray" highContrast>
              Go to checkout
            </Button>
          </Flex>
        </Card>
      </Flex>

      <Flex shrink="0" gap="6" direction="column" style={{ width: 304 }}>
        <Card size="1">
          <Flex mb="2" position="relative">
            <img
              width="280"
              height="270"
              src="https://images.unsplash.com/photo-1577210897949-1f56f943bf82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80&crop=bottom"
              style={{ borderRadius: 'var(--radius-1)' }}
            />

            <Theme appearance="light" asChild>
              <Flex
                align="center"
                justify="center"
                position="absolute"
                bottom="0"
                right="0"
                width="6"
                height="6"
                style={{ borderRadius: 'var(--radius-3)' }}
                m="2"
              >
                <IconButton size="2" tabIndex={-1} color="gray" variant="ghost">
                  <BookmarkIcon width="16" height="16" />
                </IconButton>
              </Flex>
            </Theme>
          </Flex>

          <Flex align="end" justify="between" mb="2">
            <Box>
              <Flex mb="1">
                <Link highContrast size="2" color="gray">
                  Pants and jeans
                </Link>
              </Flex>

              <Heading as="h3" size="3">
                Jeans #7
              </Heading>
            </Box>

            <Text as="div" size="6" weight="bold">
              $149
            </Text>
          </Flex>

          <Text as="p" size="2" color="gray" mb="4">
            Jeans with a sense of nostalgia, as if they carry whispered tales of past adventures.
          </Text>

          <Box style={{ marginTop: -1 }}>
            <Separator size="4" my="4" />
          </Box>

          <Flex gap="2" align="end">
            <Flex direction="column" grow="1">
              <Label asChild>
                <Text size="1" color="gray" mb="1">
                  Color
                </Text>
              </Label>

              <Select.Root defaultValue="Lighter" size="2">
                <Select.Trigger tabIndex={-1} variant="soft" highContrast />
                <Select.Content variant="soft" container={container} position="popper">
                  <Select.Item value="Lighter">Lighter</Select.Item>
                  <Select.Item value="Darker">Darker</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction="column">
              <Label asChild>
                <Text size="1" color="gray" mb="1">
                  Size
                </Text>
              </Label>

              <Select.Root defaultValue="30" size="2">
                <Select.Trigger tabIndex={-1} variant="soft" highContrast />
                <Select.Content variant="soft" container={container} position="popper">
                  {Array.from({ length: 17 }, (_, i) => (
                    <Select.Item key={i} value={String(i + 24)}>
                      {i + 24}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>

            <Button tabIndex={-1} size="2" variant="solid" color="gray" highContrast>
              Add to cart
            </Button>
          </Flex>
        </Card>

        <Card size="1">
          <Flex mb="2">
            <img
              src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=424&q=80"
              width="280"
              height="212"
              style={{ borderRadius: 'var(--radius-1)' }}
            />
          </Flex>

          <Flex align="center" justify="between" gap="3">
            <Box>
              <Link color="gray" size="2" weight="bold" highContrast>
                Unexpected pairings
              </Link>

              <Text as="p" size="2" color="gray">
                Break the fashion norms
              </Text>
            </Box>
            <Box shrink="0">
              <Button tabIndex={-1} size="2" variant="soft" color="gray" highContrast>
                Shop now
              </Button>
            </Box>
          </Flex>
        </Card>

        <Card size="1">
          <Flex mb="3">
            <Heading as="h3" size="3">
              Delivery
            </Heading>
          </Flex>

          <Box position="absolute" right="0" top="0" m="2">
            <Badge size="1" color="amber">
              Guaranteed
            </Badge>
          </Box>

          <Box mb="4">
            <Text as="div" size="2" weight="bold" mb="1">
              Tomorrow
            </Text>
            <Text as="div" size="2">
              12:00 pm – 2:00 pm
            </Text>
          </Box>

          <Box mb="4">
            <Text as="div" size="2" weight="bold" mb="1">
              Luna Rodriguez
            </Text>
            <Text as="div" size="2">
              9876 Maple Avenue
            </Text>
            <Text as="div" size="2">
              Cityville, WA 54321
            </Text>
          </Box>

          <Flex mb="4">
            <img
              width="280"
              height="218"
              src="https://workos.imgix.net/images/bc04b345-f225-488d-8a46-1811096d0c3b.png?auto=format&fit=clip&q=90&w=840&h=654"
              style={{ borderRadius: 'var(--radius-1)' }}
            />
          </Flex>

          <Flex gap="2" justify="end">
            <Button tabIndex={-1} size="2" variant="soft" color="gray" highContrast>
              Edit
            </Button>
            <Button tabIndex={-1} size="2" variant="solid" color="gray" highContrast>
              Confirm
            </Button>
          </Flex>
        </Card>

        <Card size="1">
          <Box height="6">
            <Flex align="center" justify="between">
              <Heading as="h3" size="3">
                Bookmarks
              </Heading>
              <Button tabIndex={-1} size="1" variant="ghost">
                Buy all
              </Button>
            </Flex>
          </Box>

          <Grid gapX="2" gapY="4" columns="2">
            {[
              {
                name: 'Jeans #8',
                url:
                  'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy',
                price: '$118',
              },

              {
                name: 'Jacket #3',
                url:
                  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&crop=entropy&w=272&h=272&q=80',
                price: '$49',
              },
              {
                name: 'Pants #10',
                url:
                  'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80',
                price: '$32',
              },
              {
                name: 'Shirt #11',
                url:
                  'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80',
                price: '$39',
              },
            ].map((item) => (
              <Box key={item.url}>
                <Flex mb="2">
                  <img
                    src={item.url}
                    style={{ borderRadius: 'var(--radius-1)' }}
                    width="136"
                    height="136"
                  />
                </Flex>

                <Text as="div" size="2" color="gray">
                  <Link weight="bold">{item.name}</Link>, {item.price}
                </Text>
              </Box>
            ))}
          </Grid>
        </Card>
      </Flex>

      <Flex shrink="0" gap="6" direction="column" style={{ width: 416, scrollSnapAlign: 'center' }}>
        <Card size="2">
          <Flex direction="column" align="center" py="2">
            <Box mb="2">
              <CrumpledPaperIcon width="24" height="24" />
            </Box>
            <Heading as="h3" mb="1" size="4">
              Product discarded
            </Heading>
            <Text size="2" color="gray" mb="4">
              It’s still available in the <Link>archive</Link>.
            </Text>

            <Flex gap="2">
              <Button tabIndex={-1} variant="soft" highContrast>
                Undo
              </Button>
              <Button tabIndex={-1} variant="solid" highContrast>
                Done
              </Button>
            </Flex>
          </Flex>
        </Card>

        <Card size="2">
          <Heading as="h3" size="4" mb="4">
            Edit product
          </Heading>

          <Box style={{ marginTop: -3 }} />

          <Grid columns="5" gap="2" mb="4">
            <Box style={{ gridColumn: '1 / 5' }}>
              <Label>
                <Text size="2" weight="bold" mb="2" asChild>
                  <Box display="inline-block">Title</Box>
                </Text>

                <TextField.Input
                  tabIndex={-1}
                  variant="soft"
                  placeholder="Enter product title"
                  defaultValue="Skirt #16"
                />
              </Label>
            </Box>

            <Box>
              <Label>
                <Text size="2" weight="bold" mb="2" asChild>
                  <Box display="inline-block">Price</Box>
                </Text>

                <TextField.Input
                  tabIndex={-1}
                  variant="soft"
                  placeholder="Enter price"
                  defaultValue="$99"
                />
              </Label>
            </Box>
          </Grid>

          <Box mb="4">
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Media</Box>
            </Text>

            <Grid columns="3" gap="2">
              <Flex>
                <img
                  src="https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80&crop=bottom"
                  width="200"
                  height="200"
                  style={{
                    borderRadius: 'var(--radius-2)',
                    objectFit: 'cover',
                    width: '100%',
                    height: 121,
                    cursor: 'zoom-in',
                  }}
                />
              </Flex>
              <Flex>
                <img
                  src="https://workos.imgix.net/images/c773ee38-9136-49d1-804c-6d166dad9c65.png?auto=format&fit=clip&q=80w=400&h=400"
                  width="200"
                  height="200"
                  style={{
                    borderRadius: 'var(--radius-2)',
                    objectFit: 'cover',
                    width: '100%',
                    height: 121,
                    cursor: 'zoom-in',
                  }}
                />
              </Flex>
              <Flex
                align="center"
                justify="center"
                style={{ border: '1px solid var(--gray-5)', borderRadius: 'var(--radius-2)' }}
              >
                <Grid columns="2" gap="2">
                  <IconButton tabIndex={-1} highContrast variant="soft" size="2">
                    <ImageIcon width="16" height="16" />
                  </IconButton>
                  <IconButton tabIndex={-1} highContrast variant="soft" size="2">
                    <VideoIcon width="16" height="16" />
                  </IconButton>
                  <IconButton tabIndex={-1} highContrast variant="soft" size="2">
                    <InstagramLogoIcon width="16" height="16" />
                  </IconButton>
                  <IconButton tabIndex={-1} highContrast variant="soft" size="2">
                    <RulerHorizontalIcon width="16" height="16" />
                  </IconButton>
                </Grid>
              </Flex>
            </Grid>
          </Box>

          <Box mb="4">
            <Label htmlFor="skirt-description">
              <Text size="2" weight="bold" mb="2" asChild>
                <Box display="inline-block">Description</Box>
              </Text>
            </Label>
            <Box position="relative">
              <TextArea
                tabIndex={-1}
                spellCheck={false}
                id="skirt-description"
                variant="soft"
                defaultValue="Amidst the soft hues and delicate silence, one's gaze is always drawn towards this skirt. The fabric seems to possess a story of its own, woven with threads of history and whispered secrets. Its savory color, reminiscent of lush meadows in spring, holds the promise of new beginnings. Delicate ruffles cascade elegantly, like gentle waves lapping against an untouched shore."
                style={{ height: 260, paddingTop: 48 }}
              />
              <Box position="absolute" m="2" top="0" left="0" right="0">
                <Flex gap="4">
                  <Flex gap="1">
                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <FontItalicIcon width="16" height="16" />
                    </IconButton>

                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <FontBoldIcon width="16" height="16" />
                    </IconButton>

                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <StrikethroughIcon width="16" height="16" />
                    </IconButton>
                  </Flex>

                  <Flex gap="1">
                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <TextAlignLeftIcon width="16" height="16" />
                    </IconButton>

                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <TextAlignCenterIcon width="16" height="16" />
                    </IconButton>

                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <TextAlignRightIcon width="16" height="16" />
                    </IconButton>
                  </Flex>

                  <Flex gap="1">
                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <MagicWandIcon />
                    </IconButton>

                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <ImageIcon width="16" height="16" />
                    </IconButton>

                    <IconButton tabIndex={-1} variant="soft" highContrast>
                      <CrumpledPaperIcon width="16" height="16" />
                    </IconButton>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>

          <Box mb="4">
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Main material</Box>
            </Text>

            <Grid columns="3" gap="1">
              {[
                'Synthetic',
                'Wool',
                'Cotton',
                'Linen',
                'Denim',
                'Leather',
                'Silk',
                'Chiffon',
                'Other',
              ].map((material) => (
                <Button
                  tabIndex={-1}
                  key={material}
                  highContrast
                  style={{ fontWeight: 400 }}
                  variant={state.productMaterial === material ? 'solid' : 'soft'}
                  onClick={(event) => onToggleButtonClick(event, 'productMaterial')}
                >
                  {material}
                </Button>
              ))}
            </Grid>
          </Box>

          <Box mb="4">
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Main color</Box>
            </Text>

            <Grid columns="3" gap="1">
              {[
                { name: 'White', value: 'white' },
                { name: 'Gray', value: 'var(--gray-9)' },
                { name: 'Black', value: '#1B1B18' },
                { name: 'Red', value: 'var(--red-9)' },
                { name: 'Pink', value: 'var(--pink-8)' },
                { name: 'Violet', value: 'var(--violet-9)' },
                { name: 'Blue', value: 'var(--blue-9)' },
                { name: 'Green', value: 'var(--teal-9)' },
                { name: 'Beige', value: '#E5DFCF' },
              ].map((color) => (
                <Button
                  tabIndex={-1}
                  key={color.name}
                  highContrast
                  style={{ fontWeight: 400 }}
                  variant={state.productColor === color.name ? 'solid' : 'soft'}
                  onClick={(event) => onToggleButtonClick(event, 'productColor')}
                >
                  <Flex align="center" gap="2" width="9">
                    <Box
                      shrink="0"
                      width="4"
                      height="4"
                      style={{
                        background: color.value,
                        borderRadius: 'var(--radius-1)',
                        boxShadow: 'inset 0 0 0 1px rgba(160, 160, 160, 0.4)',
                      }}
                    />
                    {color.name}
                  </Flex>
                </Button>
              ))}
            </Grid>
          </Box>

          <Box>
            <Text size="2" weight="bold" mb="2" asChild>
              <Box display="inline-block">Sizes</Box>
            </Text>

            <Grid columns="3" gap="1">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <Button
                  tabIndex={-1}
                  key={size}
                  highContrast
                  style={{ fontWeight: 400 }}
                  variant={state.productSizes.includes(size) ? 'solid' : 'soft'}
                  onClick={(event) => onToggleButtonClick(event, 'productSizes')}
                >
                  {size}
                </Button>
              ))}
            </Grid>
          </Box>
        </Card>

        <Card size="2">
          <Flex align="center" justify="between" height="5" mb="4">
            <Heading as="h3" size="4">
              Orders
            </Heading>
            <Button tabIndex={-1} variant="ghost" size="1" mr="-2">
              <CalendarIcon width="12" height="12" />
              <Text size="2">May 2023</Text>
            </Button>
          </Flex>

          <Flex direction="column" gap="3" mb="4">
            <Grid columns="4">
              <Text size="2" color="gray">
                Order no.
              </Text>

              <Text size="2" color="gray">
                Payment
              </Text>

              <Text size="2" color="gray">
                Fulfillment
              </Text>

              <Text size="2" color="gray" align="right">
                Amount
              </Text>
            </Grid>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            {([
              {
                id: 1005,
                paymentStatus: 'Paid',
                paymentStatusColor: 'teal',
                fulfillment: 'Delivering',
                fulfillmentColor: 'amber',
                amount: '$154.60',
              },
              {
                id: 1004,
                paymentStatus: 'Paid',
                paymentStatusColor: 'teal',
                fulfillment: 'Unfulfilled',
                fulfillmentColor: 'amber',
                amount: '$93.49',
              },
              {
                id: 1003,
                paymentStatus: 'Refunded',
                paymentStatusColor: 'gray',
                fulfillment: 'Cancelled',
                fulfillmentColor: 'red',
                amount: '$39.00',
              },
              {
                id: 1002,
                paymentStatus: 'Unpaid',
                paymentStatusColor: 'amber',
                fulfillment: 'Unfulfilled',
                fulfillmentColor: 'amber',
                amount: '$438.90',
              },
              {
                id: 1001,
                paymentStatus: 'Paid',
                paymentStatusColor: 'teal',
                fulfillment: 'Fulfilled',
                fulfillmentColor: 'teal',
                amount: '$532.64',
              },
              {
                id: 1000,
                paymentStatus: 'Paid',
                paymentStatusColor: 'teal',
                fulfillment: 'Fulfilled',
                fulfillmentColor: 'teal',
                amount: '$625.03',
              },
            ] as const).map((order) => (
              <Grid columns="4" key={order.id}>
                <Text size="3" color="gray">
                  <Link weight="bold">#{order.id}</Link>
                </Text>

                <Box>
                  <Badge color={order.paymentStatusColor}>{order.paymentStatus}</Badge>
                </Box>

                <Box>
                  <Badge color={order.fulfillmentColor}>{order.fulfillment}</Badge>
                </Box>

                <Text size="2" align="right">
                  {order.amount}
                </Text>
              </Grid>
            ))}
          </Flex>

          <Flex justify="end">
            <Button tabIndex={-1} variant="soft" highContrast>
              Show more
            </Button>
          </Flex>
        </Card>
      </Flex>

      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          width: 640,
          // Space to align the vertically centered content with the dot grid
          marginBottom: 15,
        }}
      >
        <Card size="2">
          <Heading as="h3" size="4" mb="4">
            Shipment tracking
          </Heading>

          <Box position="relative" mb="5" grow="1">
            <Box position="absolute" top="0" left="0" m="2" style={{ pointerEvents: 'none' }}>
              <MagnifyingGlassIcon />
            </Box>
            <TextField.Input
              variant="soft"
              tabIndex={-1}
              placeholder="Enter package number"
              style={{ paddingLeft: 'var(--space-6)' }}
            />
          </Box>

          <Grid columns="2">
            <Flex gap="4" direction="column" pr="6">
              <Box>
                <Text as="div" weight="bold" size="2" mb="1">
                  Package number
                </Text>
                <Text as="div" size="3">
                  LASC966124786554
                </Text>
              </Box>

              <Box>
                <Text as="div" weight="bold" size="2" mb="1">
                  Order number
                </Text>
                <Link highContrast size="3">
                  #94356
                </Link>
              </Box>

              <Box>
                <Text as="div" weight="bold" size="2" mb="1">
                  Ship to
                </Text>
                <Text as="div" size="3" mb="1">
                  Sophia Martinez
                </Text>
                <Text as="div" size="2" color="gray">
                  512 Oakwood Avenue, Unit 201, Greenville, SC 67890
                </Text>
              </Box>

              <Grid columns="3">
                <Box>
                  <Text as="div" weight="bold" size="2" mb="1">
                    Status
                  </Text>
                  <Flex height="5" align="center">
                    <Badge color="green" style={{ marginLeft: -2 }}>
                      On time
                    </Badge>
                  </Flex>
                </Box>
                <Box>
                  <Text as="div" weight="bold" size="2" mb="1">
                    Weight
                  </Text>
                  <Text as="div" size="3">
                    3 lb
                  </Text>
                </Box>

                <Box>
                  <Text as="div" weight="bold" size="2" mb="1">
                    Order total
                  </Text>
                  <Text as="div" size="3">
                    $243
                  </Text>
                </Box>
              </Grid>
            </Flex>

            <Box position="relative" pt="1">
              <Box position="absolute" top="0" bottom="0" style={{ width: 1, marginLeft: -0.5 }}>
                <Separator
                  size="4"
                  orientation="vertical"
                  mt="2"
                  style={{
                    background: 'linear-gradient(to bottom, var(--teal-6) 90%, transparent)',
                  }}
                />
              </Box>

              <Box pl="6">
                <Flex direction="column" gap="4">
                  <Box>
                    <GreenDot />
                    <Text as="div" size="1" color="gray" mb="1">
                      July 1, 2023, 10:28 AM
                    </Text>
                    <Text as="p" size="2">
                      Package picked up from the warehouse in Phoenix, TX
                    </Text>
                  </Box>
                  <Box>
                    <GreenDot />
                    <Text as="div" size="1" color="gray" mb="1">
                      July 1, 2023, 12:43 PM
                    </Text>
                    <Text as="p" size="2">
                      Departed from Phoenix, TX
                    </Text>
                  </Box>
                  <Box>
                    <GreenDot />
                    <Text as="div" size="1" color="gray" mb="1">
                      July 2, 2023, 3:20 PM
                    </Text>
                    <Text as="p" size="2">
                      Arrived at a sorting facility in Seattle, WA
                    </Text>
                  </Box>
                  <Box>
                    <GreenDot />
                    <Text as="div" size="1" color="gray" mb="1">
                      July 2, 2023, 7:31 PM
                    </Text>
                    <Text as="p" size="2">
                      Departed Seattle, WA
                    </Text>
                  </Box>
                  <Box>
                    <GreenDot />
                    <Text as="div" size="1" color="gray" mb="1">
                      July 2, 2023, 11:03 PM
                    </Text>
                    <Text as="p" size="2">
                      Arrived to a facility in Greenville, WA
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Grid>
        </Card>

        <Card size="2">
          <Grid
            style={{ margin: 'calc(var(--card-padding) * -1)', gridTemplateRows: '256px 256px' }}
            columns="3"
          >
            <Box p="4">
              <Heading as="h3" size="8" mb="2">
                Dare to stand out
              </Heading>
              <Text as="p" mb="3" size="3">
                Striking patterns, vibrant hues, and unusual designs.
              </Text>
              <Button tabIndex={-1} highContrast variant="solid">
                Shop now
              </Button>
            </Box>

            <Box>
              <img
                src="https://images.unsplash.com/photo-1514866747592-c2d279258a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>

            <Text asChild size="1" mb="2" color="gray" style={{ lineHeight: '20px' }}>
              <Box p="4">
                <Text style={{ marginRight: 6 }}>Men’s</Text>
                {[
                  'Polo #11',
                  'Shirt #12',
                  'Shirt #24',
                  'Sneakers #3',
                  'Jeans #9',
                  'T‑shirt #4',
                  'Pants #20',
                  'Socks #9',
                  'Watch #15',
                  'Belt #7',
                  'Bag #6',
                  'Shirt #16',
                  'Suit #17',
                  'Shorts #22',
                  'Shoes #13',
                ].map((product) => (
                  <React.Fragment key={product}>
                    <Link key={product} highContrast style={{ marginRight: 6 }}>
                      {product}
                    </Link>
                    <wbr />
                  </React.Fragment>
                ))}

                <Text style={{ marginRight: 6 }}>Women’s</Text>
                {[
                  'Blouse #16',
                  'Dress #3',
                  'Skirt #22',
                  'Heels #13',
                  'Sandals #18',
                  'Bag #14',
                  'Scarf #19',
                  'Earrings #23',
                  'Bracelet #21',
                  'Necklace #25',
                  'Glasses #26',
                  'Perfume #27',
                ].map((product) => (
                  <React.Fragment key={product}>
                    <Link key={product} highContrast style={{ marginRight: 6 }}>
                      {product}
                    </Link>
                    <wbr />
                  </React.Fragment>
                ))}
              </Box>
            </Text>

            <Box>
              <img
                src="https://plus.unsplash.com/premium_photo-1668485968648-f29fe5157463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>

            <Flex p="4" direction="column" align="center" justify="between">
              <Text size="1" align="center" color="gray">
                15&thinsp;–&thinsp;30 Mar
              </Text>
              <Text mb="3" mr="4" weight="bold" size="9">
                −25%
              </Text>
              <Text size="1" align="center" color="gray">
                Get our boldest designs.
              </Text>
            </Flex>

            <Box>
              <img
                src="https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=700&q=80"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Card>

        <Card size="2">
          <Heading as="h3" size="4" mb="4">
            Top customers
          </Heading>

          <Flex gap="2">
            <Box position="relative" mb="5" grow="1">
              <Box position="absolute" top="0" left="0" m="2" style={{ pointerEvents: 'none' }}>
                <MagnifyingGlassIcon />
              </Box>
              <TextField.Input
                tabIndex={-1}
                variant="soft"
                placeholder="Search"
                style={{ paddingLeft: 'var(--space-6)' }}
              />
            </Box>
            <Flex direction="column" style={{ minWidth: 140 }}>
              <Select.Root defaultValue="All customers">
                <Select.Trigger variant="soft" highContrast tabIndex={-1} />
                <Select.Content variant="soft" container={container} position="popper">
                  <Select.Item value="All customers">All customers</Select.Item>
                  <Select.Item value={new Date().getFullYear().toString()}>
                    {new Date().getFullYear()}
                  </Select.Item>
                  <Select.Item value={(new Date().getFullYear() - 1).toString()}>
                    {new Date().getFullYear() - 1}
                  </Select.Item>
                  <Select.Item value={(new Date().getFullYear() - 2).toString()}>
                    {new Date().getFullYear() - 2}
                  </Select.Item>
                  <Select.Item value={(new Date().getFullYear() - 3).toString()}>
                    {new Date().getFullYear() - 3}
                  </Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>

          <Flex direction="column" gap="5" mb="2">
            {[
              {
                name: 'Elijah Wilson',
                address: '735 Pine Street, Apartment 4C, Portland, OR 34567',
                customerSince: 'November 3, 2017',
                sales: '$15,432.56',
                orders: 42,
              },
              {
                name: 'Cameron Johnson',
                address: '2465 Main Street, Apt 3B, Springfield, OH 12345',
                customerSince: 'June 10, 2020',
                sales: '$13,976.43',
                orders: 12,
              },
              {
                name: 'Sophia Martinez',
                address: '512 Oakwood Avenue, Unit 201, Greenville, SC 67890',
                customerSince: 'September 27, 2019',
                sales: '$11,653.03',
                orders: 34,
              },
              {
                name: 'Nathan Thompson',
                address: '837 Maple Lane, Suite 102, Lexington, KY 45678',
                customerSince: 'May 5, 2018',
                sales: '$8,245.92',
                orders: 22,
              },

              {
                name: 'Olivia Adams',
                address: '1123 Elmwood Drive, Boulder, CO 23456',
                customerSince: 'January 12, 2021',
                sales: '$6,789.21',
                orders: 18,
              },
            ].map((customer) => (
              <Flex justify="between" key={customer.name}>
                <Box>
                  <Link size="3" weight="bold" highContrast>
                    {customer.name}
                  </Link>
                  <Text as="div" size="2" mb="2">
                    Customer since {customer.customerSince}
                  </Text>
                  <Text as="div" size="1" mb="1" color="gray">
                    <address style={{ all: 'unset' }}>{customer.address}</address>
                  </Text>
                </Box>

                <Flex align="center" justify="end" gap="5" grow="1">
                  <Box>
                    <Text as="div" size="2" color="gray" align="right">
                      Sales
                    </Text>
                    <Text as="div" size="6" weight="bold" align="right">
                      {customer.sales}
                    </Text>
                  </Box>
                  <Separator orientation="vertical" size="3" />
                  <Box style={{ minWidth: 70 }}>
                    <Text as="div" size="2" color="gray">
                      Orders
                    </Text>
                    <Text as="div" size="6" weight="bold">
                      {customer.orders}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

const GreenDot = () => (
  <Box
    width="2"
    height="2"
    position="absolute"
    mt="1"
    ml="-1"
    left="0"
    style={{
      backgroundColor: 'var(--teal-9)',
      borderRadius: '100%',
    }}
  />
);
