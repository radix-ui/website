import {
  AspectRatio,
  Avatar,
  Blockquote,
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Link,
  Separator,
  Slider,
  Switch,
  Text,
  TextField,
} from '@radix-ui/themes';
import { Hover } from './Hover';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { allPeople } from './people';
import Head from 'next/head';

type ExampleLayoutProps = React.ComponentPropsWithoutRef<typeof Flex> & {
  focusable?: boolean;
};

export const ExampleThemesMusicApp = ({ focusable = true, ...props }: ExampleLayoutProps) => {
  // Interactive elements may be not focusable for homepage demo purposes
  const tabIndex = focusable ? undefined : -1;

  return (
    <>
      <Head>
        {/* Add a custom color variable that changes between light and dark mode */}
        <style>
          {`
          :root, .light, .light-theme {
            --color-floating-panel: rgba(239, 247, 255, 0.615);
          }
          .dark, .dark-theme {
            --color-floating-panel: rgba(0, 14, 24, 0.593);
          }
        `}
        </style>
      </Head>

      <Flex align="center" gap="6" {...props}>
        <Flex flexShrink="0" gap="6" direction="column" width="416px">
          <Card size="3">
            <Flex align="center" justify="between" mb="5">
              <Heading as="h3" size="4" trim="both">
                Queue
              </Heading>

              <Flex gap="4" my="-1">
                <Button tabIndex={tabIndex} variant="ghost">
                  Clear
                </Button>
                <Button tabIndex={tabIndex} variant="ghost">
                  Repeat
                </Button>
              </Flex>
            </Flex>

            <Flex direction="column" gap="4">
              {songsQueue.slice(0, 5).map((song) => (
                <Flex align="center" gap="3" key={song.name}>
                  <Box asChild width="48px" height="48px">
                    <img
                      src={song.cover}
                      style={{ objectFit: 'cover', borderRadius: 'var(--radius-2)' }}
                    />
                  </Box>
                  <Box flexGrow="1" width="0">
                    <Text as="div" size="2" truncate>
                      {song.name}
                    </Text>
                    <Text as="div" size="1" color="gray" truncate>
                      {song.artist} – {song.album}
                    </Text>
                  </Box>
                  <Box>
                    <Text as="div" size="2" color="gray">
                      {song.length}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Card>

          <Card size="3">
            <Flex align="center" justify="between" mb="5">
              <Heading as="h3" size="4" trim="start">
                Sound
              </Heading>

              <Flex gap="4">
                <Text size="2" color="gray">
                  Yamaha THR
                </Text>
              </Flex>
            </Flex>

            <Flex gap="2" align="center" height="16px" mt="2" mb="5">
              <VolumeNoneIcon color="var(--gray-a9)" />
              <Box flexGrow="1">
                <Slider tabIndex={tabIndex} defaultValue={[80]} />
              </Box>
              <VolumeMaxIcon color="var(--gray-a9)" />
            </Flex>

            <Grid columns="4" pt="2" pb="1">
              <Flex direction="column" gap="2" align="center" asChild>
                <Text as="label">
                  <IconButton tabIndex={tabIndex} radius="full" variant="solid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M 21 4 C 20.448 4 20 4.448 20 5 L 20 25 C 20 25.552 20.448 26 21 26 L 25 26 C 25.552 26 26 25.552 26 25 L 26 5 C 26 4.448 25.552 4 25 4 L 21 4 z M 13 10 C 12.448 10 12 10.448 12 11 L 12 25 C 12 25.552 12.448 26 13 26 L 17 26 C 17.552 26 18 25.552 18 25 L 18 11 C 18 10.448 17.552 10 17 10 L 13 10 z M 5 16 C 4.448 16 4 16.448 4 17 L 4 25 C 4 25.552 4.448 26 5 26 L 9 26 C 9.552 26 10 25.552 10 25 L 10 17 C 10 16.448 9.552 16 9 16 L 5 16 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      Normalize
                    </Text>
                    <Text align="center" color="gray" size="1">
                      On
                    </Text>
                  </Flex>
                </Text>
              </Flex>

              <Flex direction="column" gap="2" align="center" asChild>
                <Text as="label">
                  <IconButton tabIndex={tabIndex} radius="full" variant="solid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M 22 4 A 1.0001 1.0001 0 1 0 22 6 L 28 6 A 1.0001 1.0001 0 1 0 28 4 L 22 4 z M 2 8 A 1.0001 1.0001 0 1 0 2 10 L 8 10 A 1.0001 1.0001 0 1 0 8 8 L 2 8 z M 22 8 A 1.0001 1.0001 0 1 0 22 10 L 28 10 A 1.0001 1.0001 0 1 0 28 8 L 22 8 z M 2 12 A 1.0001 1.0001 0 1 0 2 14 L 8 14 A 1.0001 1.0001 0 1 0 8 12 L 2 12 z M 22 12 A 1.0001 1.0001 0 1 0 22 14 L 28 14 A 1.0001 1.0001 0 1 0 28 12 L 22 12 z M 2 16 A 1.0001 1.0001 0 1 0 2 18 L 8 18 A 1.0001 1.0001 0 1 0 8 16 L 2 16 z M 12 16 A 1.0001 1.0001 0 1 0 12 18 L 18 18 A 1.0001 1.0001 0 1 0 18 16 L 12 16 z M 22 16 A 1.0001 1.0001 0 1 0 22 18 L 28 18 A 1.0001 1.0001 0 1 0 28 16 L 22 16 z M 2 20 A 1.0001 1.0001 0 1 0 2 22 L 8 22 A 1.0001 1.0001 0 1 0 8 20 L 2 20 z M 12 20 A 1.0001 1.0001 0 1 0 12 22 L 18 22 A 1.0001 1.0001 0 1 0 18 20 L 12 20 z M 22 20 A 1.0001 1.0001 0 1 0 22 22 L 28 22 A 1.0001 1.0001 0 1 0 28 20 L 22 20 z M 2 24 A 1.0001 1.0001 0 1 0 2 26 L 8 26 A 1.0001 1.0001 0 1 0 8 24 L 2 24 z M 12 24 A 1.0001 1.0001 0 1 0 12 26 L 18 26 A 1.0001 1.0001 0 1 0 18 24 L 12 24 z M 22 24 A 1.0001 1.0001 0 1 0 22 26 L 28 26 A 1.0001 1.0001 0 1 0 28 24 L 22 24 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      Equalizer
                    </Text>
                    <Text align="center" color="gray" size="1">
                      On
                    </Text>
                  </Flex>
                </Text>
              </Flex>

              <Flex direction="column" gap="2" align="center" asChild>
                <Text as="label">
                  <IconButton tabIndex={tabIndex} radius="full" variant="soft" color="gray">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M 15 3 C 14.501862 3 14.004329 3.1237904 13.554688 3.3710938 L 4.7773438 8.1992188 C 4.2990638 8.4622726 4 8.9690345 4 9.5136719 L 4 10.128906 L 4 20.048828 C 4 20.573313 4.2799803 21.064852 4.7265625 21.333984 A 1.0001 1.0001 0 0 0 4.7285156 21.335938 L 13.457031 26.572266 C 14.405619 27.141718 15.594381 27.141718 16.542969 26.572266 L 25.269531 21.337891 L 25.271484 21.335938 C 25.723679 21.065216 26 20.572371 26 20.048828 L 26 9.5136719 C 26 8.9690345 25.700936 8.4622727 25.222656 8.1992188 L 16.445312 3.3710938 C 15.99567 3.1237903 15.498138 3 15 3 z M 15 5 C 15.166032 5 15.332064 5.0423034 15.482422 5.125 L 23.166016 9.3496094 L 19.755859 11.179688 L 20.701172 12.941406 L 24 11.171875 L 24 19.765625 L 16 24.566406 L 16 21 L 14 21 L 14 24.566406 L 6 19.765625 L 6 11.171875 L 9.2988281 12.941406 L 10.244141 11.179688 L 6.8339844 9.3496094 L 14.517578 5.125 C 14.667936 5.0423034 14.833968 5 15 5 z M 15 11 A 4 4 0 0 0 15 19 A 4 4 0 0 0 15 11 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      3D Audio
                    </Text>
                    <Text align="center" color="gray" size="1">
                      Off
                    </Text>
                  </Flex>
                </Text>
              </Flex>

              <Flex direction="column" gap="2" align="center" asChild>
                <Text as="label">
                  <IconButton tabIndex={tabIndex} radius="full" variant="soft" color="gray">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentcolor"
                    >
                      <path d="M 8.984375 3.9863281 A 1.0001 1.0001 0 0 0 8 5 L 8 16 A 1.0001 1.0001 0 1 0 10 16 L 10 5 A 1.0001 1.0001 0 0 0 8.984375 3.9863281 z M 4.984375 6.9863281 A 1.0001 1.0001 0 0 0 4 8 L 4 16 A 1.0001 1.0001 0 1 0 6 16 L 6 8 A 1.0001 1.0001 0 0 0 4.984375 6.9863281 z M 12.984375 9.9863281 A 1.0001 1.0001 0 0 0 12 11 L 12 16 A 1.0001 1.0001 0 1 0 14 16 L 14 11 A 1.0001 1.0001 0 0 0 12.984375 9.9863281 z M 0.984375 11.986328 A 1.0001 1.0001 0 0 0 0 13 L 0 16 A 1.0001 1.0001 0 1 0 2 16 L 2 13 A 1.0001 1.0001 0 0 0 0.984375 11.986328 z M 16.984375 14.986328 A 1.0001 1.0001 0 0 0 16 16 L 16 21 A 1.0001 1.0001 0 1 0 18 21 L 18 16 A 1.0001 1.0001 0 0 0 16.984375 14.986328 z M 20.984375 14.986328 A 1.0001 1.0001 0 0 0 20 16 L 20 26 A 1.0001 1.0001 0 1 0 22 26 L 22 16 A 1.0001 1.0001 0 0 0 20.984375 14.986328 z M 24.984375 14.986328 A 1.0001 1.0001 0 0 0 24 16 L 24 23 A 1.0001 1.0001 0 1 0 26 23 L 26 16 A 1.0001 1.0001 0 0 0 24.984375 14.986328 z M 28.984375 14.986328 A 1.0001 1.0001 0 0 0 28 16 L 28 19 A 1.0001 1.0001 0 1 0 30 19 L 30 16 A 1.0001 1.0001 0 0 0 28.984375 14.986328 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      Cross-Fade
                    </Text>
                    <Text align="center" color="gray" size="1">
                      Off
                    </Text>
                  </Flex>
                </Text>
              </Flex>
            </Grid>
          </Card>

          <Card size="3">
            <Flex align="center" justify="between" mb="6">
              <Text as="label" size="4" weight="bold" trim="start">
                <Flex as="span" gap="2" my="-1">
                  Equalizer
                  <Switch
                    variant="classic"
                    tabIndex={tabIndex}
                    defaultChecked
                    size="1"
                    style={{ marginTop: 1 }}
                  />
                </Flex>
              </Text>

              <Flex my="-1" gap="4">
                <Button tabIndex={tabIndex} size="2" variant="ghost">
                  Reset
                </Button>
              </Flex>
            </Flex>

            <Box position="relative" my="-1">
              <Flex direction="column" gap="4" py="4" position="absolute" left="0" right="0">
                <Box mt="-1px" style={{ borderTop: '1px dotted var(--gray-a5)' }} />
                <Box mt="-1px" style={{ borderTop: '1px dotted var(--gray-a5)' }} />
                <Box mt="-1px" style={{ borderTop: '1px dotted var(--gray-a5)' }} />
                <Box mt="-1px" style={{ borderTop: '1px solid var(--gray-a5)' }} />
                <Box mt="-1px" style={{ borderTop: '1px dotted var(--gray-a5)' }} />
                <Box mt="-1px" style={{ borderTop: '1px dotted var(--gray-a5)' }} />
                <Box mt="-1px" style={{ borderTop: '1px dotted var(--gray-a5)' }} />
              </Flex>

              <Flex flexShrink="0" flexGrow="1" justify="between" position="relative">
                {[
                  { frequency: '32', value: 75 },
                  { frequency: '64', value: 73 },
                  { frequency: '125', value: 70 },
                  { frequency: '250', value: 65 },
                  { frequency: '500', value: 52 },
                  { frequency: '1K', value: 50 },
                  { frequency: '2K', value: 56 },
                  { frequency: '3K', value: 57 },
                  { frequency: '4K', value: 60 },
                  { frequency: '6K', value: 62 },
                  { frequency: '8K', value: 65 },
                  { frequency: '16K', value: 68 },
                ].map((slider) => (
                  <Flex
                    direction="column"
                    align="center"
                    gap="2"
                    width="24px"
                    height="152px"
                    key={slider.frequency}
                  >
                    <Slider
                      tabIndex={tabIndex}
                      size="1"
                      radius="small"
                      key={slider.frequency}
                      color="gray"
                      variant="soft"
                      defaultValue={[slider.value]}
                      orientation="vertical"
                    />
                    <Text size="1">{slider.frequency}</Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Card>

          <Card size="3">
            <Flex align="center" justify="between" mb="5">
              <Heading as="h3" size="4" trim="both">
                History
              </Heading>

              <Flex my="-1" gap="4">
                <Button tabIndex={tabIndex} size="2" variant="ghost">
                  Clear
                </Button>
              </Flex>
            </Flex>

            <Flex direction="column" gap="4">
              {songsHistory.map((song, i) => (
                <Flex align="center" gap="3" key={song.name}>
                  <Box asChild width="48px" height="48px">
                    <img
                      src={song.cover}
                      style={{ objectFit: 'cover', borderRadius: 'var(--radius-2)' }}
                    />
                  </Box>
                  <Box flexGrow="1" width="0">
                    <Text as="div" size="2" truncate>
                      {song.name}
                    </Text>
                    <Text as="div" size="1" color="gray" truncate>
                      {song.artist} – {song.album}
                    </Text>
                  </Box>
                  <Box>
                    <Text as="div" size="2" color="gray">
                      {song.length}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Card>
        </Flex>

        <Flex flexShrink="0" gap="6" direction="column" width="1312px">
          <Card size="4" style={{ height: 896 }}>
            <Flex
              position="absolute"
              align="center"
              justify="between"
              width="48px"
              height="48px"
              top="0"
              left="0"
              ml="4"
            >
              <Box
                width="12px"
                height="12px"
                style={{
                  background: '#FF5F57',
                  boxShadow: 'inset 0 0 0 1px var(--gray-a5)',
                  borderRadius: '100%',
                }}
              />
              <Box
                width="12px"
                height="12px"
                style={{
                  background: '#FDBB2E',
                  boxShadow: 'inset 0 0 0 1px var(--gray-a5)',
                  borderRadius: '100%',
                }}
              />
              <Box
                width="12px"
                height="12px"
                style={{
                  background: '#27C840',
                  boxShadow: 'inset 0 0 0 1px var(--gray-a5)',
                  borderRadius: '100%',
                }}
              />
            </Flex>

            <Flex
              align="center"
              justify="center"
              position="absolute"
              top="0"
              left="0"
              right="0"
              height="64px"
            >
              <TextField.Root
                color="gray"
                radius="full"
                variant="soft"
                style={{ width: 400 }}
                tabIndex={tabIndex}
                placeholder="Search"
              >
                <TextField.Slot>
                  <MagnifyingGlassIcon />
                </TextField.Slot>
              </TextField.Root>
            </Flex>

            <Flex align="center" position="absolute" top="0" right="0" height="64px" mr="4" gap="4">
              <IconButton tabIndex={tabIndex} size="2" variant="ghost" radius="full">
                <HeartIcon />
              </IconButton>
              <IconButton tabIndex={tabIndex} size="2" variant="ghost" radius="full">
                <CounterClockwiseClockIcon />
              </IconButton>
              <IconButton tabIndex={tabIndex} size="2" variant="ghost" radius="full">
                <MixerHorizontalIcon />
              </IconButton>
              <IconButton tabIndex={tabIndex} size="1" variant="ghost" radius="full" color="gray">
                <Avatar
                  size="2"
                  radius="full"
                  src={allPeople[23].image}
                  fallback={allPeople[23]?.name[0].toUpperCase()}
                />
              </IconButton>
            </Flex>

            <Box height="40px" />

            <Box mb="4">
              <Flex align="baseline" justify="between">
                <Heading as="h2" size="6">
                  Your favorites
                </Heading>

                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  tabIndex={tabIndex}
                  size="2"
                  weight="medium"
                >
                  Show all
                </Link>
              </Flex>
            </Box>

            <Grid columns="5" gap="5" mb="7">
              {albumsFavorites.map((album) => (
                <AlbumCard
                  focusable={focusable}
                  title={album.name}
                  caption={album.artist}
                  cover={album.cover}
                  color={album.color}
                  key={album.name}
                />
              ))}
            </Grid>

            <Box mb="4">
              <Flex align="baseline" justify="between">
                <Heading as="h2" size="6">
                  Made for you
                </Heading>

                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  tabIndex={tabIndex}
                  size="2"
                  weight="medium"
                >
                  Show all
                </Link>
              </Flex>
            </Box>

            <Grid columns="5" gap="5" mb="7">
              {playlistsForYou.slice(0, 5).map((playlist) => (
                <AlbumCard
                  title={playlist.title}
                  caption={playlist.caption}
                  cover={playlist.cover}
                  color={playlist.color}
                  key={playlist.title}
                />
              ))}
            </Grid>

            <Box mb="4">
              <Flex align="baseline" justify="between">
                <Heading as="h2" size="6">
                  Your friends listen
                </Heading>

                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  tabIndex={tabIndex}
                  size="2"
                  weight="medium"
                >
                  Show all
                </Link>
              </Flex>
            </Box>

            <Grid columns="5" gap="5">
              {albumsFriendsListen.map((album) => (
                <AlbumCard
                  title={album.name}
                  caption={album.artist}
                  cover={album.cover}
                  color={album.color}
                  key={album.name}
                />
              ))}
            </Grid>

            <Box
              position="absolute"
              left="0"
              right="0"
              bottom="0"
              mb="5"
              height="64px"
              style={{
                borderRadius: '100px',
                boxShadow: 'var(--shadow-6)',
                marginLeft: 200,
                marginRight: 200,
              }}
            >
              <Box
                width="100%"
                height="100%"
                position="absolute"
                overflow="hidden"
                style={{
                  borderRadius: '100px',
                  backgroundColor: 'var(--color-floating-panel)',
                  filter: 'saturate(0.5) brightness(1.1)',
                  WebkitBackdropFilter: 'blur(24px)',
                  backdropFilter: 'blur(24px)',
                }}
              />
              <Flex height="100%" justify="between" position="relative">
                <Flex gap="4" align="center" p="3">
                  <IconButton tabIndex={tabIndex} radius="full" size="3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentcolor"
                      viewBox="0 0 30 30"
                      width="20"
                      height="20"
                      style={{ marginRight: -2 }}
                    >
                      <path d="M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z" />
                    </svg>
                  </IconButton>

                  <Flex align="center" gap="4">
                    <IconButton
                      tabIndex={tabIndex}
                      color="gray"
                      variant="ghost"
                      radius="full"
                      size="2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="20"
                        height="20"
                        fill="currentcolor"
                        fillOpacity={0.7}
                      >
                        <path d="M 21 5 L 21 8 L 18.675781 8 C 16.670448 8 14.796256 9.00408 13.683594 10.671875 L 12 13.197266 L 10.316406 10.671875 C 9.2045791 9.0047337 7.329552 8 5.3242188 8 L 3 8 A 1.0001 1.0001 0 1 0 3 10 L 5.3242188 10 C 6.6628853 10 7.910171 10.668391 8.6523438 11.78125 L 10.798828 15 L 8.6523438 18.21875 C 7.910171 19.331609 6.6628854 20 5.3242188 20 L 3 20 A 1.0001 1.0001 0 1 0 3 22 L 5.3242188 22 C 7.3295521 22 9.2045792 20.995266 10.316406 19.328125 L 12 16.802734 L 13.683594 19.328125 C 14.796256 20.99592 16.670448 22 18.675781 22 L 21 22 L 21 25 L 27 21 L 21 17 L 21 20 L 18.675781 20 C 17.337115 20 16.090994 19.332955 15.347656 18.21875 L 13.201172 15 L 15.347656 11.78125 C 16.090994 10.667045 17.337115 10 18.675781 10 L 21 10 L 21 13 L 27 9 L 21 5 z" />
                      </svg>
                    </IconButton>
                    <IconButton
                      tabIndex={tabIndex}
                      color="gray"
                      variant="ghost"
                      radius="full"
                      size="2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        fill="currentcolor"
                        fillOpacity={0.7}
                        width="20"
                        height="20"
                      >
                        <path d="M 20 4 L 20 7 L 8 7 C 4.6983746 7 2 9.6983746 2 13 A 1.0001 1.0001 0 1 0 4 13 C 4 10.779625 5.7796254 9 8 9 L 20 9 L 20 12 L 27 8 L 20 4 z M 26.984375 15.986328 A 1.0001 1.0001 0 0 0 26 17 C 26 19.220375 24.220375 21 22 21 L 10 21 L 10 18 L 3 22 L 10 26 L 10 23 L 22 23 C 25.301625 23 28 20.301625 28 17 A 1.0001 1.0001 0 0 0 26.984375 15.986328 z" />
                      </svg>
                    </IconButton>
                  </Flex>
                </Flex>

                <Flex align="center" gap="3">
                  <IconButton
                    tabIndex={tabIndex}
                    color="gray"
                    variant="ghost"
                    radius="full"
                    size="2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentcolor"
                      fillOpacity={0.7}
                      viewBox="0 0 30 30"
                      width="20"
                      height="20"
                      style={{ marginRight: 2 }}
                    >
                      <path d="M 14 6 A 1 1 0 0 0 13.408203 6.1953125 A 1 1 0 0 0 13.378906 6.2167969 L 2.4609375 14.15625 A 1 1 0 0 1 2.4589844 14.158203 L 2.4433594 14.169922 A 1 1 0 0 0 2 15 A 1 1 0 0 0 2.4492188 15.833984 L 13.40625 23.804688 A 1 1 0 0 0 14 24 A 1 1 0 0 0 15 23 A 1 1 0 0 0 15 22.996094 L 15 16.234375 L 25.40625 23.804688 A 1 1 0 0 0 26 24 A 1 1 0 0 0 27 23 A 1 1 0 0 0 27 22.996094 L 27 15 L 27 7.0039062 A 1 1 0 0 0 27 7 A 1 1 0 0 0 26 6 A 1 1 0 0 0 25.40625 6.1953125 A 1 1 0 0 0 25.378906 6.2167969 L 15 13.763672 L 15 7.0039062 A 1 1 0 0 0 15 7 A 1 1 0 0 0 14 6 z" />
                    </svg>
                  </IconButton>

                  <Flex align="center" gap="3">
                    <img
                      src={songsHistory[6].cover}
                      width="48"
                      height="48"
                      style={{ borderRadius: 'var(--radius-2)' }}
                    />
                    <Box>
                      <Text size="1" as="div" weight="medium">
                        {songsHistory[6].name}
                      </Text>
                      <Text size="1" as="div" color="gray" mb="2">
                        {songsHistory[6].artist} – {songsHistory[6].album}
                      </Text>

                      <Box
                        position="relative"
                        height="4px"
                        width="320px"
                        style={{
                          backgroundColor: 'var(--gray-a5)',
                          borderRadius: 'var(--radius-1)',
                        }}
                      >
                        <Box
                          position="absolute"
                          height="4px"
                          width="64px"
                          style={{
                            borderRadius: 'var(--radius-1)',
                            backgroundColor: 'var(--gray-a9)',
                          }}
                        />
                        <Box position="absolute" top="0" right="0" mt="-28px">
                          <Text size="1" color="gray">
                            0:58 / {songsHistory[6].length}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Flex>

                  <IconButton
                    tabIndex={tabIndex}
                    color="gray"
                    variant="ghost"
                    radius="full"
                    size="2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="20"
                      height="20"
                      fill="currentcolor"
                      fillOpacity={0.7}
                      style={{ marginLeft: 2 }}
                    >
                      <path d="M 4 6 A 1 1 0 0 0 3 7 A 1 1 0 0 0 3 7.0039062 L 3 15 L 3 22.996094 A 1 1 0 0 0 3 23 A 1 1 0 0 0 4 24 A 1 1 0 0 0 4.5917969 23.804688 L 4.59375 23.804688 A 1 1 0 0 0 4.6210938 23.783203 L 15 16.236328 L 15 22.996094 A 1 1 0 0 0 15 23 A 1 1 0 0 0 16 24 A 1 1 0 0 0 16.591797 23.804688 L 16.59375 23.804688 A 1 1 0 0 0 16.621094 23.783203 L 27.541016 15.841797 A 1 1 0 0 0 28 15 A 1 1 0 0 0 27.556641 14.169922 L 16.59375 6.1953125 A 1 1 0 0 0 16 6 A 1 1 0 0 0 15 7 A 1 1 0 0 0 15 7.0039062 L 15 13.765625 L 4.59375 6.1953125 A 1 1 0 0 0 4 6 z" />
                    </svg>
                  </IconButton>
                </Flex>

                <Flex align="center" gap="2" p="5">
                  <VolumeNoneIcon color="var(--gray-a9)" />
                  <Slider
                    tabIndex={tabIndex}
                    defaultValue={[80]}
                    variant="soft"
                    color="gray"
                    radius="full"
                    size="2"
                    style={{ width: 80 }}
                  />
                  <VolumeMaxIcon color="var(--gray-a9)" />
                </Flex>
              </Flex>
            </Box>
          </Card>

          <Flex gap="6" flexShrink="0">
            <Flex gap="6" flexShrink="0" direction="column" width="416px">
              <Card size="3">
                <Heading as="h3" size="4" trim="both" mb="5">
                  Settings
                </Heading>

                <Flex direction="column" gap="5">
                  <Text as="label">
                    <Flex as="span" justify="between" gap="5">
                      <Box as="span">
                        <Text as="div" size="2" weight="medium" mb="1">
                          Automatic downloads
                        </Text>
                        <Text as="div" color="gray" size="1">
                          Automatically download music when added to your library
                        </Text>
                      </Box>

                      <Switch size="3" variant="classic" tabIndex={tabIndex} mt="2" />
                    </Flex>
                  </Text>

                  <Text as="label">
                    <Flex as="span" justify="between" gap="5">
                      <Box as="span">
                        <Text as="div" size="2" weight="medium" mb="1">
                          Lossless audio
                        </Text>
                        <Text as="div" color="gray" size="1">
                          Preserve every detail of the original audio, but consume significantly
                          more data
                        </Text>
                      </Box>

                      <Switch size="3" variant="classic" tabIndex={tabIndex} mt="2" />
                    </Flex>
                  </Text>

                  <Text as="label">
                    <Flex as="span" justify="between" gap="5">
                      <Box as="span">
                        <Text as="div" size="2" weight="medium" mb="1">
                          Spatial audio
                        </Text>
                        <Text as="div" color="gray" size="1">
                          Enhancing the perception of audio in space
                        </Text>
                      </Box>

                      <Switch size="3" variant="classic" tabIndex={tabIndex} mt="2" />
                    </Flex>
                  </Text>

                  <Text as="label">
                    <Flex as="span" justify="between" gap="5">
                      <Box as="span">
                        <Text as="div" size="2" weight="medium" mb="1">
                          Normalize volume
                        </Text>
                        <Text as="div" color="gray" size="1">
                          Set the same volume level for all tracks
                        </Text>
                      </Box>

                      <Switch
                        size="3"
                        variant="classic"
                        tabIndex={tabIndex}
                        defaultChecked
                        mt="2"
                      />
                    </Flex>
                  </Text>

                  <Box>
                    <Flex justify="between" gap="5">
                      <Box>
                        <Text as="div" size="2" weight="medium" mb="1">
                          Maximum volume
                        </Text>
                        <Text as="div" color="gray" size="1">
                          Limit the maximum volume to protect hearing
                        </Text>
                      </Box>
                    </Flex>

                    <Flex align="center" gap="2" mt="3">
                      <Box asChild width="24px">
                        <Text color="gray" size="1">
                          0%
                        </Text>
                      </Box>
                      <Box flexGrow="1">
                        <Slider tabIndex={tabIndex} radius="full" size="1" defaultValue={[80]} />
                      </Box>
                      <Box asChild width="32px">
                        <Text color="gray" size="1">
                          100%
                        </Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box>
                    <Flex justify="between" gap="5">
                      <Box>
                        <Text as="div" size="2" weight="medium" mb="1">
                          Crossfade
                        </Text>
                        <Text as="div" color="gray" size="1">
                          Smoothly fade out into the next song.
                        </Text>
                      </Box>
                    </Flex>

                    <Flex align="center" gap="2" mt="3">
                      <Box asChild width="24px">
                        <Text color="gray" size="1">
                          Off
                        </Text>
                      </Box>
                      <Box flexGrow="1">
                        <Slider tabIndex={tabIndex} radius="full" size="1" defaultValue={[0]} />
                      </Box>
                      <Box asChild width="32px">
                        <Text color="gray" size="1">
                          10s
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Card>

              <Card size="3">
                <Flex align="center" justify="between" mb="5">
                  <Heading as="h3" size="4" trim="both">
                    Membership
                  </Heading>

                  <Flex my="-1" gap="4">
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                      Done
                    </Button>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="4">
                  <Flex align="center" justify="between">
                    <Flex direction="column" gap="1">
                      <Text size="2" weight="medium">
                        Individual
                      </Text>
                      <Text size="1" color="gray">
                        Sign up with 1 account
                      </Text>
                    </Flex>
                    <Flex direction="column" width="64px">
                      <Button tabIndex={tabIndex} variant="soft">
                        $4.99
                      </Button>
                    </Flex>
                  </Flex>

                  <Flex align="center" justify="between">
                    <Flex direction="column" gap="1">
                      <Text size="2" weight="medium">
                        Duo
                      </Text>
                      <Text size="1" color="gray">
                        Sign up 2 accounts
                      </Text>
                    </Flex>
                    <Flex direction="column" width="64px">
                      <Button tabIndex={tabIndex}>$6.99</Button>
                    </Flex>
                  </Flex>

                  <Flex align="center" justify="between">
                    <Flex direction="column" gap="1">
                      <Text size="2" weight="medium">
                        Family
                      </Text>
                      <Text size="1" color="gray">
                        Sign up to 6 accounts
                      </Text>
                    </Flex>
                    <Flex direction="column" width="64px">
                      <Button tabIndex={tabIndex} variant="soft">
                        $12.99
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>

                <Box my="5">
                  <Separator size="4" />
                </Box>

                <Box>
                  <Text size="2" as="p" my="3">
                    Your next payment is $6.99 on{' '}
                    {(() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 20);
                      return date.toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      });
                    })()}
                  </Text>

                  <Text size="2" as="p">
                    <Link href="#" onClick={(e) => e.preventDefault()} tabIndex={tabIndex}>
                      Cancel subscription
                    </Link>
                  </Text>
                </Box>
              </Card>
            </Flex>

            <Flex gap="6" flexShrink="0" direction="column" width="416px">
              <Card size="3">
                <Flex align="center" justify="between" mb="5">
                  <Heading as="h3" size="4" trim="both">
                    Your profile
                  </Heading>

                  <Flex my="-1" gap="4">
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                      Cancel
                    </Button>
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                      Save
                    </Button>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="4">
                  <Flex asChild direction="column" gap="1">
                    <Text as="label" size="2" weight="medium">
                      <Text>Name</Text>
                      <TextField.Root
                        variant="classic"
                        tabIndex={tabIndex}
                        defaultValue="Vlad Moroz"
                      />
                    </Text>
                  </Flex>

                  <Flex asChild direction="column" gap="1">
                    <Text as="label" size="2" weight="medium">
                      <Text>Username</Text>
                      <TextField.Root
                        variant="classic"
                        tabIndex={tabIndex}
                        defaultValue="@vladmoroz"
                      />
                    </Text>
                  </Flex>

                  <Flex asChild direction="column" gap="1">
                    <Text as="label" size="2" weight="medium">
                      <Text>Email</Text>
                      <TextField.Root
                        variant="classic"
                        tabIndex={tabIndex}
                        defaultValue="hi@vladmoroz.com"
                      />
                    </Text>
                  </Flex>

                  <Flex direction="column" gap="2">
                    <Text size="2" weight="medium">
                      Privacy
                    </Text>
                    <Flex align="start" direction="column" gap="2">
                      <Flex asChild gap="2">
                        <Text as="label" size="2">
                          <Checkbox tabIndex={tabIndex} defaultChecked />
                          <Text>Display my listening history</Text>
                        </Text>
                      </Flex>

                      <Flex asChild gap="2">
                        <Text as="label" size="2">
                          <Checkbox tabIndex={tabIndex} />
                          <Text>Everyone can follow my activity</Text>
                        </Text>
                      </Flex>

                      <Flex asChild gap="2">
                        <Text as="label" size="2">
                          <Checkbox tabIndex={tabIndex} defaultChecked />
                          <Text>Show my playlists in search</Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>

                  <Flex direction="column" gap="2">
                    <Text size="2" weight="medium">
                      Danger zone
                    </Text>
                    <Flex align="start" direction="column" gap="2">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        tabIndex={tabIndex}
                        size="2"
                      >
                        Reset recommendations
                      </Link>
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        tabIndex={tabIndex}
                        size="2"
                      >
                        Delete profile
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>

              <Card size="3">
                <Flex align="center" justify="between" mb="5">
                  <Heading as="h3" size="4" trim="both">
                    Create a playlist
                  </Heading>

                  <Flex my="-1" gap="4">
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                      Start over
                    </Button>
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                      Next
                    </Button>
                  </Flex>
                </Flex>

                <Box>
                  <Flex gap="2" wrap="wrap">
                    {[
                      'Pop',
                      'Rock',
                      'Hip-Hop',
                      'R&B',
                      'Country',
                      'Jazz',
                      'Blues',
                      'Electronic',
                      'Experimental',
                      'Reggae',
                      'Ska',
                      'Grunge',
                      'Psychedelic',
                      'Post-Rock',
                      'Progressive Rock',
                      'Dream Pop',
                      'Ambient',
                      'Classical',
                      'Trip-Hop',
                      'Gospel',
                      'Folk',
                      'Indie',
                      'Alternative',
                      'Punk',
                      'Metal',
                      'Funk',
                      'Soul',
                      'Dance',
                      'Techno',
                      'Acoustic',
                      'House',
                      'Dubstep',
                      'Latin',
                      'Salsa',
                      'K-pop',
                    ].map((genre) => (
                      <Button
                        tabIndex={tabIndex}
                        radius="full"
                        variant={['Blues', 'Jazz', 'Funk'].includes(genre) ? 'solid' : 'soft'}
                        key={genre}
                      >
                        {genre}
                      </Button>
                    ))}
                  </Flex>
                </Box>
              </Card>
            </Flex>

            <Flex gap="6" flexShrink="0" direction="column" width="416px">
              <Card size="3">
                <Flex m="4" justify="center" position="relative">
                  <img
                    width="200"
                    height="200"
                    src="https://workos.imgix.net/images/e35b46dc-4384-43d1-932c-24fa44e212cd.png?auto=format&fit=clip&q=80"
                    style={{
                      borderRadius: 'var(--radius-3)',
                      boxShadow: '0 8px 80px -24px hsl(205, 100%, 50%)',
                    }}
                  />
                </Flex>

                <Box mt="5">
                  <Flex mb="4" align="center" justify="center">
                    {[1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="20"
                        height="20"
                        fill="currentcolor"
                        color="var(--accent-9)"
                      >
                        <path d="M15.765,2.434l2.875,8.512l8.983,0.104c0.773,0.009,1.093,0.994,0.473,1.455l-7.207,5.364l2.677,8.576 c0.23,0.738-0.607,1.346-1.238,0.899L15,22.147l-7.329,5.196c-0.63,0.447-1.468-0.162-1.238-0.899l2.677-8.576l-7.207-5.364 c-0.62-0.461-0.3-1.446,0.473-1.455l8.983-0.104l2.875-8.512C14.482,1.701,15.518,1.701,15.765,2.434z" />
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60 60"
                      width="20"
                      height="20"
                      fill="currentcolor"
                      color="var(--accent-9)"
                    >
                      <path d="M29.887 3.926A2 2 0 0 0 28.078 5.3l-5.41 16.535-17.395.035a2 2 0 0 0-1.175 3.613l14.054 10.254-5.343 16.559a2 2 0 0 0 3.074 2.234l14.094-10.199 14.097 10.2a2 2 0 0 0 3.075-2.235l-5.344-16.559 14.054-10.254a2 2 0 0 0-1.175-3.613l-17.399-.035L31.88 5.301a2 2 0 0 0-1.992-1.375Zm.09 8.433 3.957 12.098a2 2 0 0 0 1.898 1.379l12.727.023-10.282 7.5a2 2 0 0 0-.722 2.23l3.91 12.118-10.317-7.465a2 2 0 0 0-2.343 0l-10.309 7.461 3.906-12.113a2 2 0 0 0-.722-2.23l-10.281-7.5 12.726-.024a2.001 2.001 0 0 0 1.895-1.379l3.957-12.098Z" />
                      <path d="M29.887 3.926A2 2 0 0 0 28.078 5.3l-5.41 16.535-17.395.035a2 2 0 0 0-1.175 3.613l14.054 10.254-5.343 16.559a2 2 0 0 0 3.074 2.234l14.094-10.199 14.097 10.2a2 2 0 0 0 3.075-2.235l-5.344-16.559 14.054-10.254a2 2 0 0 0-1.175-3.613l-17.399-.035L31.88 5.301a2 2 0 0 0-1.992-1.375Zm.09 8.433 3.957 12.098a2 2 0 0 0 1.898 1.379l12.727.023-10.282 7.5a2 2 0 0 0-.722 2.23l3.91 12.118-10.317-7.465a2 2 0 0 0-2.343 0l-10.309 7.461 3.906-12.113a2 2 0 0 0-.722-2.23l-10.281-7.5 12.726-.024a2.001 2.001 0 0 0 1.895-1.379l3.957-12.098Z" />
                      <path d="M28.805 40.242a2 2 0 0 1 1.172-.379V12.359L26.02 24.457a2 2 0 0 1-1.895 1.379l-12.726.023 10.28 7.5a2 2 0 0 1 .723 2.23l-3.906 12.114 10.309-7.46Z" />
                    </svg>
                  </Flex>

                  <Heading align="center" as="h3" size="4" mb="2">
                    King Krule – The OOZ
                  </Heading>

                  <Text align="center" as="p" color="gray" size="2" mb="4">
                    A dark and introspective album that showcases King Krule’s distinctive blend of
                    genres, while delivering hauntingly raw and poetic lyrics.
                  </Text>

                  <Flex justify="center" gap="3">
                    <Button tabIndex={tabIndex}>Listen Now</Button>
                    <IconButton tabIndex={tabIndex} variant="soft">
                      <HeartIcon />
                    </IconButton>
                  </Flex>
                </Box>
              </Card>

              <Card size="3">
                <Box
                  height="336px"
                  position="relative"
                  overflow="hidden"
                  mb="calc(-1 * var(--card-padding))"
                >
                  <Heading as="h3" size="4" trim="both" mb="3">
                    Lyrics
                  </Heading>

                  <Text as="div" color="gray" size="3" mb="5">
                    King Krule – Biscuit Town
                  </Text>

                  <Text as="div" size="2">
                    <Flex direction="column" align="start" gap="4">
                      <Flex direction="column" align="start" gap="1">
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <Link href="#" onClick={(e) => e.preventDefault()} tabIndex={tabIndex}>
                              I seem to sink lower, gazing in the rays of the solar
                            </Link>
                          </HoverCard.Trigger>
                          <HoverCard.Content side="top" maxWidth="320px">
                            <Flex gap="2" direction="column">
                              <Text size="2" as="p">
                                Archy Marshall begins the opening track with an allusion to a common
                                theme that appears throughout his body of work – introspection, and
                                unhappiness with himself and the world around him. A “sinking”
                                feeling is often linked to sadness, depression or anxiety.
                              </Text>

                              <Text size="2" as="p">
                                After releasing his debut studio album 6 Feet Beneath the Moon as
                                King Krule, Archy said in an interview with HYPEBEAST:
                              </Text>

                              <Blockquote size="2" color="gray">
                                I was unhappy with myself and what I was creating, and when that
                                happens you feel like you’re useless. Musically I felt so useless.
                              </Blockquote>

                              <Text size="2" as="p">
                                This lyric can furthermore be connected to his debut album’s title.
                              </Text>
                            </Flex>
                          </HoverCard.Content>
                        </HoverCard.Root>
                        <Text>In fact, we made a pact, but now I think it’s over</Text>

                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <Link href="#" onClick={(e) => e.preventDefault()} tabIndex={tabIndex}>
                              Red on white but he sipped on KA soda
                            </Link>
                          </HoverCard.Trigger>
                          <HoverCard.Content side="top" maxWidth="320px">
                            <Flex gap="2" direction="column">
                              <Text size="2" as="p">
                                Archy is an Englishman, the flag of England is white with a red
                                cross. But he’s drinking KA soda (or at least thinks he is), which
                                is a soda from the Caribbean
                              </Text>
                            </Flex>
                          </HoverCard.Content>
                        </HoverCard.Root>
                        <Text>
                          Damn, that's Coca-Cola,{' '}
                          <HoverCard.Root>
                            <HoverCard.Trigger>
                              <Link
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                tabIndex={tabIndex}
                              >
                                as TV sports the Olympic ebola
                              </Link>
                            </HoverCard.Trigger>
                            <HoverCard.Content side="top" maxWidth="320px">
                              <Flex gap="2" direction="column">
                                <Text size="2" as="p">
                                  This could refer to the banning of 3 West African athletes from
                                  the 2014 Youth Olympic Games due to an ebola outbreak in the
                                  region. The line serves to set the scene by saying he is watching
                                  television, or at least its on, and news of the athletes' banning
                                  would be what’s being broadcast.
                                </Text>
                              </Flex>
                            </HoverCard.Content>
                          </HoverCard.Root>
                        </Text>
                        <Text>I think we might be bipolar, I think she thinks I’m bipolar</Text>

                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <Link href="#" onClick={(e) => e.preventDefault()} tabIndex={tabIndex}>
                              He left the crime scene without the Motorola
                            </Link>
                          </HoverCard.Trigger>
                          <HoverCard.Content side="top" maxWidth="320px">
                            <Flex gap="2" direction="column">
                              <Text size="2" as="p">
                                One of the most iconic mobile phones produced was the Motorola Razr.
                              </Text>

                              <Text size="2" as="p">
                                The name ‘Razor’ is meant to reflect how thin the phone was. In this
                                context, the “Motorola” is a metaphor for the weapon left at the
                                crime scene. It could also be a direct reference to the phone left
                                at the scene.
                              </Text>
                            </Flex>
                          </HoverCard.Content>
                        </HoverCard.Root>
                        <Text>Still had dreams of being Gianfranco Zola</Text>
                        <Text>For at least for now, it’s all over</Text>
                        <Text>Yeah, at least for now, it’s all over</Text>
                      </Flex>

                      <Flex direction="column" align="start" gap="1">
                        <Text>I seem to sink lower</Text>
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <Link href="#" onClick={(e) => e.preventDefault()} tabIndex={tabIndex}>
                              In biscuit town, in biscuit town
                            </Link>
                          </HoverCard.Trigger>
                          <HoverCard.Content side="top" maxWidth="320px">
                            <Flex gap="2" direction="column">
                              <Text size="2" as="p">
                                Biscuit Town = Bermondsey, London, which is the former home of Peek
                                Freans, a now global biscuit company. This is further confirmed by
                                the album’s two interludes being named “Bermondsey Bosom (Left)” and
                                “Bermondsey Bosom (Right)”.
                              </Text>
                            </Flex>
                          </HoverCard.Content>
                        </HoverCard.Root>
                      </Flex>

                      <Flex direction="column" align="start" gap="1">
                        <Text>
                          You're shallow waters, I’m the deep seabed And I’m the reason you flow
                        </Text>
                        I got more moons wrapped around my head and Jupiter knows Whilst you orbit
                        with some stupider hoes Only a slacker would know tryna get up and group
                        home Tryna eat from the same bowl, in my troopers abode
                      </Flex>
                    </Flex>
                  </Text>

                  <Box
                    position="absolute"
                    inset="0"
                    style={{
                      opacity: 0.6,
                      pointerEvents: 'none',
                      background:
                        'linear-gradient(to bottom, transparent, var(--color-panel-solid))',
                    }}
                  />
                </Box>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

const AlbumCard = ({
  focusable,
  title,
  caption,
  cover,
  color,
}: {
  focusable?: boolean;
  title: string;
  caption: string;
  cover: string;
  color: string;
}) => (
  <Hover.Root>
    <Box p="3" m="-3">
      <Box mb="2" position="relative">
        <Card style={{ boxShadow: `0 8px 48px -16px ${color.replace('%)', '%, 0.6)')}` }}>
          <Inset>
            <AspectRatio ratio={1}>
              <img
                src={cover}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </AspectRatio>
          </Inset>
        </Card>

        <Hover.Show>
          <Flex gap="2" position="absolute" bottom="0" right="0" m="2">
            <IconButton tabIndex={-1} radius="full" size="3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor"
                viewBox="0 0 30 30"
                width="20"
                height="20"
                style={{ marginRight: -2 }}
              >
                <path d="M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z" />
              </svg>
            </IconButton>
          </Flex>
        </Hover.Show>
      </Box>

      <Flex direction="column" position="relative" align="start">
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          tabIndex={focusable ? undefined : -1}
          size="2"
          weight="medium"
          color="gray"
          highContrast
          style={{ textDecoration: 'none' }}
        >
          {title}
        </Link>
        <Text size="2" color="gray">
          {caption}
        </Text>
      </Flex>
    </Box>
  </Hover.Root>
);

const songsQueue = [
  {
    name: 'The Less I Know the Better',
    artist: 'Tame Impala',
    album: 'Currents',
    length: '3:39',
    cover:
      'https://workos.imgix.net/images/79645741-51e0-47fc-bb40-2fa66cf9f68e.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(339, 80%, 60%)',
  },
  {
    name: 'Pieces',
    artist: 'Villagers',
    album: 'Becoming a Jackal',
    length: '5:25',
    cover:
      'https://workos.imgix.net/images/95ff9b99-36f3-46d8-a3fe-9387fd7c3c32.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(356, 80%, 31%)',
  },
  {
    name: 'Cola',
    artist: 'Arlo Parks',
    album: 'Super Sad Generation',
    length: '3:50',
    cover:
      'https://workos.imgix.net/images/945c66a9-afd9-4b1c-8eb0-4ce3992731ca.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(315, 90%, 70%, 0.2)',
  },
  {
    name: 'Do the Astral Plane',
    artist: 'Flying Lotus',
    album: 'Cosmogramma',
    length: '3:58',
    cover:
      'https://workos.imgix.net/images/3d9075e4-c232-4fb5-a1a4-b0a33d669192.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(80, 9%, 66%)',
  },
  {
    name: 'Left Hand Free',
    artist: 'Alt-J',
    album: 'This Is All Yours',
    length: '2:54',
    cover:
      'https://workos.imgix.net/images/8d431b64-ebe8-41be-b986-2f59cb5c567d.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(330, 70%, 64%)',
  },
];

const songsHistory = [
  {
    name: 'Sunday Rain',
    artist: 'Foo Fighters',
    album: 'Concrete and Gold',
    length: '6:11',
    cover:
      'https://workos.imgix.net/images/28bf3f7c-4ad7-4bd9-9064-c63d2676c8dd.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(40, 30%, 55%)',
  },
  {
    name: 'Left Hand Free',
    artist: 'Alt-J',
    album: 'This Is All Yours',
    length: '2:54',
    cover:
      'https://workos.imgix.net/images/8d431b64-ebe8-41be-b986-2f59cb5c567d.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(330, 70%, 64%)',
  },
  {
    name: 'Last',
    artist: 'Nine Inch Nails',
    album: 'Broken',
    length: '4:45',
    cover:
      'https://workos.imgix.net/images/5f495e55-4bac-4573-b97f-bac55d4f3a82.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(30, 100%, 50%)',
  },
  {
    name: '13LACK 13ALLOONZ (feat. Twelve’len & GoldLink)',
    artist: 'Denzel Curry',
    album: 'TA13OO',
    length: '3:31',
    cover:
      'https://workos.imgix.net/images/f1b1ff42-eae9-4fcd-9c7f-c3ed92594395.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(0, 0%, 25%)',
  },
  {
    name: 'Self Control',
    artist: 'Frank Ocean',
    album: 'Blond',
    length: '4:10',
    cover:
      'https://workos.imgix.net/images/419f09bc-99ab-4eae-8e71-d33f0577bd47.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(80, 20%, 40%)',
  },
  {
    name: 'Trippy (feat. J. Cole)',
    artist: 'Anderson .Paak',
    album: 'Oxnard',
    length: '5:24',
    cover:
      'https://workos.imgix.net/images/daab7042-222f-433f-abcb-15811b8a43da.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(193, 15%, 45%)',
  },
  {
    name: 'Nightclubbing',
    artist: 'Iggy Pop',
    album: 'The Idiot',
    length: '4:16',
    cover:
      'https://workos.imgix.net/images/85451af7-27bf-4bbb-88e7-088caf762ed5.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(34, 7%, 45%)',
  },
  {
    name: 'Heaven Beside You',
    artist: 'Alice in Chains',
    album: 'Alice in Chains',
    length: '5:28',
    cover:
      'https://workos.imgix.net/images/72edfcaf-2e5b-492c-bb5b-60a031f001c9.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(289, 3%, 51%)',
  },
  {
    name: 'Night After Night',
    artist: 'Laura Marling',
    album: 'A Creature I Don’t Know',
    length: '5:08',
    cover:
      'https://workos.imgix.net/images/0cce32ae-6890-419e-b01c-2e89d36cb883.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(40, 13%, 83%)',
  },
  {
    name: 'HEAVN',
    artist: 'Jamila Woods',
    album: 'HEAVN',
    length: '4:23',
    cover:
      'https://workos.imgix.net/images/e865c892-5cbe-4d1f-b4eb-e2bc301087f0.png?auto=format&fit=clip&q=80&w=192',
    color: 'hsl(32, 95%, 67%)',
  },
];

const albumsFavorites = [
  {
    name: 'Blond',
    artist: 'Frank Ocean',
    cover:
      'https://workos.imgix.net/images/419f09bc-99ab-4eae-8e71-d33f0577bd47.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(0, 0%, 50%, 0.2)',
  },
  {
    name: 'Konoyo',
    artist: 'Tim Hecker',
    cover:
      'https://workos.imgix.net/images/d2e1f2a4-5994-4f38-b3f4-0c78c946b616.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(210, 30%, 40%)',
  },
  {
    name: 'Los Angeles',
    artist: 'Flying Lotus',
    cover:
      'https://workos.imgix.net/images/29a1153b-e12a-45d8-95a7-812657566204.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(200, 30%, 20%, 0.2)',
  },
  {
    name: 'The Fragile',
    artist: 'Nine Inch Nails',
    cover:
      'https://workos.imgix.net/images/c33df9ee-0126-450b-ac7c-df1b76fc12da.png?auto=format&fit=clip&q=80',
    color: 'hsl(15, 80%, 50%)',
  },
  {
    name: 'Sketches of Spain',
    artist: 'Miles Davis',
    cover:
      'https://workos.imgix.net/images/bc4dcddb-c350-413b-bc1f-38126cf9015b.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(35, 100%, 50%)',
  },
];

const playlistsForYou = [
  {
    title: 'Rebellious ’90s and ’00s',
    caption: 'Throwback to the teenage years',
    cover:
      'https://workos.imgix.net/images/ea236dea-fd26-4972-9430-d2677457bd0a.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(36, 70%, 50%)',
  },
  {
    title: 'Soft Rock',
    caption: 'Songs you can’t go wrong with',
    cover:
      'https://workos.imgix.net/images/9488cafc-5341-4164-a292-e34bf21dfbd5.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(235, 50%, 40%, 0.4)',
  },
  {
    title: 'Trip-Hop Essentials',
    caption: 'Dark and moody grooves',
    cover:
      'https://workos.imgix.net/images/dae75b0e-081b-43db-9984-b920de71e028.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(230, 100%, 50%, 0.3)',
  },
  {
    title: 'Vintage Jazz',
    caption: 'Travel through the times',
    cover:
      'https://workos.imgix.net/images/543ebff8-5f5c-4278-abb3-e1f17b723c30.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(260, 100%, 50%, 0.3)',
  },
  {
    title: 'Funk Up',
    caption: 'Irresistible beats',
    cover:
      'https://workos.imgix.net/images/01d61c66-7b4c-482d-b439-aa05f8845a55.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(260, 100%, 50%, 0.3)',
  },
];

const albumsFriendsListen = [
  {
    name: 'Vulgar Display of Power',
    artist: 'Pantera',
    cover:
      'https://workos.imgix.net/images/52719781-7582-49b3-9cd5-090acbab44ad.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(5, 20%, 70%)',
  },
  {
    name: 'ONUKA',
    artist: 'ONUKA',
    cover:
      'https://workos.imgix.net/images/21f983e3-2ed2-411c-b442-ddff52e4b5fd.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(0, 0%, 50%, 0.2)',
  },
  {
    name: 'Consolation',
    artist: 'Protomartyr',
    cover:
      'https://workos.imgix.net/images/ce6430c1-6375-4de5-b1ce-40d69872f622.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(50, 90%, 50%)',
  },
  {
    name: 'uknowhatimsayin¿',
    artist: 'Danny Brown',
    cover:
      'https://workos.imgix.net/images/3ea72e36-fcc5-4cc4-a378-444f48a5be5d.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(164, 85%, 50%)',
  },
  {
    name: 'Floating Points',
    artist: 'Crush',
    cover:
      'https://workos.imgix.net/images/1dfabeef-80f4-47b8-a8c4-7bec6c4b8b0d.png?auto=format&fit=clip&q=80&w=500',
    color: 'hsl(210, 40%, 50%)',
  },
];

const VolumeMaxIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="20"
    height="20"
    fill="currentcolor"
    fillOpacity={0.7}
    {...props}
  >
    <path d="M 20.037109 5.6464844 A 1.0001 1.0001 0 0 0 19.236328 7.2734375 C 20.963426 9.4832305 22 12.243759 22 15.255859 C 22 18.055119 21.105815 20.636923 19.59375 22.763672 A 1.0001 1.0001 0 1 0 21.222656 23.921875 C 22.962591 21.474623 24 18.4826 24 15.255859 C 24 11.78396 22.799402 8.5851757 20.8125 6.0429688 A 1.0001 1.0001 0 0 0 20.037109 5.6464844 z M 11 7 L 6.7929688 11 L 3 11 C 1.343 11 0 12.343 0 14 L 0 16 C 0 17.657 1.343 19 3 19 L 6.7929688 19 L 11 23 L 11 7 z M 14.738281 8.5917969 A 1.0001 1.0001 0 0 0 14.001953 10.291016 C 15.239451 11.587484 16 13.328154 16 15.255859 C 16 16.979025 15.392559 18.553804 14.380859 19.796875 A 1.0001 1.0001 0 1 0 15.931641 21.058594 C 17.219941 19.475665 18 17.450694 18 15.255859 C 18 12.799565 17.023721 10.559688 15.449219 8.9101562 A 1.0001 1.0001 0 0 0 14.738281 8.5917969 z" />
  </svg>
);

const VolumeNoneIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="currentcolor"
    fillOpacity={0.7}
    {...props}
  >
    <path d="M16.3333 4.66669L13.5286 7.33335H11C9.89533 7.33335 9 8.22869 9 9.33335V10.6667C9 11.7714 9.89533 12.6667 11 12.6667H13.5286L16.3333 15.3334V4.66669Z" />
  </svg>
);

const HeartIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="20"
    height="20"
    fill="currentcolor"
    {...props}
  >
    <path d="M 9.5449219 3 C 5.3895807 3 2 6.3895806 2 10.544922 C 2 14.283156 4.9005496 18.084723 7.6601562 21.119141 C 10.419763 24.153558 13.171875 26.369141 13.171875 26.369141 A 1.0001 1.0001 0 0 0 13.197266 26.388672 C 13.642797 26.725148 14.201794 26.943857 14.808594 26.984375 A 1.0001 1.0001 0 0 0 15 27 A 1.0001 1.0001 0 0 0 15.189453 26.984375 A 1.0001 1.0001 0 0 0 15.199219 26.982422 C 15.802918 26.940449 16.359155 26.723674 16.802734 26.388672 A 1.0001 1.0001 0 0 0 16.828125 26.369141 C 16.828125 26.369141 19.580237 24.153558 22.339844 21.119141 C 25.099451 18.084722 28 14.283156 28 10.544922 C 28 6.3895806 24.610419 3 20.455078 3 C 17.841043 3 15.989939 4.4385487 15 5.4570312 C 14.010061 4.4385487 12.158957 3 9.5449219 3 z M 9.5449219 5 C 12.276127 5 13.937826 7.2424468 14.103516 7.4746094 A 1.0001 1.0001 0 0 0 14.994141 8.0136719 A 1.0001 1.0001 0 0 0 15.017578 8.0136719 A 1.0001 1.0001 0 0 0 15.041016 8.0117188 A 1.0001 1.0001 0 0 0 15.117188 8.0058594 A 1.0001 1.0001 0 0 0 15.892578 7.4785156 C 16.049938 7.2575052 17.716133 5 20.455078 5 C 23.529737 5 26 7.4702629 26 10.544922 C 26 13.147688 23.499768 16.870104 20.859375 19.773438 C 18.227966 22.666891 15.607768 24.780451 15.589844 24.794922 C 15.414236 24.925626 15.219097 25 15 25 C 14.780903 25 14.585764 24.92563 14.410156 24.794922 C 14.392236 24.780452 11.772034 22.666891 9.140625 19.773438 C 6.5002316 16.870105 4 13.147688 4 10.544922 C 4 7.4702629 6.470263 5 9.5449219 5 z" />
  </svg>
);

const CounterClockwiseClockIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="20"
    height="20"
    fill="currentcolor"
    {...props}
  >
    <path d="M 15 3 C 8.3845336 3 3 8.3845336 3 15 C 3 21.615466 8.3845336 27 15 27 C 21.615466 27 27 21.615466 27 15 C 27 10.860283 24.897915 7.2001531 21.699219 5.0429688 L 22.845703 3.5722656 L 18 3.3964844 L 19.398438 8 L 20.460938 6.6347656 C 22.927938 8.2475139 24.639833 10.910337 24.945312 14.003906 A 1 1 0 0 0 24.951172 16 C 24.483457 20.733488 20.731802 24.484346 15.998047 24.951172 A 1 1 0 0 0 15 24 A 1 1 0 0 0 14.001953 24.951172 C 9.267557 24.484283 5.515717 20.732443 5.0488281 15.998047 A 1 1 0 0 0 5.0488281 14 C 5.5490109 8.9379267 9.80344 5 15 5 A 1.0001 1.0001 0 1 0 15 3 z M 14.984375 7.9863281 A 1.0001 1.0001 0 0 0 14 9 L 14 14.5 L 10.400391 17.199219 A 1.0003905 1.0003905 0 1 0 11.599609 18.800781 L 15.599609 15.800781 A 1.0001 1.0001 0 0 0 16 15 L 16 9 A 1.0001 1.0001 0 0 0 14.984375 7.9863281 z" />
  </svg>
);

const MixerHorizontalIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="20"
    height="20"
    fill="currentcolor"
    {...props}
  >
    <path d="M 20 4 C 18.706841 4 17.604859 4.84267 17.1875 6 L 4 6 A 1.0001 1.0001 0 1 0 4 8 L 17.1875 8 C 17.604859 9.15733 18.706841 10 20 10 C 21.293159 10 22.395141 9.15733 22.8125 8 L 26 8 A 1.0001 1.0001 0 1 0 26 6 L 22.8125 6 C 22.395141 4.84267 21.293159 4 20 4 z M 20 6 C 20.54383 6 20.958426 6.4088115 20.988281 6.9433594 A 1.0001 1.0001 0 0 0 20.988281 7.0585938 C 20.957487 7.5921595 20.543157 8 20 8 C 19.45617 8 19.041574 7.5911885 19.011719 7.0566406 A 1.0001 1.0001 0 0 0 19.011719 6.9414062 C 19.042513 6.4078405 19.456843 6 20 6 z M 12 12 C 10.706841 12 9.6048586 12.84267 9.1875 14 L 4 14 A 1.0001 1.0001 0 1 0 4 16 L 9.1875 16 C 9.6048586 17.15733 10.706841 18 12 18 C 13.293159 18 14.395141 17.15733 14.8125 16 L 26 16 A 1.0001 1.0001 0 1 0 26 14 L 14.8125 14 C 14.395141 12.84267 13.293159 12 12 12 z M 12 14 C 12.54383 14 12.958426 14.408812 12.988281 14.943359 A 1.0001 1.0001 0 0 0 12.988281 15.058594 C 12.957487 15.592159 12.543157 16 12 16 C 11.45617 16 11.041574 15.591188 11.011719 15.056641 A 1.0001 1.0001 0 0 0 11.011719 14.941406 C 11.042513 14.407841 11.456843 14 12 14 z M 16 20 C 14.706841 20 13.604859 20.84267 13.1875 22 L 4 22 A 1.0001 1.0001 0 1 0 4 24 L 13.1875 24 C 13.604859 25.15733 14.706841 26 16 26 C 17.293159 26 18.395141 25.15733 18.8125 24 L 26 24 A 1.0001 1.0001 0 1 0 26 22 L 18.8125 22 C 18.395141 20.84267 17.293159 20 16 20 z M 16 22 C 16.54383 22 16.958426 22.408812 16.988281 22.943359 A 1.0001 1.0001 0 0 0 16.988281 23.058594 C 16.957487 23.592159 16.543157 24 16 24 C 15.45617 24 15.041574 23.591188 15.011719 23.056641 A 1.0001 1.0001 0 0 0 15.011719 22.941406 C 15.042513 22.407841 15.456843 22 16 22 z" />
  </svg>
);
