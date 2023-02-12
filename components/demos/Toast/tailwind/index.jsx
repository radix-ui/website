import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';

const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <button
        className="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button>

      <Toast.Root
        className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          Scheduled: Catch up
        </Toast.Title>
        <Toast.Description asChild>
          <time
            className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
            dateTime={eventDateRef.current.toISOString()}
          >
            {prettyDate(eventDateRef.current)}
          </time>
        </Toast.Description>
        <Toast.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
          <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            Undo
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export default ToastDemo;
