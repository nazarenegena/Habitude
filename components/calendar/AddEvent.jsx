import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, CheckCircle, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import { CreatePlan } from '@/actions/planner';
import { toast } from '../ui/use-toast';
import { Label } from '../ui/label';
import { usePlannerContext } from '@/lib/context/plannerContext';

const colors = [
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Violet', value: 'violet' },
  { label: 'Zinc', value: 'zinc' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Purple', value: 'purple' },
  { label: 'Black', value: 'black' }
];

const AddEvent = () => {
  const { schedules, setSchedules } = usePlannerContext();
  const [open, setOpen] = useState(false);
  const form = useForm();

  async function handleAddEvent(data) {
    try {
      const payload = {
        ...data,
        id: uuid()
      };

      const { plan } = await CreatePlan(payload);

      setSchedules(prev => [...prev, plan]);

      toast({
        title: 'Success',
        description: 'PLan created.',
        variant: 'default'
      });

      setOpen(false);
    } catch (error) {
      console.log(error, 'error');
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Add Schedule</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Schedule</DialogTitle>
          <DialogDescription>
            Create a new schedule and add tasks to it
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddEvent)}>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              className='mt-3'
              name='start_date'
              render={({ field }) => (
                <FormItem className='flex flex-col mt-3'>
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              className='mt-3'
              name='end_date'
              render={({ field }) => (
                <FormItem className='flex flex-col mt-3'>
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='grid grid-cols-2 my-2 gap-2'>
              <div className='grid w-full items-center gap-1.5'>
                <Label htmlFor='time'>Start Time</Label>
                <Input
                  aria-label='Choose time'
                  className='w-full'
                  id='start_time'
                  type='time'
                  {...form.register('start_time')}
                />
              </div>
              <div className='grid w-full items-center gap-1.5'>
                <Label htmlFor='time'>End Time</Label>
                <Input
                  aria-label='Choose time'
                  className='w-full'
                  id='end_time'
                  type='time'
                  {...form.register('end_time')}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name='color'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>color</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          role='combobox'
                          className={cn(
                            'justify-between',
                            !field.value
                              ? 'text-muted-foreground'
                              : 'text-' + field.value + '-400'
                          )}
                        >
                          {field.value
                            ? colors.find(color => color.value === field.value)
                                ?.label
                            : 'Select color'}
                          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='p-0'>
                      <Command>
                        <CommandInput placeholder='Search color...' />
                        <CommandEmpty>No color found.</CommandEmpty>
                        <CommandGroup>
                          {colors.map(color => (
                            <CommandItem
                              value={color.label}
                              key={color.value}
                              onSelect={() => {
                                form.setValue('color', color.value);
                              }}
                            >
                              <CheckCircle
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  color.value === field.value
                                    ? `opacity-100 `
                                    : 'opacity-0'
                                )}
                              />
                              {color.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    This is the color that will be used in the dashboard.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder='shadcn' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <Button onClick={form.handleSubmit(handleAddEvent)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddEvent;
